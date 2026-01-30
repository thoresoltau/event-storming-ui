import React, { useState } from 'react';

const DraggableElement: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      draggable
      onDrag={handleDrag}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '100px',
        height: '100px',
        backgroundColor: 'lightblue',
      }}
    >
      Drag me!
    </div>
  );
};

export default DraggableElement;