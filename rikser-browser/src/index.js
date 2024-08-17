// const { app, BrowserWindow } = require('electron');
// const path = require('node:path');

// // Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (require('electron-squirrel-startup')) {
//   app.quit();
// }

// const createWindow = () => {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'),
//       nodeIntegration: true,
//       contextIsolation: false,
//       enableRemoteModule: true,
//       webviewTag: true,
//       devTools: false
//     },
//   });

//   // and load the index.html of the app.
//   mainWindow.loadFile(path.join(__dirname, 'index.html'));

//   // Open the DevTools.
//   mainWindow.webContents.openDevTools();
// };

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.whenReady().then(() => {
//   createWindow();

//   globalShortcut.register('CommandOrControl+Shift+I', () => {
//     if (mainWindow) {
//       mainWindow.webContents.toggleDevTools();
//     }
//   });

//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow();
//     }
//   });
// });

// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and import them here.
// app.whenReady().then(() => {
//   createWindow();

//   // Register a global shortcut to toggle DevTools
//   globalShortcut.register('CommandOrControl+Shift+I', () => {
//     if (mainWindow) {
//       mainWindow.webContents.toggleDevTools();
//     }
//   });

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow();
//     }
//   });
// });

const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('node:path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webviewTag: true
    },
  });

  // Load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // DevTools will be hidden initially.
};


session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['DNT'] = '1'; // Add Do Not Track header
    callback({ cancel: false, requestHeaders: details.requestHeaders });
});

session.defaultSession.cookies.set({
    url: 'http://your.url', // your site or domain
    name: 'SameSite',
    value: 'Strict',
    sameSite: 'strict'
});

session.defaultSession.cookies.remove('http://your.url', 'name_of_cookie_to_remove');



app.whenReady().then(() => {
  createWindow();

  // Register a global shortcut to toggle DevTools
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    if (mainWindow) {
      mainWindow.webContents.toggleDevTools();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('before-quit', () => {
    session.defaultSession.clearStorageData({ storages: ['cookies'] });
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  // Unregister all shortcuts when the app is about to quit
  globalShortcut.unregisterAll();
});


