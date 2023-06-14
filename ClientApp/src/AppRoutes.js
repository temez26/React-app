import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import VideoPlayer from "./components/VideoPlayer";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/video-player',
      element: < VideoPlayer
  
          publicId= "https://res.cloudinary.com/dn9y6avkp/video/upload/v1686753506/el%C3%A4imet_uo5s2n.mp4"
  width = { 640}
  height = { 360}
  aspectRatio = "16:9"
  controls = { true}
  autoplay = { true}
  muted = { false}
  loop = { false}
  cloud_name = "your-cloud-name"
    />

    }
];

export default AppRoutes;
