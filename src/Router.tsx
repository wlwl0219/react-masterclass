import { createBrowserRouter } from "react-router-dom";
import SvgAni from "./SvgAni";
import Root from "./Root";
import Animate from "./Animate";
import Mission from "./Mission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mission />,
  },
]);

export default router;
