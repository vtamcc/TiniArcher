
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
        _this.maxForce = 1000;
        _this.maxAngle = Math.PI / 4;
        _this.currentForce = 0;
        _this.currentAngle = 0;
        _this.isCharging = false;
        _this.chargeRate = 50;
        _this.angleRate = 0.5;
        return _this;
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
    };
    TiniArcher_GameView.prototype.onTouchEnd = function (event) {
        this.isCharging = false;
        this.shootArrow(this.currentForce, this.currentAngle);
        this.pgbPowerBar.progress = 0;
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
            var velocity = cc.v2(Math.cos(angle) * force * 10, Math.sin(angle) * force * 10);
            //console.log("Calculated velocity:", velocity);
            rigidBody.linearVelocity = velocity;
            console.log("Arrow velocity after shoot:", rigidBody.linearVelocity);
        }
        else {
            console.error("nArrow does not have a RigidBody component!");
        }
    };
    __decorate([
        property(cc.ProgressBar)
    ], TiniArcher_GameView.prototype, "pgbPowerBar", void 0);
    __decorate([
        property(cc.Node)
    ], TiniArcher_GameView.prototype, "nArrow", void 0);
    TiniArcher_GameView = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcZ2FtZVxcVGluaUFyY2hlci5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQTZEQztRQTFERyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2QixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFTLEdBQUcsR0FBRyxDQUFDOztJQStDcEIsQ0FBQztJQTdDRyxvQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELDBDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEtBQWU7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbURBQXFCLEdBQXJCO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhGLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUU5RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3BFO0lBQ0wsQ0FBQztJQUVELHdDQUFVLEdBQVYsVUFBVyxLQUFhLEVBQUUsS0FBYTtRQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkQsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNuRixnREFBZ0Q7WUFDaEQsU0FBUyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDeEU7YUFBTTtZQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUNoRTtJQUdMLENBQUM7SUF6REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0REFDVTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNLO0lBTk4sbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0E2RHZDO0lBQUQsMEJBQUM7Q0E3REQsQUE2REMsQ0E3RGdELEVBQUUsQ0FBQyxTQUFTLEdBNkQ1RDtrQkE3RG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbmlBcmNoZXJfR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHBnYlBvd2VyQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuQXJyb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG1heEZvcmNlID0gMTAwMDtcclxuICAgIG1heEFuZ2xlID0gTWF0aC5QSSAvIDQ7XHJcbiAgICBjdXJyZW50Rm9yY2UgPSAwO1xyXG4gICAgY3VycmVudEFuZ2xlID0gMDtcclxuICAgIGlzQ2hhcmdpbmcgPSBmYWxzZTtcclxuICAgIGNoYXJnZVJhdGUgPSA1MDtcclxuICAgIGFuZ2xlUmF0ZSA9IDAuNTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NoYXJnaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGb3JjZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucGdiUG93ZXJCYXIucHJvZ3Jlc3MgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuaW5jcmVhc2VGb3JjZUFuZEFuZ2xlLCAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NoYXJnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG9vdEFycm93KHRoaXMuY3VycmVudEZvcmNlLCB0aGlzLmN1cnJlbnRBbmdsZSk7XHJcbiAgICAgICAgdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW5jcmVhc2VGb3JjZUFuZEFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZWFzZUZvcmNlQW5kQW5nbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaGFyZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb3JjZSA9IE1hdGgubWluKHRoaXMuY3VycmVudEZvcmNlICsgdGhpcy5jaGFyZ2VSYXRlLCB0aGlzLm1heEZvcmNlKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRBbmdsZSArIHRoaXMuYW5nbGVSYXRlLCB0aGlzLm1heEFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGdiUG93ZXJCYXIucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRGb3JjZSAvIHRoaXMubWF4Rm9yY2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5BcnJvdy5hbmdsZSA9ICtjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXModGhpcy5jdXJyZW50QW5nbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG9vdEFycm93KGZvcmNlOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmlnaWRCb2R5ID0gdGhpcy5uQXJyb3cuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKHJpZ2lkQm9keSkge1xyXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IGNjLnYyKE1hdGguY29zKGFuZ2xlKSAqIGZvcmNlICogMTAsIE1hdGguc2luKGFuZ2xlKSAqIGZvcmNlICogMTApO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ2FsY3VsYXRlZCB2ZWxvY2l0eTpcIiwgdmVsb2NpdHkpO1xyXG4gICAgICAgICAgICByaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBcnJvdyB2ZWxvY2l0eSBhZnRlciBzaG9vdDpcIiwgcmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibkFycm93IGRvZXMgbm90IGhhdmUgYSBSaWdpZEJvZHkgY29tcG9uZW50IVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG59Il19