import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/navbar"
import Home from "./layout/pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/addUser";
import EditUser from "./users/editUser";
import ViewUser from "./users/viewUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<addUser />} />
          <Route exact path="/edituser/:id" element={<editUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
