import { useCallback, useEffect, useState } from "react";
import { Magnetometer } from "expo-sensors";
import * as Location from "expo-location";

export const useCompass = () => {
  const [subscription, setSubscription] = useState(null);
  const [magnetometer, setMagnetometer] = useState(0);
  const [qiblaDirection, setQiblaDirection] = useState(0);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const initCompass = useCallback(async () => {
    const isAvailable = await Magnetometer.isAvailableAsync();
    if (!isAvailable) {
      setError("Compass is not available on this device");
      setIsLoaded(true);
      return;
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Location permission not granted");
      setIsLoaded(true);
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      calculateQiblaDirection(latitude, longitude);
    } finally {
      setIsLoaded(true);
      subscribe();
    }
  }, []);

  useEffect(() => {
    initCompass();

    return () => {
      unsubscribe();
    };
  }, []);

  const subscribe = () => {
    Magnetometer.setUpdateInterval(16);
    let prevAngle = 0;
    setSubscription(
      Magnetometer.addListener((data) => {
        // Assuming angle(data) returns the angle
        const newAngle = angle(data);

        if (Math.abs(newAngle - prevAngle) > 2) {
          setMagnetometer(newAngle);
          prevAngle = newAngle;
        }
      }),
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const angle = (magnetometer) => {
    let angle = 0;
    if (magnetometer) {
      let { x, y, z } = magnetometer;
      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }
    return Math.trunc(angle);
  };

  const degree = (magnetometer) => {
    return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
  };

  const calculateQiblaDirection = (latitude, longitude) => {
    const PI = Math.PI;
    let latk = (21.4225 * PI) / 180.0;
    let longk = (39.8264 * PI) / 180.0;
    let phi = (latitude * PI) / 180.0;
    let lambda = (longitude * PI) / 180.0;
    let qiblad =
      (180.0 / PI) *
      Math.atan2(
        Math.sin(longk - lambda),
        Math.cos(phi) * Math.tan(latk) -
          Math.sin(phi) * Math.cos(longk - lambda),
      );

    setQiblaDirection(qiblad);
  };

  const compassRotate = 360 - degree(magnetometer);
  const qiblaRotate = 360 - degree(magnetometer) + qiblaDirection;
  const isFacingQibla =
    Math.abs(qiblaRotate - 360) < 5 && Math.abs(qiblaRotate - 360) > -5;

  return {
    compassRotate,
    error,
    isFacingQibla,
    isLoading: !isLoaded,
    qiblaRotate,
  };
};
