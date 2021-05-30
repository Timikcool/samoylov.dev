import { createRouteBundle } from "redux-bundler";
import Home from "../components/home";
import Resume from "../components/resume";
import Trophies from "../components/trophies";
import Showcase from "../components/showcase";

export default createRouteBundle({
  "/": Home,
  "/resume": Resume,
  "/trophies": Trophies,
  "/showcase": Showcase,
});
