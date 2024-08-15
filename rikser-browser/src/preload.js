// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts



const path = require('path');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Ensure this file exists
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            webviewTag: true,
        },
    });

    mainWindow.loadFile('index.html');
    mainWindow.webContents.openDevTools();
    mainWindow.webContents.on('devtools-opened', () => {
        setImmediate(() => {
            // do whatever you want to do after dev tool completely opened here
            mainWindow.focus();
        });
    });
};

