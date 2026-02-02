export interface Item {
  id: string;
  text: string;
}

export interface StageProps {
  title: string;
  items: Item[];
  stageKey: string;
  onForward?: (item: Item, fromStage: string) => void;
  onBackward?: (item: Item, fromStage: string) => void;
}

export interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset";
}

export interface InputProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
