import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",   // dark transparent background
    justifyContent: "flex-end",             // center vertically
    alignItems: "center",                 // center horizontally
  },

  modalBox: {
    width: "100%",                          // responsive size
    height: "70%",
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    elevation: 6,                          // Android shadow
    shadowColor: "#000",                   // iOS shadow
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },

  closeBtn: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "#4A90E2",
    borderRadius: 8,
  },

  closeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
})