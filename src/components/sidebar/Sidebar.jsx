import RssFeed from "@mui/icons-material/RssFeed"
import "./sidebar.css"
import Bookmark from "@mui/icons-material/Bookmark"
import PlayCircleFilledOutlined from "@mui/icons-material/PlayCircleFilledOutlined"
import Group from "@mui/icons-material/Group"
import HelpOutline from "@mui/icons-material/HelpOutline"
import WorkOutline from "@mui/icons-material/WorkOutline"
import Event from "@mui/icons-material/Event"
import School from "@mui/icons-material/School"
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School
             className="sidebarIcon"/>
            <span className="sidebarListItemText">courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFiendImg">
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
          
        </ul>
      </div>
    </div>
  )
}
