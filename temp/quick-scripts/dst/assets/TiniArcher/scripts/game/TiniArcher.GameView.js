
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