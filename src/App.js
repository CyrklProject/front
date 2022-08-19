import './App.css';
import Welcome from './Pages/Welcome';

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
