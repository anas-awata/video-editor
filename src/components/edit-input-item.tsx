import { useState } from "react";
import { CiIndent, CiLineHeight, CiText, CiTimer } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

type Props = {
  videoText: string;
  xCoord: number;
  yCoord: number;
  startTime: number;
  endTime: number;
  fontSize: number;
  setVideoText: (text: string) => void;
  setXCoord: (x: number) => void;
  setYCoord: (y: number) => void;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  setFontSize: (fontSize: number) => void;
  removeInputItem: () => void;
};

function EditInputItem({
  videoText,
  xCoord,
  yCoord,
  startTime,
  endTime,
  setVideoText,
  setXCoord,
  setYCoord,
  setStartTime,
  setEndTime,
  fontSize,
  setFontSize,
  removeInputItem,
}: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="mb-2 w-full text-start border border-gray-300 rounded-md p-4"
      >
        {videoText ? (
          <p>{videoText.slice(0, 10) + (videoText.length > 10 ? "..." : "")}</p>
        ) : (
          <p>Add Content</p>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeInputItem();
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded float-right"
        >
          <MdDeleteOutline />
        </button>
        {xCoord || yCoord ? (
          <p>
            X: {xCoord}, Y: {yCoord}
          </p>
        ) : null}
        {startTime || endTime ? (
          <p>
            Start: {startTime}, End: {endTime}
          </p>
        ) : null}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          drawerOpen ? "max-h-full" : "max-h-0"
        }`}
      >
        <div className="mb-2">
          <label
            className="block text-custom-default text-base font-bold mb-2 text-start"
            htmlFor="video"
          >
            Video Text
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <CiText className="text-gray-400" />
            </span>
            <input
              className="shadow appearance-none border rounded-lg w-full py-4 pr-10 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="video-text"
              type="text"
              placeholder="Enter video text"
              value={videoText}
              onChange={(e) => setVideoText(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="block text-custom-default text-base font-bold mb-2 text-start">
            coordinates
          </label>
          <div className="flex gap-1 justify-between">
            <div className="flex flex-col w-[48%]">
              <label
                className="block text-custom-default text-base font-bold mb-2 text-start"
                htmlFor="start-time"
              >
                X Coordinate
              </label>
              <div className="relative pb-4">
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <CiLineHeight className="text-gray-400" />
                </span>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-4 pr-10 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="x-coord"
                  type="number"
                  placeholder="Enter x coordinate"
                  value={xCoord}
                  onChange={(e) => setXCoord(parseInt(e.target.value))}
                  min={0}
                  max={100}
                />
              </div>
            </div>
            <div className="flex flex-col w-[48%]">
              <label
                className="block text-custom-default text-base font-bold mb-2 text-start"
                htmlFor="start-time"
              >
                y Coordinate
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <CiIndent className="text-gray-400" />
                </span>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-4 pr-10 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="y-coord"
                  type="number"
                  placeholder="Enter y coordinate"
                  value={yCoord}
                  onChange={(e) => setYCoord(parseInt(e.target.value))}
                  min={0}
                  max={100}
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-custom-default text-base font-bold mb-2 text-start">
              Time
            </label>
            <div className="flex gap-1 justify-between">
              <div className="flex flex-col w-[48%]">
                <label
                  className="block text-custom-default text-base font-bold mb-2 text-start"
                  htmlFor="start-time"
                >
                  Start
                </label>
                <div className="relative pb-4">
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <CiTimer className="text-gray-400" />
                  </span>
                  <input
                    className="shadow appearance-none border rounded-lg w-full py-4 pr-10 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="start-time"
                    type="number"
                    placeholder="Enter Start Time"
                    value={startTime}
                    onChange={(e) => setStartTime(parseInt(e.target.value))}
                    max={endTime}
                    min={0}
                  />
                </div>
              </div>
              <div className="flex flex-col w-[48%]">
                <label
                  className="block text-custom-default text-base font-bold mb-2 text-start"
                  htmlFor="start-time"
                >
                  End
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <CiTimer className="text-gray-400" />
                  </span>
                  <input
                    className="shadow appearance-none border rounded-lg w-full py-4 pr-10 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="end-time"
                    type="number"
                    placeholder="Enter End Time"
                    value={endTime}
                    onChange={(e) => setEndTime(parseInt(e.target.value))}
                    min={startTime}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label
            className="block text-custom-default text-base font-bold mb-2 text-start"
            htmlFor="font-size"
          >
            Font Size
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <CiText className="text-gray-400" />
            </span>
            <input
              className="shadow appearance-none border rounded-lg w-full py-4 pr-10 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="font-size"
              type="number"
              placeholder="Enter Font Size"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              min={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditInputItem;
