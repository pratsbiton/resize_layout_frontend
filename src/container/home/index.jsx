import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import ResizableBox from "../../components/ResizableBox";
import Card from "../../components/Card";
import NumberBadge from "../../components/NumberBadge";
import { getDefaultDynamicWH } from "../../utils";

const Home = () => {
  const [sortedCardData, setSortedCardData] = useState([1, 2, 3]);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveId(null);
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setSortedCardData((item) => {
        const itemIds = item.map((data) => data);
        const oldIndex = itemIds.indexOf(active.id);
        const newIndex = itemIds.indexOf(over.id);
        const draggedCards = arrayMove(item, oldIndex, newIndex);

        return draggedCards;
      });
    }
  };

  return (
    <div>
      <DndContext
        collisionDetection={closestCenter}
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <div style={dragWrapperStyle}>
          <SortableContext
            items={sortedCardData}
            strategy={rectSortingStrategy}
          >
            {sortedCardData.map((sd) => (
              <div key={sd}>
                <ResizableBox dWidth={getDefaultDynamicWH(sd).width} dHeight={getDefaultDynamicWH(sd).height}>
                  <Card id={sd} />
                </ResizableBox>
              </div>
            ))}

            <DragOverlay>
              {activeId ? <div sx={dragNotFoundStyle} /> : null}
            </DragOverlay>
          </SortableContext>
        </div>
      </DndContext>
      <NumberBadge />
    </div>
  );
};

const dragWrapperStyle = { display: "flex", flexWrap: "wrap", overflowY: 'hidden', justifyContent: 'center', margin: '10px 0' };

const dragNotFoundStyle = { backgroundColor: "red" };

export default Home;
