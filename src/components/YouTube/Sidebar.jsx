import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Sidebar() {
  const subscriptions = [
    {
      name: "Tabi Tuấn Anh",
      avatar:
        "https://yt3.ggpht.com/stdXX6f3lcnQTjmNjYJ_YGdE799Zi8OPEUxI8T1ros4m7MXdhJJOXGXctdTGrxFfRxcPISY=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "giáo.làng",
      avatar:
        "https://yt3.ggpht.com/2rIW6m-ZDdTDITm0VpttLYxR9onL699oB1XBF-apHCjxfl88D7vA4jMTog499zSlQ_pBF8Y_WA=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "EA Sports FC Online",
      avatar:
        "https://yt3.ggpht.com/kbSlC0K0iMAvi1wcxu-jf5qNV3bTQ62nL2H8kmkn74JH11dPyYIvEbX_Y853en1GRrSFeTM0ugM=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "THỎ BẢY MÀU",
      avatar:
        "https://yt3.ggpht.com/nWSdA9GftPmUUpr9p7-uRmzaBpXJPosI-m7anrP040ixXZdMScrMdyordtkR7XBDtewPancSjZo=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "UR · Cristiano",
      avatar:
        "https://yt3.ggpht.com/7HR7AS1zqCg3HDKKhU734Hoqaz277rXAkSkjJlui8cf_jrw31GZF2aPn3i9JS6Hhwgcxutp0jg=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "AsmrProg",
      avatar:
        "https://yt3.ggpht.com/fErwCZk3mSh4RW0KhIDlsdLF8r5myXKcg2tHeVPyLoVR86rnkSb5II1s4v1lC7Muqd5asy0Ruxw=s88-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <div className="sidebar">
      <Link to="/youtube" style={{ textDecoration: "none", color: "inherit" }}>
        <SidebarRow selected Icon={HomeIcon} title="Home" />
      </Link>
      <Link to="/shorts" style={{ textDecoration: "none", color: "inherit" }}>
        <SidebarRow Icon={WhatshotIcon} title="Shorts" />
      </Link>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />

      <div className="sidebar__section">
        <h3>You</h3>
        <SidebarRow Icon={HistoryIcon} title="History" />
        <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
      </div>
      <hr />

      <div className="sidebar__section">
        <h3>Subscriptions</h3>
        {subscriptions.map((channel, index) => (
          <SidebarRow
            key={index}
            CustomIcon={
              <Avatar
                src={channel.avatar}
                className="sidebar__avatar"
                style={{ width: 24, height: 24 }}
              />
            }
            title={channel.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
