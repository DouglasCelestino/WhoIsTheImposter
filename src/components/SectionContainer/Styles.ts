import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        
        // iOS shadow
        boxShadow: "0px 2px 3px rgba(0,0,0,0.2)",


        // Android shadow
        elevation: 5,
    }
})  