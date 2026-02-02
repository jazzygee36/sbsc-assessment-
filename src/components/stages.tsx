import { useRef } from "react";
import type { Item, StageProps } from "../util/interfaces";

const Stage = ({
  title,
  items,
  stageKey,
  onForward,
  onBackward,
}: StageProps) => {
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleClick = (item: Item) => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    }
    clickTimeout.current = setTimeout(() => {
      onForward?.(item, stageKey);
    }, 200);
  };

  const handleDoubleClick = (item: Item) => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    }
    onBackward?.(item, stageKey);
  };
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item)}
            onDoubleClick={() => handleDoubleClick(item)}
            style={{ cursor: "pointer" }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Stage;
