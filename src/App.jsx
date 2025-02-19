import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './pages/Detail';
import Home from './pages/Home';
import Ticket from './pages/Ticket';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}


export default App;
