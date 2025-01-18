import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import { Button } from "@mui/material";
import RecommendedShorts from "./RecommendedShorts";
import "./RecommendedShorts.css";

function RecommendedVideos() {
  const filters = [
    "All",
    "Gaming",
    "Music",
    "EA Sports FC Online",
    "Formations",
    "Live",
    "League of Legends",
    "Mixes",
    "Lady Gaga",
    "Arsenal F.C.",
    "Championships",
    "Playlists",
  ];

  const videos = [
    {
      title: "LOFI CHILL | STREAM 24/7",
      views: "20K watching",
      timestamp: "LIVE",
      channelImage: "/path-to-ibrobot-avatar.jpg",
      channel: "Tan Thuy Hoang",
      image:
        "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/176188/Originals/anh%20anime%20chill%20lofi%20(3).jpg",
      isLive: true,
    },
    {
      title: "MU - LIVERPOOL: MESSI GÁNH KHÔNG NỔI HÀNG CÔNG MU",
      views: "107K views",
      timestamp: "8 hours ago",
      channelImage: "/path-to-kplus-sports-avatar.jpg",
      channel: "Kplus Sports",
      image:
        "https://i.ytimg.com/vi/44k2oEzRKL0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBuUTeMvDdD6oOuZTYwucDYNlJAxw",
    },
    {
      title: "Lady Gaga - Die With A Smile (lyrics) ~ Shawn Mendes,R.A.D.",
      views: "150K views",
      timestamp: "10 days ago",
      channelImage: "/path-to-ocean-pulse-avatar.jpg",
      channel: "Ocean Pulse",
      image:
        "https://i.ytimg.com/vi/XZJFWcqCox8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBgZLCuYn7fJjQeMz680VoErwA0xA",
    },
  ];

  return (
    <div className="recommendedVideos">
      <div className="filters">
        {filters.map((filter, index) => (
          <Button
            key={filter}
            className={`filter-chip ${index === 0 ? "active" : ""}`}
            variant="contained"
          >
            {filter}
          </Button>
        ))}
      </div>
      <div className="recommendedVideos__videos">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
            channel={video.channel}
            image={video.image}
            isLive={video.isLive}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
