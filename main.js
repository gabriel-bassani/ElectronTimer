const {app, BrowserWindow, ipcMain} = require('electron');

app.on('ready', () => {
    console.log('App initiated');
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () => {
    app.quit();
    console.log('\nApp ended');
});

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
    if(sobreWindow == null){
        sobreWindow = new BrowserWindow({
            width: 300,
            height: 275,
            alwaysOnTop: true,
            frame: false
        });
        sobreWindow.on('closed', () => {
            sobreWindow = null;
        })
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});
ipcMain.on('fechar-janela-sobre', () => {
    sobreWindow.close();
});