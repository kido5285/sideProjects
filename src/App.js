import './App.css';
import Navbar from './modules/navbar';
import ImageSlider from './modules/imageSlider';
import TextSlider from './modules/textSlider';
import RowTwo from './modules/RowTwo'
function App() {
    
  return (
    <div className="App">
      <Navbar/>
      <main>
        <div className="film"></div>
        <div className="row-1">
          <ImageSlider/>
          <TextSlider/>
        </div>
        <div className="row-2">
          <RowTwo/>
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Aw Yong</a>.
        </div>
      </main>
    </div>
  );
}

export default App;
