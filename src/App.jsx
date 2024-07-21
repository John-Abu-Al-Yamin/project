import "./App.css";
import "flowbite";

import Navbar from "./components/Navbar";
import Student from "./pages/Students/Student";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Graduate from "./pages/Graduate/Graduate";
import Contact from "./pages/Contact/Contact";
import Teacher from "./pages/Teacher/Teacher";
import Personal from "./pages/Personal/Personal";
import Auth from "./pages/auth/Auth";
import { ToastContainer } from "react-toastify";
import Sidebar from "./pages/Sidebar/Sidebar";
import Cards from "./pages/Cards/Cards";

function App() {
  return (
    <div className="App ">
      <ToastContainer />
      <Navbar />
      {/* Route */}
      <div className="">
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/graduate" element={<Graduate />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/card" element={<Cards />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
