import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import './App.css';
import ProfileStories from './Components/ProfileStories/ProfileStories';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProfileStories/>
      <Navbar/>
    </div>
  );
}

export default App;
