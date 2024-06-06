import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function TopBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div>
      <p>User Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default TopBar;
