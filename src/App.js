import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import 'office-ui-fabric-react/dist/css/fabric.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm-1 ms-xl1">
          <Navigation/>
        </div>
        <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
          <div className="ms-Grid-row">
            <Cards />
          </div>
          <div className="ms-Grid-row">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
