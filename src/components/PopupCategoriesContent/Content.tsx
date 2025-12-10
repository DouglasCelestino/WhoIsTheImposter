import { View,ScrollView, Text } from "react-native";
import SelectCategories from "@components/SelectCategories/SelectCategories"

interface CategoriesProps {
    categories: string[];
    categoriesSelected: string[];
    addCategorie: (name: string) => void;
    removeCategorie: (name: string) => void;
}


export default function ContentCategories(props: CategoriesProps) {
    function toggleCategory(name: string) {
        if (props.categoriesSelected.includes(name)) {
            props.removeCategorie(name);
        } else {
            props.addCategorie(name);
        }
    }

    return(
        <ScrollView>
            <View>
                <Text>SELECT CATEGORIES</Text>
                <Text>Choose one or more categories for the game</Text>
            </View>

            <ScrollView>
                {props.categories.map(category => (
                    <SelectCategories
                        key={category}
                        Title={category}
                        Selected={props.categoriesSelected.includes(category)}
                        changeSelect={() => toggleCategory(category)}
                    />
                ))}
            </ScrollView>
        </ScrollView>
    );
}
