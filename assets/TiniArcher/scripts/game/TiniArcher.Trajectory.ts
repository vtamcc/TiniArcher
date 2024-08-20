// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TiniArcher_Trajectory from "./TiniArcher.Trajectory";



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

    @property(cc.Node)
    nTrajectoryNode: cc.Node = null;

    @property(cc.Prefab)
    pfCircle: cc.Prefab = null;

    maxForce = 1000;
    maxAngle = 45;
    startForce = 0;
    startAngle = 0;
    gravity = -9.8;
    currentForce = 100;
    currentAngle = 0;
    isCharging = false;


    onLoad() {
        TiniArcher_GameView.instance = this;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(event: cc.Touch) {
        this.isCharging = true;
        this.currentForce = 100;
        this.currentAngle = 0;
        this.pgbPowerBar.progress = 0;
        this.trajectory(this.updateTrajcetor(this.forceVec(this.currentAngle,this.currentAngle)));
        this.schedule(this.increaseForceAndAngle, 0.05);
        
    }

    onTouchEnd(event: cc.Touch) {
        this.isCharging = false;
        console.log("toc do ban ", this.currentForce);
        this.pgbPowerBar.progress = 0;
        this.nArrow.angle = 0;
        this.unschedule(this.increaseForceAndAngle);
       
        
    }

    increaseForceAndAngle() {
        if (this.isCharging) {
            this.currentForce = Math.min(this.currentForce + 50, this.maxForce);
            this.currentAngle = Math.min(this.currentAngle + 1, this.maxAngle);
            this.pgbPowerBar.progress = this.currentForce/this.maxForce;
            console.log("this prg ",this.pgbPowerBar.progress);
        }
    }

    trajectory(points) {
        let parentNode = this.nTrajectoryNode;
        parentNode.removeAllChildren();
        points.forEach(point => {
            let cricle = cc.instantiate(this.pfCircle)
            cricle.setPosition(point);
            parentNode.addChild(cricle);
        });
    }    

    updateTrajcetor(force: cc.Vec2) {
        let points = [];
        let initialPosition = this.nTrajectoryNode.position;

        for(let i = 0; i < 50; i++) {
            let t = i * 0.1;
            let x = initialPosition.x * t + force.x;
            let y = initialPosition.y * t + 0.5 * -9.8 * t * t + force.y;
            points.push(cc.v2(x, y))
        }
        return points;
    }

    forceVec(force, angle) {
        let v = new cc.Vec2(force * Math.cos(angle), force * Math.sin(angle));
        return v;
    }
    // }

    // trajectoryCricle(points) {
    //     let parentNode = this.nTrajectoryNode;
    //     parentNode.removeAllChildren();
    //     points.forEach(point => {
    //         let cricle = cc.instantiate(this.pfCircle)
    //         cricle.setPosition(point);
    //         parentNode.addChild(cricle);
    //     });
    // }
    // }
    update(dt) {
        
    }
}