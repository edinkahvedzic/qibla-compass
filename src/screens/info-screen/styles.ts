import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/theme";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.SLATE_50,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    color: COLORS.SLATE_900,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontFamily: FONTS.BOLD,
    color: COLORS.SLATE_900,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.SLATE_900,
  },
  contactButton: {
    backgroundColor: COLORS.PRIMARY,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 50,
  },
  contactButtonText: {
    color: COLORS.SLATE_50,
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
  },
});

export default styles;
