import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import PlayerInput from "@components/PlayerInput/PlayerInput"

export default function Content() {
    return(
        <View style={styles.container}>
            <View style={styles.PlayersFooter}>
                <Text style={{color: "#000"}}>EDIT PLAYERS</Text>
                <Text>3-20 players</Text>
                <Text>Tap a name to edit</Text>
            </View>
            
            <View>
                <View style={styles.PlayerSection}>
                    <PlayerInput/>
                    <TouchableOpacity style={styles.ButtonClose}><Text style={styles.ButtonCloseText}>X</Text></TouchableOpacity>
                </View>
                <View style={styles.PlayerSection}>
                    <PlayerInput/>
                    <TouchableOpacity style={styles.ButtonClose}><Text style={styles.ButtonCloseText}>X</Text></TouchableOpacity>
                </View>
                <View style={styles.PlayerSection}>
                    <PlayerInput/>
                    <TouchableOpacity style={styles.ButtonClose}><Text style={styles.ButtonCloseText}>X</Text></TouchableOpacity>
                </View>
            </View>

        </View>
    );
}