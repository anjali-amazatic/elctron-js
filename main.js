const { app, BrowserWindow, globalShortcut, dialog, Tray, Menu } = require("electron");
const windowStateKeeper = require('electron-window-state')

//context menu creation (on right click)
let templates = [{label:'item1'},{label:'item2'},{label:'item3'},{role:'minimize'}]
let contextMenu = Menu.buildFromTemplate(templates)

const createWindow = () => {
    const win = new BrowserWindow({
        // x:mainWindowState.x,
        // y:mainWindowState.y,
        // width:mainWindowState.width,
        // height:mainWindowState.height
        width: 500,
        height: 500,
        webPreferences:{
            nodeIntegration:true
        }



    //frameless window
        // frame:false

  });

  //context menu(on right click)
  win.loadFile("index.html");
   win.webContents.on('context-menu', ()=>{
    contextMenu.popup();
   })

  //opening the dev tool 
  // win.webContents.openDevTools();

  mainWindowState.manage(win)
  //adding the menu to app
  //added the condition for mac or window 
  let isMac = process.platform==='darwin';
  let template = [
    {label:'Blog',submenu:[{label:'About'},{label:'Version'}]},
    {label:'About',submenu:[{label:'About'},{label:'Version'}]}

  ]
  let menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);




  //creating tray
//   let tray = new Tray('logo.jpg');
//   tray.setToolTip("Tray for electron icon");
//   tray.on('click', ()=>{
//     win.isVisible() ? win.hide():win.show();
//   })
//   let template=[{label:'item1'}, {label:'item2'}]


  //dilogue box
//   globalShortcut.register("k", ()=>{
//     dialog.showOpenDialog({
//         defaultPath:app.getPath('home')
//     })
//   })


//global  shortcut 
//   globalShortcut.register("k", ()=>{
//     win.loadFile("myfile.html");
//     console.warn("k key pressed");
//   })
  let wc = win.webContents;
  wc.on('dom-ready',()=>{
    console.warn("app dom is ready");
  })

  //creating the child 
//   let child = new BrowserWindow({parent: win})
//   child.loadFile("index.html")
//   child.show()
  //open dev tool in new window
//   win.webContents.openDevTools()
};

app.whenReady().then(() => {
  createWindow();
});
// or
// app.on('ready', ()=>{
//     createWindow();
// })