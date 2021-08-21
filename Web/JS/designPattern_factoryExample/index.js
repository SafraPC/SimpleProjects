import createCore from "./core.js";
const core = createCore();

try {
  core.start();
  core.stop();
} catch (error) {
  console.log("[index] Uncaight error!");
  console.log("error");
}
