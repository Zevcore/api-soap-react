
import Sidebar from "./components/Sidebar/Sidebar";
import Aside from "./components/Aside/Aside";
import video from './bg.mp4';

function App() {
  return (
    <div className="App">
        <video className="bg-video" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop"><source src={video} type="video/mp4" /></video>
        <Sidebar />
        <Aside />
    </div>
    
  );
}


export default App;
