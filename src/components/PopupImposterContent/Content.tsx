import { View, Text } from "react-native";
import { usePlayers } from "@hooks/usePlayers";
import { useEffect, useState } from "react";
import SelectCategories from "@components/SelectCategories/SelectCategories";
import { getImposterCount, saveImposterCount } from "@services/imposterStorage";

type ImposterRule = {
  max: number;
  range: string;
  imposters: number;
};

function generate_imposter(num_players: number): ImposterRule | null {
  if (num_players < 3) return null;

  const rules: ImposterRule[] = [
    { max: 5, range: "3-5", imposters: 1 },
    { max: 8, range: "6-8", imposters: 2 },
    { max: Infinity, range: "9 or more", imposters: 3 },
  ];

  for (let rule of rules) {
    if (num_players <= rule.max) {
      return rule;
    }
  }

  return null;
}

export default function ImposterContent() {
  const { countPlayers, loadingPlayers } = usePlayers();
  const [imposterRules, setImposterRules] = useState<ImposterRule | null>(null);
  const [selectedImposter, setSelectedImposter] = useState<number>(1);

  useEffect(() => {
    if (loadingPlayers) return;

    async function init() {
      const rules = generate_imposter(countPlayers());
      setImposterRules(rules);

      if (!rules) {
        setSelectedImposter(0);
        return;
      }

      const savedCount = await getImposterCount();
      const safeCount = Math.min(savedCount ?? 1, rules.imposters);

      setSelectedImposter(safeCount);  
    }

    init();
  }, [loadingPlayers]);

  useEffect(() => {
    if (!imposterRules) return;
    saveImposterCount(selectedImposter);
  }, [selectedImposter]);


  return (
    <View>
      <View>
        <Text>SELECT IMPOSTER COUNT</Text>
        {imposterRules && (
          <Text>
            With {imposterRules.range} players, you can have up to{" "}
            {imposterRules.imposters} imposters
          </Text>
        )}
      </View>

      {imposterRules &&
        Array.from({ length: imposterRules.imposters }, (_, i) => (
          <View key={i}>
            <SelectCategories
              Selected={selectedImposter === i + 1}
              Title={`${i + 1} Imposter${i > 0 ? "s" : ""}`}
              changeSelect={() => setSelectedImposter(i + 1)}
            />
          </View>
        ))}
    </View>
  );
}
