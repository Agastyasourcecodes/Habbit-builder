import { PlusIcon, LogOutIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-base-300 border-b border-base-content">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            AI-Habbit builder
          </h1>

          <div className="flex items-center gap-3">
            {user?.name && (
              <span className="text-sm hidden sm:inline text-base-content/70">
                Hi, {user.name}
              </span>
            )}

            <Link to="/create" className="btn btn-primary flex items-center gap-2">
              <PlusIcon size={20} />
              <span>New Habbit</span>
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-outline flex items-center gap-2"
            >
              <LogOutIcon size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;