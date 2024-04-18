import { ValuesArray } from "../App";
import EditInputItem from "./edit-input-item";

type Props = {
  valuesArray: ValuesArray[];
  setValuesArray: React.Dispatch<React.SetStateAction<ValuesArray[]>>;
};

function EditVideoSideSection({ valuesArray, setValuesArray }: Props) {
  const addInputItem = () => {
    setValuesArray((prevValues) => [
      ...prevValues,
      {
        videoText: "",
        xCoord: 0,
        yCoord: 0,
        startTime: 0,
        endTime: 0,
        fontSize: 18,
      },
    ]);
  };

  const handleVideoTextChange = (index: number, text: string): void => {
    setValuesArray((prevValues) =>
      prevValues.map((value, idx) =>
        idx === index ? { ...value, videoText: text } : value
      )
    );
  };

  const handleXCoordChange = (index: number, x: number): void => {
    setValuesArray((prevValues) =>
      prevValues.map((value, idx) =>
        idx === index ? { ...value, xCoord: x } : value
      )
    );
  };

  const handleYCoordChange = (index: number, y: number): void => {
    setValuesArray((prevValues) =>
      prevValues.map((value, idx) =>
        idx === index ? { ...value, yCoord: y } : value
      )
    );
  };

  const handleStartTimeChange = (index: number, startTime: number): void => {
    setValuesArray((prevValues) =>
      prevValues.map((value, idx) =>
        idx === index ? { ...value, startTime: startTime } : value
      )
    );
  };

  const handleEndTimeChange = (index: number, endTime: number): void => {
    setValuesArray((prevValues) =>
      prevValues.map((value, idx) =>
        idx === index ? { ...value, endTime: endTime } : value
      )
    );
  };

  const handleFontSizeChange = (index: number, fontSize: number): void => {
    setValuesArray((prevValues) =>
      prevValues.map((value, idx) =>
        idx === index ? { ...value, fontSize: fontSize } : value
      )
    );
  };

  const removeInputItem = (index: number) => {
    setValuesArray((prevValues) => [
      ...prevValues.slice(0, index),
      ...prevValues.slice(index + 1),
    ]);
  };

  return (
    <div
      id="edit-section"
      className="w-[40%] p-4 border-r border-gray-300 overflow-y-scroll max-h-[90vh]"
    >
      <h2 className="text-lg font-bold mb-4">Edit Video</h2>
      <button
        onClick={addInputItem}
        className="mb-4 bg-primary hover:bg-primary-600 w-full text-white font-bold p-4 rounded-lg focus:outline-none focus:shadow-outline "
      >
        Add New Text
      </button>
      {valuesArray.map((value, index) => (
        <EditInputItem
          key={index}
          videoText={value.videoText}
          xCoord={value.xCoord}
          yCoord={value.yCoord}
          startTime={value.startTime}
          endTime={value.endTime}
          fontSize={value.fontSize}
          setFontSize={(fontSize) => handleFontSizeChange(index, fontSize)}
          setVideoText={(text) => handleVideoTextChange(index, text)}
          setXCoord={(x) => handleXCoordChange(index, x)}
          setYCoord={(y) => handleYCoordChange(index, y)}
          setStartTime={(startTime) => handleStartTimeChange(index, startTime)}
          setEndTime={(endTime) => handleEndTimeChange(index, endTime)}
          removeInputItem={() => removeInputItem(index)}
        />
      ))}
    </div>
  );
}

export default EditVideoSideSection;
