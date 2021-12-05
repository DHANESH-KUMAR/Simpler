window.onload = function() {
    console.log("when load")
    let callPageFunction = document.getElementById("btnCallPageFunction");

    callPageFunction.addEventListener("click", function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                fun: changeBodyColor
            }, function(resp) {
                console.log(resp);
            })
        });


    });

    function changeBodyColor() {
        console.log('change body color is called')
        document.body.style.backgroundColor = "skyblue";
    }
}