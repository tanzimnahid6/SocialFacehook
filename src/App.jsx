import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import Registration from "./Pages/Registration";
import NotFoundPage from "./Pages/NotFoundPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage></HomePage>}></Route>
        <Route path="/me" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </>
  );
}
