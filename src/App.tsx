import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div>About Us</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;