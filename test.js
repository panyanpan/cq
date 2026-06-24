//var RecoveryRewardDialog = function(e) {
//var RecoveryRewardDialog2 = function(e) {
//t[671] = RecyclePop
//return void net.RoleModel.ins().send23(2006, !1, null, -1, -1);
// if (gd.bag.recycleLids) {
//     var e = [];
//     for (var t in gd.bag.recycleLids)
//         gd.bag.bagDic[t] && e.push(gd.bag.recycleLids[t]);
//     e.length > 0 && net.BagModel.ins().send7(e, 1),
//         gd.bag.recycleLids = {}
// }

// case 67006
// case 67008
// case 67010:
// gd.map.prepareToEnterMap(t.mid),
//     net.MapModel.ins().send12();
// break;
// case 67014

//var Main = function(e) {      //debug
//MtwGame   //debug
//for (var i = 0, r = this._observers; i < r.length; i++) {  //debug


function f_CheckPosition_Go(x, y, h = 5) {
    const currentX = emIns.firstPlayer.fighterObject.gridX;
    const currentY = emIns.firstPlayer.fighterObject.gridY;
    if (Math.abs(currentX - x) > h || Math.abs(currentY - y) > h) {
        gd.map.gotoStagePoint(x, y, gd.map.curMapId, false);//center xy
    }
}

// Math.floor(gd.cangbaotu.bookEndTime.toNumber() / 1e3) > 9 * 60
t = cm.kuafuduodiankillrewards
for (var a in t) {
    if (t[a].needKill > gd.honourbattle.qzjdgetkillnum) {
        i = t[a].id;
        break
    }
    r = t[a].id
}
// var n = cm.kuafuduodiankillrewards[i]
// n.needKill <= gd.honourbattle.nowqzjdkillnum
// net.CanyonHegemonyModel.ins().send16(needKill);




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


//sifang----
// else if (t.data.id === NpcId.sfmz)
//net.PlayModel.ins().send3(4901)   // gotomap
// net.FairyislandModel.ins().send3(n.id)  //reward 1-10

//shenmo----
//t.prototype.updatekillinfo = function() {  //shenmo  reward
//net.CanyonHegemonyModel.ins().send16(i.nowcfg.needKill);//gd.honourbattle.nowqzjdkillnum


//qunxiong----
//var KuafuQXZLPop = function(e) {
//net.PvpShabakeModel.ins().send7(i); //reward 1-11
//var H5HomeSbkCtrl = function(e) {//qunxiong
// case this.btn_get:
//  this.curCfg && (t.kfcheck ? net.CrossShabakeModel.ins().send3(this.curCfg.id) : net.ShobakModel.ins().send8(this.curCfg.id));  //reward
//  1 == t.nowstate ? net.PvpShabakeModel.ins().send1() : 2 == t.nowstate ? net.PvpShabakeModel.ins().send2() : 3 == t.nowstate && net.PvpShabakeModel.ins().send4();
// t.prototype.updateQxzlGetRewardList = function(e) {//qunxiong
//         this.qxzlGetRewardArr = e,
//         this.sendNotif(667)
//     }


if (nowHourPY >= 2000 && nowHourPY < 2220) {
    if (gd.map.curMapId != 4901) {
        await new Promise(resolve => setTimeout(resolve, 400));
        net.PlayModel.ins().send3(4901);
        await new Promise(resolve => setTimeout(resolve, 400));
        gd.map.gotoStagePoint(55, 60, gd.map.curMapId, false);
    }
    if (para_intervalIdSifang == null) {
        beginTimer_f_Sifang();
    }
}
if (nowHourPY >= 2000 && nowHourPY < 2000) {
    if (gd.map.curMapId != 4001 || gd.map.curMapId != 4002) {
        await new Promise(resolve => setTimeout(resolve, 400));
        net.PvpShabakeModel.ins().send4();    //gotomap
        await new Promise(resolve => setTimeout(resolve, 400));
        gd.map.gotoStagePoint(90, 84, gd.map.curMapId, false);
    }
    if (para_intervalIdQunxiong == null) {
        beginTimer_f_Qunxiong();
    }
}

if (nowHourPY >= 2130 && nowHourPY < 2140) {
    if (gd.map.curMapId != 53001) {
        await new Promise(resolve => setTimeout(resolve, 400));
        // if (1 === gd.honourbattle.qzjdmatchState) {
        //     net.GamepvpModel.ins().send3();
        // }
        net.GamepvpModel.ins().send1(DaKuafuType.qdjd);
        await new Promise(resolve => setTimeout(resolve, 400));
        gd.map.gotoStagePoint(63, 68, gd.map.curMapId, false);//center xy
    }
    if (para_intervalIdShenmo == null) {
        beginTimer_f_Shenmo();      //var KuafuCaptureStrongholdPop = function(e) { //shenmodazhan
    }
}
if (nowHourPY >= 2142 && nowHourPY < 2152) {
    if (gd.map.curMapId != 53001) {
        await new Promise(resolve => setTimeout(resolve, 400));
        net.GamepvpModel.ins().send1(DaKuafuType.qdjd);
        await new Promise(resolve => setTimeout(resolve, 400));
        gd.map.gotoStagePoint(63, 68, gd.map.curMapId, false);//center xy
    }
    if (para_intervalIdShenmo == null) {
        beginTimer_f_Shenmo();
    }
}


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

// let innerPY = false;
var intervalIdPY = null;
var intervalIdPYKuafu = null;
intervalIdPY = setInterval(async () => {
    try {
        const nowHourPY = new Date().getHours() * 100 + new Date().getMinutes();
        console.log("logTime:" + new Date().toLocaleString());
        if (nowHourPY >= 852 && !intervalIdPYKuafu) {
            console.log("TimeKuafu:" + new Date().toLocaleString());
            await new Promise(resolve => setTimeout(resolve, 400));

            funPYBlood();
            // intervalIdPYKuafu = setInterval(async () => {        
            //     //const nowHourPY = new Date().getHours() * 100 + new Date().getMinutes();
            //     try {
            //         await new Promise(resolve => setTimeout(resolve, 100));
            //         console.log("TimeBlood2:"+new Date().toLocaleString());   
            //     } catch (error) {
            //         console.error("内层定时器执行异常：", error);
            //     }
            //     if(new Date().getHours() * 100 + new Date().getMinutes()>1900){
            //         clearInterval(intervalIdPYKuafu);
            //         intervalIdPYKuafu = null;
            //     }
            //     // clearInterval(intervalIdPY);
            //     // intervalIdPY = null;
            // }, 3000);        
        }
        if (nowHourPY > 1900) {
            clearInterval(intervalIdPY);
            intervalIdPY = null;
        }
    } catch (error) {
        console.error("外层定时器执行异常：", error);
        clearInterval(intervalIdPY);
        clearInterval(intervalIdPYKuafu);
        intervalIdPY = null;
        intervalIdPYKuafu = null;
    }
}, 20000);

//------------------------------------------------------------------------------------------------------------
function funPYBlood() {
    console.log("TimeBlood1:" + new Date().toLocaleString());
    intervalIdPYKuafu = setInterval(async () => {
        try {
            //const nowHourPY = new Date().getHours() * 100 + new Date().getMinutes();
            await new Promise(resolve => setTimeout(resolve, 100));
            console.log("TimeBlood2:" + new Date().toLocaleString());
        } catch (error) {
            console.error("内层定时器执行异常：", error);
        }
        if (new Date().getHours() * 100 + new Date().getMinutes() > 1900) {
            clearInterval(intervalIdPYKuafu);
            intervalIdPYKuafu = null;
        }
    }, 3000);

}


function beginTimer_f_Xian(mapid, deliverId) {
    console.log("benginTime-xian:" + new Date().toLocaleString());
    if (para_IntervalId_Xian != null) {
        console.log("Time:" + new Date().toLocaleString() + "已有运行中的定时器-xian");
        p_alert_success('运行中...');
        return;
    }
    para_IntervalId_Xian = setInterval(async () => {//xian 17:00-17:15
        var nowDate = new Date().getHours() * 100 + new Date().getMinutes();
        if ((nowDate > 1700 && nowDate < 1715) && para_IntervalId_Xian != null) {
            if (gd.map.curMapId != 31002) {
                await new Promise(resolve => setTimeout(resolve, 200));
                Logic.deliverToFindNpc(6102);
            }
        }
        if (nowDate > 1720 || (nowDate > 1705 && gd.map.curMapId == mapid && gd.map.tombInfo.length == 1)) {
            // gd.map.tombInfo.some(p => p.mid === 111);
            stopTimer_f_Xian();
        }
    }, 2000);
    p_alert_success('开始（xian）');
}

function stopTimer_f_Xian() {
    if (para_IntervalId_Xian != null) {
        clearInterval(para_IntervalId_Xian);
        para_IntervalId_Xian = null;
        console.log('定时器已关闭time-xian:' + new Date().toLocaleString());
    } else {
        console.log('暂无运行中的定时器time-xian:' + new Date().toLocaleString());
    }
    p_alert_success('已关闭');
}


function beginTimer_f_Ice3() {
    console.log("benginTime-Ice3:" + new Date().toLocaleString());
    if (para_IntervalId_Ice3 != null) {
        console.log("Time:" + new Date().toLocaleString() + "已有运行中的定时器-Ice3");
        p_alert_success('运行中...');
        return;
    }
    para_IntervalId_Ice3 = setInterval(async () => {//Ice3 11:30-11:45
        var nowDate = new Date().getHours() * 100 + new Date().getMinutes();
        if ((nowDate > 1130 && nowDate < 1145) && para_IntervalId_Ice3 != null) {
            if (emIns.firstPlayer.fighterObject.delayhp == 0) {
                await new Promise(resolve => setTimeout(resolve, 400));
                clickCanvasAt(1130, 400);
                console.log("deadClickTime:" + new Date().toLocaleString());
            }
            if (emIns.firstPlayer.fighterObject.delayhp < emIns.firstPlayer.fighterObject.maxHp * 0.9
                && [81, 200018, 200029, 200043, 200049, 200076, 10000, 9994].includes(gd.map.curMapId)) {
                Logic.deliverToFindNpc(600300);//biqi1  81
                await new Promise(resolve => setTimeout(resolve, 1000));
                gd.map.gotoStagePoint(137, 120, gd.map.curMapId, false);
                await new Promise(resolve => setTimeout(resolve, 4000));
                net.CureModel.ins().send2(0);    //click cure
                await new Promise(resolve => setTimeout(resolve, 1000));
                if (emIns.firstPlayer.fighterObject.delayhp > emIns.firstPlayer.fighterObject.maxHp * 0.9) {
                    Logic.deliverToFindNpc(600089);      //bingong3  200052
                    console.log("gotoMapTime:" + new Date().toLocaleString());
                }
            }
            if (gd.map.curMapId != 200052) {
                await new Promise(resolve => setTimeout(resolve, 200));
                Logic.deliverToFindNpc(600089);
            }
            if (gd.arpgInst.autoFightType == 3) {
                await new Promise(resolve => setTimeout(resolve, 100));
                gd.arpgInst.setAutoFight(1);
            }
        }
        if (nowDate > 1145) {
            // if (nowDate > 1145 || gd.map.tombInfo.length == 7) {
            stopTimer_f_Ice3();
        }
    }, 2000);
    p_alert_success('开始（Ice3）');
}

function stopTimer_f_Ice3() {
    if (para_IntervalId_Ice3 != null) {
        clearInterval(para_IntervalId_Ice3);
        para_IntervalId_Ice3 = null;
        console.log('定时器已关闭time-Ice3:' + new Date().toLocaleString());
    } else {
        console.log('暂无运行中的定时器time-Ice3:' + new Date().toLocaleString());
    }
    p_alert_success('已关闭');
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

function stopTimer_f_Hot() {
    if (para_IntervalId_Hot != null) {
        clearInterval(para_IntervalId_Hot);
        para_IntervalId_Hot = null;
        console.log('定时器已关闭time-Hot:' + new Date().toLocaleString());
    } else {
        console.log('暂无运行中的定时器time-Hot:' + new Date().toLocaleString());
    }
    p_alert_success('已关闭');
}

var para_IntervalId_Jilin = null;
function beginTimer_f_Jilin(id) {
    console.log("benginTime-jilin:" + new Date().toLocaleString());
    if (para_IntervalId_Jilin != null) {
        console.log("Time:" + new Date().toLocaleString() + "已有运行中的定时器-jilin");
        p_alert_success('运行中...');
        return;
    }
    var expireDate = new Date(Date.now() + 20 * 60 * 1000); //20 miniute
    para_IntervalId_Jilin = setInterval(async () => {
        var nowDate = new Date().getHours() * 100 + new Date().getMinutes();
        if ((nowDate < 600 || nowDate < 2200)) {
            return;
        }
        if (para_globalBool == true) {
            para_globalBool = false;
        }
        if (emIns.firstPlayer.fighterObject.delayhp == 0) {
            await new Promise(resolve => setTimeout(resolve, 400));
            clickCanvasAt(1206, 400);
        }
        if (gd.map.curMapId != id) {
            net.DuplicateModel.ins().send2(id);//32001;32002;32003;32004
        }
        if (gd.arpgInst.autoFightType == 3) {
            gd.arpgInst.setAutoFight(1);
        }
        if (new Date() > expireDate || gd.boss.dupCountData[id]?.count == 0) {
            stopTimer_f_Jilin();
        }
    }, 10000);
    p_alert_success('开始（jilin）');
}
function stopTimer_f_Jilin() {
    para_globalBool = true;
    if (para_IntervalId_Jilin != null) {
        clearInterval(para_IntervalId_Jilin);
        para_IntervalId_Jilin = null;
        console.log('定时器已关闭time-Jilin:' + new Date().toLocaleString());
    } else {
        console.log('暂无运行中的定时器time-Jilin:' + new Date().toLocaleString());
    }
    p_alert_success('已关闭');
}


uim.show(503, new UIData(null, 3));
uim.showOrHide(820);
// net.MochaoModel.ins().send1(0);  //7  8
function findMochao(start, end) {//auto-MoChao(Shentai)
    if (gd.mochao.moChaoInfo != null) {
        for (let i = start; i <= end; i++) {
            if (gd.mochao.moChaoInfo[i]?.status == 0) { return i; }
        }
    }
    return null;
}
var rewardBool_Mochao = false;
function findMochao_Occupy() {//auto occupy MoChao(Shentai)              
    if (new Date().getDay() != 1 || (new Date().getDay() == 1 && new Date().toLocaleTimeString() >= '10:00:00')) {
        var para_mc = gd.mochao.getMyMoChaoData();
        if (para_mc == null || (DateUtil.serverNow() - para_mc.occupyStartTime.toNumber() > 28800000)) {
            var para_Shentai = findMochao(711, 751) || findMochao(850, 999);//findMochao(704, 751) || findMochao(804, 999);
            if (para_Shentai) {
                net.MochaoModel.ins().send3(para_Shentai, 0);
            }
        }
        if (!rewardBool_Mochao && new Date().getDay() == 0 && new Date().toLocaleTimeString() >= '22:25:00') {
            rewardBool_Mochao = true;
            for (i = 1; i < 12; i++) {
                //net.MochaoModel.ins().send11(i);  //reward 1-n
            }
        }
    }
}

var para_IntervalId_Ronglian = null;
function beginTimer_f_Ronglian() {
    console.log("beginTimer_f_Ronglian:" + new Date().toLocaleString());
    if (para_IntervalId_Ronglian != null) {
        clearInterval(para_IntervalId_Ronglian);
        para_IntervalId_Ronglian = null;
        p_alert_success('已关闭（Ronglian）');
    }
    else {
        para_IntervalId_Ronglian = setInterval(async () => {
            // uim.show(503, new UIData(null, 3));
            // await new Promise(resolve => setTimeout(resolve, 2000));
            clickCanvasAt(725, 517);
            // await new Promise(resolve => setTimeout(resolve, 2000));
            // uim.hide(503);
        }, 600000);
        p_alert_success('已开始（Ronglian）');
    }
}




var para_IntervalId_Chechi = null;
var para_boss_Chechi = [
    { mid: 41000001, x: 20, y: 18 },
    { mid: 41000002, x: 88, y: 80 },
    { mid: 41000003, x: 20, y: 83 }
];
function beginTimer_f_Chechi() {
    console.log("benginTime-Chechi:" + new Date().toLocaleString());
    if (para_IntervalId_Chechi != null) {
        console.log("Time:" + new Date().toLocaleString() + "已有运行中的定时器-Chechi");
        p_alert_success('运行中...');
        return;
    }
    para_IntervalId_Chechi = setInterval(async () => {//Chechi 22:00-22:15
        var nowDate = new Date().getHours() * 100 + new Date().getMinutes();
        if ((nowDate > 2200 && nowDate < 2215) && para_IntervalId_Chechi != null) {
            if (para_globalBool == true) {
                para_globalBool = false;
            }
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
                gd.inst.sendReqEnterArpgMapMessaged(200069)   //gotomap chechi

                await new Promise(resolve => setTimeout(resolve, 400));
                gd.map.gotoStagePoint(88, 80, gd.map.curMapId, false); //88,80   20,80   20,83
            }
            if (gd.map.curMapId != 200069) {
                await new Promise(resolve => setTimeout(resolve, 200));
                gd.inst.sendReqEnterArpgMapMessaged(200069)   //gotomap chechi

                await new Promise(resolve => setTimeout(resolve, 400));
                gd.map.gotoStagePoint(88, 80, gd.map.curMapId, false); //88,80   20,80   20,83
            }
            if (gd.arpgInst.autoFightType == 3) {
                await new Promise(resolve => setTimeout(resolve, 100));
                gd.arpgInst.setAutoFight(1);
            }
        }
        if (nowDate > 2215 || (nowDate > 2205 && gd.map.curMapId == 200069 && gd.map.tombInfo.length == 3)) {
            stopTimer_f_Chechi();
        }
    }, 8000);
    p_alert_success('开始（车迟）');
}

function stopTimer_f_Chechi() {
    para_globalBool = true;
    if (para_IntervalId_Chechi != null) {
        clearInterval(para_IntervalId_Chechi);
        para_IntervalId_Chechi = null;
        console.log('定时器已关闭time-Chechi:' + new Date().toLocaleString());
    } else {
        console.log('暂无运行中的定时器time-Chechi:' + new Date().toLocaleString());
    }
    p_alert_success('已关闭');
}