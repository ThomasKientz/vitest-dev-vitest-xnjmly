import { fetchFromProxy, fetchFromUrl } from "./api";

const res = await fetchFromUrl();
const resProxy = await fetchFromProxy();

document.querySelector("#url").innerHTML = JSON.stringify(res);
document.querySelector("#proxy").innerHTML = JSON.stringify(resProxy);
