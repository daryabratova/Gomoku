export type Color = "black" | "white";

export type Moves = {
  [coordinates: string]: Color;
};

export type History = Moves[];
