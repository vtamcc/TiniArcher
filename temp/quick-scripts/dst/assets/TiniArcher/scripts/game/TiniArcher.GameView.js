
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
        _this.maxForce = 1000;
        _this.maxAngle = Math.PI / 4;
        _this.currentForce = 0;
        _this.currentAngle = 0;
        _this.isCharging = false;
        _this.chargeRate = 200;
        _this.angleRate = 0.2;
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
        this.currentForce = 0;
        this.currentAngle = 0;
        this.pgbPowerBar.progress = 0;
        this.schedule(this.increaseForceAndAngle, 0.1);
    };
    TiniArcher_GameView.prototype.onTouchEnd = function (event) {
        this.isCharging = false;
        this.shootArrow(this.currentForce, this.currentAngle);
        console.log("toc do ban ", this.currentForce);
        this.pgbPowerBar.progress = 0;
        this.nArrow.angle = 0;
        this.unschedule(this.increaseForceAndAngle);
    };
    TiniArcher_GameView.prototype.increaseForceAndAngle = function () {
        if (this.isCharging) {
            this.currentForce = Math.min(this.currentForce + this.chargeRate, this.maxForce);
            this.currentAngle = Math.min(this.currentAngle + this.angleRate, this.maxAngle);
            this.pgbPowerBar.progress = this.currentForce / this.maxForce;
            this.nArrow.angle = +cc.misc.radiansToDegrees(this.currentAngle);
            this.updateTrajectory(this.currentForce, this.currentAngle);
        }
    };
    TiniArcher_GameView.prototype.shootArrow = function (force, angle) {
        var rigidBody = this.nArrow.getComponent(cc.RigidBody);
        if (rigidBody) {
            var velocity = cc.v2(Math.cos(angle) * force, Math.sin(angle) * force);
            //console.log("Calculated velocity:", velocity);
            rigidBody.linearVelocity = velocity;
            rigidBody.gravityScale = 0.5;
            console.log("Calculated velocity:", velocity);
            console.log("Arrow velocity after shoot:", rigidBody.linearVelocity);
        }
        else {
            console.error("nArrow does not have a RigidBody component!");
        }
    };
    TiniArcher_GameView.prototype.updateTrajectory = function (force, angle) {
        var graphics = this.nTrajectoryNode.getComponent(cc.Graphics);
        graphics.clear();
        var points = [];
        var initialPosition = this.node.position;
        for (var i = 0; i < 50; i++) {
            var t = i / 10; // Thời gian tỉ lệ
            var x = initialPosition.x + Math.cos(angle) * force * t;
            var y = initialPosition.y + Math.sin(angle) * force * t - (0.5 * 9.8 * t * t);
            points.push(cc.v2(x, y));
        }
        graphics.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++) {
            graphics.lineTo(points[i].x, points[i].y);
        }
        graphics.stroke();
    };
    // stopArrow() {
    //     let arrow = this.nArrow.getComponent(cc.RigidBody)
    //     arrow.linearVelocity = cc.v2(0,0);
    //     arrow.gravityScale = 0;
    //     arrow.angularVelocity = 0;
    //     this.nArrow.parent = this.nbullseye;
    //     // this.nArrow.setPosition(this.nbullseye.x + 10, this.nbullseye.y - 100)
    // }
    TiniArcher_GameView.prototype.update = function (dt) {
        var rigidBody = this.nArrow.getComponent(cc.RigidBody);
        if (rigidBody) {
            var velocity = rigidBody.linearVelocity;
            // Kiểm tra nếu mũi tên đang bay
            if (velocity.mag() > 0) {
                // Tính toán góc mới của mũi tên dựa trên vận tốc
                var angle = Math.atan2(velocity.y, velocity.x);
                // Chuyển góc từ radian sang độ và đặt nó cho mũi tên
                this.nArrow.angle = cc.misc.radiansToDegrees(angle);
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcZ2FtZVxcVGluaUFyY2hlci5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQXNIQztRQW5IRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLGVBQVMsR0FBRyxHQUFHLENBQUM7O0lBbUdwQixDQUFDOzRCQXRIb0IsbUJBQW1CO0lBcUJwQyxvQ0FBTSxHQUFOO1FBQ0kscUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN2RixJQUFJLENBQUMsSUFBSSxD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Q1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnRUFDYztJQVpmLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBc0h2QztJQUFELDBCQUFDO0NBdEhELEFBc0hDLENBdEhnRCxFQUFFLENBQUMsU0FBUyxHQXNINUQ7a0JBdEhvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW5pQXJjaGVyX0dhbWVWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFRpbmlBcmNoZXJfR2FtZVZpZXcgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcGdiUG93ZXJCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5BcnJvdzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuYnVsbHNleWU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgblRyYWplY3RvcnlOb2RlOiBjYy5Ob2RlID0gbnVsbDsgIFxyXG4gICAgbWF4Rm9yY2UgPSAxMDAwO1xyXG4gICAgbWF4QW5nbGUgPSBNYXRoLlBJIC8gNDtcclxuICAgIGN1cnJlbnRGb3JjZSA9IDA7XHJcbiAgICBjdXJyZW50QW5nbGUgPSAwO1xyXG4gICAgaXNDaGFyZ2luZyA9IGZhbHNlO1xyXG4gICAgY2hhcmdlUmF0ZSA9IDIwMDtcclxuICAgIGFuZ2xlUmF0ZSA9IDAuMjtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuVG91Y2gpIHtcclxuICAgICAgICB0aGlzLmlzQ2hhcmdpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZvcmNlID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmluY3JlYXNlRm9yY2VBbmRBbmdsZSwgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5Ub3VjaCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvb3RBcnJvdyh0aGlzLmN1cnJlbnRGb3JjZSwgdGhpcy5jdXJyZW50QW5nbGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9jIGRvIGJhbiBcIiwgdGhpcy5jdXJyZW50Rm9yY2UpO1xyXG4gICAgICAgIHRoaXMucGdiUG93ZXJCYXIucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMubkFycm93LmFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbmNyZWFzZUZvcmNlQW5kQW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlYXNlRm9yY2VBbmRBbmdsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NoYXJnaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvcmNlID0gTWF0aC5taW4odGhpcy5jdXJyZW50Rm9yY2UgKyB0aGlzLmNoYXJnZVJhdGUsIHRoaXMubWF4Rm9yY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSA9IE1hdGgubWluKHRoaXMuY3VycmVudEFuZ2xlICsgdGhpcy5hbmdsZVJhdGUsIHRoaXMubWF4QW5nbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnBnYlBvd2VyQmFyLnByb2dyZXNzID0gdGhpcy5jdXJyZW50Rm9yY2UgLyB0aGlzLm1heEZvcmNlO1xyXG4gICAgICAgICAgICB0aGlzLm5BcnJvdy5hbmdsZSA9ICtjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXModGhpcy5jdXJyZW50QW5nbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRyYWplY3RvcnkodGhpcy5jdXJyZW50Rm9yY2UsIHRoaXMuY3VycmVudEFuZ2xlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3RBcnJvdyhmb3JjZTogbnVtYmVyLCBhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJpZ2lkQm9keSA9IHRoaXMubkFycm93LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmIChyaWdpZEJvZHkpIHtcclxuICAgICAgICAgICAgbGV0IHZlbG9jaXR5ID0gY2MudjIoTWF0aC5jb3MoYW5nbGUpICogZm9yY2UsIE1hdGguc2luKGFuZ2xlKSAqIGZvcmNlKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNhbGN1bGF0ZWQgdmVsb2NpdHk6XCIsIHZlbG9jaXR5KTtcclxuICAgICAgICAgICAgcmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICAgICAgICAgIHJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FsY3VsYXRlZCB2ZWxvY2l0eTpcIiwgdmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFycm93IHZlbG9jaXR5IGFmdGVyIHNob290OlwiLCByaWdpZEJvZHkubGluZWFyVmVsb2NpdHkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJuQXJyb3cgZG9lcyBub3QgaGF2ZSBhIFJpZ2lkQm9keSBjb21wb25lbnQhXCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRyYWplY3RvcnkoZm9yY2UsIGFuZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSB0aGlzLm5UcmFqZWN0b3J5Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwb2ludHMgPSBbXTtcclxuICAgICAgICBjb25zdCBpbml0aWFsUG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9IGkgLyAxMDsgLy8gVGjhu51pIGdpYW4gdOG7iSBs4buHXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBpbml0aWFsUG9zaXRpb24ueCArIE1hdGguY29zKGFuZ2xlKSAqIGZvcmNlICogdDtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGluaXRpYWxQb3NpdGlvbi55ICsgTWF0aC5zaW4oYW5nbGUpICogZm9yY2UgKiB0IC0gKDAuNSAqIDkuOCAqIHQgKiB0KTtcclxuICAgIFxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChjYy52Mih4LCB5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gc3RvcEFycm93KCkge1xyXG4gICAgLy8gICAgIGxldCBhcnJvdyA9IHRoaXMubkFycm93LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpXHJcbiAgICAvLyAgICAgYXJyb3cubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLDApO1xyXG4gICAgLy8gICAgIGFycm93LmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAvLyAgICAgYXJyb3cuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgIC8vICAgICB0aGlzLm5BcnJvdy5wYXJlbnQgPSB0aGlzLm5idWxsc2V5ZTtcclxuICAgIC8vICAgICAvLyB0aGlzLm5BcnJvdy5zZXRQb3NpdGlvbih0aGlzLm5idWxsc2V5ZS54ICsgMTAsIHRoaXMubmJ1bGxzZXllLnkgLSAxMDApXHJcbiAgICAgIFxyXG4gICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgcmlnaWRCb2R5ID0gdGhpcy5uQXJyb3cuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKHJpZ2lkQm9keSkge1xyXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IHJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBLaeG7g20gdHJhIG7hur91IG3FqWkgdMOqbiDEkWFuZyBiYXlcclxuICAgICAgICAgICAgaWYgKHZlbG9jaXR5Lm1hZygpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVMOtbmggdG/DoW4gZ8OzYyBt4bubaSBj4bunYSBtxalpIHTDqm4gZOG7sWEgdHLDqm4gduG6rW4gdOG7kWNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih2ZWxvY2l0eS55LCB2ZWxvY2l0eS54KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQ2h1eeG7g24gZ8OzYyB04burIHJhZGlhbiBzYW5nIMSR4buZIHbDoCDEkeG6t3QgbsOzIGNobyBtxalpIHTDqm5cclxuICAgICAgICAgICAgICAgIHRoaXMubkFycm93LmFuZ2xlID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKGFuZ2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==