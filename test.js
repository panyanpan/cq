
// gd.player.firstPlayer.fighterObject.uid
// var p_player = gd.player[0]
// p_player.level
// p_player.unionId == "haomen"


checkMapValid

// checkMapValid    cm.mapPlay[e] ? !1 : !0
//e.updateMyInfoShow() : e.updateMoChaoShow()
//gd.mochao.myMoChaoInfo.lootCount
//gd.mochao.myMoChaoInfo.occupyCount
//gd.mochao.getMyMoChaoData()
// gd.mochao.moChaoInfo.occupyUnionName=="haomen"
gd.mochao.moChaoInfo[966]
// //gd.map.curMapId= 40006


para_mochaoCount++;
if (para_mochaoCount % 30 == 0) {
    // var t = uim.show(503, new UIData(null, 3)); await f_Sleep(2000);
    var t = uim.show(503); //await f_Sleep(2000);
    t.onRadioSelected(3);
    t.page.radioGroup.selectedValue = 8;
    t.page.selectType = parseInt(8);
    t.page.updateShow();       //net.MochaoModel.ins().send1(r); //change
    uim.hide(503); await f_Sleep(2000);
    findMochao_Occupy();
}
function findMochao_Occupy() {
    if (new Date().getDay() != 1 || (new Date().getDay() == 1 && new Date() > new Date().setHours(10, 0, 0, 0))) {
        if (gd.mochao.getMyMoChaoData() == null || gd.mochao.moChaoInfo == null) {
            var t = uim.show(503); await f_Sleep(2000);
            t.onRadioSelected(3);
            uim.hide(503); await f_Sleep(2000);
        }
        var para_mc = gd.mochao.getMyMoChaoData();
        if (para_mc == null || (DateUtil.serverNow() - para_mc.occupyStartTime.toNumber() > 8 * 60 * 60 * 1e3)) {
            var para_Shentai = findMochao(711, 751) || findMochao(811, 999);
            if (para_Shentai) {
                net.MochaoModel.ins().send3(para_Shentai, 0);
            }
            else {
                para_Shentai = f_getRandomNumber();
                if (gd.mao.currentMoChaoId != "") {
                    para_Shentai = f_getRandomNumber();
                    //gd.mochao.moChaoInfo.occupyUnionName=="haomen"
                    para_Shentai = f_getRandomNumber();
                    //net.MochaoModel.ins().send3(para_Shentai, 1);
                }
            }
        }
    }
}
function findMochao(start, end) {
    if (gd.mochao.moChaoInfo != null) {
        for (let i = start; i <= end; i++) {
            if (gd.mochao.moChaoInfo[i]?.status == 0) { return i; }
        }
    }
    return null;
}
function f_getRandomNumber(min = 950, max = 985) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Logic.showSuitEff()
//gd.bag.wearEquip(i, t.data.lid)
//t.prototype.wearEquip = function(e, t) {
//ArmTipsSimple


// ============ 修复：定义 __extends ============
if (typeof __extends === 'undefined') {
    var __extends = function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}

var AlertReliveDialog = function (e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.timeKey = 0,
            t
    }
    return __extends(t, e),
        t.prototype.onAgreeClickHandler = function (e) {
            console.log('onAgreeClickHandler');
        },
        t
}


setTimeout(function () {//relive
    var OriginalAlertReliveDialog = AlertReliveDialog;
    AlertReliveDialog = function (e) {
        var instance = new OriginalAlertReliveDialog(e);
        window.p_AlertReliveDialogInstance = instance;
        return instance;
    };
    AlertReliveDialog.prototype = OriginalAlertReliveDialog.prototype;
    AlertReliveDialog.prototype.constructor = AlertReliveDialog;
    console.log1('time-AlertReliveDialog-11111');
}, 1 * 60 * 1e3);

// ============ 劫持构造函数 ============



// ============ 测试 ============
var dialog = new AlertReliveDialog({ test: 'test' });
console.log('全局实例:', window.p_AlertReliveDialogInstance);
console.log('是否同一个实例:', dialog === window.p_AlertReliveDialogInstance); // true
//window.p_AlertReliveDialogInstance.prototype.onAgreeClickHandler()




//debug
// t.prototype.onRadioBtnClick = function (e) {
//     var t = this
//         , i = e.target;
//     t.selectType = i.selectedValue,
//         t.scr_mochao.stopAnimation(),
//         t.scr_mochao.viewport.scrollV = 0,
//         t.updateShow();
//     var r = 999 == t.selectType ? 0 : t.selectType;
//     net.MochaoModel.ins().send1(r)          // r is selected index value
// }



(function () {
    'use strict';

    console.log('🚀 劫持 showReliveDialog');

    function hijack() {
        if (typeof Logic === 'undefined') {
            console.log('⏳ Logic 未加载');
            return false;
        }
        if (typeof Logic.showReliveDialog !== 'function') {
            console.log('⏳ showReliveDialog 未定义');
            return false;
        }
        const original = Logic.showReliveDialog;
        Logic.showReliveDialog = function (e) {
            console.log('🔥 showReliveDialog 参数:', e);
            // 详细输出
            if (e && typeof e === 'object') {
                console.table(e);
            }
            // 保存到全局
            window.__lastParams = e;
            return original.call(this, e);
        };
        console.log('✅ showReliveDialog 劫持成功');
        return true;
    }

    // 尝试劫持，如果失败则轮询
    if (!hijack()) {
        let attempts = 0;
        const timer = setInterval(() => {
            attempts++;
            if (hijack()) {
                clearInterval(timer);
            } else if (attempts >= 30) {
                clearInterval(timer);
                console.error('❌ 劫持失败');
            }
        }, 2000);
    }

})();

// 在 Console 中执行
(function () {
    // 检查 Logic 是否存在
    if (typeof Logic === 'undefined') {
        console.error('❌ Logic 未定义');
        return;
    }

    // 检查 showReliveDialog 是否存在
    if (typeof Logic.showReliveDialog !== 'function') {
        console.error('❌ Logic.showReliveDialog 不存在');
        return;
    }

    console.log('✅ 找到 Logic.showReliveDialog');

    // 保存原始方法
    const originalShowReliveDialog = Logic.showReliveDialog;

    // 劫持
    Logic.showReliveDialog = function (e) {
        console.log('🔥 [劫持] showReliveDialog 被调用');
        console.log('📌 参数 e:', e);
        console.log('📌 参数类型:', typeof e);
        console.log('📌 参数详情:', JSON.stringify(e, null, 2));
        console.log('📌 调用栈:', new Error().stack);

        // 如果是对象，显示所有属性
        if (e && typeof e === 'object') {
            console.log('📌 参数属性:');
            Object.keys(e).forEach(key => {
                console.log(`    ${key}:`, e[key]);
            });
        }

        // 保存到全局方便调试
        window.__lastShowReliveDialogParams = e;
        window.__lastShowReliveDialogTime = new Date();

        // 调用原始方法
        return originalShowReliveDialog.call(this, e);
    };

    console.log('✅ 劫持成功！');
    console.log('📌 使用 window.__lastShowReliveDialogParams 查看最后参数');
})();

(function () {
    const OriginalMapPop = window.MapPop;
    if (!OriginalMapPop) {
        console.error('❌ 找不到 MapPop 类');
        return;
    }
    window.__mapPopInstances = [];
    window.__lastMapPop = null;
    let counter = 0;

    // 1. 劫持构造函数（同上）
    window.MapPop = function (...args) {
        const instance = new OriginalMapPop(...args);

        counter++;
        instance.__mapPopId = counter;
        window.__mapPopInstances.push(instance);
        window.__lastMapPop = instance;

        console.log(`🎯 创建 MapPop #${counter}:`, instance);

        // 劫持实例方法
        hijackInstanceMethods(instance);

        return instance;
    };
    MapPop.prototype = OriginalMapPop.prototype;
    Object.assign(MapPop, OriginalMapPop);

    // 2. 劫持实例方法
    function hijackInstanceMethods(instance) {
        // 常见的弹窗方法名
        const methods = ['show', 'open', 'close', 'hide', 'destroy',
            'setContent', 'setTitle', 'render'];

        methods.forEach(methodName => {
            if (typeof instance[methodName] === 'function') {
                const original = instance[methodName];
                const id = instance.__mapPopId;

                instance[methodName] = function (...args) {
                    console.log(`[方法调用] MapPop #${id}.${methodName}()`, args);

                    // 记录调用历史
                    if (!this.__callHistory) this.__callHistory = [];
                    this.__callHistory.push({
                        method: methodName,
                        args: args,
                        time: Date.now()
                    });

                    // 如果是打开方法，记录当前实例
                    if (['show', 'open'].includes(methodName)) {
                        window.__lastMapPop = this;
                    }

                    return original.apply(this, args);
                };
            }
        });
    }

    console.log('✅ MapPop 完整劫持成功！');
})();


// t.prototype.useItem = function(e) {
// e.prototype.initMapData = function() {
//     var e = cm.mapDatas[this.mapConfig.data];
//     e.position = 0,
//     gd.map.readData(e)
// }


var para_boss_hot = [
    { mid: 9900101, x: 17, y: 87 },
    { mid: 9900102, x: 17, y: 23 },
    { mid: 9900103, x: 77, y: 23 },
    { mid: 9900104, x: 77, y: 86 }
];
function beginTimer_f_Hot() {
    console.log("benginTime-Hot:" + new Date().toLocaleString());
    if (para_IntervalId_Hot != null) {
        console.log("Time:" + new Date().toLocaleString() + "已有运行中的定时器-Hot");
        p_alert_success('运行中...');
        return;
    }
    para_IntervalId_Hot = setInterval(async () => {//Hot 17:30-17:40
        var nowDate = new Date().getHours() * 100 + new Date().getMinutes();
        if ((nowDate > 1729 && nowDate < 1740) && para_IntervalId_Hot != null) {
            if (emIns.firstPlayer.fighterObject.delayhp == 0) {
                await new Promise(resolve => setTimeout(resolve, 400));
                clickCanvasAt(1130, 400);
            }
            if (emIns.firstPlayer.fighterObject.delayhp < emIns.firstPlayer.fighterObject.maxHp * 0.9
                && [81, 200018, 200029, 200043, 200049, 200076, 10000, 9994].includes(gd.map.curMapId)) {
                Logic.deliverToFindNpc(600300);//biqi1  81
                await new Promise(resolve => setTimeout(resolve, 1000));
                gd.map.gotoStagePoint(137, 120, gd.map.curMapId, false);
                await new Promise(resolve => setTimeout(resolve, 4000));
                net.CureModel.ins().send2(0);    //click cure

                await new Promise(resolve => setTimeout(resolve, 1000));
                net.PlayModel.ins().send3(5618);      //hot  5618  
                await new Promise(resolve => setTimeout(resolve, 400));
                gd.map.gotoStagePoint(78, 23, gd.map.curMapId, false); //(78,23)  (78,87) (17,88) (16,25)
            }
            if (gd.map.curMapId != 5618) {
                await new Promise(resolve => setTimeout(resolve, 200));
                net.PlayModel.ins().send3(5618);//5618 5618  
                await new Promise(resolve => setTimeout(resolve, 400));
                gd.map.gotoStagePoint(78, 23, gd.map.curMapId, false); //(78,23)  (78,87) (17,88) (16,25)                
            }
            else {
                para_boss_hot.forEach((item) => {
                    if (!gd.map.tombInfo.some(p => p.mid === item.mid)) {
                        var para_xy = gd.emIns.firstPlayer.fighterObject;
                        if (Math.abs(item.x - para_xy.gridX) > 10 || Math.abs(item.y - para_xy.gridY) > 10) {
                            gd.map.gotoStagePoint(item.x, item.y, gd.map.curMapId, false);
                            return true;
                        }
                    }
                    return false;
                });
            }
            if (gd.arpgInst.autoFightType == 3) {
                await new Promise(resolve => setTimeout(resolve, 100));
                gd.arpgInst.setAutoFight(1);
            }
        }
        if (nowDate > 1740 || (nowDate > 1733 && d.map.curMapId == 5618 && gd.map.tombInfo.length == 4)) {
            stopTimer_f_Hot();
        }
    }, 6000);
    p_alert_success('begin（Hot）');
}

for (const item of para_boss_hot) {
    if (!gd.map.tombInfo.some(p => p.mid === item.mid)) {
        var para_xy = gd.emIns.firstPlayer.fighterObject;
        if (Math.abs(item.x - para_xy.gridX) > 10 || Math.abs(item.y - para_xy.gridY) > 10) {
            gd.map.gotoStagePoint(item.x, item.y, gd.map.curMapId, false);
            break;
        }
    }
}

//aoto ronglian
/* eval(function(d,g,a,c,b,f){b=function(e){return e.toString(g)};if(!"".replace(/^/,String)){for(;a--;)f[b(a)]=c[a]||b(a);c=[function(e){return f[e]}];b=function(){return"\\w+"};a=1}for(;a--;)c[a]&&(d=d.replace(new RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}("f(g()=>{3 t=6.h(7,4 i(j,0));8 4 9(1=>a(1,b));3 2=[];k(3 c l t.d.e){2.m(t.d.e[c])}n(2.o>0){p.q.r().s(2)}8 4 9(1=>a(1,b));6.u(7)},5*v*w);",33,33," resolve ids var new  uim 560 await Promise setTimeout 2000 key page lids setInterval async show UIData null for in push if length net BourseModel ins send21  hide 60 1e3".split(" "),
0,{})); */

setInterval(async () => {
    var t = uim.show(560, new UIData(null, 0));
    await new Promise(resolve => setTimeout(resolve, 2000));
    var ids = [];
    for (var key in t.page.lids) {
        ids.push(t.page.lids[key]);
    }
    if (ids.length > 0) {
        net.BourseModel.ins().send21(ids);
    }
    await new Promise(resolve => setTimeout(resolve, 2000)); uim.hide(560);
}, 5 * 60 * 1e3);

