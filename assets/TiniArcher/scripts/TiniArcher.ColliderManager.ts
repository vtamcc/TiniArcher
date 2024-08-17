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
            let arrowRigidBody = self.node.getComponent(cc.RigidBody);
            arrowRigidBody.gravityScale = 0;
            arrowRigidBody.linearVelocity = cc.v2(0, 0);
            arrowRigidBody.angularVelocity = 0;
            self.node.parent = other.node;
            // Lấy vị trí va chạm chính xác
            let collisionPoint = self.world.aabb.center;
    
            // Chuyển đổi tọa độ va chạm từ không gian thế giới sang không gian của bia
            let localPoint = other.node.convertToNodeSpaceAR(collisionPoint);
            self.node.setPosition(localPoint.x, localPoint.y);
           
            console.log("old ",localPoint)
            // Giữ nguyên góc của mũi tên
            self.node.angle;
    
            // Gắn mũi tên vào bia
          
            // Gắn mũi tên vào bia
           
        
    
            // Gắn mũi tên vào bia để nó không rơi ra
           
    
         
        

    
           

        }

    }
    // update (dt) {}
}
