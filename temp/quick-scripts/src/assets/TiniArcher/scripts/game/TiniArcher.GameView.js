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
        _this.maxForce = 1000; // Lực bắn tối đa
        _this.maxAngle = Math.PI / 4; // Góc tối đa (45 độ)
        _this.currentForce = 0;
        _this.currentAngle = 0;
        _this.isCharging = false;
        _this.chargeRate = 50; // Tốc độ tăng lực
        _this.angleRate = 0.5; // Tốc độ tăng góc
        // powerBar = null;
        _this.trajectoryNode = null;
        return _this;
        // update (dt) {}
    }
    TiniArcher_GameView.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    TiniArcher_GameView.prototype.onTouchStart = function (event) {
        this.isCharging = true;
        this.currentForce = 0;
        this.currentAngle = 0;
        this.pgbPowerBar.progress = 0;
        this.schedule(this.increaseForceAndAngle, 0.1);
        console.log(this.isCharging);
    };
    TiniArcher_GameView.prototype.onTouchEnd = function (event) {
        this.isCharging = false;
        //this.shootArrow(this.currentForce, this.currentAngle);
        console.log(this.isCharging);
        this.pgbPowerBar.progress = 0;
        this.unschedule(this.increaseForceAndAngle);
        this.increaseForceAndAngle();
    };
    TiniArcher_GameView.prototype.increaseForceAndAngle = function () {
        if (this.isCharging) {
            //Tăng lực và góc
            this.currentForce = Math.min(this.currentForce + this.chargeRate, this.maxForce);
            this.currentAngle = Math.min(this.currentAngle + this.angleRate, this.maxAngle);
            console.log("Luc ban ", this.currentForce);
            console.log("Goc ban ", this.currentAngle);
            // Cập nhật thanh lực dựa trên lực hiện tại
            this.pgbPowerBar.progress = this.currentForce / this.maxForce;
            console.log("progress ", this.pgbPowerBar.progress);
            // Cập nhật quỹ đạo
            //this.updateTrajectory(this.currentForce, this.currentAngle);
        }
    };
    TiniArcher_GameView.prototype.start = function () {
    };
    __decorate([
        property(cc.ProgressBar)
    ], TiniArcher_GameView.prototype, "pgbPowerBar", void 0);
    TiniArcher_GameView = __decorate([
        ccclass
    ], TiniArcher_GameView);
    return TiniArcher_GameView;
}(cc.Component));
exports.default = TiniArcher_GameView;

cc._RF.pop();