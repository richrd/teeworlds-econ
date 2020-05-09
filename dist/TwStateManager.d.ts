import { EventEmitter2 } from "eventemitter2";
import { TwEconClient } from "./TwEconClient";
import { TwServerState } from "./TwServerState";
import { TwGameState } from "./TwGameState";
import { TwChatMessage } from "./TwChatMessage";
import { TwConsoleMessage } from "./TwConsoleMessage";
import { TwClient } from "./TwClient";
import { TwEconEvent } from "./TwEconEvent";
export declare class TwStateManager extends EventEmitter2 {
    econClient: TwEconClient;
    serverState: TwServerState;
    gameState: TwGameState;
    chatMessages: TwChatMessage[];
    consoleMessages: TwConsoleMessage[];
    constructor(econClient: TwEconClient);
    getOrCreateClient(id: number): TwClient;
    onAuthenticated(): void;
    onConsoleMessage(consoleMessage: any): void;
    onChatMessage(type: string, e: TwEconEvent): void;
    onGameStart(): void;
    onClientJoin(e: TwEconEvent): void;
    onClientInfo(e: TwEconEvent): void;
    onClientLeave(e: TwEconEvent): void;
    onTeamJoin(e: TwEconEvent): void;
    onKill(e: TwEconEvent): void;
    onFlagGrab(e: TwEconEvent): void;
    onFlagReturn(e: TwEconEvent): void;
    onFlagCapture(e: TwEconEvent): void;
    bindEvents(): void;
    loadSettings(): Promise<void>;
    gameStateChanged(): void;
    serverStateChanged(): void;
}