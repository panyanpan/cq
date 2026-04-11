

// let innerPY = false;
var intervalIdPY = null; 
var intervalIdPYKuafu = null;
intervalIdPY = setInterval(async () => {
    try {
        const nowHourPY = new Date().getHours() * 100 + new Date().getMinutes();
        console.log("logTime:"+new Date().toLocaleString());              
        if(nowHourPY >= 852 && !intervalIdPYKuafu){
            console.log("TimeKuafu:"+new Date().toLocaleString());        
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
        if(nowHourPY>1900){
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
    console.log("TimeBlood1:"+new Date().toLocaleString());       
    intervalIdPYKuafu = setInterval(async () => {        
        try {
        //const nowHourPY = new Date().getHours() * 100 + new Date().getMinutes();
            await new Promise(resolve => setTimeout(resolve, 100));
            console.log("TimeBlood2:"+new Date().toLocaleString());   
        } catch (error) {
            console.error("内层定时器执行异常：", error);
        }
        if(new Date().getHours() * 100 + new Date().getMinutes()>1900){
            clearInterval(intervalIdPYKuafu);
            intervalIdPYKuafu = null;
        }
    }, 3000);

}
