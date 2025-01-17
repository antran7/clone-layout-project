import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import { Button } from "@mui/material";
import RecommendedShorts from "./RecommecdedShorts";
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
      channelImage:
        "https://yt3.ggpht.com/ytc/AIdro_kOTmrSf1umbNZVdDlDfBw66JS15fsWyxNdzAX0owfOpQo=s68-c-k-c0x00ffffff-no-rj",
      channel: "Tan Thuy Hoang",
      image:
        "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/176188/Originals/anh%20anime%20chill%20lofi%20(3).jpg",
      isLive: true,
    },
    {
      title: "MU - LIVERPOOL: MESSI GÁNH KHOM NỔI HÀNG CÔNG MU",
      views: "107K views",
      timestamp: "8 hours ago",
      channelImage:
        "https://yt3.ggpht.com/fIv7TS_VYjrgey6rQPr4qmZVSgjau9bgxZxiQzHqgZmsxLg5aX7FGRLjDcN0HG7HqtU3fesDEQ=s68-c-k-c0x00ffffff-no-rj",
      channel: "Kplus Sports",
      image:
        "https://i.ytimg.com/vi/44k2oEzRKL0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBuUTeMvDdD6oOuZTYwucDYNlJAxw",
    },
    {
      title: "Lady Gaga - Die With A Smile (lyrics) ~ Shawn Mendes,R.A.D.",
      views: "36K views",
      timestamp: "10 days ago",
      channelImage:
        "https://yt3.ggpht.com/te5KUg5dBEKUFkuZLszBNgjb41mjsLt-FZ1yofGbkw1_Iu4Tpq3cIWh8kCEYFwXeXJYPyxon=s68-c-k-c0x00ffffff-no-rj",
      channel: "Ocean Pulse",
      image:
        "https://i.ytimg.com/vi/XZJFWcqCox8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBgZLCuYn7fJjQeMz680VoErwA0xA",
    },
    {
      title:
        "FAPtv Cơm Nguội: Tập 318 : Trở Về Tương Lai (Parody  Back to the Future 1985 )",
      views: "2.9M views",
      timestamp: "4 months ago",
      channelImage:
        "https://yt3.ggpht.com/ojud4pt7nDEj72Ta8kAoSUvop8QT0xOjSpZYNOb_sEDWMzFU_3eZS6dD_Sp56zO624CVveKptg=s68-c-k-c0x00ffffff-no-rj",
      channel: "FAPTV",
      image:
        "https://i.ytimg.com/vi/gtoxiKmhORE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDMXmMQDDxZk88e8w2avzh0VjAqTA",
    },
    {
      title:
        "Shin - Cậu Bé Bút Chì: Cơn bão hung hăng mời gọi! Đội phòng vệ Kasukabe của ánh hoàng hôn [Việt sub] by Muse Việt Nam 71,747 views 3 days ago 1 hour, 37 minutes",
      views: "75K views",
      timestamp: "3 days ago",
      channelImage:
        "https://yt3.ggpht.com/FMVXW07kOyhQwAPuGpTalwdYROkBMegNgUYDAB1I2cJibDZKLUYsmLTUI70X7akdNIhgTd7IZw=s68-c-k-c0x00ffffff-no-rj",
      channel: "Musee Việt Nam",
      image:
        "https://i.ytimg.com/vi/1VgpXZUl7fs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCAwkwrj4oMLEtUh0f1vmpYn5a_Jw",
    },
    {
      title: "Đen - Vị nhà (M/V)",
      views: "2M views",
      timestamp: "1 days ago",
      channelImage:
        "https://yt3.ggpht.com/VVSu9qRC_uvLNCuXrNi8klXkWtj7Qxs4YC_74Z397Jr4NlATsw8mU0ZynR_Pafz1o7r0zBbNsg=s88-c-k-c0x00ffffff-no-rj",
      channel: "Đen Vâu",
      image:
        "https://i.ytimg.com/vi/Hqmbo0ROBQw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBSU7y6ryOPacZ4OeVtfkCV3a0ZGg",
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
      <RecommendedShorts />
    </div>
  );
}

export default RecommendedVideos;
