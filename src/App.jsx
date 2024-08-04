                          import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import Registration from "./Pages/Registration";
import NotFoundPage from "./Pages/NotFoundPage";
import PrivetRote from "./route/PrivetRote";

export default function App() {
  return (
    <>
      <Routes>
        
        <Route element={<PrivetRote></PrivetRote>}>
          <Route path="/" exact element={<HomePage></HomePage>}></Route>
          <Route path="/me" element={<ProfilePage></ProfilePage>}></Route>
        </Route>

        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </>
  );
}
