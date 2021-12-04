chrome.runtime.sendMessage({ message: "showPageAction" });

window.addEventListener("message",  function (event) {
    if (event.source != window) {
      return;
    }

    if (event.data.type && event.data.type == "FROM_PAGE_CHROME_VERSION") {
      console.log("Content script received: " + event.data.text);
      // if(prev_refOfFechRequest){
      //   prev_refOfFechRequest(event.data.text);
      // }

      document.dispatchEvent(new CustomEvent('DHANESH',{
        detail:event.data.text
      }))
    } 
  
  },false);



chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.message) {
    case "START_FETCHING_DATA":
      const injectedCode = `
          let v=getChromeVersion();
          window.postMessage({ type: "FROM_PAGE_CHROME_VERSION", text: v }, "*");
      `;
      var script = document.createElement("script");
      script.textContent = injectedCode;
      document.head.appendChild(script);
      script.remove();
    break;
    default:
      console.log("nothing matched");
  }
});
