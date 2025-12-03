import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#efefef',
    paddingHorizontal: 20, // optional: global side padding
    paddingVertical: 20,   // optional: global top/bottom padding
    },

    playersSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    categoriesSection: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    categoriesRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})