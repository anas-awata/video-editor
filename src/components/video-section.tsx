import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { ValuesArray } from "../App";
import logo from "../assets/logo.png";

type Props = {
  setEditSectionOpen: (open: boolean) => void;
  valuesArray: ValuesArray[];
};

export default function VideoSection({
  setEditSectionOpen,
  valuesArray,
}: Props) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const inputRef = useRef(null);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setVideoUrl(objectUrl);
      setEditSectionOpen(true);
    }
  };

  useEffect(() => {
    // Clean up the URL when component unmounts
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [videoUrl]);

  const handleProgress = (progress: { playedSeconds: number }) => {
    setCurrentTime(progress.playedSeconds);
  };

  const handleDownload = () => {};

  const handleButtonClick = () => {
    //@ts-ignore
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <>
      <div
        className={
          !videoUrl
            ? `w-[100%] flex justify-center items-center h-[90vh]`
            : `w-[90%] lg:w-[60%] m-4 relative`
        }
      >
        {!videoUrl ? (
          <div className="flex justify-center items-center flex-col gap-5">
            <h1
              className="font-bold text-primary"
              style={{ fontFamily: "cursive" }}
            >
              Video Editor
            </h1>
            <img src={logo} alt="Logo" className="w-28 h-28" />
            <p className="text-3xl" style={{ fontFamily: "cursive" }}>
              Start Your Editing Journey{" "}
            </p>
            <div>
              <input
                id="video-input"
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="hidden"
                ref={inputRef}
              />
              <button
                onClick={handleButtonClick}
                className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded mb-4"
              >
                Select A Video To Edit
              </button>
            </div>
          </div>
        ) : (
          <>
            <ReactPlayer
              controls
              className="w-full"
              url={videoUrl}
              width="100%"
              height="100%"
              style={{ position: "relative" }}
              onProgress={handleProgress}
            />
            {valuesArray.map(
              (value, index) =>
                currentTime >= value.startTime &&
                currentTime <= value.endTime && (
                  <div
                    key={index}
                    style={{
                      position: "absolute",
                      left: `${value.xCoord}%`,
                      bottom: `${value.yCoord}%`,
                      fontSize: `${value.fontSize}px`,
                      color: "white",
                      fontWeight: "bold",
                      pointerEvents: "none", // Make text non-clickable
                    }}
                  >
                    {value.videoText}
                  </div>
                )
            )}
          </>
        )}
      </div>
      {videoUrl && (
        <button
          onClick={handleDownload}
          className="absolute bottom-4 right-4 bg-green-700 text-white px-4 py-2 rounded"
        >
          Download
        </button>
      )}
    </>
  );
}
