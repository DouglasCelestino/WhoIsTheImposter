import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "imposter_count";

export async function getImposterCount(): Promise<number | null> {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : null;
}

export async function saveImposterCount(count: number) {
  await AsyncStorage.setItem(KEY, JSON.stringify(count));
}
