"use strict";
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