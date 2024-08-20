// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TiniArcher_GameView from "./game/TiniArcher.GameView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TiniArcher_Collider extends cc.Component {



    onLoad() {
        cc.director.getCollisionManager().enabled = true;
    }

    start() {

    }

    onCollisionEnter(other, self) {
        if (other.tag == 1) {
            TiniArcher_GameView.instance.isArrowFlying = false;
            
            TiniArcher_GameView.instance.nTrajectoryNode.removeAllChildren();
            self.node.parent = other.node;
            console.log('va cham');
            let collisionPoint = self.world.aabb.center;
            TiniArcher_GameView.instance.shakeTarget(TiniArcher_GameView.instance.nStick)
            let localPoint = other.node.convertToNodeSpaceAR(collisionPoint);
            self.node.setPosition(localPoint.x, localPoint.y);
            console.log("old ",localPoint)
            self.node.angle
           TiniArcher_GameView.instance.resetBg();

        }

    }
    // update (dt) {}
}
