import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Coins from "./screens/Coins";
import Coin from "./screens/Coin";
import NotFound from "./screens/NotFound";
import Chart from "./components/Chart";
import Price from "./components/Price";

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
        children: [
          {
            path: "price",
            element: <Price />,
          },
          {
            path: "chart",
            element: <Chart />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
