
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvVGluaUFyY2hlci5Db2xsaWRlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsa0VBQTZEO0FBR3ZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFZO0lBQTdEOztJQTZDQSxDQUFDO0lBekNHLG9DQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqRCxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQzlELENBQUM7SUFFRCxtQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDhDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2hCLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQ25ELDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzdDLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1Qyw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUM3RSw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDNUMsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUNmLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFFLHNCQUFzQixFQUFDLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUU1RTtRQUVELElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDZiw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUNuRCw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1lBQ2YsNkJBQW1CLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZDLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQy9CO0lBRUwsQ0FBQztJQTNDZ0IsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0E2Q3ZDO0lBQUQsMEJBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q2dELEVBQUUsQ0FBQyxTQUFTLEdBNkM1RDtrQkE3Q29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVGluaUFyY2hlcl9HYW1lVmlldyBmcm9tIFwiLi9nYW1lL1RpbmlBcmNoZXIuR2FtZVZpZXdcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL1RpbmlBcmNoZXIuR2xvYmFsXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW5pQXJjaGVyX0NvbGxpZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlOyAgXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMSkge1xuICAgICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc0Fycm93Rmx5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmlzVGFyZ2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UublRyYWplY3RvcnlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICBzZWxmLm5vZGUucGFyZW50ID0gb3RoZXIubm9kZTtcbiAgICAgICAgICAgIGxldCBjb2xsaXNpb25Qb2ludCA9IHNlbGYud29ybGQuYWFiYi5jZW50ZXI7XG4gICAgICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLnNoYWtlVGFyZ2V0KFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UublN0aWNrKVxuICAgICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS51cGRhdGVTdGF0dXMoKTtcbiAgICAgICAgICAgIGxldCBsb2NhbFBvaW50ID0gb3RoZXIubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjb2xsaXNpb25Qb2ludCk7XG4gICAgICAgICAgICBzZWxmLm5vZGUuc2V0UG9zaXRpb24obG9jYWxQb2ludC54LCBsb2NhbFBvaW50LnkpO1xuICAgICAgICAgICAgc2VsZi5ub2RlLmFuZ2xlXG4gICAgICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLnJlc2V0QmcoKTtcbiAgICAgICAgICAgY29uc29sZS5sb2coICdiYWNrZ3JvdW5kIGRpIGNodXllbicsVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc0JnTW92ZSlcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYob3RoZXIudGFnID09IDIpIHtcbiAgICAgICAgICAgIFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UuaXNBcnJvd0ZseWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc01pc3MgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5ub2RlLnBhcmVudCA9IG90aGVyLm5vZGU7XG4gICAgICAgICAgICBsZXQgY29sbGlzaW9uUG9pbnQgPSBzZWxmLndvcmxkLmFhYmIuY2VudGVyO1xuICAgICAgICAgICAgbGV0IGxvY2FsUG9pbnQgPSBvdGhlci5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNvbGxpc2lvblBvaW50KTtcbiAgICAgICAgICAgIHNlbGYubm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvaW50LngsIGxvY2FsUG9pbnQueSk7XG4gICAgICAgICAgICBzZWxmLm5vZGUuYW5nbGVcbiAgICAgICAgICAgIFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UucmVzZXRCZygpO1xuICAgICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS51cGRhdGVTdGF0dXMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFuIHZhbyBjb3QgXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==