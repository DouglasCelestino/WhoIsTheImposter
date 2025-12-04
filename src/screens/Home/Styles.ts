import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        paddingHorizontal: 20, // optional: global side padding
        paddingVertical: 20,   // optional: global top/bottom padding
    },


    topBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        margin: 10,
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
    },

    gearButtonCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    icon: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    
    titleWrapper: {
        alignItems: "center",
    },

    titleTop: {
        fontSize: 36,           
        fontWeight: "900",
        color: "#666666",       
        letterSpacing: 1,      
    },

    titleBottom: {
        fontSize: 64,           
        fontWeight: "900",
        color: "#666666",
        lineHeight: 70,        
        letterSpacing: 1,
    },

    playerContainer: {
        marginVertical: 10
    },

    playerTitle: {
        marginVertical: 10,
        color: '#9c9c9c',
        fontWeight: "bold",
        fontSize: 13

    },

    categoriesContainer: {
        marginVertical: 10,
    },

    imposterSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    buttonText: {
        fontWeight: "bold",
        fontSize: 20,      
    },

    subTitleText: {
        fontWeight: "bold",
        fontSize: 13, 
        color: '#9c9c9c'
    }

})