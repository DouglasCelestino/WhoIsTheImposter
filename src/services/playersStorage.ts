import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "players";

export async function getPlayers(): Promise<string[]> {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export async function savePlayers(players: string[]) {
  await AsyncStorage.setItem(KEY, JSON.stringify(players));
}
