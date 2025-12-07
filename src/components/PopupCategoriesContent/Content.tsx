import { View,ScrollView, Text } from "react-native";
import SelectCategories from "@components/SelectCategories/SelectCategories"
import { useState } from "react";


export default function ContentCategories() {
    const [selected, setSelected] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const Categories = [
        "Everyday Objects",
        "Animals",
        "Foods & Drinks",
        "Colors & Shapes",
        "Country & Cities",
        "Emotions & Feelings",
        "Hobbies & Activities",
    ];

    function toggleCategory(name: string) {
        if (selectedCategories.includes(name)) {
        // remove
        setSelectedCategories(selectedCategories.filter(item => item !== name));
        } else {
        // add
        setSelectedCategories([...selectedCategories, name]);
        }
    }
    
    return(
        <ScrollView>
            <View>
                <Text>SELECT CATEGORIES</Text>
                <Text>Choose one  or more categories for the game</Text>
            </View>
            <ScrollView>
                {Categories.map(category => (
                    <SelectCategories
                    key={category}
                    Title={category}
                    Selected={selectedCategories.includes(category)}  
                    changeSelect={() => toggleCategory(category)}  
                    />
                ))}
            </ScrollView>
        </ScrollView>
    );
}