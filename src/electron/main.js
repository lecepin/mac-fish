const electron = require("electron");
const { app, ipcMain, BrowserWindow, globalShortcut } = electron;
const path = require("path");
const url = require("url");
const CONST = require("./../const");

let mainWindow;
let fishWindow;

// >> App ============================== >>
app.on("ready", createWindow);

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});

// 不声明，则close 时，同 cmd+Q
app.on("window-all-closed", function () {});

// >> IPC ============================== >>
ipcMain.on(CONST.OPEN_FISH, () => {
  mainWindow.minimize();
  createFishWindow();
  app.dock.hide();
});

ipcMain.on(CONST.CLOSE_FISH, () => {
  fishWindow.close();
  app.dock.show();
  mainWindow.restore();
});

// >> Window ============================== >>
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      contextIsolation: false,
    },
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/web/index.html"),
      protocol: "file:",
      slashes: true,
    });
  mainWindow.loadURL(startUrl);
  process.env.ELECTRON_START_URL && mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
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

  if (process.env.ELECTRON_START_URL) {
    fishWindow.webContents.openDevTools();
  } else {
    fishWindow.setIgnoreMouseEvents(true, { forward: false });
  }

  const startUrl =
    process.env.ELECTRON_START_URL + "?fish" ||
    url.format({
      pathname: path.join(__dirname, "/web/index.html"),
      protocol: "file:",
      slashes: true,
      query: "fish",
    });

  fishWindow.loadURL(startUrl);

  fishWindow.on("closed", function () {
    fishWindow = null;
  });
}
