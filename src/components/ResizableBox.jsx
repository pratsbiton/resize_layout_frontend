import { useState } from "react";
import { Resizable } from "react-resizable";
import { resizeHandles } from "../constant";

const ResizableBox = ({ children, dWidth, dHeight }) => {
  const [width, setWidth] = useState(dWidth);
  const [height, setHeight] = useState(dHeight);

  const handleResize = (e, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Resizable
      width={width}
      height={height}
      onResize={handleResize}
      draggableOpts={{ grid: [25, 25] }}
      resizeHandles={resizeHandles}
    >
      <div style={{ width: `${width}px`, height: `${height}px` }}>
        {children}
      </div>
    </Resizable>
  );
};

export default ResizableBox;
