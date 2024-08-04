
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const PrivetRote = () => {
  const { auth } = useAuth();
  return (
    <>
      <Header></Header>
      {auth.user ? (
        <main className="mx-auto max-w-[1020px] py-8">
          <div className="container">{<Outlet></Outlet>}</div>
        </main>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default PrivetRote;
