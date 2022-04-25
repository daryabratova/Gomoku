export type Moves = {
  [coordinates: string]: "black" | "white";
};

export type History = Moves[];

export type Turn = "black" | "white";
