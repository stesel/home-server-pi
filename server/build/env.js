"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = (request, response) => {
    response.send(response.app.get("env"));
};
//# sourceMappingURL=env.js.map