
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
        _this.nStick = null;
        _this.nTrajectoryNode = null;
        _this.pfCircle = null;
        _this.pfArrow = null;
        _this.maxForce = 1000;
        _this.maxAngle = 45;
        _this.startForce = 0;
        _this.startAngle = 0;
        _this.currentForce = 0;
        _this.currentAngle = 0;
        _this.isCharging = false;
        _this.isBgMove = false;
        _this.trajectoryPoints = []; // Lưu các điểm quỹ đạo
        _this.isArrowFlying = false; // Đánh dấu khi mũi tên đang bay
        _this.trajectoryIndex = 0; // Chỉ số hiện tại trong quỹ đạo
        _this.currentArrow = null;
        _this.indexBg = 0;
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
    TiniArcher_GameView.prototype.resetArrowPosition = function () {
        this.currentArrow.setPosition(this.nArrow.x, this.currentAngle);
    };
    TiniArcher_GameView.prototype.resetBg = function () {
        var _this = this;
        this.isBgMove = true;
        console.log("di chuyen ", this.isBgMove);
        this.indexBg++;
        if (this.indexBg > 2) {
            this.indexBg = 0;
        }
        console.log("bg ", this.indexBg);
        this.scheduleOnce(function () {
            _this.spawArrow();
        }, 2);
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
            console.log("Goc ban ", this.currentAngle);
            this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
            this.updateAngleArrow(this.currentAngle);
            this.updateArrowPos();
        }
        else if (this.isArrowFlying) {
            if (this.trajectoryIndex < this.trajectoryPoints.length - 1) {
                var currentPoint = this.trajectoryPoints[this.trajectoryIndex];
                var nextPoint = this.trajectoryPoints[this.trajectoryIndex + 1];
                console.log("bannn");
                this.currentArrow.setPosition(nextPoint);
                var direction = nextPoint.sub(currentPoint);
                var angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
                this.currentArrow.angle = angle;
                this.trajectoryIndex++;
            }
            else {
                this.isArrowFlying = false;
                this.resetBg();
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcZ2FtZVxcVGluaUFyY2hlci5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQW9MQztRQWpMRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixzQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBRSx1QkFBdUI7UUFDL0MsbUJBQWEsR0FBRyxLQUFLLENBQUMsQ0FBRSxnQ0FBZ0M7UUFDeEQscUJBQWUsR0FBRyxDQUFDLENBQUMsQ0FBRSxnQ0FBZ0M7UUFDdEQsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUFvSmhCLENBQUM7NEJBcExvQixtQkFBbUI7SUFtQ3BD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QyxXQUFXLENBQUM7NERBQ1U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0VBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNNO0lBbEJULG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBb0x2QztJQUFELDBCQUFDO0NBcExELEFBb0xDLENBcExnRCxFQUFFLENBQUMsU0FBUyxHQW9MNUQ7a0JBcExvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW5pQXJjaGVyX0dhbWVWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFRpbmlBcmNoZXJfR2FtZVZpZXcgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcGdiUG93ZXJCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5BcnJvdzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuU3RpY2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgblRyYWplY3RvcnlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcGZDaXJjbGU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBmQXJyb3c6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgbWF4Rm9yY2UgPSAxMDAwO1xyXG4gICAgbWF4QW5nbGUgPSA0NTtcclxuICAgIHN0YXJ0Rm9yY2UgPSAwO1xyXG4gICAgc3RhcnRBbmdsZSA9IDA7XHJcbiAgICBjdXJyZW50Rm9yY2UgPSAwO1xyXG4gICAgY3VycmVudEFuZ2xlID0gMDtcclxuICAgIGlzQ2hhcmdpbmcgPSBmYWxzZTtcclxuICAgIGlzQmdNb3ZlID0gZmFsc2U7XHJcbiAgICB0cmFqZWN0b3J5UG9pbnRzID0gW107ICAvLyBMxrB1IGPDoWMgxJFp4buDbSBxdeG7uSDEkeG6oW9cclxuICAgIGlzQXJyb3dGbHlpbmcgPSBmYWxzZTsgIC8vIMSQw6FuaCBk4bqldSBraGkgbcWpaSB0w6puIMSRYW5nIGJheVxyXG4gICAgdHJhamVjdG9yeUluZGV4ID0gMDsgIC8vIENo4buJIHPhu5EgaGnhu4duIHThuqFpIHRyb25nIHF14bu5IMSR4bqhb1xyXG4gICAgY3VycmVudEFycm93ID0gbnVsbDtcclxuICAgIGluZGV4QmcgPSAwO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcylcclxuICAgICAgICB0aGlzLnNwYXdBcnJvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuVG91Y2gpIHtcclxuICAgICAgICB0aGlzLmlzQ2hhcmdpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5Ub3VjaCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy50cmFqZWN0b3J5Q2lyY2xlKHRoaXMudXBkYXRlVHJhamVjdG9yeSh0aGlzLmN1cnJlbnRGb3JjZSwgdGhpcy5jdXJyZW50QW5nbGUpKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBvd2VyQmFyKCk7XHJcbiAgICAgICAgdGhpcy50cmFqZWN0b3J5UG9pbnRzID0gdGhpcy51cGRhdGVUcmFqZWN0b3J5KHRoaXMuY3VycmVudEZvcmNlLCB0aGlzLmN1cnJlbnRBbmdsZSk7XHJcbiAgICAgICAgdGhpcy5uVHJhamVjdG9yeU5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLnNob290QXJyb3coKTtcclxuICAgICAgICAvL3RoaXMuc2hvb3RBcnJvdyh0aGlzLmN1cnJlbnRGb3JjZSx0aGlzLmN1cnJlbnRBbmdsZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNwYXdBcnJvdygpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QXJyb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXJyb3cuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGZBcnJvdyk7XHJcbiAgICAgICAgdGhpcy5uQXJyb3cuYWRkQ2hpbGQodGhpcy5jdXJyZW50QXJyb3cpOyBcclxuICAgIH1cclxuXHJcbiAgICBzaG9vdEFycm93KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBcnJvdykge1xyXG4gICAgICAgICAgICB0aGlzLmlzQXJyb3dGbHlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyYWplY3RvcnlJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0cmFqZWN0b3J5Q2lyY2xlKHBvaW50cykge1xyXG4gICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3JpY2xlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZkNpcmNsZSlcclxuICAgICAgICAgICAgY3JpY2xlLnNldFBvc2l0aW9uKHBvaW50c1tpXSk7XHJcbiAgICAgICAgICAgIGlmKGkgPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgY3JpY2xlLm9wYWNpdHkgPSAwOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5UcmFqZWN0b3J5Tm9kZS5hZGRDaGlsZChjcmljbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUcmFqZWN0b3J5KGZvcmNlLCBhbmdsZSkge1xyXG4gICAgICAgIGxldCBwb2ludHMgPSBbXTtcclxuICAgICAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IHRoaXMuY3VycmVudEFycm93LnBvc2l0aW9uO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdCA9IGkgKiAwLjAzO1xyXG4gICAgICAgICAgICBsZXQgeCA9IHN0YXJ0UG9zaXRpb24ueCArIGZvcmNlICogTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIHQ7XHJcbiAgICAgICAgICAgIGxldCB5ID0gc3RhcnRQb3NpdGlvbi55ICsgZm9yY2UgKiBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApICogdCAtIDAuNSAqIDk4MCAqIHQgKiB0O1xyXG4gICAgICAgICAgICBwb2ludHMucHVzaChjYy52Mih4LCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUFuZ2xlQXJyb3coYW5nbGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBvd2VyQmFyKCkge1xyXG4gICAgICAgIHRoaXMucGdiUG93ZXJCYXIucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRGb3JjZSAvIHRoaXMubWF4Rm9yY2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQXJyb3dQb3MoKSB7XHJcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnN0YXJ0QW5nbGUgKyAodGhpcy5jdXJyZW50QW5nbGUgLyB0aGlzLm1heEFuZ2xlKSAqIDEwMFxyXG4gICAgICAgIC8vbGV0IG5ld1ggPSB0aGlzLnN0YXJ0QW5nbGUgLSAodGhpcy5jdXJyZW50QW5nbGUgLyB0aGlzLm1heEFuZ2xlKSAqIDU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QXJyb3cuc2V0UG9zaXRpb24odGhpcy5uQXJyb3cueCwgbmV3WSk7XHJcbiAgICB9XHJcbiAgICByZXNldEFycm93UG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QXJyb3cuc2V0UG9zaXRpb24odGhpcy5uQXJyb3cueCwgdGhpcy5jdXJyZW50QW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QmcoKSB7XHJcbiAgICAgICAgdGhpcy5pc0JnTW92ZSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkaSBjaHV5ZW4gXCIsIHRoaXMuaXNCZ01vdmUpO1xyXG4gICAgICAgIHRoaXMuaW5kZXhCZysrO1xyXG4gICAgICAgIGlmKHRoaXMuaW5kZXhCZyA+IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleEJnID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiZyBcIiwgdGhpcy5pbmRleEJnKTsgIFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zcGF3QXJyb3coKTtcclxuICAgICAgICB9LDIpXHJcbiAgICB9XHJcbiAgICBzaGFrZVRhcmdldCh0YXJnZXQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgc2hha2VEdXJhdGlvbiA9IDAuMjU7IC8vIFRo4budaSBnaWFuIGPhu6dhIG3hu5dpIGLGsOG7m2MgcnVuZ1xyXG4gICAgICAgIGxldCBhbmdsZXMgPSBbLTIsIDIsIC0xLjUsIDEuNSwgLTEsIDFdOyAvLyBDw6FjIGdpw6EgdHLhu4sgZ8OzYyBydW5nIGdp4bqjbSBk4bqnblxyXG5cclxuICAgIGxldCB0d2VlbiA9IGNjLnR3ZWVuKHRhcmdldCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0d2VlbiA9IHR3ZWVuLnRvKHNoYWtlRHVyYXRpb24sIHsgYW5nbGU6IGFuZ2xlc1tpXSB9KTtcclxuICAgIH1cclxuICAgICAgICB0d2Vlbi50byhzaGFrZUR1cmF0aW9uLCB7IGFuZ2xlOiAwIH0pO1xyXG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaGFyZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb3JjZSA9IE1hdGgubWluKHRoaXMuY3VycmVudEZvcmNlICsgMTAwMCAqIGR0LCB0aGlzLm1heEZvcmNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuZ2xlID0gTWF0aC5taW4odGhpcy5jdXJyZW50QW5nbGUgKyA0NSAqIGR0LCB0aGlzLm1heEFuZ2xlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb2MgYmFuIFwiLCB0aGlzLmN1cnJlbnRBbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhamVjdG9yeUNpcmNsZSh0aGlzLnVwZGF0ZVRyYWplY3RvcnkodGhpcy5jdXJyZW50Rm9yY2UsIHRoaXMuY3VycmVudEFuZ2xlKSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5nbGVBcnJvdyh0aGlzLmN1cnJlbnRBbmdsZSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcnJvd1BvcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Fycm93Rmx5aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWplY3RvcnlJbmRleCA8IHRoaXMudHJhamVjdG9yeVBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gdGhpcy50cmFqZWN0b3J5UG9pbnRzW3RoaXMudHJhamVjdG9yeUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0UG9pbnQgPSB0aGlzLnRyYWplY3RvcnlQb2ludHNbdGhpcy50cmFqZWN0b3J5SW5kZXggKyAxXTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFubm5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5zZXRQb3NpdGlvbihuZXh0UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IG5leHRQb2ludC5zdWIoY3VycmVudFBvaW50KTtcclxuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZGlyZWN0aW9uLnksIGRpcmVjdGlvbi54KSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFqZWN0b3J5SW5kZXgrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBcnJvd0ZseWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJnKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvcmNlID0gTWF0aC5tYXgodGhpcy5jdXJyZW50Rm9yY2UgLSAxMDAwICogZHQsIHRoaXMuc3RhcnRGb3JjZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuZ2xlID0gTWF0aC5tYXgodGhpcy5jdXJyZW50QW5nbGUgLSA0NSAqIGR0LCB0aGlzLnN0YXJ0QW5nbGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlUG93ZXJCYXIoKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19