import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Courses from './components/Courses';
import AddCourse from "./components/AddCourse";
import Course from "./components/Course";
import NotFound from "./components/404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CourseState} from './contexts/coursecontext';
import UpdateCourse from './components/updateCourse';

function App() {
  return (
    <CourseState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addcourse" element={<AddCourse />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Courses" element={<Courses />} />
          <Route exact path="/Courses/:name" element={<Course />} />
          <Route exact path="/updateCourse/:id" element={<UpdateCourse />} />
          <Route exact path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </CourseState>
  );
}

export default App;