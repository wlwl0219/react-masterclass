import { createBrowserRouter } from "react-router-dom";
import SvgAni from "./SvgAni";
import Root from "./Root";
import Animate from "./Animate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Animate />,
  },
]);

export default router;
