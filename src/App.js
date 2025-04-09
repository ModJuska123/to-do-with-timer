import './App.css';
import Timer from './Components/Timer';
import Settings from './Components/Settings';
import {useState} from 'react';
import SettingsContext from './Components/SettingsContext';


function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const[breakMinutes, setBrackeMinutes] = useState(5);

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBrackeMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer /> }
      </SettingsContext.Provider>
    </main>
  );
}

export default App;

