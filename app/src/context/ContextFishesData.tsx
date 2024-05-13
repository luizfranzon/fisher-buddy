import { createContext, useContext, useState } from "react";

export const ContextFishesData = createContext<ContextFishesData>({
  fishesData: {
    splashtails: [],
    pondies: [],
    islehoppers: [],
    ancientscales: [],
    plentifins: [],
  },
  setFishesData: () => { },
});

export function ContextFishesDataProvider({ children }: { children: React.ReactNode }) {
  const [fishesData, setFishesData] = useState<FishesData>({
    splashtails: [
      { name: "Ruby Splashtail", quantity: 0 },
      { name: "Sunny Splashtail", quantity: 0 },
      { name: "Indigo Splashtail", quantity: 0 },
      { name: "Umber Splashtail", quantity: 0 },
      { name: "Seafoam Splashtail", quantity: 0 },
    ],
    pondies: [
      { name: "Charcoal Pondie", quantity: 0 },
      { name: "Orchid Pondie", quantity: 0 },
      { name: "Bronze Pondie", quantity: 0 },
      { name: "Bright Pondie", quantity: 0 },
      { name: "Moonsky Pondie", quantity: 0 },
    ],
    islehoppers: [
      { name: "Stone Islehopper", quantity: 0 },
      { name: "Moss Islehopper", quantity: 0 },
      { name: "Honey Islehopper", quantity: 0 },
      { name: "Raven Islehopper", quantity: 0 },
      { name: "Amethyst Islehopper", quantity: 0 },
    ],
    ancientscales: [
      { name: "Almond Ancientscale", quantity: 0 },
      { name: "Sapphire Ancientscale", quantity: 0 },
      { name: "Smoke Ancientscale", quantity: 0 },
      { name: "Bone Ancientscale", quantity: 0 },
      { name: "Starshine Ancientscale", quantity: 0 },
    ],
    plentifins: [
      { name: "Olive Plentifin", quantity: 0 },
      { name: "Amber Plentifin", quantity: 0 },
      { name: "Cloudy Plentifin", quantity: 0 },
      { name: "Bonedust Plentifin", quantity: 0 },
      { name: "Watery Plentifin", quantity: 0 },
    ],
  });

  return (
    <ContextFishesData.Provider value={{ fishesData, setFishesData }}>
      {children}
    </ContextFishesData.Provider>
  );
}

export const useContextFishesData = () => {
  return useContext(ContextFishesData);
};
