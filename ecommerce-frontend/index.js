import login from "./login.js";
import register from "./register.js";

const root = document.getElementById("root");
const allAnchor = document.querySelectorAll("a");
const router = {
  "/login": login,
  "/register": register,
};

function handleClick(e) {
  e.preventDefault();
  //   console.log(e.target.pathname);
  let path = e.target.pathname;
  console.log(path);

  history.pushState(null, "", `${path}`);

  root.innerHTML = router[path]();
}
allAnchor.forEach((anchor) => {
  anchor.addEventListener("click", handleClick);
});
