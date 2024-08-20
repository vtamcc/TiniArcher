
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
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TiniArcher_BackGround.prototype.start = function () {
    };
    TiniArcher_BackGround.prototype.update = function (dt) {
        if (!TiniArcher_GameView_1.default.instance.isBgMove)
            return;
        if (this.node.x <= -1960) {
            this.resetPos();
        }
        if (this.idBg == TiniArcher_GameView_1.default.instance.indexBg) {
            console.log("idBg ", this.idBg);
            if (this.node.x <= 0) {
                this.node.x = 0;
                TiniArcher_GameView_1.default.instance.isBgMove = false;
            }
        }
        this.node.x -= 5;
    };
    TiniArcher_BackGround.prototype.resetPos = function () {
        this.node.x = 980;
        console.log("Nền đã đặt lại vị trí:", this.idBg, this.node.x);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGluaUFyY2hlclxcc2NyaXB0c1xcZ2FtZVxcVGluaUFyY2hlci5CYWNrR3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQW1DQztRQWhDRyxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVQsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUE4QjlCLENBQUM7SUE1Qkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixxQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHNDQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBRyxDQUFDLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUNsRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFHO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQiw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUNqRDtTQUNKO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUEvQkQ7UUFEQyxRQUFRO3VEQUNBO0lBRVQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDUTtJQUxULHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBbUN6QztJQUFELDRCQUFDO0NBbkNELEFBbUNDLENBbkNrRCxFQUFFLENBQUMsU0FBUyxHQW1DOUQ7a0JBbkNvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgVGluaUFyY2hlcl9HYW1lVmlldyBmcm9tIFwiLi9UaW5pQXJjaGVyLkdhbWVWaWV3XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbmlBcmNoZXJfQmFja0dyb3VuZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpZEJnID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkJ1bGxzZXllOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZighVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc0JnTW92ZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS54IDw9IC0xOTYwICkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmlkQmcgPT0gVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pbmRleEJnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWRCZyBcIiwgdGhpcy5pZEJnKTtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgVGluaUFyY2hlcl9HYW1lVmlldy5pbnN0YW5jZS5pc0JnTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS54IC09IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQb3MoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSA5ODA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJO4buBbiDEkcOjIMSR4bq3dCBs4bqhaSB24buLIHRyw606XCIsdGhpcy5pZEJnLCB0aGlzLm5vZGUueCk7XHJcbiAgICB9XHJcbn1cclxuIl19