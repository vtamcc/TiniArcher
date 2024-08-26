"use strict";
cc._RF.push(module, 'f9bd7XRELlDfKsAVGMkWszQ', 'TiniArcher.ColliderManager');
// TiniArcher/scripts/TiniArcher.ColliderManager.ts

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
var TiniArcher_GameView_1 = require("./game/TiniArcher.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TiniArcher_Collider = /** @class */ (function (_super) {
    __extends(TiniArcher_Collider, _super);
    function TiniArcher_Collider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TiniArcher_Collider.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
    };
    TiniArcher_Collider.prototype.start = function () {
    };
    TiniArcher_Collider.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            TiniArcher_GameView_1.default.instance.isArrowFlying = false;
            TiniArcher_GameView_1.default.instance.isTarget = true;
            TiniArcher_GameView_1.default.instance.nTrajectoryNode.removeAllChildren();
            self.node.parent = other.node;
            var collisionPoint = self.world.aabb.center;
            TiniArcher_GameView_1.default.instance.shakeTarget(TiniArcher_GameView_1.default.instance.nStick);
            TiniArcher_GameView_1.default.instance.updateStatus();
            var localPoint = other.node.convertToNodeSpaceAR(collisionPoint);
            self.node.setPosition(localPoint.x, localPoint.y);
            self.node.angle;
            TiniArcher_GameView_1.default.instance.resetBg();
            console.log('background di chuyen', TiniArcher_GameView_1.default.instance.isBgMove);
        }
        if (other.tag == 2) {
            TiniArcher_GameView_1.default.instance.isArrowFlying = false;
            TiniArcher_GameView_1.default.instance.isMiss = true;
            self.node.parent = other.node;
            var collisionPoint = self.world.aabb.center;
            var localPoint = other.node.convertToNodeSpaceAR(collisionPoint);
            self.node.setPosition(localPoint.x, localPoint.y);
            self.node.angle;
            TiniArcher_GameView_1.default.instance.resetBg();
            TiniArcher_GameView_1.default.instance.updateStatus();
            console.log("ban vao cot ");
        }
    };
    TiniArcher_Collider = __decorate([
        ccclass
    ], TiniArcher_Collider);
    return TiniArcher_Collider;
}(cc.Component));
exports.default = TiniArcher_Collider;

cc._RF.pop();