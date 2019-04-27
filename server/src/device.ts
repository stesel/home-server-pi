import { Gpio } from "onoff";
import { platform } from "os";

export const registerDevice = () => {
    if (platform() !== "linux") {
        console.warn("This is not PI device");
        return;
    }
    const cooler = new Gpio(4, "out");

    cooler.read()
        .then(() => cooler.writeSync(1));

    process.on("SIGHUP", () => {
        cooler.writeSync(0);
        cooler.unexport();
    });
};
