declare module "shared/state" {

    export type ControlType = "mainLight"
        | "additionalLight"
        | "mainCooler";

}

declare module "shared/ws" {

    import { ControlType } from "shared/state";

    type ClientMessageType = "hsp.changeState";

    type ServerMessageType = "hsp.controlsState"
        | "hsp.controlChanged";

    type ChangeControlMessage = {
        args: Partial<{ [K in ControlType]: boolean }>;
    };

    export type ClientMessage = ChangeControlMessage;

    export type ControlsStateMessage = Readonly<{
        type: "hsp.controlsState";
        args: {[K in ControlType]: boolean};
    }>;

    export type ControlChangedMessage = Readonly<{
        type: "hsp.controlChanged";
        args: Partial<{ [K in ControlType]: boolean }>;
    }>;

    export type ServerMessage = ControlsStateMessage
        | ControlChangedMessage;

}
