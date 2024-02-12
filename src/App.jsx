import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="card">
        <Link to="/blog">Visiter les Articles</Link>
        <br />
        <Link to="/apropos">Page a propos</Link>
      </div>
    </>
  );
}

export default App;
