"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../env");
describe("/env", () => {
    it("should return env property", () => {
        const app = {
            get: (prop) => {
                if (prop === "env") {
                    return "test-env";
                }
                else {
                    return "error";
                }
            },
        };
        const response = {
            send: jest.fn(),
            app: app,
        };
        env_1.env({}, response, jest.fn());
        expect(response.send).toHaveBeenCalledWith(app.get("env"));
    });
});
//# sourceMappingURL=env.spec.js.map