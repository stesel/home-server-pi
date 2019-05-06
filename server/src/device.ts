import { Gpio, BinaryValue } from "onoff";
import { platform } from "os";
import { autorun } from "mobx";
import { controlsState } from "./state/controlsState";
import { ControlType } from "shared/state";

const booleanToBinary = (value: boolean): BinaryValue => {
   return value ? 1 : 0;
};

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

    autorun(() => {
        const broadcastKeys = Array.from(
            controlsState.keys(),
        ).filter(key => {
            return controlsState.get(key)!.broadcast;
        });

        broadcastKeys.forEach((key: ControlType) => {
            switch (key) {
                case "mainCooler":
                    cooler.writeSync(booleanToBinary(controlsState.get(key)!.value));
            }
        });

    });
};
