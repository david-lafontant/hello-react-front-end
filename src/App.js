import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting/greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
