import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Mainlayout";
import ClassDetails from "./pages/ClassDetails";
import Home from "./pages/Home";
import MySchedule from "./pages/MySchedule";
import Search from "./pages/Search";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QueryProvider from "./context/QueryContext";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <QueryProvider>
      <Loading />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/classes/:id" element={<ClassDetails />} />
            <Route path="/myschedule/" element={<MySchedule />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
}

export default App;
