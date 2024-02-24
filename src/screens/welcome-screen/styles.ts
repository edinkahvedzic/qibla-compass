import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/theme";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    paddingHorizontal: 60,
    fontFamily: FONTS.BOLD,
    fontSize: 24,
    color: COLORS.SLATE_50,
    textAlign: "center",
  },
  description: {
    paddingHorizontal: 60,
    fontFamily: FONTS.REGULAR,
    fontSize: 12,
    color: COLORS.SLATE_50,
    textAlign: "center",
  },
  image: {
    height: 300,
    width: 300,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SLATE_50,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: FONTS.BOLD,
    fontSize: 14,
    color: COLORS.PRIMARY,
  },
});

export default styles;
