import { useState, useEffect } from "react";
import { getCategories, saveCategories } from "@services/categoriesStorage";

const categories = [
  "Everyday Objects",
  "Players Name",
  "Animals",
  "Foods & Drinks",
  "Colors & Shapes",
  "Country & Cities",
  "Emotions & Feelings",
  "Hobbies & Activities",
  ];

export function useCategories() {
  const [categoriesSelected, setSelected] = useState<string[]>([])
  const [loadingCategories, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    await saveCategories(categories);
    setSelected(categories);
    setLoading(false);
  }

  async function updateCategoriesSelected(list: string[]) {
    setSelected(list);
    await saveCategories(list);
  }

  function addCategorie(name: string) {
    updateCategoriesSelected([...categoriesSelected, name]);
  }


  function removeCategorie(name: string) {
    updateCategoriesSelected(categoriesSelected.filter(item => item !== name));
  }

  return {
    categories,
    categoriesSelected,
    addCategorie,
    removeCategorie,
    loadingCategories
  };
}