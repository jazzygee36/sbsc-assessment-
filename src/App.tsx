import { useState } from "react";
import "./App.css";
import AppInput from "./components/input";
import AppButton from "./components/button";
import Stage from "./components/stages";
import type { Item } from "./util/interfaces";

function App() {
  const [input, setInput] = useState("");
  const [stages, setStages] = useState({
    idea: [] as Item[],
    prototype: [] as Item[],
    development: [] as Item[],
    ship: [] as Item[],
  });

  const stageOrder = ["idea", "prototype", "development", "ship"];

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setStages((prevStages) => ({
      ...prevStages,
      idea: [
        ...prevStages.idea,
        { id: Date.now().toString(), text: input.trim() },
      ],
    }));
    setInput("");
  };

  const moveForward = (item: Item, fromStage: string) => {
    const currentIndex = stageOrder.indexOf(fromStage);
    if (currentIndex === stageOrder.length - 1) return;

    const nextStage = stageOrder[currentIndex + 1];

    setStages((prev) => ({
      ...prev,
      [fromStage]: prev[fromStage as keyof typeof prev].filter(
        (i) => i.id !== item.id,
      ),
      [nextStage]: [...prev[nextStage as keyof typeof prev], item],
    }));
  };

  const moveBackward = (item: Item, fromStage: string) => {
    const currentIndex = stageOrder.indexOf(fromStage);
    if (currentIndex === 0) return;

    const prevStage = stageOrder[currentIndex - 1];

    setStages((prev) => ({
      ...prev,
      [fromStage]: prev[fromStage as keyof typeof prev].filter(
        (i) => i.id !== item.id,
      ),
      [prevStage]: [...prev[prevStage as keyof typeof prev], item],
    }));
  };

  return (
    <>
      <h1> Production Statges </h1>
      <form onSubmit={handleAddItem} className="input-form">
        <AppInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter New Idea"
        />
        <AppButton title={"Add Items"} type={"submit"} />
      </form>
      <div className="stages-container">
        <Stage
          title="Idea"
          items={stages.idea}
          stageKey="idea"
          onForward={moveForward}
          onBackward={moveBackward}
        />
        <Stage
          title="Prototype"
          items={stages.prototype}
          stageKey="prototype"
          onForward={moveForward}
          onBackward={moveBackward}
        />
        <Stage
          title="Development"
          items={stages.development}
          stageKey="development"
          onForward={moveForward}
          onBackward={moveBackward}
        />
        <Stage
          title="Ship"
          items={stages.ship}
          stageKey="ship"
          onForward={moveForward}
          onBackward={moveBackward}
        />
      </div>
    </>
  );
}

export default App;
