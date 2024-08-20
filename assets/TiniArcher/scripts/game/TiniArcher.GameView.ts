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

    maxForce = 1000;
    maxAngle = 45;
    startForce = 0;
    startAngle = 0;
    currentForce = 0;
    currentAngle = 0;
    isCharging = false;
    isBgMove = false;
    trajectoryPoints = [];  // Lưu các điểm quỹ đạo
    isArrowFlying = false;  // Đánh dấu khi mũi tên đang bay
    trajectoryIndex = 0;  // Chỉ số hiện tại trong quỹ đạo

    indexBg = 0;


    onLoad() {
        TiniArcher_GameView.instance = this;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(event: cc.Touch) {
        this.isCharging = true;
    }


    onTouchEnd(event: cc.Touch) {
        this.isCharging = false;
        this.nTrajectoryNode.removeAllChildren();
        this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
        this.updatePowerBar();
        this.trajectoryPoints = this.updateTrajectory(this.currentForce, this.currentAngle);
        this.shootArrow();
        this.nTrajectoryNode.removeAllChildren();
        //this.shootArrow(this.currentForce,this.currentAngle);

    }

    shootArrow() {
        this.isArrowFlying = true;
        this.trajectoryIndex = 0;
    }


    trajectoryCircle(points) {
        this.nTrajectoryNode.removeAllChildren();
        // points.forEach(e => {
        //     let cricle = cc.instantiate(this.pfCircle)
        //     cricle.setPosition(e);
        //     this.nTrajectoryNode.addChild(cricle);
        // })

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
        let startPosition = this.nArrow.position;
        for (let i = 0; i < 50; i++) {
            let t = i * 0.03;
            let x = startPosition.x + force * Math.cos(angle * Math.PI / 180) * t;
            let y = startPosition.y + force * Math.sin(angle * Math.PI / 180) * t - 0.5 * 980 * t * t;
            points.push(cc.v2(x, y));
        }
        return points;
    }


    updateAngleArrow(angle) {
        this.nArrow.angle = angle;
    }

    updatePowerBar() {
        this.pgbPowerBar.progress = this.currentForce / this.maxForce;
    }

    updateArrowPos() {
        let newY = this.startAngle + (this.currentAngle / this.maxAngle) * 100
        //let newX = this.startAngle - (this.currentAngle / this.maxAngle) * 5;
        this.nArrow.setPosition(this.nArrow.x, newY);
    }
    resetArrowPosition() {
        this.nArrow.setPosition(this.nArrow.x, this.currentAngle);
    }

    resetBg() {
        this.isBgMove = true;
        this.indexBg++;
        this.nArrow.setPosition(66,0);
        if(this.indexBg > 2) {
            this.indexBg = 0;
        }

    }
    shakeTarget(target: cc.Node) {
        let shakeDuration = 0.25; // Thời gian của mỗi bước rung
        let angles = [-2, 2, -1.5, 1.5, -1, 1]; // Các giá trị góc rung giảm dần

    let tween = cc.tween(target);

    for (let i = 0; i < angles.length; i++) {
        tween = tween.to(shakeDuration, { angle: angles[i] });
    }

    
        // Quay trở lại góc 0
        tween.to(shakeDuration, { angle: 0 });
    
        // Chạy hiệu ứng
        tween.start();
    }

    update(dt) {
        if (this.isCharging) {
            this.currentForce = Math.min(this.currentForce + 1000 * dt, this.maxForce);

            this.currentAngle = Math.min(this.currentAngle + 45 * dt, this.maxAngle);
            console.log("Goc ban ", this.currentAngle);
            this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
            this.updateAngleArrow(this.currentAngle)
            this.updateArrowPos();
        } else if (this.isArrowFlying) {
            if (this.trajectoryIndex < this.trajectoryPoints.length - 1) {
                let currentPoint = this.trajectoryPoints[this.trajectoryIndex];
                let nextPoint = this.trajectoryPoints[this.trajectoryIndex + 1];
                //this.isCharging = false;
                this.nArrow.setPosition(nextPoint);

                let direction = nextPoint.sub(currentPoint);
                let angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
                this.nArrow.angle = angle;
                this.trajectoryIndex++;
            } else {
                this.isArrowFlying = false;
                this.resetBg();
            }
        } 
        else {
            this.currentForce = Math.max(this.currentForce - 1000 * dt, this.startForce);
            this.currentAngle = Math.max(this.currentAngle - 45 * dt, this.startAngle);
            

        }
        this.updatePowerBar();
    }


}