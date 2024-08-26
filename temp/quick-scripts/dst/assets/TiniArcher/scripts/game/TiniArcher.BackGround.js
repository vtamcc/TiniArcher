
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