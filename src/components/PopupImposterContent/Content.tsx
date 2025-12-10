import { View, Text } from "react-native";
import { usePlayers }  from "@hooks/usePlayers"
import { useEffect, useState } from "react";
import SelectCategories from "@components/SelectCategories/SelectCategories"

type ImposterRule = {
    max: number,
    range: string,
    imposters: number
}

function generate_imposter(num_players: number): ImposterRule | null {
    if (num_players < 3) return null;
    
    const rules: ImposterRule[] = [
        { max: 5, range: "3-5", imposters: 1 },
        { max: 8, range: "6-8", imposters: 2 },
        { max: Infinity, range: "9 or more", imposters: 3 }
    ];
    for (let rule of rules) {
        if (num_players <= rule.max) {
            return rule;
        }
    }
    return null;
}

export default function ImposterContent() {
    const { countPlayers, loading } = usePlayers();
    const [imposterRules, setImposterRules] = useState<ImposterRule | null>(null);
    const [selectedImposter, setSelectedImposter] = useState<number[]>([]);

    useEffect(() => {
    if (!loading) {
        setImposterRules(generate_imposter(countPlayers()));
    }
    }, [loading]);


    function ToggleImposters(id: number){
        if(selectedImposter.includes(id)) {
            setSelectedImposter(selectedImposter.filter(item => item !== id))
        } else {
            setSelectedImposter([...selectedImposter, id])
        }
    }

    return(
        <View>
            <View>
                <Text>SELECT IMPOSTER COUNT</Text>
                {imposterRules && (
                    <Text>
                        With {imposterRules.range} players, you can have up to {imposterRules.imposters} imposters
                    </Text>
                )}
            </View>
                {imposterRules &&
                    Array.from({ length: imposterRules.imposters }, (_, i) => (
                        <View>
                            <SelectCategories 
                                key={i} 
                                Selected={selectedImposter.includes(i)} 
                                Title={`Imposter ${i + 1}`} 
                                changeSelect={() => ToggleImposters(i)}/>
                        </View>
                    ))
                }

            <View>

            </View>
        </View>
    );
}