import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import './App.css';
import ProfileStories from './Components/ProfileStories/ProfileStories';
import Center from './Components/Center/Center';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProfileStories/>
      <Center/>
      <Navbar/>
    </div>
  );
}

export default App;
