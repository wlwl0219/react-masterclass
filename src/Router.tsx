import { createBrowserRouter } from "react-router-dom";
import Svg from "./SvgAni";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Svg />,
  },
]);

export default router;
