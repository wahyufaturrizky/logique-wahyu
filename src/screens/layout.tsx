import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = () => {
      navigate("/home-page");
    };

    handleAuth();
  }, [navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
