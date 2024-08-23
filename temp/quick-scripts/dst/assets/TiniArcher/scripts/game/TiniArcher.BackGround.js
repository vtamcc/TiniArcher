
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