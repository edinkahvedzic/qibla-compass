import { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Platform,
  Text,
  View,
} from "react-native";
import * as Haptics from "expo-haptics";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

import { CompassSvg } from "@/assets";
import { useCompass } from "@/hooks";
import { COLORS } from "@/theme";

import styles from "./styles";

const platfromAdUnitId =
  Platform.OS === "ios"
    ? "ca-app-pub-2278638882204045/9186531439"
    : "ca-app-pub-2278638882204045/6155961849";

const adUnitId = __DEV__ ? TestIds.BANNER : platfromAdUnitId;

export const QiblaCompass = () => {
  const { compassRotate, error, isFacingQibla, isLoading, qiblaRotate } =
    useCompass();

  useEffect(() => {
    if (isFacingQibla) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    }
  }, [isFacingQibla]);

  return (
    <ImageBackground
      source={require("@/assets/background.jpg")}
      style={styles.screen}
      resizeMode="cover"
    >
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Compass is loading...</Text>
          <ActivityIndicator size="large" color={COLORS.PRIMARY} />
        </View>
      )}
      {!isLoading && !error && (
        <View
          style={{
            position: "relative",
            height: 300,
            width: 300,
            padding: 20,
          }}
        >
          <View
            style={[
              styles.compassImageContainer,
              {
                transform: [
                  {
                    rotate: compassRotate + "deg",
                  },
                ],
              },
              isFacingQibla && {
                shadowColor: COLORS.PRIMARY,
                shadowOffset: { width: -2, height: 10 },
                shadowOpacity: 0.3,
                shadowRadius: 10,
              },
            ]}
          >
            <CompassSvg />
          </View>
          <View style={styles.arrowImageContainer}>
            <Image
              source={require("@/assets/arrow.png")}
              style={styles.arrowImage}
            />
          </View>
          <View
            style={[
              styles.kabaImageContainer,
              { transform: [{ rotate: qiblaRotate + "deg" }] },
            ]}
          >
            <Image
              source={require("@/assets/kaba.png")}
              style={styles.kabaImage}
            />
          </View>
        </View>
      )}
      {!isLoading && error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      <View style={{ position: "absolute", bottom: 0 }}>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </ImageBackground>
  );
};
