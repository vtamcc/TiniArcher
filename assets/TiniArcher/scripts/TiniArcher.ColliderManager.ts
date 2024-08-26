// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TiniArcher_GameView from "./game/TiniArcher.GameView";
import { Global } from "./TiniArcher.Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TiniArcher_Collider extends cc.Component {



    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;  
    }

    start() {

    }

    onCollisionEnter(other, self) {
        if (other.tag == 1) {
            TiniArcher_GameView.instance.isArrowFlying = false;
            TiniArcher_GameView.instance.isTarget = true;
            TiniArcher_GameView.instance.nTrajectoryNode.removeAllChildren();
            self.node.parent = other.node;
            let collisionPoint = self.world.aabb.center;
            TiniArcher_GameView.instance.shakeTarget(TiniArcher_GameView.instance.nStick)
            TiniArcher_GameView.instance.updateStatus();
            let localPoint = other.node.convertToNodeSpaceAR(collisionPoint);
            self.node.setPosition(localPoint.x, localPoint.y);
            self.node.angle
            TiniArcher_GameView.instance.resetBg();
           console.log( 'background di chuyen',TiniArcher_GameView.instance.isBgMove)

        }

        if(other.tag == 2) {
            TiniArcher_GameView.instance.isArrowFlying = false;
            TiniArcher_GameView.instance.isMiss = true;
            self.node.parent = other.node;
            let collisionPoint = self.world.aabb.center;
            let localPoint = other.node.convertToNodeSpaceAR(collisionPoint);
            self.node.setPosition(localPoint.x, localPoint.y);
            self.node.angle
            TiniArcher_GameView.instance.resetBg();
            TiniArcher_GameView.instance.updateStatus();
            console.log("ban vao cot ");
        }

    }
    // update (dt) {}
}
