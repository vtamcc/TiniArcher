
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
var TiniArcher_Global_1 = require("../TiniArcher.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TiniArcher_GameView = /** @class */ (function (_super) {
    __extends(TiniArcher_GameView, _super);
    function TiniArcher_GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pgbPowerBar = null;
        _this.nArrow = null;
        _this.nStick = null;
        _this.nTrajectoryNode = null;
        _this.pfCircle = null;
        _this.pfArrow = null;
        _this.listStatus = [];
        _this.lbArrow = null;
        _this.lbScore = null;
        _this.lbBest = null;
        _this.maxForce = 1000;
        _this.maxAngle = 45;
        _this.startForce = 0;
        _this.startAngle = 0;
        _this.currentForce = 0;
        _this.currentAngle = 0;
        _this.isCharging = false;
        _this.isBgMove = false;
        _this.isStop = false;
        _this.trajectoryPoints = []; // Lưu các điểm quỹ đạo
        _this.isArrowFlying = false; // Đánh dấu khi mũi tên đang bay
        _this.trajectoryIndex = 0; // Chỉ số hiện tại trong quỹ đạo
        _this.currentArrow = null;
        _this.indexBg = 0;
        _this.isTarget = false;
        _this.isCancer = true;
        _this.isMiss = false;
        _this.ramdomPosY = [-80, 60, 40, 20, 0, 20, 40, 60, 80];
        return _this;
    }
    TiniArcher_GameView_1 = TiniArcher_GameView;
    TiniArcher_GameView.prototype.onLoad = function () {
        TiniArcher_GameView_1.instance = this;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.spawArrow();
        this.updateNumberArrow();
        this.updateLbScore();
    };
    TiniArcher_GameView.prototype.resetBg = function () {
        var _this = this;
        this.isBgMove = true;
        this.scheduleOnce(function () {
            _this.isBgMove = false;
            _this.isStop = false;
            _this.spawArrow();
            _this.isCancer = true;
        }, 3.5);
    };
    TiniArcher_GameView.prototype.onTouchStart = function (event) {
        if (this.isCancer)
            this.isCharging = true;
    };
    TiniArcher_GameView.prototype.onTouchEnd = function (event) {
        if (!this.isCancer)
            return;
        this.isCharging = false;
        this.nTrajectoryNode.removeAllChildren();
        this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
        this.updatePowerBar();
        this.trajectoryPoints = this.updateTrajectory(this.currentForce, this.currentAngle);
        this.nTrajectoryNode.removeAllChildren();
        this.shootArrow();
        //this.shootArrow(this.currentForce,this.currentAngle);
    };
    TiniArcher_GameView.prototype.spawArrow = function () {
        if (this.currentArrow) {
            this.currentArrow.destroy();
        }
        this.currentArrow = cc.instantiate(this.pfArrow);
        this.nArrow.addChild(this.currentArrow);
    };
    TiniArcher_GameView.prototype.shootArrow = function () {
        if (this.currentArrow) {
            this.isArrowFlying = true;
            this.trajectoryIndex = 0;
        }
    };
    TiniArcher_GameView.prototype.trajectoryCircle = function (points) {
        this.nTrajectoryNode.removeAllChildren();
        for (var i = 0; i < points.length; i++) {
            var cricle = cc.instantiate(this.pfCircle);
            cricle.setPosition(points[i]);
            if (i > 20) {
                cricle.opacity = 0;
            }
            this.nTrajectoryNode.addChild(cricle);
        }
    };
    TiniArcher_GameView.prototype.updateTrajectory = function (force, angle) {
        var points = [];
        var startPosition = this.currentArrow.position;
        for (var i = 0; i < 50; i++) {
            var t = i * 0.03;
            var x = startPosition.x + force * Math.cos(angle * Math.PI / 180) * t;
            var y = startPosition.y + force * Math.sin(angle * Math.PI / 180) * t - 0.5 * 980 * t * t;
            points.push(cc.v2(x, y));
        }
        return points;
    };
    TiniArcher_GameView.prototype.updateAngleArrow = function (angle) {
        this.currentArrow.angle = angle;
    };
    TiniArcher_GameView.prototype.updatePowerBar = function () {
        this.pgbPowerBar.progress = this.currentForce / this.maxForce;
    };
    TiniArcher_GameView.prototype.updateArrowPos = function () {
        var newY = this.startAngle + (this.currentAngle / this.maxAngle) * 100;
        //let newX = this.startAngle - (this.currentAngle / this.maxAngle) * 5;
        this.currentArrow.setPosition(this.nArrow.x, newY);
    };
    TiniArcher_GameView.prototype.updateLbScore = function () {
        this.lbScore.string = TiniArcher_Global_1.Global.score + '';
    };
    TiniArcher_GameView.prototype.updateNumberArrow = function () {
        this.lbArrow.string = TiniArcher_Global_1.Global.numberArrow + ' ';
    };
    TiniArcher_GameView.prototype.checkArrowTarget = function () {
        if (!this.isMiss) {
            TiniArcher_Global_1.Global.numberArrow--;
            this.updateNumberArrow();
        }
    };
    TiniArcher_GameView.prototype.resetArrowPosition = function () {
        this.currentArrow.setPosition(this.nArrow.x, this.currentAngle);
    };
    TiniArcher_GameView.prototype.updateStatus = function () {
        var _this = this;
        if (this.isTarget) {
            TiniArcher_Global_1.Global.score++;
            this.updateLbScore();
            this.listStatus[1].active = true;
            this.scheduleOnce(function () {
                _this.listStatus[1].active = false;
            }, 0.6);
            this.isTarget = false;
        }
        else if (this.isMiss) {
            this.listStatus[2].active = true;
            this.scheduleOnce(function () {
                _this.listStatus[2].active = false;
            }, 0.6);
            this.isMiss = false;
            this.checkArrowTarget();
        }
        else {
            console.log("vao else");
            this.listStatus[0].active = true;
            this.scheduleOnce(function () {
                _this.listStatus[0].active = false;
            }, 0.6);
            this.checkArrowTarget();
            //this.isTarget = false;
        }
    };
    TiniArcher_GameView.prototype.shakeTarget = function (target) {
        var shakeDuration = 0.25; // Thời gian của mỗi bước rung
        var angles = [-2, 2, -1.5, 1.5, -1, 1]; // Các giá trị góc rung giảm dần
        var tween = cc.tween(target);
        for (var i = 0; i < angles.length; i++) {
            tween = tween.to(shakeDuration, { angle: angles[i] });
        }
        tween.to(shakeDuration, { angle: 0 });
        tween.start();
    };
    TiniArcher_GameView.prototype.update = function (dt) {
        if (this.isCharging) {
            this.currentForce = Math.min(this.currentForce + 1000 * dt, this.maxForce);
            this.currentAngle = Math.min(this.currentAngle + 45 * dt, this.maxAngle);
            this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
            this.updateAngleArrow(this.currentAngle);
            this.updateArrowPos();
        }
        else if (this.isArrowFlying) {
            //this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
            if (this.trajectoryIndex < this.trajectoryPoints.length - 1) {
                var currentPoint = this.trajectoryPoints[this.trajectoryIndex];
                var nextPoint = this.trajectoryPoints[this.trajectoryIndex + 1];
                this.currentArrow.setPosition(nextPoint);
                var direction = nextPoint.sub(currentPoint);
                var angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
                this.currentArrow.angle = angle;
                this.trajectoryIndex++;
            }
            else {
                this.isArrowFlying = false;
                this.isCancer = false;
                this.resetBg();
                this.updateStatus();
            }
            this.isCancer = false;
            //this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        }
        else {
            this.currentForce = Math.max(this.currentForce - 1000 * dt, this.startForce);
            this.currentAngle = Math.max(this.currentAngle - 45 * dt, this.startAngle);
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
    ], TiniArcher_GameView.prototype, "nStick", void 0);
    __decorate([
        property(cc.Node)
    ], TiniArcher_GameView.prototype, "nTrajectoryNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], TiniArcher_GameView.prototype, "pfCircle", void 0);
    __decorate([
        property(cc.Prefab)
    ], TiniArcher_GameView.prototype, "pfArrow", void 0);
    __decorate([
        property(cc.Node)
    ], TiniArcher_GameView.prototype, "listStatus", void 0);
    __decorate([
        property(cc.Label)
    ], TiniArcher_GameView.prototype, "lbArrow", void 0);
    __decorate([
        property(cc.Label)
    ], TiniArcher_GameView.prototype, "lbScore", void 0);
    __decorate([
        property(cc.Label)
    ], TiniArcher_GameView.prototype, "lbBest", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcZ2FtZVxcVGluaUFyY2hlci5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwREFBOEM7QUFJeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUFxUEM7UUFsUEcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBR25DLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUdoQyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFHM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFDeEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNkLHNCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFFLHVCQUF1QjtRQUMvQyxtQkFBYSxHQUFHLEtBQUss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Qzt5REFDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ0s7SUE5QlAsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0FxUHZDO0lBQUQsMEJBQUM7Q0FyUEQsQUFxUEMsQ0FyUGdELEVBQUUsQ0FBQyxTQUFTLEdBcVA1RDtrQkFyUG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9UaW5pQXJjaGVyLkdsb2JhbFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluaUFyY2hlcl9HYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBUaW5pQXJjaGVyX0dhbWVWaWV3ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHBnYlBvd2VyQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuQXJyb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgblN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5UcmFqZWN0b3J5Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBmQ2lyY2xlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZkFycm93OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdFN0YXR1czogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJBcnJvdzogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkJlc3Q6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIG1heEZvcmNlID0gMTAwMDtcclxuICAgIG1heEFuZ2xlID0gNDU7XHJcbiAgICBzdGFydEZvcmNlID0gMDtcclxuICAgIHN0YXJ0QW5nbGUgPSAwO1xyXG4gICAgY3VycmVudEZvcmNlID0gMDtcclxuICAgIGN1cnJlbnRBbmdsZSA9IDA7XHJcbiAgICBpc0NoYXJnaW5nID0gZmFsc2U7XHJcbiAgICBpc0JnTW92ZSA9IGZhbHNlO1xyXG4gICAgaXNTdG9wID0gZmFsc2VcclxuICAgIHRyYWplY3RvcnlQb2ludHMgPSBbXTsgIC8vIEzGsHUgY8OhYyDEkWnhu4NtIHF14bu5IMSR4bqhb1xyXG4gICAgaXNBcnJvd0ZseWluZyA9IGZhbHNlOyAgLy8gxJDDoW5oIGThuqV1IGtoaSBtxalpIHTDqm4gxJFhbmcgYmF5XHJcbiAgICB0cmFqZWN0b3J5SW5kZXggPSAwOyAgLy8gQ2jhu4kgc+G7kSBoaeG7h24gdOG6oWkgdHJvbmcgcXXhu7kgxJHhuqFvXHJcbiAgICBjdXJyZW50QXJyb3cgPSBudWxsO1xyXG4gICAgaW5kZXhCZyA9IDA7XHJcbiAgICBpc1RhcmdldCA9IGZhbHNlO1xyXG4gICAgaXNDYW5jZXIgPSB0cnVlO1xyXG4gICAgaXNNaXNzID0gZmFsc2U7XHJcbiAgICByYW1kb21Qb3NZID0gWy04MCw2MCw0MCwyMCwwLDIwLDQwLDYwLDgwXTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuc3Bhd0Fycm93KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVOdW1iZXJBcnJvdygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGJTY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QmcoKSB7XHJcbiAgICAgICAgdGhpcy5pc0JnTW92ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzQmdNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd0Fycm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDYW5jZXIgPSB0cnVlO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0sMy41KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuVG91Y2gpIHtcclxuICAgICAgICBpZih0aGlzLmlzQ2FuY2VyKVxyXG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNDYW5jZXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzQ2hhcmdpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5UcmFqZWN0b3J5Tm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMudHJhamVjdG9yeUNpcmNsZSh0aGlzLnVwZGF0ZVRyYWplY3RvcnkodGhpcy5jdXJyZW50Rm9yY2UsIHRoaXMuY3VycmVudEFuZ2xlKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3dlckJhcigpO1xyXG4gICAgICAgIHRoaXMudHJhamVjdG9yeVBvaW50cyA9IHRoaXMudXBkYXRlVHJhamVjdG9yeSh0aGlzLmN1cnJlbnRGb3JjZSwgdGhpcy5jdXJyZW50QW5nbGUpO1xyXG4gICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5zaG9vdEFycm93KCk7XHJcbiAgICAgICAgLy90aGlzLnNob290QXJyb3codGhpcy5jdXJyZW50Rm9yY2UsdGhpcy5jdXJyZW50QW5nbGUpO1xyXG5cclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgc3Bhd0Fycm93KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBcnJvdykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudEFycm93ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZkFycm93KTtcclxuICAgICAgICB0aGlzLm5BcnJvdy5hZGRDaGlsZCh0aGlzLmN1cnJlbnRBcnJvdyk7IFxyXG4gICAgfVxyXG5cclxuICAgIHNob290QXJyb3coKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFycm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBcnJvd0ZseWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJhamVjdG9yeUluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyYWplY3RvcnlDaXJjbGUocG9pbnRzKSB7XHJcbiAgICAgICAgdGhpcy5uVHJhamVjdG9yeU5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjcmljbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmQ2lyY2xlKVxyXG4gICAgICAgICAgICBjcmljbGUuc2V0UG9zaXRpb24ocG9pbnRzW2ldKTtcclxuICAgICAgICAgICAgaWYoaSA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICBjcmljbGUub3BhY2l0eSA9IDA7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLmFkZENoaWxkKGNyaWNsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRyYWplY3RvcnkoZm9yY2UsIGFuZ2xlKSB7XHJcbiAgICAgICAgbGV0IHBvaW50cyA9IFtdO1xyXG4gICAgICAgIGxldCBzdGFydFBvc2l0aW9uID0gdGhpcy5jdXJyZW50QXJyb3cucG9zaXRpb247XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gaSAqIDAuMDM7XHJcbiAgICAgICAgICAgIGxldCB4ID0gc3RhcnRQb3NpdGlvbi54ICsgZm9yY2UgKiBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApICogdDtcclxuICAgICAgICAgICAgbGV0IHkgPSBzdGFydFBvc2l0aW9uLnkgKyBmb3JjZSAqIE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiB0IC0gMC41ICogOTgwICogdCAqIHQ7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGNjLnYyKHgsIHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvaW50cztcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlQW5nbGVBcnJvdyhhbmdsZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFycm93LmFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG93ZXJCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEZvcmNlIC8gdGhpcy5tYXhGb3JjZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBcnJvd1BvcygpIHtcclxuICAgICAgICBsZXQgbmV3WSA9IHRoaXMuc3RhcnRBbmdsZSArICh0aGlzLmN1cnJlbnRBbmdsZSAvIHRoaXMubWF4QW5nbGUpICogMTAwXHJcbiAgICAgICAgLy9sZXQgbmV3WCA9IHRoaXMuc3RhcnRBbmdsZSAtICh0aGlzLmN1cnJlbnRBbmdsZSAvIHRoaXMubWF4QW5nbGUpICogNTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5zZXRQb3NpdGlvbih0aGlzLm5BcnJvdy54LCBuZXdZKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMYlNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMubGJTY29yZS5zdHJpbmcgPSBHbG9iYWwuc2NvcmUgKyAnJztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVOdW1iZXJBcnJvdygpIHtcclxuICAgICAgICB0aGlzLmxiQXJyb3cuc3RyaW5nID0gR2xvYmFsLm51bWJlckFycm93ICsgJyAnO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQXJyb3dUYXJnZXQoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNNaXNzKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5udW1iZXJBcnJvdy0tO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU51bWJlckFycm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIHJlc2V0QXJyb3dQb3NpdGlvbigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5zZXRQb3NpdGlvbih0aGlzLm5BcnJvdy54LCB0aGlzLmN1cnJlbnRBbmdsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdHVzKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNUYXJnZXQpIHtcclxuICAgICAgICAgICAgR2xvYmFsLnNjb3JlKys7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGJTY29yZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RTdGF0dXNbMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U3RhdHVzWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LDAuNilcclxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldCA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNNaXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXR1c1syXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RTdGF0dXNbMl0uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSwwLjYpXHJcbiAgICAgICAgICAgIHRoaXMuaXNNaXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBcnJvd1RhcmdldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBlbHNlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RTdGF0dXNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U3RhdHVzWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LDAuNilcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Fycm93VGFyZ2V0KCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5pc1RhcmdldCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNoYWtlVGFyZ2V0KHRhcmdldDogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBzaGFrZUR1cmF0aW9uID0gMC4yNTsgLy8gVGjhu51pIGdpYW4gY+G7p2EgbeG7l2kgYsaw4bubYyBydW5nXHJcbiAgICAgICAgbGV0IGFuZ2xlcyA9IFstMiwgMiwgLTEuNSwgMS41LCAtMSwgMV07IC8vIEPDoWMgZ2nDoSB0cuG7iyBnw7NjIHJ1bmcgZ2nhuqNtIGThuqduXHJcblxyXG4gICAgbGV0IHR3ZWVuID0gY2MudHdlZW4odGFyZ2V0KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHR3ZWVuID0gdHdlZW4udG8oc2hha2VEdXJhdGlvbiwgeyBhbmdsZTogYW5nbGVzW2ldIH0pO1xyXG4gICAgfVxyXG4gICAgICAgIHR3ZWVuLnRvKHNoYWtlRHVyYXRpb24sIHsgYW5nbGU6IDAgfSk7XHJcbiAgICAgICAgdHdlZW4uc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NoYXJnaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvcmNlID0gTWF0aC5taW4odGhpcy5jdXJyZW50Rm9yY2UgKyAxMDAwICogZHQsIHRoaXMubWF4Rm9yY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSA9IE1hdGgubWluKHRoaXMuY3VycmVudEFuZ2xlICsgNDUgKiBkdCwgdGhpcy5tYXhBbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhamVjdG9yeUNpcmNsZSh0aGlzLnVwZGF0ZVRyYWplY3RvcnkodGhpcy5jdXJyZW50Rm9yY2UsIHRoaXMuY3VycmVudEFuZ2xlKSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5nbGVBcnJvdyh0aGlzLmN1cnJlbnRBbmdsZSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcnJvd1BvcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Fycm93Rmx5aW5nKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWplY3RvcnlJbmRleCA8IHRoaXMudHJhamVjdG9yeVBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gdGhpcy50cmFqZWN0b3J5UG9pbnRzW3RoaXMudHJhamVjdG9yeUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0UG9pbnQgPSB0aGlzLnRyYWplY3RvcnlQb2ludHNbdGhpcy50cmFqZWN0b3J5SW5kZXggKyAxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFycm93LnNldFBvc2l0aW9uKG5leHRQb2ludCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gbmV4dFBvaW50LnN1YihjdXJyZW50UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkaXJlY3Rpb24ueSwgZGlyZWN0aW9uLngpICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFycm93LmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWplY3RvcnlJbmRleCsrO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBcnJvd0ZseWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NhbmNlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJnKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzQ2FuY2VyID0gZmFsc2VcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcylcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb3JjZSA9IE1hdGgubWF4KHRoaXMuY3VycmVudEZvcmNlIC0gMTAwMCAqIGR0LCB0aGlzLnN0YXJ0Rm9yY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSA9IE1hdGgubWF4KHRoaXMuY3VycmVudEFuZ2xlIC0gNDUgKiBkdCwgdGhpcy5zdGFydEFuZ2xlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlUG93ZXJCYXIoKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19