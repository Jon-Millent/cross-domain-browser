const { contextBridge, shell, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openExternal: (url) => shell.openExternal(url),
  replaceUrl: (url) => ipcRenderer.send('replace-url', url),
  loadPage: (url) => ipcRenderer.send('load-page', url),
});