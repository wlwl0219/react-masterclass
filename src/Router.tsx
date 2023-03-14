import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // children: [
    //   {
    //     path: "",
    //     element: <Home />,
    //   },
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    // ],
  },
]);

export default router;
