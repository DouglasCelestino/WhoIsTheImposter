import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { styles } from "./Styles";

export default function PlayerInput() {
    const [text, onChangeText] = useState('Useless Text');

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    );
}