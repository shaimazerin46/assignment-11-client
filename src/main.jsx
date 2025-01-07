import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout"; 
import Home from "./Pages/Home.jsx";
import '../src/index.css'
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AuthProvider from "./Context/AuthContext/AuthProvider.jsx";
import AddServices from "./Pages/AddServices.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import AllServices from "./Pages/AllServices.jsx";
import ServiceDetails from "./Pages/ServiceDetails.jsx";
import MyServices from "./Pages/MyServices.jsx";
import MyReview from "./Pages/MyReview.jsx";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/addServices' element={<PrivateRoute><AddServices></AddServices></PrivateRoute>}></Route>
        <Route path="/allSearvices" element={<AllServices></AllServices>}></Route>
        <Route path='/details/:id' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/myServices" element={<PrivateRoute><MyServices></MyServices></PrivateRoute>}></Route>
        <Route path="/myReview" element={<PrivateRoute><MyReview></MyReview></PrivateRoute>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
);
