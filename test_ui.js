(function () {
    'use strict';
    function stopTimer_f_Com(keyName) { }
    function beginTimer() { }

    //main-ui----------------------------------------------------------------------------------------------------
    const p_timeList = [
        { time: "0-22:00" },
        { time: "22:00-23:59" }
    ];
    const p_mapList = [{ name: "test11", mapId: 81, deliverId: 600300 }];
    let p_selectElements = [];

    function saveMapConfig() {
        const config = p_selectElements.map((sel, index) => ({
            time: p_timeList[index].time,
            value: sel.value
        }));
        GM_setValue("p_MapSelectConfig", config);
    }
    function loadMapConfig() {
        const config = GM_getValue("p_MapSelectConfig");
        if (!config) return;
        config.forEach((item, index) => {
            if (p_selectElements[index]) {
                p_selectElements[index].value = item.value;
            }
        });
    }

    function p_CreateMapSelector() {
        const wrap = document.createElement("div");
        wrap.style.cssText = `margin-bottom:12px;position:relative;`;
        const btn = document.createElement("div");
        btn.innerText = "请选择";
        btn.style.cssText = `padding: 6px 12px;background: #ff4444;color: #fff;border-radius: 4px;cursor: pointer;font-size: 12px;user-select: none;display:inline-block; min-width: 120px;`;
        const panel = document.createElement("div");
        panel.style.cssText = `position: absolute;top: 105%;left:0;background: #fff;border: 1px solid #ddd;border-radius: 4px;padding: 10px;display: none;min-width: 220px;box-shadow: 0 2px 10px rgba(0,0,0,0.1);`;
        const ul = document.createElement("ul");
        ul.style.cssText = `list-style: none;margin: 0;padding: 0;display: flex;flex-direction: column;gap: 6px;`;
        p_timeList.forEach(item => {
            const li = document.createElement("li");
            li.style.cssText = `display: flex;align-items: center;justify-content: space-between;gap: 10px;font-size: 12px;`;
            const timeText = document.createElement("span");
            timeText.textContent = item.time;
            timeText.style.width = "110px";
            const sel = document.createElement("select");
            sel.style.cssText = `padding: 3px 6px; font-size:12px; flex:1;`;
            p_mapList.forEach((item, i) => {
                const opt = document.createElement("option");
                opt.value = item.mapId + ';' + item.deliverId;
                opt.innerText = item.name;
                sel.append(opt);
            });
            p_selectElements.push(sel);
            sel.addEventListener("change", saveMapConfig);
            li.append(timeText, sel);
            ul.append(li);
        });
        panel.append(ul);
        wrap.append(btn, panel);

        btn.addEventListener("click", e => {
            e.stopPropagation();
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        });
        document.addEventListener("click", () => panel.style.display = "none");
        panel.addEventListener("click", e => e.stopPropagation());
        return wrap;
    }

    //Common UI------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // 修改：去掉fixed定位，返回按钮dom，加入ui_div内部
    function f_CreateButton(cName, onClickFn) {
        const btn = document.createElement('button');
        btn.style.cssText = `margin:2px;padding: 5px 8px;background: #ff4444;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 11px;`;
        btn.innerText = cName;
        btn.onclick = onClickFn;
        return btn;
    }

    // 修改：去掉fixed定位，返回select dom
    function f_CreateSelect(p_list) {
        const sel = document.createElement("select");
        sel.id = "select1";
        sel.style.cssText = `margin:2px;padding: 4px 6px;font-size:11px;`;
        p_list.forEach((item, i) => {
            const opt = document.createElement("option");
            opt.value = item.value;
            opt.innerText = item.text;
            sel.append(opt);
        });
        return sel;
    }

    function stopTimer_f_Select() {
        var p_select = document.getElementById("select1").value;
        switch (parseInt(p_select)) {
            case 0: stopTimer_f_Com("Blood"); stopTimer_f_Com("BloodChild"); break;
            case 1: stopTimer_f_Com("Sifang"); break;
        }
    }
    function beginTimer_f_Select() {
        var p_select = document.getElementById("select1").value;
        switch (parseInt(p_select)) {
            case 0: beginTimer_f_Blood(); break;
            case 1: beginTimer_f_Sifang(); break;
        }
    }

    let checkboxList = [];
    // 修改：去掉fixed定位，返回多选容器dom
    function f_CreateSelect1(p_list) {
        const container = document.createElement("div");
        container.style.cssText = `margin:12px 2px;position:relative;font-size: 11px;`;
        const inputBox1 = document.createElement("div");
        inputBox1.id = 'selectdivValue';
        inputBox1.style.cssText = `display: none`;
        const inputBox = document.createElement("div");
        inputBox.style.cssText = `display:inline-block;padding: 5px 10px;background: #ff4444;color: white;border: none;border-radius: 4px;cursor: pointer;min-width: 80px;user-select: none;`;
        inputBox.innerText = "请选择";
        inputBox.id = 'selectdivText';
        const dropdown = document.createElement("div");
        dropdown.style.cssText = `position: absolute;top: 105%;left:0;background: #fff;border: 1px solid #ddd;border-radius: 4px;min-width: 100px;max-height: 200px;overflow-y: auto;display: none;color: #333;`;

        p_list.forEach((item, i) => {
            const label = document.createElement("label");
            label.style.cssText = `display: flex;align-items: center;padding: 6px 10px;gap: 6px;cursor: pointer;`;
            label.onmouseover = () => (label.style.background = "#f5f5f5");
            label.onmouseout = () => (label.style.background = "#fff");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = item.value;
            checkboxList.push(checkbox);
            const text = document.createElement("span");
            text.innerText = item.text;
            label.append(checkbox, text);
            dropdown.append(label);
            checkbox.addEventListener("change", updateSelectedText);
        });
        container.append(inputBox, dropdown, inputBox1);

        inputBox.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        });
        document.addEventListener("click", () => {
            dropdown.style.display = "none";
        });
        dropdown.addEventListener("click", (e) => e.stopPropagation());

        function updateSelectedText() {
            const selected = checkboxList.filter(cb => cb.checked).map(cb => cb.nextElementSibling.innerText);
            const selected1 = checkboxList.filter(cb => cb.checked).map(cb => cb.value);
            inputBox.innerText = selected.length ? selected.join(",") : "请选择";
            inputBox1.innerText = selected1.length ? selected1.join(",") : "";
            saveYijiConfig();
        }
        return container;
    }

    // ===================== 实例化所有控件，添加到ui_div =====================
    // 分组容器，方便排版
    const btnGroup1 = document.createElement("div");
    btnGroup1.style.marginBottom = "10px";

    btnGroup1.appendChild(f_CreateButton("关闭", () => { stopTimer_f_Com("Main"); }));
    btnGroup1.appendChild(f_CreateButton("关闭", () => { stopTimer_f_Com("Yiji"); }));
    btnGroup1.appendChild(f_CreateButton("关闭", stopTimer_f_Select));
    btnGroup1.appendChild(f_CreateButton("开始", beginTimer));
    btnGroup1.appendChild(f_CreateButton("yj", beginTimer_f_Yiji));
    btnGroup1.appendChild(f_CreateButton("开始", beginTimer_f_Select));
    btnGroup1.appendChild(f_CreateButton("B", async () => { await f_Tianfu(1); }));
    btnGroup1.appendChild(f_CreateButton("G", async () => { await f_Tianfu(2); }));
    btnGroup1.appendChild(f_CreateButton("F", async () => { await f_Tianfu(3); }));

    const p_option1 = [
        { value: 0, text: '1' },
        { value: 1, text: '2' }
    ];
    const selDom = f_CreateSelect(p_option1);

    const p_list_yiji = [
        { value: "8036", text: "670" },
        { value: "8035", text: "660" }
    ];
    const sel1Dom = f_CreateSelect1(p_list_yiji);
    const mapSelDom = p_CreateMapSelector();

    // 依次加入ui_div
    // addUIControl(btnGroup1);
    // addUIControl(selDom);
    // addUIControl(sel1Dom);
    // addUIControl(mapSelDom);

    // 业务初始化
    loadMapConfig();

    function beginTimer_f_Blood() { }
    function beginTimer_f_Yiji() { }
    function beginTimer_f_Sifang() { }
    async function f_Tianfu(type) { }

    //Common function---------------------------------------------------------------------------------------------------------------------
    const style = document.createElement('style');
    style.textContent = `
            .custom-toast {
                position: fixed;top: 20px;right: 20px;padding: 12px 20px;border-radius: 6px;color: #fff;font-size: 13px;z-index: 999999;opacity: 0;transform: translateY(-20px);transition: all 0.3s ease;max-width: 300px;word-break: break-all;
            }
            .custom-toast.show {opacity: 1; transform: translateY(0);}
            .custom-toast.success {background-color: #00b42a;}
            .custom-toast.error {background-color: #8605ff;}
        `;
    document.head.appendChild(style);

    const uiDiv = document.createElement("div");
    uiDiv.id = "ui_div";
    uiDiv.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        z-index: 99999;
        background:#ffffff;
        border:1px solid #ccc;
        border-radius:8px;
        padding:16px;
        width:40%;
        height:30%;
        overflow:auto;
        display:none;
        box-shadow: 0 4px 20px rgba(0,0,0,0.25);
    `;
    document.body.appendChild(uiDiv);

    const closeUiBtn = document.createElement("div");
    closeUiBtn.innerText = "×";
    closeUiBtn.style.cssText = `
        position:absolute;
        top:4px;
        right:4px;
        width:22px;
        height:22px;
        line-height:22px;
        text-align:center;
        font-size:18px;
        cursor:pointer;
        color:#666;
        border-radius:4px;
        user-select:none;
    `;

    closeUiBtn.onmouseover = () => closeUiBtn.style.background = "#eee";
    closeUiBtn.onmouseout = () => closeUiBtn.style.background = "transparent";
    closeUiBtn.onclick = () => {
        uiDiv.style.display = "none";
    };
    uiDiv.appendChild(closeUiBtn);

    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "开";
    toggleBtn.style.cssText = `
        position: fixed;
        top:5px;
        right:5px;
        z-index:999999;
        padding:6px 14px;
        background:#2563eb;
        color:#fff;
        border:none;
        border-radius:4px;
        cursor:pointer;
        font-size:12px;
    `;
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        uiDiv.style.display = uiDiv.style.display === "none" ? "block" : "none";
    });

    function addUIControl(domElement, opts = {}) {
        const uiDiv = document.getElementById("ui_div");
        if (!uiDiv || !domElement) return;

        if ((opts.left !== undefined) || (opts.top !== undefined)) {
            domElement.style.position = "absolute";
            if (opts.left !== undefined) domElement.style.left = `${opts.left}px`;
            if (opts.top !== undefined) domElement.style.top = `${opts.top}px`;
            if (opts.right !== undefined) domElement.style.right = `${opts.right}px`;
            if (opts.bottom !== undefined) domElement.style.bottom = `${opts.bottom}px`;
        }

        if (opts.width !== undefined) {
            domElement.style.width = typeof opts.width === "number" ? `${opts.width}px` : opts.width;
        }
        if (opts.height !== undefined) {
            domElement.style.height = typeof opts.height === "number" ? `${opts.height}px` : opts.height;
        }

        uiDiv.appendChild(domElement);
    }
    window.addUIControl = addUIControl;

    addUIControl(f_CreateButton("关闭", () => { stopTimer_f_Com("Main"); }), { right: 30, top: 10 });
    addUIControl(f_CreateButton("关闭", () => { stopTimer_f_Com("Yiji"); }), { right: 30, top: 40 });
    addUIControl(f_CreateButton("关闭", stopTimer_f_Select), { right: 30, top: 70 });

    addUIControl(f_CreateButton("开始", beginTimer), { right: 70, top: 10 });
    addUIControl(f_CreateButton("开始", beginTimer_f_Yiji), { right: 70, top: 40 });
    addUIControl(f_CreateButton("开始", beginTimer_f_Select), { right: 70, top: 70 });

    addUIControl(f_CreateButton("开", async () => { await f_Tianfu(1); }), { right: 30, top: 100 });
    addUIControl(f_CreateButton("石", async () => { await f_Tianfu(2); }), { right: 60, top: 100 });
    addUIControl(f_CreateButton("开", async () => { await f_Tianfu(3); }), { right: 90, top: 100 });

    addUIControl(selDom, { right: 120, top: 75 });
    addUIControl(sel1Dom, { right: 120, top: 35 });
    addUIControl(mapSelDom, { right: 100, top: 10, width: 150 });

    // 业务初始化
    loadMapConfig();

})();




