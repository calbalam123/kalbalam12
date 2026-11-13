const { app, BrowserWindow } = require("electron");
const path = require("path");
function createWindow(){const win=new BrowserWindow({width:1440,height:940,minWidth:900,minHeight:650,backgroundColor:"#0b1220",webPreferences:{contextIsolation:true,nodeIntegration:false}});const built=path.join(process.resourcesPath,"web","index.html");if(app.isPackaged)win.loadFile(built);else win.loadURL("http://localhost:5173");}
app.whenReady().then(()=>{createWindow();app.on("activate",()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});});
app.on("window-all-closed",()=>{if(process.platform!=="darwin")app.quit();});
