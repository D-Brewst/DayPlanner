// Dependencies
var today = $("#currentDay");
var editDiv = $(".editDiv");
var Btns = $(".saveBtn");
var content = [];
var input = $(".MyInput");

console.log(input[0])
// Setting current date
var m = moment();
today.text(m.format("dddd MMMM Do YYYY"));

// Adding event listener to all buttons
for(var i = 0; i < Btns.length; i++){
    Btns.on("click", saveInputs);
}

function saveInputs(event){
     content.push(input)   
}

// Detecting user input in editDivs
// let observer = new MutationObserver(mutations =>
//     mutations.forEach(mutation => {
//         console.log('input changed');
//     })
//     );

// for(var i = 0; i < editDiv.length; i++){
//     observer.observe(editDiv[i], {
//     childList: true,
//     characterData: true,
//     subtree: true,
//   });
// }

// Get text from editDiv
function getText(event){
    for(var i = 0; i < editDiv.length; i++){
        content.push(editDiv[i].innerHTML);
        localStorage.setItem("appointments", JSON.stringify(content));
    }   
    JSON.parse(localStorage.getItem(content));
}

