import { useState, useEffect } from "react";
import { getPlayers, savePlayers } from "../services/playersStorage";

const defaultPlayers = [
    "DØ",
    "Frank",
    "Timonito",
    "Jasperino", 
    "SerenaTA LEGENDARYA", 
    "Racist Guy",  
    "Anke Business",
    "ThomasTurbato", 
    "Sara, perche ti amo",
    "Carmine LandLord",
    "Felicità"
];

export function usePlayers() {
  const [players, setPlayers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const saved = await getPlayers();

    if (saved.length === 0) {
      await savePlayers(defaultPlayers);
      setPlayers(defaultPlayers);
    } else {
      setPlayers(saved);
    }

    setLoading(false);
  }

  async function updatePlayers(list: string[]) {
    setPlayers(list);
    await savePlayers(list);
  }

  function addPlayer(name: string) {
    updatePlayers([...players, name]);
  }

  function removePlayer(index: number) {
    updatePlayers(players.filter((_, i) => i !== index));
  }

  function renamePlayer(index: number, newName: string) {
    const updated = [...players];
    updated[index] = newName;
    updatePlayers(updated);
  }

  return {
    players,
    addPlayer,
    removePlayer,
    renamePlayer,
    loading
  };
}