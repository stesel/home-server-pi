declare module "shared/state" {

    export type ControlType = "mainLight"
        | "additionalLight"
        | "mainCooler";

    export type ControlObserver = (type: ControlType[]) => void;
}

declare module "shared/ws" {

    import { ControlType } from "shared/state";

    type ClientMessageType = "hsp.changeControl";

    type ServerMessageType = "hsp.controlsState"
        | "hsp.controlChanged";

    export type ChangeControlMessage = Readonly<{
        type: "hsp.changeControl";
        args: Partial<{ [K in ControlType]: boolean }>;
    }>;

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
