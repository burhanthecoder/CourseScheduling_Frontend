import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Lectures from './pages/Lectures';
import AddLectures from './pages/AddLectures';
import Courses from './pages/Courses';
import AddCourses from './pages/AddCourses';
import MainNavigation from "./components/layout/MainNavigation"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [courses, setCourses] = useState([]);

  const handleAddCourses = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/lectures' element={<Lectures />} />
        <Route path='/add-lectures' element={<AddLectures courses={courses} />} />
        <Route path='/courses' element={<Courses courses={courses} />} />
        <Route path='/add-courses' element={<AddCourses handleAddCourses={handleAddCourses} />} />
      </Routes>
    </div>
  );
}

export default App;
