// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TiniArcher_Arrow from "./TiniArcher.Arrow";
import { Global } from "./TiniArcher.Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TiniArcher_GameView extends cc.Component {


    @property(cc.ProgressBar)
    pgbPowerBar: cc.ProgressBar = null;

    maxForce = 1000;  // Lực bắn tối đa
    maxAngle = Math.PI / 4;  // Góc tối đa (45 độ)
    currentForce = 0;
    currentAngle = 0;
    isCharging = false;
    chargeRate = 50; // Tốc độ tăng lực
    angleRate = 0.5; // Tốc độ tăng góc
    // powerBar = null;
    trajectoryNode = null;
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

    }


    onTouchStart(event: cc.Touch) {
        this.isCharging = true;
        this.currentForce = 0;
        this.currentAngle = 0;
        this.pgbPowerBar.progress = 0;

        this.schedule(this.increaseForceAndAngle, 0.1);
        console.log(this.isCharging)
    }

    onTouchEnd(event: cc.Touch) {
        this.isCharging = false;
        //this.shootArrow(this.currentForce, this.currentAngle);
        console.log(this.isCharging)
        this.pgbPowerBar.progress = 0;
        this.unschedule(this.increaseForceAndAngle);
        this.increaseForceAndAngle();
    }

    increaseForceAndAngle() {
        if (this.isCharging) {
            //Tăng lực và góc
            this.currentForce = Math.min(this.currentForce + this.chargeRate, this.maxForce);
            this.currentAngle = Math.min(this.currentAngle + this.angleRate, this.maxAngle);
            console.log("Luc ban ", this.currentForce)
            console.log("Goc ban ", this.currentAngle)
            // Cập nhật thanh lực dựa trên lực hiện tại
            this.pgbPowerBar.progress = this.currentForce / this.maxForce;

            console.log("progress ", this.pgbPowerBar.progress);

            // Cập nhật quỹ đạo
            //this.updateTrajectory(this.currentForce, this.currentAngle);
        }
    }

    

    start() {

    }

    // update (dt) {}
}
