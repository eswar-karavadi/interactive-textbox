
import './App.css';
import InteractiveTextbox from './InteractiveTextbox';
import ProjectList from './Components/ProjectList';
import projectData from './Components/data.json';

function App() {
  return (
    <div className="App">
      <header className="App-personalHeader"> 
        <div className="float-child-left">
          <div className="green">
            <h1 id="Name">Eswar Karavadi</h1>
            <h2> Undergraduate Student at the University of Maryland</h2>
            <h2>Interactive Textbox Example</h2>
            <InteractiveTextbox />
          </div>
        </div>
        <div className="float-child-right">
          <div className="blue">
            <div className="Card">
              <h3>Education</h3>
            </div>
            <div className="Card">
              <h3>Projects</h3>
            </div>
            <div className="Card">
              <h3>Awards/Honors</h3>
            </div>
            <div className="Card">
              <h3>Skills</h3>
            </div>
            <div>
              <h1>My Portfolio</h1>
              <ProjectList projects={projectData.projects} />
            </div>
            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus luctus accumsan tortor posuere ac ut. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Rhoncus mattis rhoncus urna neque viverra. Ac ut consequat semper viverra. Quis eleifend quam adipiscing vitae. At ultrices mi tempus imperdiet. Semper eget duis at tellus. Felis eget velit aliquet sagittis id consectetur. Volutpat commodo sed egestas egestas fringilla phasellus. Leo urna molestie at elementum eu facilisis. Tempor orci eu lobortis elementum.

              Nascetur ridiculus mus mauris vitae. Diam quam nulla porttitor massa id neque aliquam vestibulum. Scelerisque eu ultrices vitae auctor eu augue. Consequat semper viverra nam libero justo laoreet. Semper viverra nam libero justo laoreet sit amet cursus sit. Vel pharetra vel turpis nunc eget. Leo urna molestie at elementum eu facilisis. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Eleifend mi in nulla posuere sollicitudin aliquam. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Sapien eget mi proin sed libero. Sed velit dignissim sodales ut eu sem integer vitae. Elit eget gravida cum sociis natoque. Metus dictum at tempor commodo ullamcorper. Id ornare arcu odio ut sem nulla pharetra diam sit.

              Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Nulla at volutpat diam ut venenatis. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Adipiscing commodo elit at imperdiet. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Cursus euismod quis viverra nibh cras. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Fames ac turpis egestas sed tempus urna et. Ornare aenean euismod elementum nisi quis. Dignissim sodales ut eu sem. Ornare aenean euismod elementum nisi. Tortor condimentum lacinia quis vel eros donec ac. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Est velit egestas dui id ornare arcu odio ut. Feugiat vivamus at augue eget arcu dictum.

              Sed risus pretium quam vulputate dignissim suspendisse. Et sollicitudin ac orci phasellus. Vel pretium lectus quam id leo in vitae turpis. Ac turpis egestas integer eget. Tempus iaculis urna id volutpat lacus laoreet non. Massa massa ultricies mi quis hendrerit dolor magna eget est. Tellus in metus vulputate eu scelerisque felis. At auctor urna nunc id cursus metus aliquam eleifend. Sed libero enim sed faucibus turpis in. Sit amet volutpat consequat mauris nunc congue.

              Id aliquet lectus proin nibh. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Proin fermentum leo vel orci porta non pulvinar neque. Aliquet bibendum enim facilisis gravida neque convallis a. Faucibus a pellentesque sit amet porttitor eget. Non sodales neque sodales ut etiam. Quisque sagittis purus sit amet volutpat. Amet justo donec enim diam vulputate ut pharetra sit amet. Fermentum et sollicitudin ac orci. Posuere urna nec tincidunt praesent semper feugiat. Eu feugiat pretium nibh ipsum.
            </p1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
