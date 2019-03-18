"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = require("./env");
const app = express_1.default();
app.use(express_1.default.static('../client/build'));
app.set("port", process.env.PORT || 3000);
app.get("/env", env_1.env);
app.listen(app.get("port"), () => {
    console.log("App is running at http://localhost in %s mode", app.get("port"), app.get("env"));
});
//# sourceMappingURL=index.js.map