import { View, Image, TextInput } from "react-native";
import { useState } from "react";
import { styles } from "./Styles";

interface PlayerInputProps {
  PlayerName: string,
  onChange: (newName: string) => void;
}

export default function PlayerInput(props: PlayerInputProps) {
  return (
    <View style={styles.inputWrapper}>
      <Image 
        source={require("@assets/pencil.png")}
        style={styles.icon}
      />

      <TextInput
        style={styles.input}
        value={props.PlayerName}
        onChangeText={props.onChange}
        placeholder="Player name"
        placeholderTextColor="#999"
      />
    </View>
  );
}
