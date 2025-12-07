import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%"
    },

    PlayersFooter: {
        flexDirection: "column",
        justifyContent: "center"
    },

    PlayerSection: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    ButtonClose: {
        width: 35,
        height: 35,
        borderRadius: 18,
        backgroundColor: "#BF2025",
        alignItems: 'center',
        justifyContent: 'center'
    },

    ButtonAdd: {
        width: 35,
        height: 35,
        borderRadius: 18,
        backgroundColor: "#FFE733",
        alignItems: 'center',
        justifyContent: 'center'
    },

    ButtonAddText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 15
    },

    ButtonCloseText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15
    },

    PlayerSectionContainer: {
        backgroundColor: "#E6E6E6",
        width: "100%",
    }

})