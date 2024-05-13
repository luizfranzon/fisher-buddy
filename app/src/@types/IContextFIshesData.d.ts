type FishData = {
  name: string;
  quantity: number;
};

type FishesData = {
  splashtails: FishData[];
  pondies: FishData[];
  islehoppers: FishData[];
  ancientscales: FishData[];
  plentifins: FishData[];
};

type ContextFishesData = {
  fishesData: FishesData;
  setFishesData: React.Dispatch<React.SetStateAction<FishesData>>;
};
