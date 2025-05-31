import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <Link to="/dashboard" className="text-blue-600 hover:underline">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const label = value.charAt(0).toUpperCase() + value.slice(1);
        return (
          <span key={to}>
            {" > "}
            {index === pathnames.length - 1 ? (
              <span className="text-gray-700">{label}</span>
            ) : (
              <Link to={to} className="text-blue-600 hover:underline">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
