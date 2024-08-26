
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
require('./assets/TiniArcher/scripts/game/TiniArcher.BackGround');
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
    Global.score = 0;
    Global.numberArrow = 6;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvVGluaUFyY2hlci5HbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUlBLENBQUM7SUFGUSxZQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ1Ysa0JBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsYUFBQztDQUpELEFBSUMsSUFBQTtBQUpZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjbGFzcyBHbG9iYWwge1xuXG4gIHN0YXRpYyBzY29yZSA9IDA7XG4gIHN0YXRpYyBudW1iZXJBcnJvdyA9IDY7XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvVGluaUFyY2hlci5HYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixrRUFBNkQ7QUFHdkQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUFtQkM7UUFmRyxnQkFBVSxHQUFjLElBQUksQ0FBQzs7UUFjN0IsaUJBQWlCO0lBQ3JCLENBQUM7SUFiRyx3QkFBd0I7SUFFeEIsdUNBQU0sR0FBTixjQUFXLENBQUM7SUFFWixzQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDBDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsNkJBQW1CLENBQUMsQ0FBQTtRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ1M7SUFKWixzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQW1CMUM7SUFBRCw2QkFBQztDQW5CRCxBQW1CQyxDQW5CbUQsRUFBRSxDQUFDLFNBQVMsR0FtQi9EO2tCQW5Cb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBUaW5pQXJjaGVyX0dhbWVWaWV3IGZyb20gXCIuL2dhbWUvVGluaUFyY2hlci5HYW1lVmlld1wiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluaUFyY2hlcl9HYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBmR2FtZVZpZXc6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgY2xpY2tQbGF5KCkge1xuICAgICAgICBsZXQgZ2FtZSA9ICBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmR2FtZVZpZXcpLmdldENvbXBvbmVudChUaW5pQXJjaGVyX0dhbWVWaWV3KVxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZS5ub2RlKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
var TiniArcher_Global_1 = require("../TiniArcher.Global");
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
        _this.listStatus = [];
        _this.lbArrow = null;
        _this.lbScore = null;
        _this.lbBest = null;
        _this.maxForce = 1000;
        _this.maxAngle = 45;
        _this.startForce = 0;
        _this.startAngle = 0;
        _this.currentForce = 0;
        _this.currentAngle = 0;
        _this.isCharging = false;
        _this.isBgMove = false;
        _this.isStop = false;
        _this.trajectoryPoints = []; // Lưu các điểm quỹ đạo
        _this.isArrowFlying = false; // Đánh dấu khi mũi tên đang bay
        _this.trajectoryIndex = 0; // Chỉ số hiện tại trong quỹ đạo
        _this.currentArrow = null;
        _this.indexBg = 0;
        _this.isTarget = false;
        _this.isCancer = true;
        _this.isMiss = false;
        _this.ramdomPosY = [-80, 60, 40, 20, 0, 20, 40, 60, 80];
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
        this.updateNumberArrow();
        this.updateLbScore();
    };
    TiniArcher_GameView.prototype.resetBg = function () {
        var _this = this;
        this.isBgMove = true;
        this.scheduleOnce(function () {
            _this.isBgMove = false;
            _this.isStop = false;
            _this.spawArrow();
            _this.isCancer = true;
        }, 3.5);
    };
    TiniArcher_GameView.prototype.onTouchStart = function (event) {
        if (this.isCancer)
            this.isCharging = true;
    };
    TiniArcher_GameView.prototype.onTouchEnd = function (event) {
        if (!this.isCancer)
            return;
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
    TiniArcher_GameView.prototype.updateLbScore = function () {
        this.lbScore.string = TiniArcher_Global_1.Global.score + '';
    };
    TiniArcher_GameView.prototype.updateNumberArrow = function () {
        this.lbArrow.string = TiniArcher_Global_1.Global.numberArrow + ' ';
    };
    TiniArcher_GameView.prototype.resetArrowPosition = function () {
        this.currentArrow.setPosition(this.nArrow.x, this.currentAngle);
    };
    TiniArcher_GameView.prototype.updateStatus = function () {
        var _this = this;
        if (this.isTarget) {
            TiniArcher_Global_1.Global.score++;
            this.updateLbScore();
            this.listStatus[1].active = true;
            this.scheduleOnce(function () {
                _this.listStatus[1].active = false;
            }, 0.6);
            this.isTarget = false;
        }
        if (this.isMiss) {
            TiniArcher_Global_1.Global.numberArrow--;
            this.updateNumberArrow();
            this.listStatus[2].active = true;
            this.scheduleOnce(function () {
                _this.listStatus[2].active = false;
            }, 0.6);
            this.isMiss = false;
        }
        else {
            TiniArcher_Global_1.Global.numberArrow--;
            this.updateNumberArrow();
            console.log("vao else");
            this.listStatus[0].active = true;
            this.scheduleOnce(function () {
                _this.listStatus[0].active = false;
            }, 0.6);
            //this.isTarget = false;
        }
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
            this.trajectoryCircle(this.updateTrajectory(this.currentForce, this.currentAngle));
            this.updateAngleArrow(this.currentAngle);
            this.updateArrowPos();
        }
        else if (this.isArrowFlying) {
            //this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
            if (this.trajectoryIndex < this.trajectoryPoints.length - 1) {
                var currentPoint = this.trajectoryPoints[this.trajectoryIndex];
                var nextPoint = this.trajectoryPoints[this.trajectoryIndex + 1];
                this.currentArrow.setPosition(nextPoint);
                var direction = nextPoint.sub(currentPoint);
                var angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;
                this.currentArrow.angle = angle;
                this.trajectoryIndex++;
            }
            else {
                this.isArrowFlying = false;
                this.isCancer = false;
                this.resetBg();
                this.updateStatus();
            }
            this.isCancer = false;
            //this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
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
    __decorate([
        property(cc.Node)
    ], TiniArcher_GameView.prototype, "listStatus", void 0);
    __decorate([
        property(cc.Label)
    ], TiniArcher_GameView.prototype, "lbArrow", void 0);
    __decorate([
        property(cc.Label)
    ], TiniArcher_GameView.prototype, "lbScore", void 0);
    __decorate([
        property(cc.Label)
    ], TiniArcher_GameView.prototype, "lbBest", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvZ2FtZS9UaW5pQXJjaGVyLkdhbWVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDBEQUE4QztBQUl4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQThPQztRQTNPRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUczQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUN4QixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2Qsc0JBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUUsdUJBQXVCO1FBQy9DLG1CQUFhLEdBQUcsS0FBSyxDQUFD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QyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNLO0lBOUJQLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBOE92QztJQUFELDBCQUFDO0NBOU9ELEFBOE9DLENBOU9nRCxFQUFFLENBQUMsU0FBUyxHQThPNUQ7a0JBOU9vQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL1RpbmlBcmNoZXIuR2xvYmFsXCI7XG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluaUFyY2hlcl9HYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogVGluaUFyY2hlcl9HYW1lVmlldyA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHBnYlBvd2VyQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQXJyb3c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5UcmFqZWN0b3J5Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBmQ2lyY2xlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwZkFycm93OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdFN0YXR1czogY2MuTm9kZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJBcnJvdzogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkJlc3Q6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBtYXhGb3JjZSA9IDEwMDA7XG4gICAgbWF4QW5nbGUgPSA0NTtcbiAgICBzdGFydEZvcmNlID0gMDtcbiAgICBzdGFydEFuZ2xlID0gMDtcbiAgICBjdXJyZW50Rm9yY2UgPSAwO1xuICAgIGN1cnJlbnRBbmdsZSA9IDA7XG4gICAgaXNDaGFyZ2luZyA9IGZhbHNlO1xuICAgIGlzQmdNb3ZlID0gZmFsc2U7XG4gICAgaXNTdG9wID0gZmFsc2VcbiAgICB0cmFqZWN0b3J5UG9pbnRzID0gW107ICAvLyBMxrB1IGPDoWMgxJFp4buDbSBxdeG7uSDEkeG6oW9cbiAgICBpc0Fycm93Rmx5aW5nID0gZmFsc2U7ICAvLyDEkMOhbmggZOG6pXUga2hpIG3FqWkgdMOqbiDEkWFuZyBiYXlcbiAgICB0cmFqZWN0b3J5SW5kZXggPSAwOyAgLy8gQ2jhu4kgc+G7kSBoaeG7h24gdOG6oWkgdHJvbmcgcXXhu7kgxJHhuqFvXG4gICAgY3VycmVudEFycm93ID0gbnVsbDtcbiAgICBpbmRleEJnID0gMDtcbiAgICBpc1RhcmdldCA9IGZhbHNlO1xuICAgIGlzQ2FuY2VyID0gdHJ1ZTtcbiAgICBpc01pc3MgPSBmYWxzZTtcbiAgICByYW1kb21Qb3NZID0gWy04MCw2MCw0MCwyMCwwLDIwLDQwLDYwLDgwXTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcylcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxuICAgICAgICB0aGlzLnNwYXdBcnJvdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZU51bWJlckFycm93KCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGJTY29yZSgpO1xuICAgIH1cblxuICAgIHJlc2V0QmcoKSB7XG4gICAgICAgIHRoaXMuaXNCZ01vdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQmdNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zcGF3QXJyb3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNDYW5jZXIgPSB0cnVlO1xuICAgICAgICAgICBcbiAgICAgICAgfSwzLjUpXG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuVG91Y2gpIHtcbiAgICAgICAgaWYodGhpcy5pc0NhbmNlcilcbiAgICAgICAgdGhpcy5pc0NoYXJnaW5nID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIGlmKCF0aGlzLmlzQ2FuY2VyKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5UcmFqZWN0b3J5Tm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLnRyYWplY3RvcnlDaXJjbGUodGhpcy51cGRhdGVUcmFqZWN0b3J5KHRoaXMuY3VycmVudEZvcmNlLCB0aGlzLmN1cnJlbnRBbmdsZSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvd2VyQmFyKCk7XG4gICAgICAgIHRoaXMudHJhamVjdG9yeVBvaW50cyA9IHRoaXMudXBkYXRlVHJhamVjdG9yeSh0aGlzLmN1cnJlbnRGb3JjZSwgdGhpcy5jdXJyZW50QW5nbGUpO1xuICAgICAgICB0aGlzLm5UcmFqZWN0b3J5Tm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLnNob290QXJyb3coKTtcbiAgICAgICAgLy90aGlzLnNob290QXJyb3codGhpcy5jdXJyZW50Rm9yY2UsdGhpcy5jdXJyZW50QW5nbGUpO1xuXG4gICAgfVxuICAgXG5cbiAgICBzcGF3QXJyb3coKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBcnJvdykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXJyb3cuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEFycm93ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZkFycm93KTtcbiAgICAgICAgdGhpcy5uQXJyb3cuYWRkQ2hpbGQodGhpcy5jdXJyZW50QXJyb3cpOyBcbiAgICB9XG5cbiAgICBzaG9vdEFycm93KCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QXJyb3cpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBcnJvd0ZseWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRyYWplY3RvcnlJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHRyYWplY3RvcnlDaXJjbGUocG9pbnRzKSB7XG4gICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjcmljbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmQ2lyY2xlKVxuICAgICAgICAgICAgY3JpY2xlLnNldFBvc2l0aW9uKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBpZihpID4gMjApIHtcbiAgICAgICAgICAgICAgICBjcmljbGUub3BhY2l0eSA9IDA7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5uVHJhamVjdG9yeU5vZGUuYWRkQ2hpbGQoY3JpY2xlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRyYWplY3RvcnkoZm9yY2UsIGFuZ2xlKSB7XG4gICAgICAgIGxldCBwb2ludHMgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0UG9zaXRpb24gPSB0aGlzLmN1cnJlbnRBcnJvdy5wb3NpdGlvbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdCA9IGkgKiAwLjAzO1xuICAgICAgICAgICAgbGV0IHggPSBzdGFydFBvc2l0aW9uLnggKyBmb3JjZSAqIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiB0O1xuICAgICAgICAgICAgbGV0IHkgPSBzdGFydFBvc2l0aW9uLnkgKyBmb3JjZSAqIE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiB0IC0gMC41ICogOTgwICogdCAqIHQ7XG4gICAgICAgICAgICBwb2ludHMucHVzaChjYy52Mih4LCB5KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cblxuICAgIHVwZGF0ZUFuZ2xlQXJyb3coYW5nbGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QXJyb3cuYW5nbGUgPSBhbmdsZTtcbiAgICB9XG5cbiAgICB1cGRhdGVQb3dlckJhcigpIHtcbiAgICAgICAgdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEZvcmNlIC8gdGhpcy5tYXhGb3JjZTtcbiAgICB9XG5cbiAgICB1cGRhdGVBcnJvd1BvcygpIHtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnN0YXJ0QW5nbGUgKyAodGhpcy5jdXJyZW50QW5nbGUgLyB0aGlzLm1heEFuZ2xlKSAqIDEwMFxuICAgICAgICAvL2xldCBuZXdYID0gdGhpcy5zdGFydEFuZ2xlIC0gKHRoaXMuY3VycmVudEFuZ2xlIC8gdGhpcy5tYXhBbmdsZSkgKiA1O1xuICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5zZXRQb3NpdGlvbih0aGlzLm5BcnJvdy54LCBuZXdZKTtcbiAgICB9XG5cbiAgICB1cGRhdGVMYlNjb3JlKCkge1xuICAgICAgICB0aGlzLmxiU2NvcmUuc3RyaW5nID0gR2xvYmFsLnNjb3JlICsgJyc7XG4gICAgfVxuXG4gICAgdXBkYXRlTnVtYmVyQXJyb3coKSB7XG4gICAgICAgIHRoaXMubGJBcnJvdy5zdHJpbmcgPSBHbG9iYWwubnVtYmVyQXJyb3cgKyAnICc7XG4gICAgfVxuICAgIHJlc2V0QXJyb3dQb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QXJyb3cuc2V0UG9zaXRpb24odGhpcy5uQXJyb3cueCwgdGhpcy5jdXJyZW50QW5nbGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXR1cygpIHtcbiAgICAgICAgaWYodGhpcy5pc1RhcmdldCkge1xuICAgICAgICAgICAgR2xvYmFsLnNjb3JlKys7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxiU2NvcmUoKTtcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXR1c1sxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFN0YXR1c1sxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sMC42KVxuICAgICAgICAgICAgdGhpcy5pc1RhcmdldCA9IGZhbHNlO1xuICAgICAgICB9aWYodGhpcy5pc01pc3MpIHtcbiAgICAgICAgICAgIEdsb2JhbC5udW1iZXJBcnJvdy0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOdW1iZXJBcnJvdygpO1xuICAgICAgICAgICAgdGhpcy5saXN0U3RhdHVzWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U3RhdHVzWzJdLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9LDAuNilcbiAgICAgICAgICAgIHRoaXMuaXNNaXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIEdsb2JhbC5udW1iZXJBcnJvdy0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOdW1iZXJBcnJvdygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YW8gZWxzZVwiKTtcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXR1c1swXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFN0YXR1c1swXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sMC42KVxuICAgICAgICAgICAgLy90aGlzLmlzVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNoYWtlVGFyZ2V0KHRhcmdldDogY2MuTm9kZSkge1xuICAgICAgICBsZXQgc2hha2VEdXJhdGlvbiA9IDAuMjU7IC8vIFRo4budaSBnaWFuIGPhu6dhIG3hu5dpIGLGsOG7m2MgcnVuZ1xuICAgICAgICBsZXQgYW5nbGVzID0gWy0yLCAyLCAtMS41LCAxLjUsIC0xLCAxXTsgLy8gQ8OhYyBnacOhIHRy4buLIGfDs2MgcnVuZyBnaeG6o20gZOG6p25cblxuICAgIGxldCB0d2VlbiA9IGNjLnR3ZWVuKHRhcmdldCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0d2VlbiA9IHR3ZWVuLnRvKHNoYWtlRHVyYXRpb24sIHsgYW5nbGU6IGFuZ2xlc1tpXSB9KTtcbiAgICB9XG4gICAgICAgIHR3ZWVuLnRvKHNoYWtlRHVyYXRpb24sIHsgYW5nbGU6IDAgfSk7XG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2hhcmdpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvcmNlID0gTWF0aC5taW4odGhpcy5jdXJyZW50Rm9yY2UgKyAxMDAwICogZHQsIHRoaXMubWF4Rm9yY2UpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRBbmdsZSArIDQ1ICogZHQsIHRoaXMubWF4QW5nbGUpO1xuICAgICAgICAgICAgdGhpcy50cmFqZWN0b3J5Q2lyY2xlKHRoaXMudXBkYXRlVHJhamVjdG9yeSh0aGlzLmN1cnJlbnRGb3JjZSwgdGhpcy5jdXJyZW50QW5nbGUpKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5nbGVBcnJvdyh0aGlzLmN1cnJlbnRBbmdsZSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJyb3dQb3MoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXJyb3dGbHlpbmcpIHtcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXG4gICAgICAgICAgICBpZiAodGhpcy50cmFqZWN0b3J5SW5kZXggPCB0aGlzLnRyYWplY3RvcnlQb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UG9pbnQgPSB0aGlzLnRyYWplY3RvcnlQb2ludHNbdGhpcy50cmFqZWN0b3J5SW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0UG9pbnQgPSB0aGlzLnRyYWplY3RvcnlQb2ludHNbdGhpcy50cmFqZWN0b3J5SW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5zZXRQb3NpdGlvbihuZXh0UG9pbnQpO1xuICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBuZXh0UG9pbnQuc3ViKGN1cnJlbnRQb2ludCk7XG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkaXJlY3Rpb24ueSwgZGlyZWN0aW9uLngpICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhamVjdG9yeUluZGV4Kys7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Fycm93Rmx5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NhbmNlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCZygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzQ2FuY2VyID0gZmFsc2VcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9yY2UgPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRGb3JjZSAtIDEwMDAgKiBkdCwgdGhpcy5zdGFydEZvcmNlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuZ2xlID0gTWF0aC5tYXgodGhpcy5jdXJyZW50QW5nbGUgLSA0NSAqIGR0LCB0aGlzLnN0YXJ0QW5nbGUpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVQb3dlckJhcigpO1xuICAgIH1cblxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TiniArcher/scripts/game/TiniArcher.BackGround.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ad62tXyGVLFoq8kCXprwvQ', 'TiniArcher.BackGround');
// TiniArcher/scripts/game/TiniArcher.BackGround.ts

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
var TiniArcher_GameView_1 = require("./TiniArcher.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TiniArcher_BackGround = /** @class */ (function (_super) {
    __extends(TiniArcher_BackGround, _super);
    function TiniArcher_BackGround() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idBg = 0;
        _this.nBullseye = null;
        _this.isStop = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    TiniArcher_BackGround.prototype.onLoad = function () {
        this.ramdomPosY();
    };
    TiniArcher_BackGround.prototype.start = function () {
    };
    TiniArcher_BackGround.prototype.ramdomPosY = function () {
        var random = Math.floor(Math.random() * 8);
        var randomValue = TiniArcher_GameView_1.default.instance.ramdomPosY[random];
        this.nBullseye.setPosition(0, randomValue);
        console.log("random", randomValue);
    };
    TiniArcher_BackGround.prototype.update = function (dt) {
        // if(!TiniArcher_GameView.instance.isBgMove) return;
        if (TiniArcher_GameView_1.default.instance.isStop) {
            return;
        }
        if (TiniArcher_GameView_1.default.instance.isBgMove) {
            this.node.x -= 5;
            if (this.node.x == -960) {
                TiniArcher_GameView_1.default.instance.isStop = true;
                this.resetPos();
                this.ramdomPosY();
            }
        }
        // if(this.node.x <= -1920 ) {
        //     this.resetPos();
        // }
        // console.log("idBg ", this.idBg);
        // console.log("idBg2 ", TiniArcher_GameView.instance.indexBg);
        // if(this.idBg == TiniArcher_GameView.instance.indexBg) {
        //     if(this.node.x <= 0) {
        //         this.node.x = 0;
        //         TiniArcher_GameView.instance.isBgMove = false;
        //     }
        // }
    };
    TiniArcher_BackGround.prototype.resetPos = function () {
        this.node.x = 1920;
        // console.log("Nền đã đặt lại vị trí:",this.idBg, this.node.x);
    };
    __decorate([
        property
    ], TiniArcher_BackGround.prototype, "idBg", void 0);
    __decorate([
        property(cc.Node)
    ], TiniArcher_BackGround.prototype, "nBullseye", void 0);
    TiniArcher_BackGround = __decorate([
        ccclass
    ], TiniArcher_BackGround);
    return TiniArcher_BackGround;
}(cc.Component));
exports.default = TiniArcher_BackGround;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvZ2FtZS9UaW5pQXJjaGVyLkJhY2tHcm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkRBQXdEO0FBRWxELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBMkRDO1FBeERHLFVBQUksR0FBRyxDQUFDLENBQUM7UUFFVCxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBb0Q1QixDQUFDO0lBbERHLHdCQUF3QjtJQUV4QixzQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLFdBQVcsR0FBRyw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0NBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixxREFBcUQ7UUFDckQsSUFBSSw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3JDLE9BQU07U0FDVDtRQUNELElBQUksNkJBQW1CLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDckIsNkJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckI7U0FDSjtRQUVELDhCQUE4QjtRQUM5Qix1QkFBdUI7UUFDdkIsSUFBSTtRQUVKLG1DQUFtQztRQUNuQywrREFBK0Q7UUFDL0QsMERBQTBEO1FBQzFELDZCQUE2QjtRQUM3QiwyQkFBMkI7UUFDM0IseURBQXlEO1FBQ3pELFFBQVE7UUFDUixJQUFJO0lBRVIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0VBQWdFO0lBQ3BFLENBQUM7SUF2REQ7UUFEQyxRQUFRO3VEQUNBO0lBRVQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDUTtJQUxULHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBMkR6QztJQUFELDRCQUFDO0NBM0RELEFBMkRDLENBM0RrRCxFQUFFLENBQUMsU0FBUyxHQTJEOUQ7a0JBM0RvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFRpbmlBcmNoZXJfR2FtZVZpZXcgZnJvbSBcIi4vVGluaUFyY2hlci5HYW1lVmlld1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbmlBcmNoZXJfQmFja0dyb3VuZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBpZEJnID0gMDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQnVsbHNleWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaXNTdG9wOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMucmFtZG9tUG9zWSgpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHJhbWRvbVBvc1koKSB7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgICAgbGV0IHJhbmRvbVZhbHVlID0gVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5yYW1kb21Qb3NZW3JhbmRvbV07XG4gICAgICAgIHRoaXMubkJ1bGxzZXllLnNldFBvc2l0aW9uKDAscmFuZG9tVmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJhbmRvbVwiLCByYW5kb21WYWx1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvLyBpZighVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc0JnTW92ZSkgcmV0dXJuO1xuICAgICAgICBpZiAoVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc1N0b3ApIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmlzQmdNb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCAtPSA1O1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS54ID09IC05NjApIHtcbiAgICAgICAgICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmlzU3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvcygpXG4gICAgICAgICAgICAgICAgdGhpcy5yYW1kb21Qb3NZKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZih0aGlzLm5vZGUueCA8PSAtMTkyMCApIHtcbiAgICAgICAgLy8gICAgIHRoaXMucmVzZXRQb3MoKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWRCZyBcIiwgdGhpcy5pZEJnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpZEJnMiBcIiwgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pbmRleEJnKTtcbiAgICAgICAgLy8gaWYodGhpcy5pZEJnID09IFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UuaW5kZXhCZykge1xuICAgICAgICAvLyAgICAgaWYodGhpcy5ub2RlLnggPD0gMCkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS54ID0gMDtcbiAgICAgICAgLy8gICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmlzQmdNb3ZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVzZXRQb3MoKSB7XG4gICAgICAgIHRoaXMubm9kZS54ID0gMTkyMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJO4buBbiDEkcOjIMSR4bq3dCBs4bqhaSB24buLIHRyw606XCIsdGhpcy5pZEJnLCB0aGlzLm5vZGUueCk7XG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvZ2FtZS9UaW5pQXJjaGVyLlRyYWplY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUF3R0M7UUFyR0csaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBR25DLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUdoQyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixhQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDZixrQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUFnRnZCLENBQUM7NEJBeEdvQixtQkFBbUI7SUEyQnBDLG9DQUFNLEdBQU47UUFDSSxxQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFD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QXdHQyxDQXhHZ0QsRUFBRSxDQUFDLFNBQVMsR0F3RzVEO2tCQXhHb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBUaW5pQXJjaGVyX1RyYWplY3RvcnkgZnJvbSBcIi4vVGluaUFyY2hlci5UcmFqZWN0b3J5XCI7XG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluaUFyY2hlcl9HYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogVGluaUFyY2hlcl9HYW1lVmlldyA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHBnYlBvd2VyQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQXJyb3c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbmJ1bGxzZXllOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5UcmFqZWN0b3J5Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBmQ2lyY2xlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgbWF4Rm9yY2UgPSAxMDAwO1xuICAgIG1heEFuZ2xlID0gNDU7XG4gICAgc3RhcnRGb3JjZSA9IDA7XG4gICAgc3RhcnRBbmdsZSA9IDA7XG4gICAgZ3Jhdml0eSA9IC05Ljg7XG4gICAgY3VycmVudEZvcmNlID0gMTAwO1xuICAgIGN1cnJlbnRBbmdsZSA9IDA7XG4gICAgaXNDaGFyZ2luZyA9IGZhbHNlO1xuXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudEZvcmNlID0gMTAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSA9IDA7XG4gICAgICAgIHRoaXMucGdiUG93ZXJCYXIucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnRyYWplY3RvcnkodGhpcy51cGRhdGVUcmFqY2V0b3IodGhpcy5mb3JjZVZlYyh0aGlzLmN1cnJlbnRBbmdsZSx0aGlzLmN1cnJlbnRBbmdsZSkpKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmluY3JlYXNlRm9yY2VBbmRBbmdsZSwgMC4wNSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRvYyBkbyBiYW4gXCIsIHRoaXMuY3VycmVudEZvcmNlKTtcbiAgICAgICAgdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMubkFycm93LmFuZ2xlID0gMDtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW5jcmVhc2VGb3JjZUFuZEFuZ2xlKTtcbiAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgaW5jcmVhc2VGb3JjZUFuZEFuZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NoYXJnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb3JjZSA9IE1hdGgubWluKHRoaXMuY3VycmVudEZvcmNlICsgNTAsIHRoaXMubWF4Rm9yY2UpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRBbmdsZSArIDEsIHRoaXMubWF4QW5nbGUpO1xuICAgICAgICAgICAgdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEZvcmNlL3RoaXMubWF4Rm9yY2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgcHJnIFwiLHRoaXMucGdiUG93ZXJCYXIucHJvZ3Jlc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhamVjdG9yeShwb2ludHMpIHtcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSB0aGlzLm5UcmFqZWN0b3J5Tm9kZTtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICAgICAgICBsZXQgY3JpY2xlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZkNpcmNsZSlcbiAgICAgICAgICAgIGNyaWNsZS5zZXRQb3NpdGlvbihwb2ludCk7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKGNyaWNsZSk7XG4gICAgICAgIH0pO1xuICAgIH0gICAgXG5cbiAgICB1cGRhdGVUcmFqY2V0b3IoZm9yY2U6IGNjLlZlYzIpIHtcbiAgICAgICAgbGV0IHBvaW50cyA9IFtdO1xuICAgICAgICBsZXQgaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5uVHJhamVjdG9yeU5vZGUucG9zaXRpb247XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0ID0gaSAqIDAuMTtcbiAgICAgICAgICAgIGxldCB4ID0gaW5pdGlhbFBvc2l0aW9uLnggKiB0ICsgZm9yY2UueDtcbiAgICAgICAgICAgIGxldCB5ID0gaW5pdGlhbFBvc2l0aW9uLnkgKiB0ICsgMC41ICogLTkuOCAqIHQgKiB0ICsgZm9yY2UueTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGNjLnYyKHgsIHkpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxuXG4gICAgZm9yY2VWZWMoZm9yY2UsIGFuZ2xlKSB7XG4gICAgICAgIGxldCB2ID0gbmV3IGNjLlZlYzIoZm9yY2UgKiBNYXRoLmNvcyhhbmdsZSksIGZvcmNlICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICAgIC8vIH1cblxuICAgIC8vIHRyYWplY3RvcnlDcmljbGUocG9pbnRzKSB7XG4gICAgLy8gICAgIGxldCBwYXJlbnROb2RlID0gdGhpcy5uVHJhamVjdG9yeU5vZGU7XG4gICAgLy8gICAgIHBhcmVudE5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAvLyAgICAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgIC8vICAgICAgICAgbGV0IGNyaWNsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGZDaXJjbGUpXG4gICAgLy8gICAgICAgICBjcmljbGUuc2V0UG9zaXRpb24ocG9pbnQpO1xuICAgIC8vICAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChjcmljbGUpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy8gfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------
