
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TiniArcher/scripts/TiniArcher.ColliderManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    };
    TiniArcher_Collider.prototype.start = function () {
    };
    TiniArcher_Collider.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) {
            TiniArcher_GameView_1.default.instance.isArrowFlying = false;
            TiniArcher_GameView_1.default.instance.isBgMove = true;
            TiniArcher_GameView_1.default.instance.indexBg++;
            if (TiniArcher_GameView_1.default.instance.indexBg > 2) {
                TiniArcher_GameView_1.default.instance.indexBg = 0;
            }
            this.scheduleOnce(function () {
                TiniArcher_GameView_1.default.instance.spawArrow();
            }, 2);
            console.log("di chuyen ", TiniArcher_GameView_1.default.instance.isBgMove);
            TiniArcher_GameView_1.default.instance.nTrajectoryNode.removeAllChildren();
            self.node.parent = other.node;
            //TiniArcher_GameView.instance.spawArrow();
            console.log('va cham');
            var collisionPoint = self.world.aabb.center;
            TiniArcher_GameView_1.default.instance.shakeTarget(TiniArcher_GameView_1.default.instance.nStick);
            // Chuyển đổi tọa độ va chạm từ không gian thế giới sang không gian của bia
            var localPoint = other.node.convertToNodeSpaceAR(collisionPoint);
            self.node.setPosition(localPoint.x, localPoint.y);
            console.log("old ", localPoint);
            // Giữ nguyên góc của mũi tên
            self.node.angle;
        }
    };
    TiniArcher_Collider = __decorate([
        ccclass
    ], TiniArcher_Collider);
    return TiniArcher_Collider;
}(cc.Component));
exports.default = TiniArcher_Collider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvVGluaUFyY2hlci5Db2xsaWRlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFZO0lBQTdEOztJQTJDQSxDQUFDO0lBdkNHLG9DQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsbUNBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNoQiw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUNuRCw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUM3Qyw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsSUFBRyw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDekMsNkJBQW1CLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM3QyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7WUFFSixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakUsNkJBQW1CLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDOUIsMkNBQTJDO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzVDLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsNkJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzdFLDJFQUEyRTtZQUMzRSxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzlCLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtTQUdsQjtJQUVMLENBQUM7SUF6Q2dCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBMkN2QztJQUFELDBCQUFDO0NBM0NELEFBMkNDLENBM0NnRCxFQUFFLENBQUMsU0FBUyxHQTJDNUQ7a0JBM0NvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFRpbmlBcmNoZXJfR2FtZVZpZXcgZnJvbSBcIi4vZ2FtZS9UaW5pQXJjaGVyLkdhbWVWaWV3XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW5pQXJjaGVyX0NvbGxpZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxKSB7XG4gICAgICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmlzQXJyb3dGbHlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UuaXNCZ01vdmUgPSB0cnVlO1xuICAgICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pbmRleEJnKys7XG4gICAgICAgICAgICBpZihUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmluZGV4QmcgPiAyKSB7XG4gICAgICAgICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pbmRleEJnID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLnNwYXdBcnJvdygpO1xuICAgICAgICAgICAgfSwyKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpIGNodXllbiBcIiwgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc0JnTW92ZSk7XG4gICAgICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLm5UcmFqZWN0b3J5Tm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgc2VsZi5ub2RlLnBhcmVudCA9IG90aGVyLm5vZGU7XG4gICAgICAgICAgICAvL1RpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2Uuc3Bhd0Fycm93KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmEgY2hhbScpO1xuICAgICAgICAgICAgbGV0IGNvbGxpc2lvblBvaW50ID0gc2VsZi53b3JsZC5hYWJiLmNlbnRlcjtcbiAgICAgICAgICAgIFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2Uuc2hha2VUYXJnZXQoVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5uU3RpY2spXG4gICAgICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgdOG7jWEgxJHhu5kgdmEgY2jhuqFtIHThu6sga2jDtG5nIGdpYW4gdGjhur8gZ2nhu5tpIHNhbmcga2jDtG5nIGdpYW4gY+G7p2EgYmlhXG4gICAgICAgICAgICBsZXQgbG9jYWxQb2ludCA9IG90aGVyLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoY29sbGlzaW9uUG9pbnQpO1xuICAgICAgICAgICAgc2VsZi5ub2RlLnNldFBvc2l0aW9uKGxvY2FsUG9pbnQueCwgbG9jYWxQb2ludC55KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2xkIFwiLGxvY2FsUG9pbnQpXG4gICAgICAgICAgICAvLyBHaeG7ryBuZ3V5w6puIGfDs2MgY+G7p2EgbcWpaSB0w6puXG4gICAgICAgICAgICBzZWxmLm5vZGUuYW5nbGVcbiAgICAgICAgICAgXG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=