// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/table",
    sidebarName: "Account",
    navbarName: "Account",
    icon: Person,
    component: TableList
  },
  {
    path: "/user",
    sidebarName: "Load Money",
    navbarName: "Load Money",
    icon: "content_paste",
    component: UserProfile
  },
  {
    path: "/typography",
    sidebarName: "Transfer",
    navbarName: "Transfer",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/dashboard",
    sidebarName: "Reports",
    navbarName: "Bankta Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/maps",
    sidebarName: "Messages",
    navbarName: "Messages",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/table", navbarName: "Redirect" }
];

export default dashboardRoutes;
