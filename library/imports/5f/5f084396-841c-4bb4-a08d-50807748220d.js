"use strict";
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
        _this.maxForce = 1000;
        _this.maxAngle = Math.PI / 4;
        _this.currentForce = 0;
        _this.currentAngle = 0;
        _this.isCharging = false;
        _this.chargeRate = 100;
        _this.angleRate = 0.05;
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
        }
    };
    TiniArcher_GameView.prototype.shootArrow = function (force, angle) {
        var rigidBody = this.nArrow.getComponent(cc.RigidBody);
        if (rigidBody) {
            var velocity = cc.v2(Math.cos(angle) * force * 0.8, Math.sin(angle) * force);
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
    TiniArcher_GameView = TiniArcher_GameView_1 = __decorate([
        ccclass
    ], TiniArcher_GameView);
    return TiniArcher_GameView;
}(cc.Component));
exports.default = TiniArcher_GameView;

cc._RF.pop();