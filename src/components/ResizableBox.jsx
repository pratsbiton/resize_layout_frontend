import { useEffect, useState } from "react";
import { Resizable } from "react-resizable";
import { getDefaultDynamicWH } from "../utils";
import { resizeHandles } from "../constant";

const ResizableBox = ({ children, id }) => {
  const [width, setWidth] = useState(getDefaultDynamicWH(id).width);
  const [height, setHeight] = useState(getDefaultDynamicWH(id).height);
  console.log(width, height, getDefaultDynamicWH(id), id, 'getDefaultDynamicWH(id)');

  // useEffect(() => {
  //   setWidth(getDefaultDynamicWH(id).width);
  //   setHeight(getDefaultDynamicWH(id).height);
  // }, []);

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
