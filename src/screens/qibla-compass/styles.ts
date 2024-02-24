import { StyleSheet } from "react-native";

import { COLORS, FONTS } from "@/theme";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.MEDIUM,
    fontSize: 20,
    marginBottom: 10,
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 20,
    color: COLORS.SLATE_900,
    fontFamily: FONTS.MEDIUM,
    textAlign: "center",
    padding: 40,
  },
  compassContainer: {
    position: "relative",
    height: 300,
    width: 300,
    padding: 20,
  },
  compassImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "auto",
    width: "auto",
    padding: 20,
  },
  arrowImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowImage: {
    width: 60,
    height: 60,
  },
  kabaImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  kabaImage: {
    width: 30,
    height: 30,
  },
});

export default styles;
