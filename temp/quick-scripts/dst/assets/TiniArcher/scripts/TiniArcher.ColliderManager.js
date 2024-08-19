
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
            var arrowRigidBody = self.node.getComponent(cc.RigidBody);
            arrowRigidBody.gravityScale = 0;
            arrowRigidBody.linearVelocity = cc.v2(0, 0);
            arrowRigidBody.angularVelocity = 0;
            self.node.parent = other.node;
            // Lấy vị trí va chạm chính xác
            var collisionPoint = self.world.aabb.center;
            // Chuyển đổi tọa độ va chạm từ không gian thế giới sang không gian của bia
            var localPoint = other.node.convertToNodeSpaceAR(collisionPoint);
            self.node.setPosition(localPoint.x, localPoint.y);
            console.log("old ", localPoint);
            // Giữ nguyên góc của mũi tên
            self.node.angle;
            // Gắn mũi tên vào bia
            // Gắn mũi tên vào bia
            // Gắn mũi tên vào bia để nó không rơi ra
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcVGluaUFyY2hlci5Db2xsaWRlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7O0lBaURBLENBQUM7SUE3Q0csb0NBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxtQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDhDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxjQUFjLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUNoQyxjQUFjLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDOUIsK0JBQStCO1lBQy9CLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUU1QywyRUFBMkU7WUFDM0UsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxVQUFVLENBQUMsQ0FBQTtZQUM5Qiw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFaEIsc0JBQXNCO1lBRXRCLHNCQUFzQjtZQUl0Qix5Q0FBeUM7U0FTNUM7SUFFTCxDQUFDO0lBL0NnQixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQWlEdkM7SUFBRCwwQkFBQztDQWpERCxBQWlEQyxDQWpEZ0QsRUFBRSxDQUFDLFNBQVMsR0FpRDVEO2tCQWpEb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFRpbmlBcmNoZXJfR2FtZVZpZXcgZnJvbSBcIi4vZ2FtZS9UaW5pQXJjaGVyLkdhbWVWaWV3XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluaUFyY2hlcl9Db2xsaWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJvd1JpZ2lkQm9keSA9IHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgYXJyb3dSaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgYXJyb3dSaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgYXJyb3dSaWdpZEJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgc2VsZi5ub2RlLnBhcmVudCA9IG90aGVyLm5vZGU7XHJcbiAgICAgICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSB2YSBjaOG6oW0gY2jDrW5oIHjDoWNcclxuICAgICAgICAgICAgbGV0IGNvbGxpc2lvblBvaW50ID0gc2VsZi53b3JsZC5hYWJiLmNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgdOG7jWEgxJHhu5kgdmEgY2jhuqFtIHThu6sga2jDtG5nIGdpYW4gdGjhur8gZ2nhu5tpIHNhbmcga2jDtG5nIGdpYW4gY+G7p2EgYmlhXHJcbiAgICAgICAgICAgIGxldCBsb2NhbFBvaW50ID0gb3RoZXIubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjb2xsaXNpb25Qb2ludCk7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvaW50LngsIGxvY2FsUG9pbnQueSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2xkIFwiLGxvY2FsUG9pbnQpXHJcbiAgICAgICAgICAgIC8vIEdp4buvIG5ndXnDqm4gZ8OzYyBj4bunYSBtxalpIHTDqm5cclxuICAgICAgICAgICAgc2VsZi5ub2RlLmFuZ2xlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEfhuq9uIG3FqWkgdMOqbiB2w6BvIGJpYVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEfhuq9uIG3FqWkgdMOqbiB2w6BvIGJpYVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEfhuq9uIG3FqWkgdMOqbiB2w6BvIGJpYSDEkeG7gyBuw7Mga2jDtG5nIHLGoWkgcmFcclxuICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICBcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19