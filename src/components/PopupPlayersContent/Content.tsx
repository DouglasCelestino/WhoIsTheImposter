import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import PlayerInput from "@components/PlayerInput/PlayerInput"
import { useState } from "react";
import { styles } from "./Styles";


interface ContentPlayerProps {
    players: string[];
    renamePlayer: (index: number, newName: string) => void;
    removePlayer: (index: number) => void;
    addPlayer: (name: string) => void;
    loading: boolean;
}


export default function ContentPlayer(props: ContentPlayerProps) {
    const [newPlayerName, setNewPlayerName] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.PlayersFooter}>
                <Text style={{color: "#000"}}>EDIT PLAYERS</Text>
                <Text>3-20 players</Text>
                <Text>Tap a name to edit</Text>
            </View>
            
            <ScrollView style={styles.PlayerSectionContainer}>
                {props.players.map((name, index) => (
                    <View key={index} style={styles.PlayerSection}>
                        <PlayerInput 
                            PlayerName={name}
                            onChange={(newName) => props.renamePlayer(index, newName)}
                        />
                        <TouchableOpacity onPress={() => props.removePlayer(index)} style={styles.ButtonClose}><Text style={styles.ButtonCloseText}>X</Text></TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.PlayerSection}>
                <PlayerInput 
                    PlayerName={newPlayerName}
                    onChange={setNewPlayerName}
                />
                <TouchableOpacity 
                    onPress={() => {
                        if (newPlayerName.trim().length > 0) {
                        props.addPlayer(newPlayerName);
                        setNewPlayerName("");
                        }
                    }}
                    style={styles.ButtonAdd}
                    >
                    <Text style={styles.ButtonAddText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}