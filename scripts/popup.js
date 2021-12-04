$(document).ready(function () {
  var btnCallPageFunction = $("#btnCallPageFunction");
  var fileControl = $("#file1");
  var btnParseExcelResponse = $("#btnParseExcelResponse");

  btnCallPageFunction.click(function (e) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tab_id = tabs[0].id;
      chrome.tabs.sendMessage(
        tab_id,
        {
          message: "START_FETCHING_DATA",
        },
        function (response) {
          console.log(response);
        }
      );
    });
  });
});

document.addEventListener('DHANESH',function(e){
  debugger
  var data=e.details;
  console.log(data);
});