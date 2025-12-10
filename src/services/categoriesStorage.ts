import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "categoriesSelected";
    
export async function getCategories(): Promise<string[]> {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export async function saveCategories(categories: string[]) {
  await AsyncStorage.setItem(KEY, JSON.stringify(categories));
}
