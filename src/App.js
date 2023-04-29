
import './App.css';
import ChangeTheme from './component/ChangeTheme';
import Login from './component/Login';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      Hello Redux
      <Profile />
      <Login />
      <ChangeTheme/>
    </div>
  );
}

export default App;
