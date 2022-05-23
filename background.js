const onClick = async (data, tab) => {
  chrome.scripting.insertCSS({
    target: {tabId: tab.id},
    css: 'style.css'
  })
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['getDOM.js']
  });
};

chrome.contextMenus.onClicked.addListener(onClick);

chrome.runtime.onInstalled.addListener(async () => {
      chrome.contextMenus.create({
        id: 'titan-read',
        title: 'Read with Titan',
        type: 'normal',
        contexts: ['selection']
      });
});
