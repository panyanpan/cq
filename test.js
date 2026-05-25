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


//mochao   MoChaoPanel  uim.show(503);
// var r = cm.tulu[e.tid];
//                 uim.show(503, new UIData(r,2))
// uim.show(503,new UIData(null,3));


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


function f_globalRelive(e) {
    var t = emIns.getEntity(e.lid.toString());
    if (t && t.fighterObject) {
        t.fighterObject.isDead = false;
        t.fighterObject.delayhp = t.fighterObject.truehp = e.hp;
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
    lid: 1610424320_2128603008,  //emIns.firstPlayer.fighterObject.id._string
    hp: 533724645,//emIns.firstPlayer.fighterObject.maxHp,
    //hp: { toNumber: () => emIns.firstPlayer.fighterObject.maxHp },
    inner: 35691100,//emIns.firstPlayer.fighterObject.maxInner,
    x: 78,
    y: 16
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


function beginTimer_f_Xian_Child(mapid, deliverId) {
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
        if (nowDate > 1715) {
            stopTimer_f_Xian();
        }
    }, 2000);
    p_alert_success('开始辅助（xian）');
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
