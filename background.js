const onClick = (data) => {
    console.log(data);
};

chrome.contextMenus.onClicked.addListener(onClick);

chrome.runtime.onInstalled.addListener(async () => {
      chrome.contextMenus.create({
        id: "titan-read",
        title: "Read with Titan",
        type: 'normal',
        contexts: ['selection']
      });
});
