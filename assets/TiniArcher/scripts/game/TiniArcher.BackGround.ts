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

    isStop: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.ramdomPosY();
    }

    start () {

    }

    ramdomPosY() {
        let random = Math.floor(Math.random() * 8);
        let randomValue = TiniArcher_GameView.instance.ramdomPosY[random];
        this.nBullseye.setPosition(0,randomValue);
        console.log("random", randomValue);
    }

    update (dt) {
        // if(!TiniArcher_GameView.instance.isBgMove) return;
        if (TiniArcher_GameView.instance.isStop) {
            return
        }
        if (TiniArcher_GameView.instance.isBgMove) {
            this.node.x -= 5;
            if (this.node.x == -960) {
                TiniArcher_GameView.instance.isStop = true;
                this.resetPos()
                this.ramdomPosY();
            }
        }

        // if(this.node.x <= -1920 ) {
        //     this.resetPos();
        // }

        // console.log("idBg ", this.idBg);
        // console.log("idBg2 ", TiniArcher_GameView.instance.indexBg);
        // if(this.idBg == TiniArcher_GameView.instance.indexBg) {
        //     if(this.node.x <= 0) {
        //         this.node.x = 0;
        //         TiniArcher_GameView.instance.isBgMove = false;
        //     }
        // }
        
    }

    resetPos() {
        this.node.x = 1920;
        // console.log("Nền đã đặt lại vị trí:",this.idBg, this.node.x);
    }
}
