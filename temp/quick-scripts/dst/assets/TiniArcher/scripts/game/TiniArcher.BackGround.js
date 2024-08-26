
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcZ2FtZVxcVGluaUFyY2hlci5CYWNrR3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQTJEQztRQXhERyxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVQsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixZQUFNLEdBQVksS0FBSyxDQUFDOztJQW9ENUIsQ0FBQztJQWxERyx3QkFBd0I7SUFFeEIsc0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQscUNBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwwQ0FBVSxHQUFWO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxXQUFXLEdBQUcsNkJBQW1CLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHNDQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04scURBQXFEO1FBQ3JELElBQUksNkJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNyQyxPQUFNO1NBQ1Q7UUFDRCxJQUFJLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO1NBQ0o7UUFFRCw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLElBQUk7UUFFSixtQ0FBbUM7UUFDbkMsK0RBQStEO1FBQy9ELDBEQUEwRDtRQUMxRCw2QkFBNkI7UUFDN0IsMkJBQTJCO1FBQzNCLHlEQUF5RDtRQUN6RCxRQUFRO1FBQ1IsSUFBSTtJQUVSLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdFQUFnRTtJQUNwRSxDQUFDO0lBdkREO1FBREMsUUFBUTt1REFDQTtJQUVUO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ1E7SUFMVCxxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQTJEekM7SUFBRCw0QkFBQztDQTNERCxBQTJEQyxDQTNEa0QsRUFBRSxDQUFDLFNBQVMsR0EyRDlEO2tCQTNEb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFRpbmlBcmNoZXJfR2FtZVZpZXcgZnJvbSBcIi4vVGluaUFyY2hlci5HYW1lVmlld1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW5pQXJjaGVyX0JhY2tHcm91bmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaWRCZyA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5CdWxsc2V5ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgaXNTdG9wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnJhbWRvbVBvc1koKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJhbWRvbVBvc1koKSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xyXG4gICAgICAgIGxldCByYW5kb21WYWx1ZSA9IFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UucmFtZG9tUG9zWVtyYW5kb21dO1xyXG4gICAgICAgIHRoaXMubkJ1bGxzZXllLnNldFBvc2l0aW9uKDAscmFuZG9tVmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmFuZG9tXCIsIHJhbmRvbVZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy8gaWYoIVRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UuaXNCZ01vdmUpIHJldHVybjtcclxuICAgICAgICBpZiAoVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc1N0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmlzQmdNb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IDU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCA9PSAtOTYwKSB7XHJcbiAgICAgICAgICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmlzU3RvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zKClcclxuICAgICAgICAgICAgICAgIHRoaXMucmFtZG9tUG9zWSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZih0aGlzLm5vZGUueCA8PSAtMTkyMCApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5yZXNldFBvcygpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpZEJnIFwiLCB0aGlzLmlkQmcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWRCZzIgXCIsIFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UuaW5kZXhCZyk7XHJcbiAgICAgICAgLy8gaWYodGhpcy5pZEJnID09IFRpbmlBcmNoZXJfR2FtZVZpZXcuaW5zdGFuY2UuaW5kZXhCZykge1xyXG4gICAgICAgIC8vICAgICBpZih0aGlzLm5vZGUueCA8PSAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUueCA9IDA7XHJcbiAgICAgICAgLy8gICAgICAgICBUaW5pQXJjaGVyX0dhbWVWaWV3Lmluc3RhbmNlLmlzQmdNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQb3MoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSAxOTIwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTuG7gW4gxJHDoyDEkeG6t3QgbOG6oWkgduG7iyB0csOtOlwiLHRoaXMuaWRCZywgdGhpcy5ub2RlLngpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==