import "./styles.css";
import "./home.js";
document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;
//const domain = (window.location.hostname = "webflow.io");

const h = document.createElement("script");
h.src = "https://supreme-elite-chosen-ones.webflow.io/";
document.head.appendChild(h);
