import React, { useState } from "react";
import "./Shorts.css";
import { IconButton, Avatar, Button } from "@mui/material";
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
      title:
        "IBROBOT BÁN SẠCH TEAM REAL 20K TỶ ĐỂ XÂY DỰNG TEAM JUVENTUS SIÊU MẠNH",
      creator: "ibrobot",
      avatar:
        "https://yt3.ggpht.com/ytc/AIdro_kOTmrSf1umbNZVdDlDfBw66JS15fsWyxNdzAX0owfOpQo=s68-c-k-c0x00ffffff-no-rj",
      likes: "11K",
      comments: "3K",
      description: "Check out this amazing short! #viral #trending",
    },
  ];

  return (
    <div className="shorts">
      <div className="shorts__container">
        <video
          className="shorts__video"
          src={shortsData[currentShort].url}
          loop
          autoPlay
          muted
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
          <div className="shorts__creator">
            <Avatar
              className="shorts__avatar"
              src={shortsData[currentShort].avatar}
            />
            <p>@{shortsData[currentShort].creator}</p>
            <Button className="shorts__subscribe">Subscribe</Button>
          </div>
          <p>{shortsData[currentShort].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Shorts;
