//function to be executed
async function sayHello() {

    //get the current tab that is active
    let [tab] = await chrome.tabs.query({ active: true});

    //execute the script on the current tab
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func:()=>{
            alert("Hello from my extension");
        }
    });
    
    
}

//export the function
document.getElementById('mybutton').addEventListener('click', sayHello);