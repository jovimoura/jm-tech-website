import {
  createBrowserRouter,
} from "react-router-dom";

import Home from './Home'
import ErrorPage from "./ErrorPage";
import About from "./About";
import ScrollToTop from "@/components/ScrollToTop";
import HowItWorks from "./HowItWorks";
import Focus from "./Focus";
import Princing from "./Princing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ScrollToTop children={<Home />} />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <ScrollToTop children={<About />} />,
    errorElement: <ErrorPage />
  },
  {
    path: "/how-it-works",
    element: <ScrollToTop children={<HowItWorks />} />,
    errorElement: <ErrorPage />
  },
  {
    path: "/focus",
    element: <ScrollToTop children={<Focus />} />,
    errorElement: <ErrorPage />
  },
  {
    path: "/pricing",
    element: <ScrollToTop children={<Princing />} />,
    errorElement: <ErrorPage />
  },
]);
