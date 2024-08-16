import Layout1 from "../pages/Layout1/Layout1";
import Layout2 from '../pages/Layout2/Layout2';
import Layout3 from '../pages/Layout3/Layout3';
import Layout4 from '../pages/Layout4/Layout4';
import Layout5 from '../pages/Layout5/Layout5';
import Layout6 from '../pages/Layout6/Layout6';
import Layout7 from '../pages/Layout7/Layout7';
import Layout8 from '../pages/Layout8/Layout8';
import Layout9 from "../pages/Layout9/Layout9";

const routes = [
  { path: "/layout1", component: <Layout1 /> },
  { path: "/layout2", component: <Layout2 /> },
  { path: "/layout3", component: <Layout3 /> },
  { path: "/layout4", component: <Layout4 /> },
  { path: "/layout5", component: <Layout5 /> },
  { path: "/layout6", component: <Layout6 /> },
  { path: "/layout7", component: <Layout7 /> },
  { path: "/layout8", component: <Layout8 /> },
  { path: "/layout9", component: <Layout9 /> },
  { path: "/", component: <Layout1 /> },
];

export default routes;
