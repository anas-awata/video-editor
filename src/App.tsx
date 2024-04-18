import React, { useState } from "react";
import "./App.css";
import EditVideoSideSection from "./components/edit-video-side-section";
import VideoSection from "./components/video-section";

export interface ValuesArray {
  videoText: string;
  xCoord: number;
  yCoord: number;
  startTime: number;
  endTime: number;
  fontSize: number;
}

const App: React.FC = () => {
  const [editSectionOpen, setEditSectionOpen] = useState<boolean>(false);

  const [valuesArray, setValuesArray] = useState<ValuesArray[]>([
    {
      videoText: "",
      xCoord: 0,
      yCoord: 0,
      startTime: 0,
      endTime: 0,
      fontSize: 18,
    },
  ]);

  return (
    <div className="flex container items-start h-[95vh] pt-2">
      {editSectionOpen && (
        <EditVideoSideSection
          valuesArray={valuesArray}
          setValuesArray={setValuesArray}
        />
      )}
      <VideoSection
        setEditSectionOpen={setEditSectionOpen}
        valuesArray={valuesArray}
      />
    </div>
  );
};

export default App;
