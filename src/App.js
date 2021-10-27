import './App.css';
import Posts from './components/Posts';
import NewPostContainer from "./components/NewPostContainer"


function App(){

  return (
    <div className="App">
    <NewPostContainer />
    <Posts />
    </div>

  );
}

export default App;
