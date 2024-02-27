import { useSortable } from "@dnd-kit/sortable";
import { sectionColors } from "../constant";
import Button from "./Button";
import Input from "./Input";
import { CSS } from "@dnd-kit/utilities";
import { useEffect, useMemo, useState } from "react";
import useAddSectionText from "../hooks/use-add-section-text";
import useUpdateSectionText from "../hooks/use-update-section-text";
import useGetSections from "../hooks/use-get-sections";

const Card = ({ id }) => {
  const { data: sectionData, refetch: refetchSectionData } = useGetSections();
  const {
    mutate: addText,
    isSuccess: isAddSuccess,
    reset: resetAdd,
  } = useAddSectionText();
  const {
    mutate: updateText,
    isSuccess: isUpdateSuccess,
    reset: resetUpdate,
  } = useUpdateSectionText();

  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isToggleForm, setIsToggleForm] = useState(false);

  const color = sectionColors[id - 1];

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled: isDisabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? "99" : "auto",
    opacity: isDragging ? 0.5 : 1,
  };

  const cardStyle = {
    background: color,
    height: "100%",
    width: "100%",
    textAlign: "center",
    overflow: "hidden",

    ...style,
  };

  const onChange = (event) => {
    if (event.target.value.length <= 20) {
      setInputValue(event.target.value);
    }
  };

  const handleOnSubmit = (eventName) => {
    if (eventName === "Add") {
      addText({ body: { text: inputValue, section: color } });
    } else {
      updateText({
        id: sectionData.find((s) => s?.section === color)?._id,
        body: { text: inputValue, section: color },
      });
    }
  };

  const handleOnMouseEnter = () => {
    setIsDisabled(true);
  };

  const handleOnMouseLeave = () => {
    setIsDisabled(false);
  };

  const sectionText = useMemo(() => {
    if (sectionData?.length > 0) {
      return sectionData.find((s) => s?.section === color)?.text || "";
    }
    return "";
    // eslint-disable-next-line react-hooks/exhaustive-deps -- D
  }, [sectionData]);

  useEffect(() => {
    if (sectionText) {
      setInputValue(sectionText);
    }
  }, [sectionText]);

  useEffect(() => {
    if (isAddSuccess || isUpdateSuccess) {
      refetchSectionData();
      setIsToggleForm(false);
      resetAdd();
      resetUpdate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- D
  }, [isAddSuccess, isUpdateSuccess]);

  const btnLabel = sectionText ? "Update" : "Add";

  return (
    <div style={cardStyle} ref={setNodeRef} {...attributes} {...listeners}>
      <h2>Component {id}</h2>
      <p>This is Component {id}</p>
      <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        <Button
          label={btnLabel}
          onClick={() => {
            setIsToggleForm(true);
          }}
        />
      </div>

      {isToggleForm ? (
        <div
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          style={mt4}
        >
          <Input id={id} type="text" value={inputValue} onChange={onChange} />
          <Button
            type="submit"
            label={btnLabel}
            disabled={!inputValue}
            onClick={() => handleOnSubmit(btnLabel)}
          />
        </div>
      ) : null}

      {sectionText ? (
        <div>
          <span>
            <em>{sectionText}</em>
          </span>
        </div>
      ) : null}
    </div>
  );
};

const mt4 = { marginTop: "4px" };

export default Card;
