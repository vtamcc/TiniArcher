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
            TiniArcher_GameView.instance.isBgMove = true;
            TiniArcher_GameView.instance.indexBg++;
            if(TiniArcher_GameView.instance.indexBg > 2) {
                TiniArcher_GameView.instance.indexBg = 0;
            }
            this.scheduleOnce(() => {
                TiniArcher_GameView.instance.spawArrow();
            },2)
            
            console.log("di chuyen ", TiniArcher_GameView.instance.isBgMove);
            TiniArcher_GameView.instance.nTrajectoryNode.removeAllChildren();
            self.node.parent = other.node;
            //TiniArcher_GameView.instance.spawArrow();
            console.log('va cham');
            let collisionPoint = self.world.aabb.center;
            TiniArcher_GameView.instance.shakeTarget(TiniArcher_GameView.instance.nStick)
            // Chuyển đổi tọa độ va chạm từ không gian thế giới sang không gian của bia
            let localPoint = other.node.convertToNodeSpaceAR(collisionPoint);
            self.node.setPosition(localPoint.x, localPoint.y);
            console.log("old ",localPoint)
            // Giữ nguyên góc của mũi tên
            self.node.angle
           

        }

    }
    // update (dt) {}
}
