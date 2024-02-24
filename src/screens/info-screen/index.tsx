import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";

export const InfoScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Qibla Compass - Your Guide to Mecca</Text>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>About Qibla Compass:</Text>
          <Text style={styles.sectionText}>
            Qibla Compass is a user-friendly application developed to assist
            Muslims in accurately determining the Qibla direction...
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Key Features:</Text>
          <Text style={styles.sectionText}>
            - Accurate Qibla direction detection using advanced algorithms{" "}
            {"\n"}- Real-time compass to easily locate the Qibla direction{" "}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Privacy Policy:</Text>
          <TouchableOpacity
            style={{ ...styles.contactButton, marginBottom: 0 }}
            activeOpacity={0.8}
            onPress={() => {
              Linking.openURL(
                "https://edinkahvedzic.com/privacy-policy/qibla-compass",
              );
            }}
          >
            <Text style={styles.contactButtonText}>
              Open Privacy Policy page
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>About the Developer:</Text>
          <Text style={styles.sectionText}>
            Hi, I'm Edin Kahvedžić, the developer behind Qibla Compass. With a
            passion for technology and a commitment to serving the Muslim
            community.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.contactButton}
          activeOpacity={0.8}
          onPress={() => {
            Linking.openURL("mailto:mail@edinkahvedzic.com");
          }}
        >
          <Text style={styles.contactButtonText}>Contact Me</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
