
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
require('./assets/TiniArcher/scripts/TiniArcher.GameManager');
require('./assets/TiniArcher/scripts/game/TiniArcher.Arrow');
require('./assets/TiniArcher/scripts/game/TiniArcher.GameView');
require('./assets/TiniArcher/scripts/game/TiniArcher.Global');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvVGluaUFyY2hlci5HYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixrRUFBNkQ7QUFHdkQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUFtQkM7UUFmRyxnQkFBVSxHQUFjLElBQUksQ0FBQzs7UUFjN0IsaUJBQWlCO0lBQ3JCLENBQUM7SUFiRyx3QkFBd0I7SUFFeEIsdUNBQU0sR0FBTixjQUFXLENBQUM7SUFFWixzQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDBDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsNkJBQW1CLENBQUMsQ0FBQTtRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ1M7SUFKWixzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQW1CMUM7SUFBRCw2QkFBQztDQW5CRCxBQW1CQyxDQW5CbUQsRUFBRSxDQUFDLFNBQVMsR0FtQi9EO2tCQW5Cb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBUaW5pQXJjaGVyX0dhbWVWaWV3IGZyb20gXCIuL2dhbWUvVGluaUFyY2hlci5HYW1lVmlld1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vZ2FtZS9UaW5pQXJjaGVyLkdsb2JhbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbmlBcmNoZXJfR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwZkdhbWVWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIGNsaWNrUGxheSgpIHtcbiAgICAgICAgbGV0IGdhbWUgPSAgY2MuaW5zdGFudGlhdGUodGhpcy5wZkdhbWVWaWV3KS5nZXRDb21wb25lbnQoVGluaUFyY2hlcl9HYW1lVmlldylcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWUubm9kZSk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvZ2FtZS9UaW5pQXJjaGVyLkdhbWVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBaUVDO1FBN0RHLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxjQUFRLEdBQUcsSUFBSSxDQUFDLENBQUUsaUJBQWlCO1FBQ25DLGNBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFFLHFCQUFxQjtRQUM5QyxrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQjtRQUNuQyxlQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsa0JBQWtCO1FBQ25DLG1CQUFtQjtRQUNuQixvQkFBYyxHQUFHLElBQUksQ0FBQzs7UUFrRHRCLGlCQUFpQjtJQUNyQixDQUFDO0lBbERHLG9DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVyRSxDQUFDO0lBR0QsMENBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsS0FBZTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4Qix3REFBd0Q7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELG1EQUFxQixHQUFyQjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixpQkFBaUI7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUMxQywyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBRTlELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFcEQsbUJBQW1CO1lBQ25CLDhEQUE4RDtTQUNqRTtJQUNMLENBQUM7SUFJRCxtQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQTFERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzREQUNVO0lBSmxCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBaUV2QztJQUFELDBCQUFDO0NBakVELEFBaUVDLENBakVnRCxFQUFFLENBQUMsU0FBUyxHQWlFNUQ7a0JBakVvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFRpbmlBcmNoZXJfQXJyb3cgZnJvbSBcIi4vVGluaUFyY2hlci5BcnJvd1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vVGluaUFyY2hlci5HbG9iYWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbmlBcmNoZXJfR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcGdiUG93ZXJCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcblxuICAgIG1heEZvcmNlID0gMTAwMDsgIC8vIEzhu7FjIGLhuq9uIHThu5FpIMSRYVxuICAgIG1heEFuZ2xlID0gTWF0aC5QSSAvIDQ7ICAvLyBHw7NjIHThu5FpIMSRYSAoNDUgxJHhu5kpXG4gICAgY3VycmVudEZvcmNlID0gMDtcbiAgICBjdXJyZW50QW5nbGUgPSAwO1xuICAgIGlzQ2hhcmdpbmcgPSBmYWxzZTtcbiAgICBjaGFyZ2VSYXRlID0gNTA7IC8vIFThu5FjIMSR4buZIHTEg25nIGzhu7FjXG4gICAgYW5nbGVSYXRlID0gMC41OyAvLyBU4buRYyDEkeG7mSB0xINuZyBnw7NjXG4gICAgLy8gcG93ZXJCYXIgPSBudWxsO1xuICAgIHRyYWplY3RvcnlOb2RlID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuXG4gICAgfVxuXG5cbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudEZvcmNlID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgPSAwO1xuICAgICAgICB0aGlzLnBnYlBvd2VyQmFyLnByb2dyZXNzID0gMDtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuaW5jcmVhc2VGb3JjZUFuZEFuZ2xlLCAwLjEpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzQ2hhcmdpbmcpXG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChldmVudDogY2MuVG91Y2gpIHtcbiAgICAgICAgdGhpcy5pc0NoYXJnaW5nID0gZmFsc2U7XG4gICAgICAgIC8vdGhpcy5zaG9vdEFycm93KHRoaXMuY3VycmVudEZvcmNlLCB0aGlzLmN1cnJlbnRBbmdsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNDaGFyZ2luZylcbiAgICAgICAgdGhpcy5wZ2JQb3dlckJhci5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmluY3JlYXNlRm9yY2VBbmRBbmdsZSk7XG4gICAgICAgIHRoaXMuaW5jcmVhc2VGb3JjZUFuZEFuZ2xlKCk7XG4gICAgfVxuXG4gICAgaW5jcmVhc2VGb3JjZUFuZEFuZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NoYXJnaW5nKSB7XG4gICAgICAgICAgICAvL1TEg25nIGzhu7FjIHbDoCBnw7NjXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGb3JjZSA9IE1hdGgubWluKHRoaXMuY3VycmVudEZvcmNlICsgdGhpcy5jaGFyZ2VSYXRlLCB0aGlzLm1heEZvcmNlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuZ2xlID0gTWF0aC5taW4odGhpcy5jdXJyZW50QW5nbGUgKyB0aGlzLmFuZ2xlUmF0ZSwgdGhpcy5tYXhBbmdsZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkx1YyBiYW4gXCIsIHRoaXMuY3VycmVudEZvcmNlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb2MgYmFuIFwiLCB0aGlzLmN1cnJlbnRBbmdsZSlcbiAgICAgICAgICAgIC8vIEPhuq1wIG5o4bqtdCB0aGFuaCBs4buxYyBk4buxYSB0csOqbiBs4buxYyBoaeG7h24gdOG6oWlcbiAgICAgICAgICAgIHRoaXMucGdiUG93ZXJCYXIucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRGb3JjZSAvIHRoaXMubWF4Rm9yY2U7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZ3Jlc3MgXCIsIHRoaXMucGdiUG93ZXJCYXIucHJvZ3Jlc3MpO1xuXG4gICAgICAgICAgICAvLyBD4bqtcCBuaOG6rXQgcXXhu7kgxJHhuqFvXG4gICAgICAgICAgICAvL3RoaXMudXBkYXRlVHJhamVjdG9yeSh0aGlzLmN1cnJlbnRGb3JjZSwgdGhpcy5jdXJyZW50QW5nbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TiniArcher/scripts/game/TiniArcher.Arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63236lbYvRC2qz7Ra9IcQmS', 'TiniArcher.Arrow');
// TiniArcher/scripts/game/TiniArcher.Arrow.ts

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
var TiniArcher_Arrow = /** @class */ (function (_super) {
    __extends(TiniArcher_Arrow, _super);
    function TiniArcher_Arrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @property(cc.Label)
    // label: cc.Label = null;
    // @property
    // text: string = 'hello';
    // // LIFE-CYCLE CALLBACKS:
    TiniArcher_Arrow.prototype.onLoad = function () {
        console.log("dasdsa");
    };
    TiniArcher_Arrow = __decorate([
        ccclass
    ], TiniArcher_Arrow);
    return TiniArcher_Arrow;
}(cc.Component));
exports.default = TiniArcher_Arrow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvZ2FtZS9UaW5pQXJjaGVyLkFycm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEOztJQW1CQSxDQUFDO0lBakJHLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFFMUIsWUFBWTtJQUNaLDBCQUEwQjtJQUUxQiwyQkFBMkI7SUFFM0IsaUNBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQVpnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQW1CcEM7SUFBRCx1QkFBQztDQW5CRCxBQW1CQyxDQW5CNkMsRUFBRSxDQUFDLFNBQVMsR0FtQnpEO2tCQW5Cb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluaUFyY2hlcl9BcnJvdyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgLy8gbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGFzZHNhXCIpXG4gICAgfVxuXG4gICAgLy8gc3RhcnQgKCkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TiniArcher/scripts/game/TiniArcher.Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc2b2d7Q/lHcLO4BWVTI4dU', 'TiniArcher.Global');
// TiniArcher/scripts/game/TiniArcher.Global.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UaW5pQXJjaGVyL3NjcmlwdHMvZ2FtZS9UaW5pQXJjaGVyLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO0lBSUEsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbmlBcmNoZXJfR2FtZVZpZXcgZnJvbSBcIi4vVGluaUFyY2hlci5HYW1lVmlld1wiO1xuXG5leHBvcnQgY2xhc3MgR2xvYmFsIHtcblxuICAgIFxuICAgIFxufVxuIl19
//------QC-SOURCE-SPLIT------
