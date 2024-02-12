import { Link, useLocation } from "react-router-dom";

export function BreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumPath = "";
  return (
    <div>
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        breadcrumPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        console.log(pathnames, breadcrumPath);

        return isLast ? (
          <span key={breadcrumPath}> /{name}</span>
        ) : (
          <span className={breadcrumPath}>
            {" "}
            /<Link to={breadcrumPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
}
