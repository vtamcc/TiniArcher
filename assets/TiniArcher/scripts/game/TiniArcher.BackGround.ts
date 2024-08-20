// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TiniArcher_GameView from "./TiniArcher.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TiniArcher_BackGround extends cc.Component {

    @property
    idBg = 0;
    @property(cc.Node)
    nBullseye: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        if(!TiniArcher_GameView.instance.isBgMove) return;
        if(this.node.x <= -1960 ) {
            this.resetPos();
        }

        if(this.idBg == TiniArcher_GameView.instance.indexBg) {
            console.log("idBg ", this.idBg);
            if(this.node.x <= 0) {
                this.node.x = 0;
                TiniArcher_GameView.instance.isBgMove = false;
            }
        }
        this.node.x -= 5;
    }

    resetPos() {
        this.node.x = 980;
        console.log("Nền đã đặt lại vị trí:",this.idBg, this.node.x);
    }
}
