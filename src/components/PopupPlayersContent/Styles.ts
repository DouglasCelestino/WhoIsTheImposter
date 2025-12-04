import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },

    PlayersFooter: {
        flexDirection: "column",
        justifyContent: "center"
    },

    PlayerSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    ButtonClose: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#BF2025",
        alignItems: 'center',
        justifyContent: 'center'
    },

    ButtonCloseText: {
        color: "#fff", fontWeight: "bold", fontSize: 15
    }

})