//------------------------------------------------------------------------------------------------------------
//go to PointXY
gd.map.gotoStagePoint(137,120, gd.map.curMapId, false);
//TP
net.BagModel.ins().send4(1, 405);
//open Cure NPC Dialog
var t = emIns.getAllNpc();
for (var i in t) {
    var r = t[i];
    if (r.npcObject.mapnpcid == 14962){
        gd.arpgInst.openNPCDialog(r);
    }       
}
//click cure
net.CureModel.ins().send2(0);
//open shouling
uim.show(549);uim.hide(549);
//aoto goto map
Logic.deliverToFindNpc(600300);      //biqi1  14961
Logic.deliverToFindNpc(600147);      //biqi5
Logic.deliverToFindNpc(600174);  //shengdi3  7126
Logic.deliverToFindNpc(600175);  //shengdi4  7127
Logic.deliverToFindNpc(600176);  //shengdi5  7128
Logic.deliverToFindNpc(600177);  //shengdi6  7129
Logic.deliverToFindNpc(600273);  //shengdi2-el  7152
Logic.deliverToFindNpc(600274);  //shengdi2-el  7153
Logic.deliverToFindNpc(600159);  //goldplace   200077

Logic.deliverToFindNpc(800214);      //fly1
Logic.deliverToFindNpc(800210);  //wuxianshilian1  5613
Logic.deliverToFindNpc(800211);  //wuxianshilian2  5614

Logic.deliverToFindNpc(600104);      //moyu1
Logic.deliverToFindNpc(600135);      //moyu2
Logic.deliverToFindNpc(600139);      //moyu3
//Logic.deliverToFindNpc(600100);    //third boss
Logic.deliverToFindNpc(600119);      //xiangyao10  200068
Logic.deliverToFindNpc(600180);      //xiangyao11  200078
Logic.deliverToFindNpc(200090);      //wujing  200090
Logic.deliverToFindNpc(600143);      //fudi2  200074
Logic.deliverToFindNpc(600027);      //baigu1  60
Logic.deliverToFindNpc(600136);      //baigu2  600
Logic.deliverToFindNpc(600087);      //bingong1  200050
Logic.deliverToFindNpc(600088);      //bingong2  200051
Logic.deliverToFindNpc(600089);      //bingong3  200052
Logic.deliverToFindNpc(200093);      //bingong4  200093
net.CureModel.ins().send2(0);    //click cure
//aoto goto yiji
net.PlayModel.ins().send3(t.mapPlayInfo.id);//8006  8012  8018  8024  8030
net.PlayModel.ins().send3(8024);  //470 
net.PlayModel.ins().send3(8030);  //570
net.PlayModel.ins().send3(8036);  //670
//exit yiji return to map     //H5RightActiveCtrl   clickExit
net.PlayModel.ins().send24();  //exit   
net.DuplicateModel.ins().send3(); //exit----?
//qilin boss info and relive time
gd.boss.getYgzcBossArr();
DateUtil.getTimeStrHMS(gd.boss.arpgBossTimeDic[8030]);
//------------------------------------------------------------------------------------------------------------


//version1.5   aoto go to map and fight
let innerPY = false;
const intervalIdPYKuafu = 0;
const intervalIdPY = setInterval(async () => {
    const nowHourPY = new Date().getHours() * 100 + new Date().getMinutes();
    console.log("logTime:"+new Date().toLocaleString());
    if(emIns.firstPlayer.fighterObject.delayhp == 0){
        clickCanvasAt(1130,400);await new Promise(resolve => setTimeout(resolve, 2000));	
        console.log("deadClickTime:"+new Date().toLocaleString());
    }        
    if(emIns.firstPlayer.fighterObject.delayhp < emIns.firstPlayer.fighterObject.maxHp/2.5){
        Logic.deliverToFindNpc(600300);//biqi1
        await new Promise(resolve => setTimeout(resolve, 1000));
        gd.map.gotoStagePoint(137, 120, gd.map.curMapId, false); 
        await new Promise(resolve => setTimeout(resolve, 4000));	     
        net.CureModel.ins().send2(0);    //click cure
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    if(nowHourPY >= 0 && nowHourPY < 1200 && gd.map.curMapId != 200074){
        Logic.deliverToFindNpc(600143);//fudi2
        console.log("gotoMapTime0000:"+new Date().toLocaleString());
    }
    if(nowHourPY >= 1200 && nowHourPY < 1930 && gd.map.curMapId != 200078){
        Logic.deliverToFindNpc(600180);//xiangyao11  
        console.log("gotoMapTime1200:"+new Date().toLocaleString());
    }    
    if(nowHourPY >= 1800 && nowHourPY < 1930 && gd.map.curMapId != 5614){
        //console.log("gotoMapTimeBaidu:"+new Date().toLocaleString());
        //Logic.deliverToFindNpc(800211);  //wuxianshilian2  5614
    }  
    if(nowHourPY >= 1930 && nowHourPY <= 1949 && gd.map.curMapId != 700 && !innerPY){
        console.log("gotoMapTimeKuafu:"+new Date().toLocaleString());
        net.CrazebattleModel.ins().send7(3);
        await new Promise(resolve => setTimeout(resolve, 400));
        gd.inst.sendReqEnterArpgMapMessaged(700);//Kuafu
        if(gd.map.curMapId == 700){
            innerPY = true;        
            intervalIdPYKuafu = setInterval(async () => {//Kuafu
                if(emIns.firstPlayer.fighterObject.delayhp == 0){
                    await new Promise(resolve => setTimeout(resolve, 400));	        
                    clickCanvasAt(1206,400); 
                }
                if(gd.arpgInst.autoFightType==3){    
                    await new Promise(resolve => setTimeout(resolve, 100));	    
                    gd.arpgInst.setAutoFight(1);
                }
                if(new Date().getHours() * 100 + new Date().getMinutes() > 1950)  {
                    clearInterval(intervalIdPYKuafu);
                    console.log("clearIntervalTime:"+new Date().toLocaleString());                
                }
            }, 1000);
        }
    }
    if(nowHourPY >= 2000 && nowHourPY < 2200 && gd.map.curMapId != 7129){
        //console.log("gotoMapTimeBaidu:"+new Date().toLocaleString());
        //Logic.deliverToFindNpc(600177);  //shengdi6  7129
    }     
    if(nowHourPY >= 2000 && nowHourPY < 2200 && gd.map.curMapId != 5614){
        //console.log("gotoMapTimeBaidu:"+new Date().toLocaleString());
        //Logic.deliverToFindNpc(800211);  //wuxianshilian2  5614
    }       
    if(nowHourPY >= 2000 && nowHourPY < 2359 && gd.map.curMapId != 200090){
        Logic.deliverToFindNpc(200090);//wujin1
        console.log("gotoMapTime2000:"+new Date().toLocaleString());
    }
    if(gd.arpgInst.autoFightType == 3){
        await new Promise(resolve => setTimeout(resolve, 1000));
        gd.arpgInst.setAutoFight(1);//clickCanvasAt(1325,316); 
        console.log("arpgClickTime:"+new Date().toLocaleString());
    }
}, 60000);

const intervalIdPY = setInterval(async () => {//神魔大战21:30  curMapId=53001
    if(gd.map.curMapId == 53001 && emIns.firstPlayer.fighterObject.delayhp == 0){
        await new Promise(resolve => setTimeout(resolve, 3200));            
        clickCanvasAt(1212, 400);
        //clickCanvasAt(222, 247);//get coin
        await new Promise(resolve => setTimeout(resolve, 500));
        gd.map.gotoStagePoint(63, 68, gd.map.curMapId, false);//center xy
    }    
    if(gd.arpgInst.autoFightType==3){        
        gd.arpgInst.setAutoFight(1);
    }  
}, 1000);

const intervalIdPY = setInterval(async () => {//四方20:00  curMapId=4901
    if(gd.map.curMapId == 4901 && emIns.firstPlayer.fighterObject.delayhp == 0){
        await new Promise(resolve => setTimeout(resolve, 10200));            
        clickCanvasAt(1130, 400);
        await new Promise(resolve => setTimeout(resolve, 500));
        gd.map.gotoStagePoint(55, 60, gd.map.curMapId, false);
    }    
    if(gd.arpgInst.autoFightType==3){        
        gd.arpgInst.setAutoFight(1);
    }  
}, 1000);

const intervalIdPY = setInterval(async () => {//群雄20:00  curMapId=4002,4001皇宫
    if(emIns.firstPlayer.fighterObject.delayhp == 0){
        console.log("ClickTime:"+new Date().toLocaleString());
        await new Promise(resolve => setTimeout(resolve, 5200));    
        if(gd.map.curMapId == 4002){
            clickCanvasAt(1130, 400);
        }
        if(gd.map.curMapId == 4001){
            clickCanvasAt(1213, 398);
        }
        await new Promise(resolve => setTimeout(resolve, 500));
        gd.map.gotoStagePoint(90, 84, gd.map.curMapId, false);
    }      
    if(gd.arpgInst.autoFightType==3){        
        gd.arpgInst.setAutoFight(1);
    }  
}, 1000);

const intervalIdPY = setInterval(async () => {//血火19:30  curMapId=700
    if(gd.map.curMapId == 700 && emIns.firstPlayer.fighterObject.delayhp == 0){
        await new Promise(resolve => setTimeout(resolve, 400));            
        clickCanvasAt(1206,400); 
        //console.log("deadClickTime:"+new Date().toLocaleString());
    }      
    if(gd.arpgInst.autoFightType==3){    
        await new Promise(resolve => setTimeout(resolve, 100));        
        gd.arpgInst.setAutoFight(1);
    }  
}, 1000);

const intervalIdPY = setInterval(async () => {//冰宫3  11:30  curMapId=700
    //const nowHourPY = new Date().getHours();
    const nowHourPY = new Date().getHours() * 100 + new Date().getMinutes();
    if(emIns.firstPlayer.fighterObject.delayhp == 0){
        await new Promise(resolve => setTimeout(resolve, 400));            
        clickCanvasAt(1130,400);                
        console.log("deadClickTime:"+new Date().toLocaleString());
    }      
    if(gd.map.curMapId != 200052 && emIns.firstPlayer.fighterObject.delayhp < emIns.firstPlayer.fighterObject.maxHp/2){
        Logic.deliverToFindNpc(600300);//biqi1
        await new Promise(resolve => setTimeout(resolve, 1000));
        gd.map.gotoStagePoint(137, 120, gd.map.curMapId, false); 
        await new Promise(resolve => setTimeout(resolve, 4000));         
        net.CureModel.ins().send2(0);    //click cure
        await new Promise(resolve => setTimeout(resolve, 1000));            
        Logic.deliverToFindNpc(600089);      //bingong3  200052
        console.log("gotoMapTime:"+new Date().toLocaleString());
    }    
    if(nowHourPY >= 1130 && nowHourPY <= 1145 && gd.map.curMapId != 200052){
        Logic.deliverToFindNpc(600089);      //bingong3  200052
        console.log("gotoMapTime:"+new Date().toLocaleString());
    }
    else{
        Logic.deliverToFindNpc(600300);//biqi1
        clearInterval(intervalIdPY);
    }
    if(gd.arpgInst.autoFightType==3){    
        await new Promise(resolve => setTimeout(resolve, 100));        
        gd.arpgInst.setAutoFight(1);
    }  
}, 30000);

//模拟Canvas坐标点击 
const canvas = document.querySelector('canvas');
function clickCanvasAt(x, y) {
    if (!canvas) {
        console.log('未找到canvas元素');
        return;
    }    
    // 创建鼠标事件
    const mouseDownEvent = new MouseEvent('mousedown', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
    });    
    const mouseUpEvent = new MouseEvent('mouseup', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
    });    
    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
    });    
    // 触发事件序列
    canvas.dispatchEvent(mouseDownEvent);
    canvas.dispatchEvent(mouseUpEvent);
    canvas.dispatchEvent(clickEvent);
    
    console.log(`在坐标(${x}, ${y})模拟点击`);
}

// 监听canvas的所有点击事件来了解按钮位置
function setupCanvasClickListener() {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;    
    canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log('Canvas点击坐标:', { x, y });
    }, true);
    console.log('Canvas点击监听已启用，现在点击canvas会显示坐标');
}
setupCanvasClickListener();