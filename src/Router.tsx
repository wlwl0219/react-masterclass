import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Coins from "./screens/Coins";
import Coin from "./screens/Coin";
import NotFound from "./screens/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
