import React, { useState } from "react";
import "./Shorts.css";
import { IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Shorts() {
  const [currentShort, setCurrentShort] = useState(0);

  const shortsData = [
    {
      id: 1,
      url: "https://example.com/video1.mp4",
      title: "Amazing Short Video #1",
      creator: "@creator1",
      likes: "1.2M",
      comments: "10K",
      description: "Check out this amazing short! #viral #trending",
    },
    {
      id: 2,
      url: "https://example.com/video2.mp4",
      title: "Cool Short Video #2",
      creator: "@creator2",
      likes: "500K",
      comments: "5K",
      description: "Another awesome short for you! #fun #entertainment",
    },
  ];

  const handleNextShort = () => {
    if (currentShort < shortsData.length - 1) {
      setCurrentShort(currentShort + 1);
    }
  };

  const handlePreviousShort = () => {
    if (currentShort > 0) {
      setCurrentShort(currentShort - 1);
    }
  };

  return (
    <div className="shorts">
      <div className="shorts__container">
        <div className="shorts__video">
          <video
            src={shortsData[currentShort].url}
            loop
            autoPlay
            muted
            onClick={handleNextShort}
          />

          <div className="shorts__sidebar">
            <div className="shorts__sidebarButton">
              <IconButton>
                <ThumbUpIcon />
              </IconButton>
              <p>{shortsData[currentShort].likes}</p>
            </div>

            <div className="shorts__sidebarButton">
              <IconButton>
                <ThumbDownIcon />
              </IconButton>
              <p>Dislike</p>
            </div>

            <div className="shorts__sidebarButton">
              <IconButton>
                <CommentIcon />
              </IconButton>
              <p>{shortsData[currentShort].comments}</p>
            </div>

            <div className="shorts__sidebarButton">
              <IconButton>
                <ShareIcon />
              </IconButton>
              <p>Share</p>
            </div>

            <div className="shorts__sidebarButton">
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>

          <div className="shorts__details">
            <h3>{shortsData[currentShort].title}</h3>
            <p>{shortsData[currentShort].creator}</p>
            <p>{shortsData[currentShort].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shorts;
