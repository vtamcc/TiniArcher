// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html



const { ccclass, property } = cc._decorator;

@ccclass
export default class TiniArcher_GameView extends cc.Component {
    public static instance: TiniArcher_GameView = null;
    @property(cc.ProgressBar)
    pgbPowerBar: cc.ProgressBar = null;

    @property(cc.Node)
    nArrow: cc.Node = null;

    @property(cc.Node)
    nbullseye: cc.Node = null;
    maxForce = 1000;
    maxAngle = Math.PI / 4;
    currentForce = 0;
    currentAngle = 0;
    isCharging = false;
    chargeRate = 100;
    angleRate = 0.05;

    onLoad() {
        TiniArcher_GameView.instance = this;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit;
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
        console.log("toc do ban ", this.currentForce);
        this.pgbPowerBar.progress = 0;
        this.nArrow.angle = 0;
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
            let velocity = cc.v2(Math.cos(angle) * force * 0.8, Math.sin(angle) * force);
            //console.log("Calculated velocity:", velocity);
            rigidBody.linearVelocity = velocity;
            rigidBody.gravityScale = 0.5;
            console.log("Calculated velocity:", velocity);
            console.log("Arrow velocity after shoot:", rigidBody.linearVelocity);
        } else {
            console.error("nArrow does not have a RigidBody component!");
        }


    }

    // stopArrow() {
    //     let arrow = this.nArrow.getComponent(cc.RigidBody)
    //     arrow.linearVelocity = cc.v2(0,0);
    //     arrow.gravityScale = 0;
    //     arrow.angularVelocity = 0;
    //     this.nArrow.parent = this.nbullseye;
    //     // this.nArrow.setPosition(this.nbullseye.x + 10, this.nbullseye.y - 100)
      
       
    // }
    update(dt) {
        let rigidBody = this.nArrow.getComponent(cc.RigidBody);
        if (rigidBody) {
            const velocity = rigidBody.linearVelocity;
    
            // Kiểm tra nếu mũi tên đang bay
            if (velocity.mag() > 0) {
                // Tính toán góc mới của mũi tên dựa trên vận tốc
                const angle = Math.atan2(velocity.y, velocity.x);
    
                // Chuyển góc từ radian sang độ và đặt nó cho mũi tên
                this.nArrow.angle = cc.misc.radiansToDegrees(angle);
            }
        }
    }
}