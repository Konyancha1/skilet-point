import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;