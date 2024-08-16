// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html



const { ccclass, property } = cc._decorator;

@ccclass
export default class TiniArcher_GameView extends cc.Component {

    @property(cc.ProgressBar)
    pgbPowerBar: cc.ProgressBar = null;

    @property(cc.Node)
    nArrow: cc.Node = null;

    maxForce = 1000;
    maxAngle = Math.PI / 4;
    currentForce = 0;
    currentAngle = 0;
    isCharging = false;
    chargeRate = 50;
    angleRate = 0.5;

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
    }

    onTouchEnd(event: cc.Touch) {
        this.isCharging = false;
        this.shootArrow(this.currentForce, this.currentAngle);
        this.pgbPowerBar.progress = 0;
        this.unschedule(this.increaseForceAndAngle);
    }

    increaseForceAndAngle() {
        if (this.isCharging) {
            this.currentForce = Math.min(this.currentForce + this.chargeRate, this.maxForce);
            this.currentAngle = Math.min(this.currentAngle + this.angleRate, this.maxAngle);

            this.pgbPowerBar.progress = this.currentForce / this.maxForce;

            this.nArrow.angle = +cc.misc.radiansToDegrees(this.currentAngle);
        }
    }

    shootArrow(force: number, angle: number) {
        let rigidBody = this.nArrow.getComponent(cc.RigidBody);
        if (rigidBody) {
            const velocity = cc.v2(Math.cos(angle) * force * 10, Math.sin(angle) * force * 10);
            //console.log("Calculated velocity:", velocity);
            rigidBody.linearVelocity = velocity;
            console.log("Arrow velocity after shoot:", rigidBody.linearVelocity);
        } else {
            console.error("nArrow does not have a RigidBody component!");
        }
        

    }
}