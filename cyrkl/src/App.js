import './App.css';
import Banner from './components/Banner/Banner';
import Welcome from './Pages/Welcome';
import Button from './components/Button/Button';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from './Pages/Registration'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Router>
            <Routes>
              <Route path="/Registration" element={<Registration />}/>
            </Routes>
        </Router> */}
        <Welcome />
      </header>
    </div>
  );
}

export default App;
