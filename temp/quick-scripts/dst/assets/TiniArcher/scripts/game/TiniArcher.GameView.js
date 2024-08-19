
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TiniArcher/scripts/game/TiniArcher.GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f084OWhBxLtKCNUIB3SCIN', 'TiniArcher.GameView');
// TiniArcher/scripts/game/TiniArcher.GameView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TiniArcher_GameView = /** @class */ (function (_super) {
    __extends(TiniArcher_GameView, _super);
    function TiniArcher_GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pgbPowerBar = null;
        _this.nArrow = null;
        _this.nbullseye = null;
        _this.nTrajectoryNode = null;
        _this.pfCircle = null;
        _this.maxForce = 1000;
        _this.maxAngle = 45;
        _this.startForce = 0;
        _this.startAngle = 0;
        _this.currentForce = 0;
        _this.currentAngle = 0;
        _this.isCharging = false;
        _this.trajectoryPoints = []; // Lưu các điểm quỹ đạo
        _this.isArrowFlying = false; // Đánh dấu khi mũi tên đang bay
        _this.trajectoryIndex = 0; // Chỉ số hiện tại trong quỹ đạo
        return _this;
    }
    TiniArcher_GameView_1 = TiniArcher_GameView;
    TiniArcher_GameView.prototype.onLoad = function () {
        TiniArcher_GameView_1.instance = this;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    TiniArcher_GameView.prototype.onTouchStart = function (event) {
        this.isCharging = true;
    };
    TiniArcher_GameView.prototype.onTouchEnd = function (event) {
        this.isCharging = false;
        this.nTrajectoryNode.removeAllChildren();
        this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
        this.updatePowerBar();
        this.trajectoryPoints = this.updateTrajectory(this.currentForce, this.currentAngle);
        this.shootArrow();
        //this.shootArrow(this.currentForce,this.currentAngle);
    };
    TiniArcher_GameView.prototype.shootArrow = function () {
        this.isArrowFlying = true;
        this.trajectoryIndex = 0;
    };
    TiniArcher_GameView.prototype.trajectoryCircle = function (points) {
        var _this = this;
        this.nTrajectoryNode.removeAllChildren();
        points.forEach(function (e) {
            var cricle = cc.instantiate(_this.pfCircle);
            cricle.setPosition(e);
            _this.nTrajectoryNode.addChild(cricle);
        });
    };
    TiniArcher_GameView.prototype.updateTrajectory = function (force, angle) {
        var points = [];
        var startPosition = this.nArrow.position;
        for (var i = 0; i < 20; i++) {
            var t = i * 0.03;
            var x = startPosition.x + force * Math.cos(angle * Math.PI / 180) * t;
            var y = startPosition.y + force * Math.sin(angle * Math.PI / 180) * t - 0.5 * 980 * t * t;
            points.push(cc.v2(x, y));
        }
        return points;
    };
    TiniArcher_GameView.prototype.updateAngleArrow = function (angle) {
        this.nArrow.angle = angle;
    };
    TiniArcher_GameView.prototype.updatePowerBar = function () {
        this.pgbPowerBar.progress = this.currentForce / this.maxForce;
    };
    TiniArcher_GameView.prototype.updateArrowPos = function () {
        var newY = this.startAngle + (this.currentAngle / this.maxAngle) * 100;
        //let newX = this.startAngle - (this.currentAngle / this.maxAngle) * 5;
        this.nArrow.setPosition(this.nArrow.x, newY);
    };
    TiniArcher_GameView.prototype.resetArrowPosition = function () {
        this.nArrow.setPosition(this.nArrow.x, this.currentAngle);
    };
    TiniArcher_GameView.prototype.update = function (dt) {
        if (this.isCharging) {
            this.currentForce = Math.min(this.currentForce + 1000 * dt, this.maxForce);
            this.currentAngle = Math.min(this.currentAngle + 45 * dt, this.maxAngle);
            console.log("Goc ban ", this.currentAngle);
            this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
            this.updateAngleArrow(this.currentAngle);
            this.updateArrowPos();
        }
        else if (this.isArrowFlying) {
            if (this.trajectoryIndex < this.trajectoryPoints.length - 1) {
                var currentPoint = this.trajectoryPoints[this.trajectoryIndex];
                var nextPoint = this.trajectoryPoints[this.trajectoryIndex + 1];
                this.nArrow.setPosition(nextPoint);
                var direction = nextPoint.sub(currentPoint);
                var angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
                this.nArrow.angle = angle;
                this.trajectoryIndex++;
            }
            else {
                var rigidBody = this.nArrow.getComponent(cc.RigidBody);
                rigidBody.type = cc.RigidBodyType.Dynamic;
                //this.isArrowFlying = false;
            }
        }
        else if (this.nArrow.getComponent(cc.RigidBody).type === cc.RigidBodyType.Dynamic) {
            // Cập nhật góc mũi tên dựa trên hướng của vận tốc
            var velocity = this.nArrow.getComponent(cc.RigidBody).linearVelocity;
            if (velocity.mag() > 0) {
                var angle = Math.atan2(velocity.y, velocity.x) * 180 / Math.PI;
                this.nArrow.angle = angle;
            }
        }
        else {
            this.currentForce = Math.max(this.currentForce - 1000 * dt, this.startForce);
            this.currentAngle = Math.max(this.currentAngle - 45 * dt, this.startAngle);
            this.updateAngleArrow(this.currentAngle);
        }
        this.updatePowerBar();
    };
    var TiniArcher_GameView_1;
    TiniArcher_GameView.instance = null;
    __decorate([
        property(cc.ProgressBar)
    ], TiniArcher_GameView.prototype, "pgbPowerBar", void 0);
    __decorate([
        property(cc.Node)
    ], TiniArcher_GameView.prototype, "nArrow", void 0);
    __decorate([
        property(cc.Node)
    ], TiniArcher_GameView.prototype, "nbullseye", void 0);
    __decorate([
        property(cc.Node)
    ], TiniArcher_GameView.prototype, "nTrajectoryNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], TiniArcher_GameView.prototype, "pfCircle", void 0);
    TiniArcher_GameView = TiniArcher_GameView_1 = __decorate([
        ccclass
    ], TiniArcher_GameView);
    return TiniArcher_GameView;
}(cc.Component));
exports.default = TiniArcher_GameView;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcZ2FtZVxcVGluaUFyY2hlci5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQStJQztRQTVJRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLHNCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFFLHVCQUF1QjtRQUMvQyxtQkFBYSxHQUFHLEtBQUssQ0FBQyxDQUFFLGdDQUFnQztRQUN4RCxxQkFBZSxHQUFHLENBQUMsQ0FBQyxDQUFFLGdDQUFnQzs7SUFxSDFELENBQUM7NEJBL0lvQixtQkFBbUI7SUE4QnBDLG9DQUFNLEdBQU47UUFDSSxxQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFB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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnRUFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNPO0lBZlYsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0ErSXZDO0lBQUQsMEJBQUM7Q0EvSUQsQUErSUMsQ0EvSWdELEVBQUUsQ0FBQyxTQUFTLEdBK0k1RDtrQkEvSW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbmlBcmNoZXJfR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogVGluaUFyY2hlcl9HYW1lVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwZ2JQb3dlckJhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkFycm93OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5idWxsc2V5ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuVHJhamVjdG9yeU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZkNpcmNsZTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBtYXhGb3JjZSA9IDEwMDA7XHJcbiAgICBtYXhBbmdsZSA9IDQ1O1xyXG4gICAgc3RhcnRGb3JjZSA9IDA7XHJcbiAgICBzdGFydEFuZ2xlID0gMDtcclxuICAgIGN1cnJlbnRGb3JjZSA9IDA7XHJcbiAgICBjdXJyZW50QW5nbGUgPSAwO1xyXG4gICAgaXNDaGFyZ2luZyA9IGZhbHNlO1xyXG4gICAgdHJhamVjdG9yeVBvaW50cyA9IFtdOyAgLy8gTMawdSBjw6FjIMSRaeG7g20gcXXhu7kgxJHhuqFvXHJcbiAgICBpc0Fycm93Rmx5aW5nID0gZmFsc2U7ICAvLyDEkMOhbmggZOG6pXUga2hpIG3FqWkgdMOqbiDEkWFuZyBiYXlcclxuICAgIHRyYWplY3RvcnlJbmRleCA9IDA7ICAvLyBDaOG7iSBz4buRIGhp4buHbiB04bqhaSB0cm9uZyBxdeG7uSDEkeG6oW9cclxuXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5Ub3VjaCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NoYXJnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uVHJhamVjdG9yeU5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTsgXHJcbiAgICAgICAgdGhpcy50cmFqZWN0b3J5Q2lyY2xlKHRoaXMudXBkYXRlVHJhamVjdG9yeSh0aGlzLmN1cnJlbnRGb3JjZSwgdGhpcy5jdXJyZW50QW5nbGUpKTsgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlUG93ZXJCYXIoKTsgICBcclxuICAgICAgICB0aGlzLnRyYWplY3RvcnlQb2ludHMgPSB0aGlzLnVwZGF0ZVRyYWplY3RvcnkodGhpcy5jdXJyZW50Rm9yY2UsIHRoaXMuY3VycmVudEFuZ2xlKTtcclxuICAgICAgICB0aGlzLnNob290QXJyb3coKTtcclxuICAgICAgICAvL3RoaXMuc2hvb3RBcnJvdyh0aGlzLmN1cnJlbnRGb3JjZSx0aGlzLmN1cnJlbnRBbmdsZSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzaG9vdEFycm93KCkge1xyXG4gICAgICAgIHRoaXMuaXNBcnJvd0ZseWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50cmFqZWN0b3J5SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0cmFqZWN0b3J5Q2lyY2xlKHBvaW50cykge1xyXG4gICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgcG9pbnRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjcmljbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmQ2lyY2xlKVxyXG4gICAgICAgICAgICBjcmljbGUuc2V0UG9zaXRpb24oZSk7XHJcbiAgICAgICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLmFkZENoaWxkKGNyaWNsZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlVHJhamVjdG9yeShmb3JjZSwgYW5nbGUpIHtcclxuICAgICAgICBsZXQgcG9pbnRzID0gW107XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zaXRpb24gPSB0aGlzLm5BcnJvdy5wb3NpdGlvbjsgXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHQgPSBpICogMC4wMztcclxuICAgICAgICAgICAgbGV0IHggPSBzdGFydFBvc2l0aW9uLnggKyBmb3JjZSAqIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiB0O1xyXG4gICAgICAgICAgICBsZXQgeSA9ICBzdGFydFBvc2l0aW9uLnkgKyBmb3JjZSAqIE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiB0IC0gMC41ICogOTgwICogdCAqIHQ7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGNjLnYyKHgseSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9pbnRzO1xyXG4gICAgfVxyXG5cclxuICBcclxuICAgIHVwZGF0ZUFuZ2xlQXJyb3coYW5nbGUpIHtcclxuICAgICAgICB0aGlzLm5BcnJvdy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBvd2VyQmFyKCkge1xyXG4gICAgICAgIHRoaXMucGdiUG93ZXJCYXIucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRGb3JjZS90aGlzLm1heEZvcmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFycm93UG9zKCkge1xyXG4gICAgICAgIGxldCBuZXdZID0gdGhpcy5zdGFydEFuZ2xlICsgKHRoaXMuY3VycmVudEFuZ2xlIC8gdGhpcy5tYXhBbmdsZSkgKiAxMDBcclxuICAgICAgICAvL2xldCBuZXdYID0gdGhpcy5zdGFydEFuZ2xlIC0gKHRoaXMuY3VycmVudEFuZ2xlIC8gdGhpcy5tYXhBbmdsZSkgKiA1O1xyXG4gICAgICAgIHRoaXMubkFycm93LnNldFBvc2l0aW9uKHRoaXMubkFycm93LngsIG5ld1kpO1xyXG4gICAgfVxyXG4gICAgcmVzZXRBcnJvd1Bvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubkFycm93LnNldFBvc2l0aW9uKHRoaXMubkFycm93LngsIHRoaXMuY3VycmVudEFuZ2xlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNDaGFyZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb3JjZSA9IE1hdGgubWluKHRoaXMuY3VycmVudEZvcmNlICsgMTAwMCAqIGR0LCB0aGlzLm1heEZvcmNlKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRBbmdsZSArIDQ1ICogZHQsIHRoaXMubWF4QW5nbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvYyBiYW4gXCIsIHRoaXMuY3VycmVudEFuZ2xlKTtcclxuICAgICAgICAgICAgdGhpcy50cmFqZWN0b3J5Q2lyY2xlKHRoaXMudXBkYXRlVHJhamVjdG9yeSh0aGlzLmN1cnJlbnRGb3JjZSx0aGlzLmN1cnJlbnRBbmdsZSkpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFuZ2xlQXJyb3codGhpcy5jdXJyZW50QW5nbGUpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJyb3dQb3MoKTtcclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5pc0Fycm93Rmx5aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWplY3RvcnlJbmRleCA8IHRoaXMudHJhamVjdG9yeVBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gdGhpcy50cmFqZWN0b3J5UG9pbnRzW3RoaXMudHJhamVjdG9yeUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0UG9pbnQgPSB0aGlzLnRyYWplY3RvcnlQb2ludHNbdGhpcy50cmFqZWN0b3J5SW5kZXggKyAxXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5BcnJvdy5zZXRQb3NpdGlvbihuZXh0UG9pbnQpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gbmV4dFBvaW50LnN1YihjdXJyZW50UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkaXJlY3Rpb24ueSwgZGlyZWN0aW9uLngpICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICAgICAgICAgIHRoaXMubkFycm93LmFuZ2xlID0gYW5nbGU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhamVjdG9yeUluZGV4Kys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmlnaWRCb2R5ID0gdGhpcy5uQXJyb3cuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICByaWdpZEJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5pc0Fycm93Rmx5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5uQXJyb3cuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkudHlwZSA9PT0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljKSB7XHJcbiAgICAgICAgICAgIC8vIEPhuq1wIG5o4bqtdCBnw7NjIG3FqWkgdMOqbiBk4buxYSB0csOqbiBoxrDhu5tuZyBj4bunYSB24bqtbiB04buRY1xyXG4gICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSB0aGlzLm5BcnJvdy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgaWYgKHZlbG9jaXR5Lm1hZygpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih2ZWxvY2l0eS55LCB2ZWxvY2l0eS54KSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5BcnJvdy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9yY2UgPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRGb3JjZSAtIDEwMDAgKiBkdCwgdGhpcy5zdGFydEZvcmNlKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRBbmdsZSAtIDQ1ICogZHQsIHRoaXMuc3RhcnRBbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5nbGVBcnJvdyh0aGlzLmN1cnJlbnRBbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlUG93ZXJCYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSJdfQ==