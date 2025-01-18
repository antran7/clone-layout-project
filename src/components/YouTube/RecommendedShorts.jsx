import React from "react";
import "./RecommendedShorts.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

function RecommendedShorts() {
  const shortsData = [
    {
      id: 1,
      thumbnail:
        "https://i.ytimg.com/vi/d0oHarilZ_Y/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAGp2_iICAsSB-TqPhaTJV5AwzcvA",
      title: "Vợ cấm là đúng rồi :))  #comnguoi328 #faptv",
      views: "22K views",
      creator: "FAPTV",
    },
    {
      id: 2,
      thumbnail:
        "https://i.ytimg.com/vi/yymyLXPbP1Y/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLC5sjGALqMJZXVx0ix7xaKglbl7wQ",
      title:
        "How to become a Senior developer.. ♥️ 😂 #programming #javascript #python #coding #developer #coder .",
      views: "2.3M views",
      creator: "Gaming News",
    },
    {
      id: 3,
      thumbnail:
        "https://i.ytimg.com/vi/6TFpWodu9pw/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLCOad-xPd0KhtWdPV0TzHYhG1aN1w",
      title:
        "Power of CSS 🔥 | Html to css design #codingshortvideo  #trading #csstutorial #viral #codinglover #js",
      views: "224K views",
      creator: "Music Comparisons",
    },
    {
      id: 4,
      thumbnail:
        "https://i.ytimg.com/vi/TFzNUNvN2o8/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLC-2Vo9WfkbjsAXXCu9jxUXzn6EZw",
      title: "시즌13 모데카이저",
      views: "828K views",
      creator: "League Shorts",
    },
    {
      id: 5,
      thumbnail:
        "https://i.ytimg.com/vi/PjTrF2bp7MQ/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAJpHBswzKhzd4TB996JAY9UvrtMg",
      title:
        "2024 MAMA AWARDS[#2024MAMA] #APT by #rose #로제 #brunomars MAMA Makes 'incredible performance' REAL🔥",
      views: "804K views",
      creator: "Music Trends",
    },
  ];

  return (
    <div className="recommendedShorts">
      <div className="recommendedShorts__header">
        <div className="recommendedShorts__title">
          <img
            src="https://i.pinimg.com/550x/b8/b9/4e/b8b94e843e90404816534eb7c947abde.jpg"
            alt="Shorts"
          />
          <span>Shorts</span>
        </div>
      </div>
      <div className="recommendedShorts__videos">
        {shortsData.map((short) => (
          <Link
            to="/shorts"
            key={short.id}
            className="recommendedShorts__video"
          >
            <div className="recommendedShorts__thumbnail">
              <img src={short.thumbnail} alt={short.title} />
            </div>
            <div className="recommendedShorts__info">
              <p className="recommendedShorts__title">{short.title}</p>
              <p className="recommendedShorts__views">{short.views}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecommendedShorts;
