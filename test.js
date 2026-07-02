net.MapModel.ins().send25(1);

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

//t.onAgreeClickHandler(null);             
//gd.arpgInst     //ArpgInstanceData
//AlertReliveDialog    992

//gd.arpgInst.reliveHandle(t);                 //debug      typeof t
//t.prototype.reliveHandle = function(e) {     //debug
//t.prototype.onAgreeClickHandler = function(e) {//debug
//net.MapModel.ins().send25(2)    //1 canel  2 agree


// var a = new UIData({
//     id: 75,
//     param: [t],
//     times: i
// });
// Logic.showReliveDialog(a)

// var n = {
//     id: 182,
//     param: [t],
//     times: i,
//     auto: !0
// };
// Logic.showReliveDialog(new UIData(n))

// e.showReliveDialog = function (e) {
//     uim.show(992, e),
//         uim.hide(226)
// }



// 等待 Logic 挂载到全局（如果加载较晚，用 MutationObserver 或定时器）
function hijack() {
    if (typeof window.Logic !== 'undefined' && window.Logic.showReliveDialog) {
        // 保存原函数引用
        const originalShow = window.Logic.showReliveDialog;

        // 重写函数
        window.Logic.showReliveDialog = function (param) {
            console.log('[劫持] 拦截到 showReliveDialog 调用，参数:', param);

            // 在这里你可以修改参数、阻止执行或执行自定义逻辑
            // 例如：参数大于100则不执行原函数
            if (param > 100) {
                console.log('[劫持] 参数大于100，阻止执行');
                return;
            }

            // 调用原函数（维持原有功能）
            return originalShow.call(this, param);
        };

        console.log('[劫持] 成功劫持 Logic.showReliveDialog');
        return true;
    }
    return false;
}

// 尝试劫持（如果页面加载时 Logic 已存在）
if (!hijack()) {
    // 若不存在，使用定时器等待（最多等待5秒）
    let count = 0;
    const timer = setInterval(() => {
        if (hijack() || count++ > 50) {
            clearInterval(timer);
        }
    }, 1000);
}


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


//f_globalRelive(emIns.getEntity("1610424320_2128603008"));  //test???   fighterObject
//gd.arpgInst = new ArpgInstanceData,
//gd.arpgInst.relive(e);
//console.log("e 的名称：", e.name);          // 类名
//console.log("e 完整对象：", e);              // 构造函数
//console.log("e 的原型：", e.prototype);      // 原型
//console.log("e 继承自：", Object.getPrototypeOf(e)); // 父类
//e.constructor.name   // 2. 看构造函数名


// t.prototype.useItem = function(e) {
// e.prototype.initMapData = function() {
//     var e = cm.mapDatas[this.mapConfig.data];
//     e.position = 0,
//     gd.map.readData(e)
// }


//GameSceneManager.Instance.curInstance.relive(para_Relive)
function f_globalRelive(e) {
    var t = emIns.getEntity(e.lid.toString());
    if (t && t.fighterObject) {
        t.fighterObject.isDead = false;
        t.fighterObject.delayhp = t.fighterObject.truehp = e.hp.toNumber();
        t.fighterObject.maxInner = t.fighterObject.delayInner = t.fighterObject.trueInner = e.inner;
        t._entityAI.relive(t);
        t.x = e.x * GameDefine.MAP_GRID_WIDTH + 0.5 * GameDefine.MAP_GRID_WIDTH;
        t.y = e.y * GameDefine.MAP_GRID_HEIGHT + 0.5 * GameDefine.MAP_GRID_HEIGHT;
        t.setPosition(e.x, e.y);
        if (gd.map.config.cls === 58 || gd.map.config.cls === 88) {
            var i = gd.honourbattle.myCamp;
            t.fighterObject.league !== i ? t.setNameColor(Html.New165) : t.setNameColor(14277081);
        }
        if (gd.map.config.cls === 36) {
            t.fighterObject.league !== gd.arpgInst.biqiMyGroup ? t.setNameColor(Html.New165) : t.setNameColor(14277081);
        }
        if (t.uid === emIns.firstPlayer.uid) {
            if (!gd.player.slBuff.shenlong) {
                t.fighterObject.droganBuff = false;
            }
            if (gd.map.config && gd.map.config.duplicate !== 1) {
                var r = cm.global[20001].value;
                if (parseInt(r) >= gd.player.level) {
                    //var a = new CallBack3(context.reliveCallBack, context);
                    //AlertDialog.showAlertById(98, a);
                }
            }
            gd.skill.clearNextSkill();
            if (gd.map.config.cls === 58 || gd.map.config.cls === 88) {
                var n = gd.honourbattle.wzzbrolearr;
                if (gd.map.config.cls === 88) {
                    n = gd.tvt.duplicateArr;
                }
                for (var o in n) {
                    if (n[o].rid.toString() === gd.player.uid.toString() && n[o].reliveCount === 0) {
                        gd.honourbattle.sendNotif(469);
                        break;
                    }
                }
            }
            gd.arpgInst.shiftKey = false;
            Logic.hideReliveDialog();
            gd.arpgInst.sendNotif(315);
        }
    }
}

var para_Relive = {//var myEntity = emIns.getEntity("1610424320_2128603008");//emIns.firstPlayer.fighterObject.id._string
    lid: emIns.firstPlayer.fighterObject.id._string,
    hp: { toNumber: () => emIns.firstPlayer.fighterObject.maxHp },
    inner: emIns.firstPlayer.fighterObject.maxInner,
    x: emIns.firstPlayer.fighterObject.bornX,   //78
    y: emIns.firstPlayer.fighterObject.bornY    //16
}

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
    p_alert_success('开始（Hot）');
}



/* eval(function (d, g, a, c, b, f) { b = function (e) { return e.toString(g) }; if (!"".replace(/^/, String)) { for (; a--;)f[b(a)] = c[a] || b(a); c = [function (e) { return f[e] }]; b = function () { return "\\w+" }; a = 1 } for (; a--;)c[a] && (d = d.replace(new RegExp("\\b" + b(a) + "\\b", "g"), c[a])); return d }("c(d()=>{2 t=3.e(4,f g(h,0));6 7(8);2 1=[];i(2 9 j t.a.b){1.k(t.a.b[9])}l(1.m>0){n.o.p().q(1)}6 7(8);3.r(4)},5*s*u,);", 31, 31, " ids var uim 560  await f_Sleep 2000 key page lids setInterval async show new UIData null for in push if length net BourseModel ins send21 hide 60  1e3".split(" "),
    0, {})); */