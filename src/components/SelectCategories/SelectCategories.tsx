import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";

interface SelectCategoriesProps {
    Selected: boolean;
    Title: string;
    changeSelect: () => void;
}

export default function SelectCategories(props: SelectCategoriesProps) {
    return(
        <View>
            <TouchableOpacity onPress={props.changeSelect} style={[styles.Button, props.Selected ? styles.active : styles.inactive]}>
                <Text>{props.Title}</Text>
            </TouchableOpacity>
        </View>
    );
}