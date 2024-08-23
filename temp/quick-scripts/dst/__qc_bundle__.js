
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
            TiniArcher_GameView_1.default.instance.nTrajectoryNode.removeAllChildren();
            self.node.parent = other.node;
            var collisionPoint = self.world.aabb.center;
            TiniArcher_GameView_1.default.instance.shakeTarget(TiniArcher_GameView_1.default.instance.nStick);
            var localPoint = other.node.convertToNodeSpaceAR(collisionPoint);
            self.node.setPosition(localPoint.x, localPoint.y);
            self.node.angle;
            TiniArcher_GameView_1.default.instance.resetBg();
            console.log('background di chuyen', TiniArcher_GameView_1.default.instance.isBgMove);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvVGluaUFyY2hlci5Db2xsaWRlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFZO0lBQTdEOztJQTZCQSxDQUFDO0lBekJHLG9DQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsbUNBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNoQiw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUNuRCw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUM5QixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDNUMsNkJBQW1CLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDN0UsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUNoQiw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxzQkFBc0IsRUFBQyw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7U0FFNUU7SUFFTCxDQUFDO0lBM0JnQixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQTZCdkM7SUFBRCwwQkFBQztDQTdCRCxBQTZCQyxDQTdCZ0QsRUFBRSxDQUFDLFNBQVMsR0E2QjVEO2tCQTdCb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBUaW5pQXJjaGVyX0dhbWVWaWV3IGZyb20gXCIuL2dhbWUvVGluaUFyY2hlci5HYW1lVmlld1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluaUFyY2hlcl9Db2xsaWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMSkge1xuICAgICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc0Fycm93Rmx5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLm5UcmFqZWN0b3J5Tm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgc2VsZi5ub2RlLnBhcmVudCA9IG90aGVyLm5vZGU7XG4gICAgICAgICAgICBsZXQgY29sbGlzaW9uUG9pbnQgPSBzZWxmLndvcmxkLmFhYmIuY2VudGVyO1xuICAgICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5zaGFrZVRhcmdldChUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLm5TdGljaylcbiAgICAgICAgICAgIGxldCBsb2NhbFBvaW50ID0gb3RoZXIubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjb2xsaXNpb25Qb2ludCk7XG4gICAgICAgICAgICBzZWxmLm5vZGUuc2V0UG9zaXRpb24obG9jYWxQb2ludC54LCBsb2NhbFBvaW50LnkpO1xuICAgICAgICAgICAgc2VsZi5ub2RlLmFuZ2xlXG4gICAgICAgICAgIFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UucmVzZXRCZygpO1xuICAgICAgICAgICBjb25zb2xlLmxvZyggJ2JhY2tncm91bmQgZGkgY2h1eWVuJyxUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmlzQmdNb3ZlKVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvVGluaUFyY2hlci5HbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUlBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW5pQXJjaGVyX0dhbWVWaWV3IGZyb20gXCIuL1RpbmlBcmNoZXIuR2FtZVZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIEdsb2JhbCB7XG5cbiAgICBcbiAgICBcbn1cbiJdfQ==
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
    // onLoad () {}
    TiniArcher_BackGround.prototype.start = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvZ2FtZS9UaW5pQXJjaGVyLkJhY2tHcm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkRBQXdEO0FBRWxELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBaURDO1FBOUNHLFVBQUksR0FBRyxDQUFDLENBQUM7UUFFVCxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBMEM1QixDQUFDO0lBeENHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYscUNBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLHFEQUFxRDtRQUNyRCxJQUFJLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDckMsT0FBTTtTQUNUO1FBQ0QsSUFBSSw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNyQiw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO2FBQ2xCO1NBQ0o7UUFFRCw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLElBQUk7UUFFSixtQ0FBbUM7UUFDbkMsK0RBQStEO1FBQy9ELDBEQUEwRDtRQUMxRCw2QkFBNkI7UUFDN0IsMkJBQTJCO1FBQzNCLHlEQUF5RDtRQUN6RCxRQUFRO1FBQ1IsSUFBSTtJQUVSLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdFQUFnRTtJQUNwRSxDQUFDO0lBN0NEO1FBREMsUUFBUTt1REFDQTtJQUVUO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ1E7SUFMVCxxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQWlEekM7SUFBRCw0QkFBQztDQWpERCxBQWlEQyxDQWpEa0QsRUFBRSxDQUFDLFNBQVMsR0FpRDlEO2tCQWpEb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBUaW5pQXJjaGVyX0dhbWVWaWV3IGZyb20gXCIuL1RpbmlBcmNoZXIuR2FtZVZpZXdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW5pQXJjaGVyX0JhY2tHcm91bmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgaWRCZyA9IDA7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJ1bGxzZXllOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGlzU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8gaWYoIVRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UuaXNCZ01vdmUpIHJldHVybjtcbiAgICAgICAgaWYgKFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UuaXNTdG9wKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc0JnTW92ZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gNTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCA9PSAtOTYwKSB7XG4gICAgICAgICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc1N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3MoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYodGhpcy5ub2RlLnggPD0gLTE5MjAgKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnJlc2V0UG9zKCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlkQmcgXCIsIHRoaXMuaWRCZyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWRCZzIgXCIsIFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UuaW5kZXhCZyk7XG4gICAgICAgIC8vIGlmKHRoaXMuaWRCZyA9PSBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmluZGV4QmcpIHtcbiAgICAgICAgLy8gICAgIGlmKHRoaXMubm9kZS54IDw9IDApIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUueCA9IDA7XG4gICAgICAgIC8vICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc0JnTW92ZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlc2V0UG9zKCkge1xuICAgICAgICB0aGlzLm5vZGUueCA9IDE5MjA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTuG7gW4gxJHDoyDEkeG6t3QgbOG6oWkgduG7iyB0csOtOlwiLHRoaXMuaWRCZywgdGhpcy5ub2RlLngpO1xuICAgIH1cbn1cbiJdfQ==
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
        _this.nStick = null;
        _this.nTrajectoryNode = null;
        _this.pfCircle = null;
        _this.pfArrow = null;
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
    TiniArcher_GameView.prototype.resetArrowPosition = function () {
        this.currentArrow.setPosition(this.nArrow.x, this.currentAngle);
    };
    TiniArcher_GameView.prototype.resetBg = function () {
        var _this = this;
        this.isBgMove = true;
        // console.log("di chuyen ", this.isBgMove);
        // this.indexBg++;
        // if(this.indexBg > 2) {
        //     this.indexBg = 0;
        // }
        this.scheduleOnce(function () {
            _this.isBgMove = false;
            _this.isStop = false;
            _this.spawArrow();
        }, 3.5);
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
                this.resetBg();
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvZ2FtZS9UaW5pQXJjaGVyLkdhbWVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBcUxDO1FBbExHLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUduQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU0sR0FBRyxLQUFLLENBQUE7UUFDZCxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBRSx1QkFBdUI7UUFDL0MsbUJBQWEsR0FBRyxLQUFLLENBQUMsQ0FBRSxnQ0FBZ0M7UUFDeEQscUJBQWUsR0FBRyxDQUFDLENBQUMsQ0FBRSxnQ0FBZ0M7UUFDdEQsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUFvSmhCLENBQUM7NEJBckxvQixtQkFBbUI7SUFvQ3BDLG9DQUFNLEdBQU47UUFDSSxxQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUdELHdDQUFVLEdBQVYsVUFBVyxLQUFlO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQix1REFBdUQ7SUFFM0QsQ0FBQztJQUVELHVDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUdELDhDQUFnQixHQUFoQixVQUFpQixNQUFNO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUMxQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDUCxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUN0QjtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVELDhDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsS0FBSztRQUN6QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBR0QsOENBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw0Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xFLENBQUM7SUFFRCw0Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtRQUN0RSx1RUFBdUU7UUFDdkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELGdEQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsNENBQTRDO1FBQzVDLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsd0JBQXdCO1FBQ3hCLElBQUk7UUFHSixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFDRCx5Q0FBVyxHQUFYLFVBQVksTUFBZTtRQUN2QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyw4QkFBOEI7UUFDeEQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO1FBRTVFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDRyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsb0NBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDeEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMxQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBRWxCO1NBQ0o7YUFDSTtZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBSTlFO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7O0lBakxhLDRCQUFRLEdBQXdCLElBQUksQ0FBQztJQUVuRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzREQUNVO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dFQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDTTtJQWxCVCxtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQXFMdkM7SUFBRCwwQkFBQztDQXJMRCxBQXFMQyxDQXJMZ0QsRUFBRSxDQUFDLFNBQVMsR0FxTDVEO2tCQXJMb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluaUFyY2hlcl9HYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogVGluaUFyY2hlcl9HYW1lVmlldyA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHBnYlBvd2VyQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQXJyb3c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5UcmFqZWN0b3J5Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBmQ2lyY2xlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwZkFycm93OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgbWF4Rm9yY2UgPSAxMDAwO1xuICAgIG1heEFuZ2xlID0gNDU7XG4gICAgc3RhcnRGb3JjZSA9IDA7XG4gICAgc3RhcnRBbmdsZSA9IDA7XG4gICAgY3VycmVudEZvcmNlID0gMDtcbiAgICBjdXJyZW50QW5nbGUgPSAwO1xuICAgIGlzQ2hhcmdpbmcgPSBmYWxzZTtcbiAgICBpc0JnTW92ZSA9IGZhbHNlO1xuICAgIGlzU3RvcCA9IGZhbHNlXG4gICAgdHJhamVjdG9yeVBvaW50cyA9IFtdOyAgLy8gTMawdSBjw6FjIMSRaeG7g20gcXXhu7kgxJHhuqFvXG4gICAgaXNBcnJvd0ZseWluZyA9IGZhbHNlOyAgLy8gxJDDoW5oIGThuqV1IGtoaSBtxalpIHTDqm4gxJFhbmcgYmF5XG4gICAgdHJhamVjdG9yeUluZGV4ID0gMDsgIC8vIENo4buJIHPhu5EgaGnhu4duIHThuqFpIHRyb25nIHF14bu5IMSR4bqhb1xuICAgIGN1cnJlbnRBcnJvdyA9IG51bGw7XG4gICAgaW5kZXhCZyA9IDA7XG5cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0O1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpXG4gICAgICAgIHRoaXMuc3Bhd0Fycm93KCk7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5Ub3VjaCkge1xuICAgICAgICB0aGlzLmlzQ2hhcmdpbmcgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgb25Ub3VjaEVuZChldmVudDogY2MuVG91Y2gpIHtcbiAgICAgICAgdGhpcy5pc0NoYXJnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMudHJhamVjdG9yeUNpcmNsZSh0aGlzLnVwZGF0ZVRyYWplY3RvcnkodGhpcy5jdXJyZW50Rm9yY2UsIHRoaXMuY3VycmVudEFuZ2xlKSk7XG4gICAgICAgIHRoaXMudXBkYXRlUG93ZXJCYXIoKTtcbiAgICAgICAgdGhpcy50cmFqZWN0b3J5UG9pbnRzID0gdGhpcy51cGRhdGVUcmFqZWN0b3J5KHRoaXMuY3VycmVudEZvcmNlLCB0aGlzLmN1cnJlbnRBbmdsZSk7XG4gICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuc2hvb3RBcnJvdygpO1xuICAgICAgICAvL3RoaXMuc2hvb3RBcnJvdyh0aGlzLmN1cnJlbnRGb3JjZSx0aGlzLmN1cnJlbnRBbmdsZSk7XG5cbiAgICB9XG5cbiAgICBzcGF3QXJyb3coKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBcnJvdykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXJyb3cuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEFycm93ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZkFycm93KTtcbiAgICAgICAgdGhpcy5uQXJyb3cuYWRkQ2hpbGQodGhpcy5jdXJyZW50QXJyb3cpOyBcbiAgICB9XG5cbiAgICBzaG9vdEFycm93KCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QXJyb3cpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBcnJvd0ZseWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRyYWplY3RvcnlJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHRyYWplY3RvcnlDaXJjbGUocG9pbnRzKSB7XG4gICAgICAgIHRoaXMublRyYWplY3RvcnlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjcmljbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmQ2lyY2xlKVxuICAgICAgICAgICAgY3JpY2xlLnNldFBvc2l0aW9uKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBpZihpID4gMjApIHtcbiAgICAgICAgICAgICAgICBjcmljbGUub3BhY2l0eSA9IDA7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5uVHJhamVjdG9yeU5vZGUuYWRkQ2hpbGQoY3JpY2xlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRyYWplY3RvcnkoZm9yY2UsIGFuZ2xlKSB7XG4gICAgICAgIGxldCBwb2ludHMgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0UG9zaXRpb24gPSB0aGlzLmN1cnJlbnRBcnJvdy5wb3NpdGlvbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdCA9IGkgKiAwLjAzO1xuICAgICAgICAgICAgbGV0IHggPSBzdGFydFBvc2l0aW9uLnggKyBmb3JjZSAqIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiB0O1xuICAgICAgICAgICAgbGV0IHkgPSBzdGFydFBvc2l0aW9uLnkgKyBmb3JjZSAqIE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKiB0IC0gMC41ICogOTgwICogdCAqIHQ7XG4gICAgICAgICAgICBwb2ludHMucHVzaChjYy52Mih4LCB5KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cblxuICAgIHVwZGF0ZUFuZ2xlQXJyb3coYW5nbGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QXJyb3cuYW5nbGUgPSBhbmdsZTtcbiAgICB9XG5cbiAgICB1cGRhdGVQb3dlckJhcigpIHtcbiAgICAgICAgdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyA9IHRoaXMuY3VycmVudEZvcmNlIC8gdGhpcy5tYXhGb3JjZTtcbiAgICB9XG5cbiAgICB1cGRhdGVBcnJvd1BvcygpIHtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnN0YXJ0QW5nbGUgKyAodGhpcy5jdXJyZW50QW5nbGUgLyB0aGlzLm1heEFuZ2xlKSAqIDEwMFxuICAgICAgICAvL2xldCBuZXdYID0gdGhpcy5zdGFydEFuZ2xlIC0gKHRoaXMuY3VycmVudEFuZ2xlIC8gdGhpcy5tYXhBbmdsZSkgKiA1O1xuICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5zZXRQb3NpdGlvbih0aGlzLm5BcnJvdy54LCBuZXdZKTtcbiAgICB9XG4gICAgcmVzZXRBcnJvd1Bvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBcnJvdy5zZXRQb3NpdGlvbih0aGlzLm5BcnJvdy54LCB0aGlzLmN1cnJlbnRBbmdsZSk7XG4gICAgfVxuXG4gICAgcmVzZXRCZygpIHtcbiAgICAgICAgdGhpcy5pc0JnTW92ZSA9IHRydWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGkgY2h1eWVuIFwiLCB0aGlzLmlzQmdNb3ZlKTtcbiAgICAgICAgLy8gdGhpcy5pbmRleEJnKys7XG4gICAgICAgIC8vIGlmKHRoaXMuaW5kZXhCZyA+IDIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuaW5kZXhCZyA9IDA7XG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNCZ01vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNwYXdBcnJvdygpO1xuICAgICAgICB9LDMuNSlcbiAgICB9XG4gICAgc2hha2VUYXJnZXQodGFyZ2V0OiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBzaGFrZUR1cmF0aW9uID0gMC4yNTsgLy8gVGjhu51pIGdpYW4gY+G7p2EgbeG7l2kgYsaw4bubYyBydW5nXG4gICAgICAgIGxldCBhbmdsZXMgPSBbLTIsIDIsIC0xLjUsIDEuNSwgLTEsIDFdOyAvLyBDw6FjIGdpw6EgdHLhu4sgZ8OzYyBydW5nIGdp4bqjbSBk4bqnblxuXG4gICAgbGV0IHR3ZWVuID0gY2MudHdlZW4odGFyZ2V0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHR3ZWVuID0gdHdlZW4udG8oc2hha2VEdXJhdGlvbiwgeyBhbmdsZTogYW5nbGVzW2ldIH0pO1xuICAgIH1cbiAgICAgICAgdHdlZW4udG8oc2hha2VEdXJhdGlvbiwgeyBhbmdsZTogMCB9KTtcbiAgICAgICAgdHdlZW4uc3RhcnQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDaGFyZ2luZykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9yY2UgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRGb3JjZSArIDEwMDAgKiBkdCwgdGhpcy5tYXhGb3JjZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSA9IE1hdGgubWluKHRoaXMuY3VycmVudEFuZ2xlICsgNDUgKiBkdCwgdGhpcy5tYXhBbmdsZSk7XG4gICAgICAgICAgICB0aGlzLnRyYWplY3RvcnlDaXJjbGUodGhpcy51cGRhdGVUcmFqZWN0b3J5KHRoaXMuY3VycmVudEZvcmNlLCB0aGlzLmN1cnJlbnRBbmdsZSkpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbmdsZUFycm93KHRoaXMuY3VycmVudEFuZ2xlKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcnJvd1BvcygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBcnJvd0ZseWluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhamVjdG9yeUluZGV4IDwgdGhpcy50cmFqZWN0b3J5UG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gdGhpcy50cmFqZWN0b3J5UG9pbnRzW3RoaXMudHJhamVjdG9yeUluZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFBvaW50ID0gdGhpcy50cmFqZWN0b3J5UG9pbnRzW3RoaXMudHJhamVjdG9yeUluZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QXJyb3cuc2V0UG9zaXRpb24obmV4dFBvaW50KTtcbiAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gbmV4dFBvaW50LnN1YihjdXJyZW50UG9pbnQpO1xuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZGlyZWN0aW9uLnksIGRpcmVjdGlvbi54KSAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QXJyb3cuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWplY3RvcnlJbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXJyb3dGbHlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QmcoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb3JjZSA9IE1hdGgubWF4KHRoaXMuY3VycmVudEZvcmNlIC0gMTAwMCAqIGR0LCB0aGlzLnN0YXJ0Rm9yY2UpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRBbmdsZSAtIDQ1ICogZHQsIHRoaXMuc3RhcnRBbmdsZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVBvd2VyQmFyKCk7XG4gICAgfVxuXG5cbn0iXX0=
//------QC-SOURCE-SPLIT------
