// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// let name='deepu';
function App() {
  const [mode, setmode] = useState('light'); //Where dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (messages, type) => {
    setAlert({
      msg: messages,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('white');
      document.body.style.backgroundColor = 'white';
      setRgb('white');
      settxtcolor('#33393d');
      showAlert('Light Mode has been Enabled', 'success');
      // document.title='Rusty - light Mode';
    } else {
      setmode('dark');
      document.body.style.backgroundColor = '#33393d';
      setRgb('#41484d');
      settxtcolor('white');
      showAlert('Dark Mode has been Enabled', 'success');
      // document.title='Rusty - Dark Mode';
    }
  };
  const [rgb, setRgb] = useState('white');
  const [txtcolor, settxtcolor] = useState('#33393d');

  const doRed = () => {
    setRgb('#FE9191');
    document.body.style.backgroundColor = '#FF8484 ';
    settxtcolor('#770101');
    showAlert('Red Theme has been Enabled', 'success');

  }
  const doBlue = () => {
    setRgb('#77AFF3 ');
    document.body.style.backgroundColor = '#55A1FE  ';
    settxtcolor('#043361');
    showAlert('Blue Theme has been Enabled', 'success');
  }
  const doGreen = () => {
    setRgb('#68A81A ');
    document.body.style.backgroundColor = '#509200';
    settxtcolor('#334701');
    showAlert('Green Theme has been Enabled', 'success');
  }

  return (
    <>
      <Router>
      <Navbar title="Rusty" main="House" toggleMode={toggleMode} mode={mode} doRed={doRed} doGreen={doGreen} doBlue={doBlue} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/cancer" element={<About />}>
          </Route>
          <Route exact path="/" element={<Textform heading="Enter text to analyze" rgb={rgb} mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
