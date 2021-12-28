const electron = require("electron");
const { app, ipcMain, BrowserWindow, globalShortcut, Menu } = electron;
const path = require("path");
const CONST = require("./../const");

let mainWindow;
let fishWindow;

// >> App ============================== >>
// 禁用 cmd+q
Menu.setApplicationMenu(new Menu());
app.on("ready", () => {
  createWindow();
  globalShortcut.register("Command+Shift+M", () => {
    closeFish();
  });
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});

// >> IPC ============================== >>
ipcMain.on(CONST.OPEN_FISH, () => {
  mainWindow.minimize();
  createFishWindow();
  app.dock.hide();
});

ipcMain.on(CONST.CLOSE_FISH, () => {
  closeFish();
});

// >> Window ============================== >>
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 530,
    resizable: false,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      contextIsolation: false,
    },
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    `file://${path.join(__dirname, "/web/index.html")}`;
  mainWindow.loadURL(startUrl);
  process.env.ELECTRON_START_URL && mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

function createFishWindow() {
  fishWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      contextIsolation: false,
    },
    fullscreen: true,
    simpleFullscreen: true,
    autoHideMenuBar: true,
    titleBarStyle: "hidden",
    alwaysOnTop: true,
    disableAutoHideCursor: true,
  });

  process.env.ELECTRON_START_URL && fishWindow.webContents.openDevTools();

  const startUrl = process.env.ELECTRON_START_URL
    ? process.env.ELECTRON_START_URL + "?fish"
    : `file://${path.join(__dirname, "/web/index.html")}?fish`;

  fishWindow.loadURL(startUrl);
  setTimeout(() => {
    fishWindow.focus();
  }, 2000);

  // 偶发性 BWindow 切换导致 SimpleFull 错误
  fishWindow.on("close", () => {
    fishWindow.setSimpleFullScreen(false);
  });

  fishWindow.on("closed", () => {
    fishWindow = null;
  });
}

function closeFish() {
  if (!fishWindow) {
    return;
  }

  fishWindow.close();
  app.dock.show();
  mainWindow.restore();
}
