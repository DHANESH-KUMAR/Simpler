// chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){

//     switch(request.message){

//         case "showPageAction":
//             chrome.tabs.query({active:true,currentWindow:true},function(tabs){
//                 chrome.pageAction.show(tabs[0].id);
//             });
//         break;


//         default:
//             console.log('no match found');
//     }


// });