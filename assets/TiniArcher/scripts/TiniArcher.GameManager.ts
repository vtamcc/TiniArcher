// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TiniArcher_GameView from "./game/TiniArcher.GameView";
import { Global } from "./game/TiniArcher.Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TiniArcher_GameManager extends cc.Component {

    
    @property(cc.Prefab)
    pfGameView: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    start () {

    }

    clickPlay() {
        let game =  cc.instantiate(this.pfGameView).getComponent(TiniArcher_GameView)
        this.node.addChild(game.node);
    }
    // update (dt) {}
}
