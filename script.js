// Dependencies
var today = $("#currentDay");
var editDiv = $(".editDiv");
var Btns = $(".saveBtn");
var input = $(".MyInput");
var listTimes = ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"];

// Setting current date
var m = moment();
today.text(m.format("dddd MMMM Do YYYY"));

for(var i = 0; i < listTimes.length; i++){
    $(`#t${i} .MyInput`).val(localStorage.getItem(listTimes[i]));
}

// Adding event listener to all buttons
Btns.on("click", saveInputs);

function saveInputs(){
    var parent = $(this).parent();
    var sibling = parent.siblings();
    var inputBox = sibling.children(".MyInput").val();
    var apptTime = sibling.children(".clock").html();
    localStorage.setItem(apptTime, inputBox);
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

