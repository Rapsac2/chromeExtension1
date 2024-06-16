// chrome://extensions
console.log("start Youtube Management Chrome Extension");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message);
}