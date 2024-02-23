// Event Listner that gets executed when we click the extension buttomn

chrome.action.onClicked.addListener((tab) => {

    chrome.scripting.executeScript({

        target: {tabId: tab.id},
        func:()=>{
            alert("Hello from the service worker");
        }
    });

});
