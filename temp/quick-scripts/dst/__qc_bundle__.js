
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/TiniArcher/scripts/TiniArcher.ColliderManager');
require('./assets/TiniArcher/scripts/TiniArcher.GameManager');
require('./assets/TiniArcher/scripts/TiniArcher.Global');
require('./assets/TiniArcher/scripts/game/TiniArcher.GameView');
require('./assets/TiniArcher/scripts/game/TiniArcher.Trajectory');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TiniArcher/scripts/TiniArcher.GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1981fS7tJFEaI10LK0UTmnJ', 'TiniArcher.GameManager');
// TiniArcher/scripts/TiniArcher.GameManager.ts

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
var TiniArcher_GameManager = /** @class */ (function (_super) {
    __extends(TiniArcher_GameManager, _super);
    function TiniArcher_GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pfGameView = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    TiniArcher_GameManager.prototype.onLoad = function () { };
    TiniArcher_GameManager.prototype.start = function () {
    };
    TiniArcher_GameManager.prototype.clickPlay = function () {
        var game = cc.instantiate(this.pfGameView).getComponent(TiniArcher_GameView_1.default);
        this.node.addChild(game.node);
    };
    __decorate([
        property(cc.Prefab)
    ], TiniArcher_GameManager.prototype, "pfGameView", void 0);
    TiniArcher_GameManager = __decorate([
        ccclass
    ], TiniArcher_GameManager);
    return TiniArcher_GameManager;
}(cc.Component));
exports.default = TiniArcher_GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcVGluaUFyY2hlci5HYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixrRUFBNkQ7QUFHdkQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUFtQkM7UUFmRyxnQkFBVSxHQUFjLElBQUksQ0FBQzs7UUFjN0IsaUJBQWlCO0lBQ3JCLENBQUM7SUFiRyx3QkFBd0I7SUFFeEIsdUNBQU0sR0FBTixjQUFXLENBQUM7SUFFWixzQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDBDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsNkJBQW1CLENBQUMsQ0FBQTtRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ1M7SUFKWixzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQW1CMUM7SUFBRCw2QkFBQztDQW5CRCxBQW1CQyxDQW5CbUQsRUFBRSxDQUFDLFNBQVMsR0FtQi9EO2tCQW5Cb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFRpbmlBcmNoZXJfR2FtZVZpZXcgZnJvbSBcIi4vZ2FtZS9UaW5pQXJjaGVyLkdhbWVWaWV3XCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW5pQXJjaGVyX0dhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZkdhbWVWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tQbGF5KCkge1xyXG4gICAgICAgIGxldCBnYW1lID0gIGNjLmluc3RhbnRpYXRlKHRoaXMucGZHYW1lVmlldykuZ2V0Q29tcG9uZW50KFRpbmlBcmNoZXJfR2FtZVZpZXcpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWUubm9kZSk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TiniArcher/scripts/TiniArcher.Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc2b2d7Q/lHcLO4BWVTI4dU', 'TiniArcher.Global');
// TiniArcher/scripts/TiniArcher.Global.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var Global = /** @class */ (function () {
    function Global() {
    }
    return Global;
}());
exports.Global = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcVGluaUFyY2hlci5HbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUlBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW5pQXJjaGVyX0dhbWVWaWV3IGZyb20gXCIuL1RpbmlBcmNoZXIuR2FtZVZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWwge1xyXG5cclxuICAgIFxyXG4gICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
        _this.pfCircle = null;
        _this.maxForce = 1000;
        _this.maxAngle = 45;
        _this.startForce = 0;
        _this.startAngle = 0;
        _this.currentForce = 0;
        _this.currentAngle = 0;
        _this.isCharging = false;
        _this.trajectoryPoints = []; // Lưu các điểm quỹ đạo
        _this.isArrowFlying = false; // Đánh dấu khi mũi tên đang bay
        _this.trajectoryIndex = 0; // Chỉ số hiện tại trong quỹ đạo
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
    };
    TiniArcher_GameView.prototype.onTouchEnd = function (event) {
        this.isCharging = false;
        this.nTrajectoryNode.removeAllChildren();
        this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
        this.updatePowerBar();
        this.trajectoryPoints = this.updateTrajectory(this.currentForce, this.currentAngle);
        this.shootArrow();
        //this.shootArrow(this.currentForce,this.currentAngle);
    };
    TiniArcher_GameView.prototype.shootArrow = function () {
        this.isArrowFlying = true;
        this.trajectoryIndex = 0;
    };
    TiniArcher_GameView.prototype.trajectoryCircle = function (points) {
        var _this = this;
        this.nTrajectoryNode.removeAllChildren();
        points.forEach(function (e) {
            var cricle = cc.instantiate(_this.pfCircle);
            cricle.setPosition(e);
            _this.nTrajectoryNode.addChild(cricle);
        });
    };
    TiniArcher_GameView.prototype.updateTrajectory = function (force, angle) {
        var points = [];
        var startPosition = this.nArrow.position;
        for (var i = 0; i < 20; i++) {
            var t = i * 0.03;
            var x = startPosition.x + force * Math.cos(angle * Math.PI / 180) * t;
            var y = startPosition.y + force * Math.sin(angle * Math.PI / 180) * t - 0.5 * 980 * t * t;
            points.push(cc.v2(x, y));
        }
        return points;
    };
    TiniArcher_GameView.prototype.updateAngleArrow = function (angle) {
        this.nArrow.angle = angle;
    };
    TiniArcher_GameView.prototype.updatePowerBar = function () {
        this.pgbPowerBar.progress = this.currentForce / this.maxForce;
    };
    TiniArcher_GameView.prototype.updateArrowPos = function () {
        var newY = this.startAngle + (this.currentAngle / this.maxAngle) * 100;
        //let newX = this.startAngle - (this.currentAngle / this.maxAngle) * 5;
        this.nArrow.setPosition(this.nArrow.x, newY);
    };
    TiniArcher_GameView.prototype.resetArrowPosition = function () {
        this.nArrow.setPosition(this.nArrow.x, this.currentAngle);
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
                this.nArrow.setPosition(nextPoint);
                var direction = nextPoint.sub(currentPoint);
                var angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
                this.nArrow.angle = angle;
                this.trajectoryIndex++;
            }
            else {
                var rigidBody = this.nArrow.getComponent(cc.RigidBody);
                rigidBody.type = cc.RigidBodyType.Dynamic;
                //this.isArrowFlying = false;
            }
        }
        else if (this.nArrow.getComponent(cc.RigidBody).type === cc.RigidBodyType.Dynamic) {
            // Cập nhật góc mũi tên dựa trên hướng của vận tốc
            var velocity = this.nArrow.getComponent(cc.RigidBody).linearVelocity;
            if (velocity.mag() > 0) {
                var angle = Math.atan2(velocity.y, velocity.x) * 180 / Math.PI;
                this.nArrow.angle = angle;
            }
        }
        else {
            this.currentForce = Math.max(this.currentForce - 1000 * dt, this.startForce);
            this.currentAngle = Math.max(this.currentAngle - 45 * dt, this.startAngle);
            this.updateAngleArrow(this.currentAngle);
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
    ], TiniArcher_GameView.prototype, "nbullseye", void 0);
    __decorate([
        property(cc.Node)
    ], TiniArcher_GameView.prototype, "nTrajectoryNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], TiniArcher_GameView.prototype, "pfCircle", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcZ2FtZVxcVGluaUFyY2hlci5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQStJQztRQTVJRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLHNCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFFLHVCQUF1QjtRQUMvQyxtQkFBYSxHQUFHLEtBQUssQ0FBQyxDQUFFLGdDQUFnQztRQUN4RCxxQkFBZSxHQUFHLENBQUMsQ0FBQyxDQUFFLGdDQUFnQzs7SUFxSDFELENBQUM7NEJBL0lvQixtQkFBbUI7SUE4QnBDLG9DQUFNLEdBQU47UUFDSSxxQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFB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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnRUFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNPO0lBZlYsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0ErSXZDO0lBQUQsMEJBQUM7Q0EvSUQsQUErSUMsQ0EvSWdELEVBQUUsQ0FBQyxTQUFTLEdBK0k1RDtrQkEvSW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbmlBcmNoZXJfR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogVGluaUFyY2hlcl9HYW1lVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwZ2JQb3dlckJhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkFycm93OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5idWxsc2V5ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuVHJhamVjdG9yeU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZkNpcmNsZTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBtYXhGb3JjZSA9IDEwMDA7XHJcbiAgICBtYXhBbmdsZSA9IDQ1O1xyXG4gICAgc3RhcnRGb3JjZSA9IDA7XHJcbiAgICBzdGFydEFuZ2xlID0gMDtcclxuICAgIGN1cnJlbnRGb3JjZSA9IDA7XHJcbiAgICBjdXJyZW50QW5nbGUgPSAwO1xyXG4gICAgaXNDaGFyZ2luZyA9IGZhbHNlO1xyXG4gICAgdHJhamVjdG9yeVBvaW50cyA9IFtdOyAgLy8gTMawdSBjw6FjIMSRaeG7g20gcXXhu7kgxJHhuqFvXHJcbiAgICBpc0Fycm93Rmx5aW5nID0gZmFsc2U7ICAvLyDEkMOhbmggZOG6pXUga2hpIG3FqWkgdMOqbiDEkWFuZyBiYXlcclxuICAgIHRyYWplY3RvcnlJbmRleCA9IDA7ICAvLyBDaOG7iSBz4buRIGhp4buHbiB04bqhaSB0cm9uZyBxdeG7uSDEkeG6oW9cclxuXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5Ub3VjaCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NoYXJnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uVHJhamVjdG9yeU5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTsgXHJcbiAgICAgICAgdGhpcy50cmFqZWN0b3J5Q2lyY2xlKHRoaXMudXBkYXRlVHJhamVjdG9yeSh0aGlzLmN1cnJlbnRGb3JjZSwgdGhpcy5jdXJyZW50QW5nbGUpKTsgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlUG93ZXJCYXIoKTsgICBcclxuICAgICAgICB0aGlzLnRyYWplY3RvcnlQb2ludHMgPSB0aGlzLnVwZGF0ZVRyYWplY3RvcnkodGhpcy5jdXJyZW50Rm9yY2UsIHRoaXMuY3VycmVudEFuZ2xlKTtcclxuICAgICAgICB0aGlzLnNob290QXJyb3coKTtcclxuICAgICAgICAvL3RoaXMuc2hvb3RBcnJvdyh0aGlzLmN1cnJlbnRGb3JjZSx0aGlzLmN1cnJlbnRBbmdsZSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzaG9vdEFycm93KCkge1xyXG4gICAgICAgIHRoaXMuaXNBcnJvd0ZseWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50cmFqZWN0b3J5SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0cmFqZWN0b3J5Q2lyY2xlKHBvaW50cykge1xyXG4gICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgcG9pbnRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjcmljbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmQ2lyY2xlKVxyXG4gICAgICAgICAgICBjcmljbGUuc2V0UG9zaXRpb24oZSk7XHJcbiAgICAgICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLmFkZENoaWxkKGNyaWNsZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlVHJhamVjdG9yeShmb3JjZSwgYW5nbGUpIHtcclxuICAgICAgICBsZXQgcG9pbnRzID0gW107XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zaXRpb24gPSB0aGlzLm5BcnJvdy5wb3NpdGlvbjsgXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHQgPSBpICogMC4wMztcclxuICAgICAgICAgICAgbGV0IHggPSBzdGFydFBvc2l0aW9uLnggKyBmb3JjZSAqIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiB0O1xyXG4gICAgICAgICAgICBsZXQgeSA9ICBzdGFydFBvc2l0aW9uLnkgKyBmb3JjZSAqIE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiB0IC0gMC41ICogOTgwICogdCAqIHQ7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGNjLnYyKHgseSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9pbnRzO1xyXG4gICAgfVxyXG5cclxuICBcclxuICAgIHVwZGF0ZUFuZ2xlQXJyb3coYW5nbGUpIHtcclxuICAgICAgICB0aGlzLm5BcnJvdy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBvd2VyQmFyKCkge1xyXG4gICAgICAgIHRoaXMucGdiUG93ZXJCYXIucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRGb3JjZS90aGlzLm1heEZvcmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFycm93UG9zKCkge1xyXG4gICAgICAgIGxldCBuZXdZID0gdGhpcy5zdGFydEFuZ2xlICsgKHRoaXMuY3VycmVudEFuZ2xlIC8gdGhpcy5tYXhBbmdsZSkgKiAxMDBcclxuICAgICAgICAvL2xldCBuZXdYID0gdGhpcy5zdGFydEFuZ2xlIC0gKHRoaXMuY3VycmVudEFuZ2xlIC8gdGhpcy5tYXhBbmdsZSkgKiA1O1xyXG4gICAgICAgIHRoaXMubkFycm93LnNldFBvc2l0aW9uKHRoaXMubkFycm93LngsIG5ld1kpO1xyXG4gICAgfVxyXG4gICAgcmVzZXRBcnJvd1Bvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubkFycm93LnNldFBvc2l0aW9uKHRoaXMubkFycm93LngsIHRoaXMuY3VycmVudEFuZ2xlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNDaGFyZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb3JjZSA9IE1hdGgubWluKHRoaXMuY3VycmVudEZvcmNlICsgMTAwMCAqIGR0LCB0aGlzLm1heEZvcmNlKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRBbmdsZSArIDQ1ICogZHQsIHRoaXMubWF4QW5nbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvYyBiYW4gXCIsIHRoaXMuY3VycmVudEFuZ2xlKTtcclxuICAgICAgICAgICAgdGhpcy50cmFqZWN0b3J5Q2lyY2xlKHRoaXMudXBkYXRlVHJhamVjdG9yeSh0aGlzLmN1cnJlbnRGb3JjZSx0aGlzLmN1cnJlbnRBbmdsZSkpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFuZ2xlQXJyb3codGhpcy5jdXJyZW50QW5nbGUpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJyb3dQb3MoKTtcclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5pc0Fycm93Rmx5aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWplY3RvcnlJbmRleCA8IHRoaXMudHJhamVjdG9yeVBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gdGhpcy50cmFqZWN0b3J5UG9pbnRzW3RoaXMudHJhamVjdG9yeUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0UG9pbnQgPSB0aGlzLnRyYWplY3RvcnlQb2ludHNbdGhpcy50cmFqZWN0b3J5SW5kZXggKyAxXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5BcnJvdy5zZXRQb3NpdGlvbihuZXh0UG9pbnQpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gbmV4dFBvaW50LnN1YihjdXJyZW50UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkaXJlY3Rpb24ueSwgZGlyZWN0aW9uLngpICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICAgICAgICAgIHRoaXMubkFycm93LmFuZ2xlID0gYW5nbGU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhamVjdG9yeUluZGV4Kys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmlnaWRCb2R5ID0gdGhpcy5uQXJyb3cuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICByaWdpZEJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5pc0Fycm93Rmx5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5uQXJyb3cuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkudHlwZSA9PT0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljKSB7XHJcbiAgICAgICAgICAgIC8vIEPhuq1wIG5o4bqtdCBnw7NjIG3FqWkgdMOqbiBk4buxYSB0csOqbiBoxrDhu5tuZyBj4bunYSB24bqtbiB04buRY1xyXG4gICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSB0aGlzLm5BcnJvdy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgaWYgKHZlbG9jaXR5Lm1hZygpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih2ZWxvY2l0eS55LCB2ZWxvY2l0eS54KSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5BcnJvdy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9yY2UgPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRGb3JjZSAtIDEwMDAgKiBkdCwgdGhpcy5zdGFydEZvcmNlKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRBbmdsZSAtIDQ1ICogZHQsIHRoaXMuc3RhcnRBbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5nbGVBcnJvdyh0aGlzLmN1cnJlbnRBbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlUG93ZXJCYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TiniArcher/scripts/game/TiniArcher.Trajectory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e007h5rj1MDZI6KhvU/d9B', 'TiniArcher.Trajectory');
// TiniArcher/scripts/game/TiniArcher.Trajectory.ts

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
        _this.pfCircle = null;
        _this.maxForce = 1000;
        _this.maxAngle = 45;
        _this.startForce = 0;
        _this.startAngle = 0;
        _this.gravity = -9.8;
        _this.currentForce = 100;
        _this.currentAngle = 0;
        _this.isCharging = false;
        return _this;
    }
    TiniArcher_GameView_1 = TiniArcher_GameView;
    TiniArcher_GameView.prototype.onLoad = function () {
        TiniArcher_GameView_1.instance = this;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    TiniArcher_GameView.prototype.onTouchStart = function (event) {
        this.isCharging = true;
        this.currentForce = 100;
        this.currentAngle = 0;
        this.pgbPowerBar.progress = 0;
        this.trajectory(this.updateTrajcetor(this.forceVec(this.currentAngle, this.currentAngle)));
        this.schedule(this.increaseForceAndAngle, 0.05);
    };
    TiniArcher_GameView.prototype.onTouchEnd = function (event) {
        this.isCharging = false;
        console.log("toc do ban ", this.currentForce);
        this.pgbPowerBar.progress = 0;
        this.nArrow.angle = 0;
        this.unschedule(this.increaseForceAndAngle);
        this.nTrajectoryNode.removeAllChildren();
    };
    TiniArcher_GameView.prototype.increaseForceAndAngle = function () {
        if (this.isCharging) {
            this.currentForce = Math.min(this.currentForce + 50, this.maxForce);
            this.currentAngle = Math.min(this.currentAngle + 1, this.maxAngle);
            this.pgbPowerBar.progress = this.currentForce / this.maxForce;
            console.log("this prg ", this.pgbPowerBar.progress);
        }
    };
    TiniArcher_GameView.prototype.trajectory = function (points) {
        var _this = this;
        var parentNode = this.nTrajectoryNode;
        parentNode.removeAllChildren();
        points.forEach(function (point) {
            var cricle = cc.instantiate(_this.pfCircle);
            cricle.setPosition(point);
            parentNode.addChild(cricle);
        });
    };
    TiniArcher_GameView.prototype.updateTrajcetor = function (force) {
        var points = [];
        var initialPosition = this.nTrajectoryNode.position;
        for (var i = 0; i < 50; i++) {
            var t = i * 0.1;
            var x = initialPosition.x * t + force.x;
            var y = initialPosition.y * t + 0.5 * -9.8 * t * t + force.y;
            points.push(cc.v2(x, y));
        }
        return points;
    };
    TiniArcher_GameView.prototype.forceVec = function (force, angle) {
        var v = new cc.Vec2(force * Math.cos(angle), force * Math.sin(angle));
        return v;
    };
    // }
    // trajectoryCricle(points) {
    //     let parentNode = this.nTrajectoryNode;
    //     parentNode.removeAllChildren();
    //     points.forEach(point => {
    //         let cricle = cc.instantiate(this.pfCircle)
    //         cricle.setPosition(point);
    //         parentNode.addChild(cricle);
    //     });
    // }
    // }
    TiniArcher_GameView.prototype.update = function (dt) {
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
    __decorate([
        property(cc.Prefab)
    ], TiniArcher_GameView.prototype, "pfCircle", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcZ2FtZVxcVGluaUFyY2hlci5UcmFqZWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBd0dDO1FBckdHLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUduQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsYUFBTyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7O0lBZ0Z2QixDQUFDOzRCQXhHb0IsbUJBQW1CO0lBMkJwQyxvQ0FBTSxHQUFOO1FBQ0kscUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUs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QUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBd0d2QztJQUFELDBCQUFDO0NBeEdELEFBd0dDLENBeEdnRCxFQUFFLENBQUMsU0FBUyxHQXdHNUQ7a0JBeEdvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgVGluaUFyY2hlcl9UcmFqZWN0b3J5IGZyb20gXCIuL1RpbmlBcmNoZXIuVHJhamVjdG9yeVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluaUFyY2hlcl9HYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBUaW5pQXJjaGVyX0dhbWVWaWV3ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHBnYlBvd2VyQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuQXJyb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmJ1bGxzZXllOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5UcmFqZWN0b3J5Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBmQ2lyY2xlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIG1heEZvcmNlID0gMTAwMDtcclxuICAgIG1heEFuZ2xlID0gNDU7XHJcbiAgICBzdGFydEZvcmNlID0gMDtcclxuICAgIHN0YXJ0QW5nbGUgPSAwO1xyXG4gICAgZ3Jhdml0eSA9IC05Ljg7XHJcbiAgICBjdXJyZW50Rm9yY2UgPSAxMDA7XHJcbiAgICBjdXJyZW50QW5nbGUgPSAwO1xyXG4gICAgaXNDaGFyZ2luZyA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NoYXJnaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGb3JjZSA9IDEwMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy50cmFqZWN0b3J5KHRoaXMudXBkYXRlVHJhamNldG9yKHRoaXMuZm9yY2VWZWModGhpcy5jdXJyZW50QW5nbGUsdGhpcy5jdXJyZW50QW5nbGUpKSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmluY3JlYXNlRm9yY2VBbmRBbmdsZSwgMC4wNSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZChldmVudDogY2MuVG91Y2gpIHtcclxuICAgICAgICB0aGlzLmlzQ2hhcmdpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvYyBkbyBiYW4gXCIsIHRoaXMuY3VycmVudEZvcmNlKTtcclxuICAgICAgICB0aGlzLnBnYlBvd2VyQmFyLnByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLm5BcnJvdy5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW5jcmVhc2VGb3JjZUFuZEFuZ2xlKTtcclxuICAgICAgICB0aGlzLm5UcmFqZWN0b3J5Tm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluY3JlYXNlRm9yY2VBbmRBbmdsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NoYXJnaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvcmNlID0gTWF0aC5taW4odGhpcy5jdXJyZW50Rm9yY2UgKyA1MCwgdGhpcy5tYXhGb3JjZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuZ2xlID0gTWF0aC5taW4odGhpcy5jdXJyZW50QW5nbGUgKyAxLCB0aGlzLm1heEFuZ2xlKTtcclxuICAgICAgICAgICAgdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEZvcmNlL3RoaXMubWF4Rm9yY2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBwcmcgXCIsdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWplY3RvcnkocG9pbnRzKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSB0aGlzLm5UcmFqZWN0b3J5Tm9kZTtcclxuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3JpY2xlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZkNpcmNsZSlcclxuICAgICAgICAgICAgY3JpY2xlLnNldFBvc2l0aW9uKHBvaW50KTtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChjcmljbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICB1cGRhdGVUcmFqY2V0b3IoZm9yY2U6IGNjLlZlYzIpIHtcclxuICAgICAgICBsZXQgcG9pbnRzID0gW107XHJcbiAgICAgICAgbGV0IGluaXRpYWxQb3NpdGlvbiA9IHRoaXMublRyYWplY3RvcnlOb2RlLnBvc2l0aW9uO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdCA9IGkgKiAwLjE7XHJcbiAgICAgICAgICAgIGxldCB4ID0gaW5pdGlhbFBvc2l0aW9uLnggKiB0ICsgZm9yY2UueDtcclxuICAgICAgICAgICAgbGV0IHkgPSBpbml0aWFsUG9zaXRpb24ueSAqIHQgKyAwLjUgKiAtOS44ICogdCAqIHQgKyBmb3JjZS55O1xyXG4gICAgICAgICAgICBwb2ludHMucHVzaChjYy52Mih4LCB5KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBmb3JjZVZlYyhmb3JjZSwgYW5nbGUpIHtcclxuICAgICAgICBsZXQgdiA9IG5ldyBjYy5WZWMyKGZvcmNlICogTWF0aC5jb3MoYW5nbGUpLCBmb3JjZSAqIE1hdGguc2luKGFuZ2xlKSk7XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdHJhamVjdG9yeUNyaWNsZShwb2ludHMpIHtcclxuICAgIC8vICAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMublRyYWplY3RvcnlOb2RlO1xyXG4gICAgLy8gICAgIHBhcmVudE5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgIC8vICAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxldCBjcmljbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmQ2lyY2xlKVxyXG4gICAgLy8gICAgICAgICBjcmljbGUuc2V0UG9zaXRpb24ocG9pbnQpO1xyXG4gICAgLy8gICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKGNyaWNsZSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------
