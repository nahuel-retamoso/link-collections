import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation(); // Get the current location

  // Determine whether to show the Link based on the current route
  const showLink = location.pathname !== "/";

  return (
    <div className="navbar h-[9vh] bg-base-100 justify-between flex fixed z-50">
      <div className="pl-20">
        {showLink === false ? <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        /> : <Link to="/" className="btn btn-ghost text-md">
          Show all collections
        </Link>}
      </div>
      <div className="form-control"></div>
      <div className="w-1/6 justify-end pr-20"></div>
    </div>
  );
}

export default Navbar;
