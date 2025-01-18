import React from "react";
import "./VideoCard.css";
import { Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  isLive,
  isVerified,
}) {
  return (
    <div className="videoCard">
      <div className="videoCard__thumbnail">
        <img src={image} alt="" />
        {isLive && <span className="live-badge">LIVE</span>}
        {!isLive && <span className="video-duration">8:45</span>}
      </div>
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>
            {channel}
            {isVerified && (
              <CheckCircleIcon className="channel-verified" fontSize="small" />
            )}
          </p>
          <p>
            {views} •{" "}
            {isLive ? <span className="timestamp-live">LIVE</span> : timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
