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
    nStick: cc.Node = null;

    @property(cc.Node)
    nTrajectoryNode: cc.Node = null;

    @property(cc.Prefab)
    pfCircle: cc.Prefab = null;

    @property(cc.Prefab)
    pfArrow: cc.Prefab = null;

    @property(cc.Node)
    listStatus: cc.Node[] = [];
    maxForce = 1000;
    maxAngle = 45;
    startForce = 0;
    startAngle = 0;
    currentForce = 0;
    currentAngle = 0;
    isCharging = false;
    isBgMove = false;
    isStop = false
    trajectoryPoints = [];  // Lưu các điểm quỹ đạo
    isArrowFlying = false;  // Đánh dấu khi mũi tên đang bay
    trajectoryIndex = 0;  // Chỉ số hiện tại trong quỹ đạo
    currentArrow = null;
    indexBg = 0;
    isTarget = false;
    canClick = true;


    onLoad() {
        TiniArcher_GameView.instance = this;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.spawArrow();
    }

    onTouchStart(event: cc.Touch) {
        this.isCharging = true;
        console.log("Bắt đầu kéo cung");
    }


    onTouchEnd(event: cc.Touch) {
        this.isCharging = false;
        this.canClick = false
        this.nTrajectoryNode.removeAllChildren();
        this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
        this.updatePowerBar();
        this.trajectoryPoints = this.updateTrajectory(this.currentForce, this.currentAngle);
        this.nTrajectoryNode.removeAllChildren();
        this.shootArrow();
        //this.shootArrow(this.currentForce,this.currentAngle);

    }
   

    spawArrow() {
        if (this.currentArrow) {
            this.currentArrow.destroy();
        }
        this.currentArrow = cc.instantiate(this.pfArrow);
        this.nArrow.addChild(this.currentArrow); 
    }

    shootArrow() {
        if (this.currentArrow) {
            this.isArrowFlying = true;
            this.trajectoryIndex = 0;
        }
    }


    trajectoryCircle(points) {
        this.nTrajectoryNode.removeAllChildren();
        for(let i = 0; i < points.length; i++) {
            let cricle = cc.instantiate(this.pfCircle)
            cricle.setPosition(points[i]);
            if(i > 20) {
                cricle.opacity = 0; 
            }
            this.nTrajectoryNode.addChild(cricle);
        }
    }

    updateTrajectory(force, angle) {
        let points = [];
        let startPosition = this.currentArrow.position;
        for (let i = 0; i < 50; i++) {
            let t = i * 0.03;
            let x = startPosition.x + force * Math.cos(angle * Math.PI / 180) * t;
            let y = startPosition.y + force * Math.sin(angle * Math.PI / 180) * t - 0.5 * 980 * t * t;
            points.push(cc.v2(x, y));
        }
        return points;
    }


    updateAngleArrow(angle) {
        this.currentArrow.angle = angle;
    }

    updatePowerBar() {
        this.pgbPowerBar.progress = this.currentForce / this.maxForce;
    }

    updateArrowPos() {
        let newY = this.startAngle + (this.currentAngle / this.maxAngle) * 100
        //let newX = this.startAngle - (this.currentAngle / this.maxAngle) * 5;
        this.currentArrow.setPosition(this.nArrow.x, newY);
    }
    resetArrowPosition() {
        this.currentArrow.setPosition(this.nArrow.x, this.currentAngle);
    }

    resetBg() {
        this.isBgMove = true;
        // console.log("di chuyen ", this.isBgMove);
        // this.indexBg++;
        // if(this.indexBg > 2) {
        //     this.indexBg = 0;
        // }
       
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        this.scheduleOnce(() => {
            this.isBgMove = false;
            this.isStop = false;
            this.spawArrow();
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
            this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        },3.5)
    }

    updateStatus() {
        if(this.isTarget) {
            this.listStatus[1].active = true;
            this.scheduleOnce(() => {
                this.listStatus[1].active = false;
            },0.6)
            this.isTarget = false;
        }else{
            console.log("vao else");
            this.listStatus[0].active = true;
            this.scheduleOnce(() => {
                this.listStatus[0].active = false;
            },0.6)
            //this.isTarget = false;
        }

    }

    shakeTarget(target: cc.Node) {
        let shakeDuration = 0.25; // Thời gian của mỗi bước rung
        let angles = [-2, 2, -1.5, 1.5, -1, 1]; // Các giá trị góc rung giảm dần

    let tween = cc.tween(target);

    for (let i = 0; i < angles.length; i++) {
        tween = tween.to(shakeDuration, { angle: angles[i] });
    }
        tween.to(shakeDuration, { angle: 0 });
        tween.start();
    }

    update(dt) {
        if (this.isCharging) {
            this.currentForce = Math.min(this.currentForce + 1000 * dt, this.maxForce);
            this.currentAngle = Math.min(this.currentAngle + 45 * dt, this.maxAngle);
            this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
            this.updateAngleArrow(this.currentAngle)
            this.updateArrowPos();
        } else if (this.isArrowFlying) {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
            if (this.trajectoryIndex < this.trajectoryPoints.length - 1) {
                let currentPoint = this.trajectoryPoints[this.trajectoryIndex];
                let nextPoint = this.trajectoryPoints[this.trajectoryIndex + 1];
                this.currentArrow.setPosition(nextPoint);
                let direction = nextPoint.sub(currentPoint);
                let angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
                this.currentArrow.angle = angle;
                this.trajectoryIndex++;
               
            } else {
                this.isArrowFlying = false;
                this.resetBg();
                this.canClick = true;
                this.updateStatus();
            }
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
            this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        } 
        else {
            this.currentForce = Math.max(this.currentForce - 1000 * dt, this.startForce);
            this.currentAngle = Math.max(this.currentAngle - 45 * dt, this.startAngle);
            
        }
        this.updatePowerBar();
    }


}