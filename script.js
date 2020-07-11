// Dependencies
var today = $("#currentDay");
var editDiv = $(".editDiv");
var timeDivs = $(".time")
var Btns = $(".saveBtn");
var input = $(".MyInput");
var listTimes = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00"];
var m = moment();
var currentHour = parseInt(m.format("HH"));
var currentMin = parseInt(m.format("mm"));

// Setting current date
today.text(m.format("LLLL"));

// Getting stored input values
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

// Changing div styles based on current time.
timeDivs.each(function(element){
    var timecolumn = $(this);
    var plannerTimes = parseInt(timecolumn.children(".clock").html().split(":")[0]);
    var minuteTimes = parseInt(timecolumn.children(".clock").html().split(":")[1]);
    if(plannerTimes === currentHour){
        timecolumn.siblings(".editDiv").css("background-color", "red");
        if(minuteTimes > currentMin){
            timecolumn.siblings(".editDiv").css("background-color", "lawngreen");
        }
        if(minuteTimes < currentMin){
            timecolumn.siblings(".editDiv").css("background-color", "gray");
        }
    }
    if(plannerTimes > currentHour){
        timecolumn.siblings(".editDiv").css("background-color", "lawngreen");
    }
    if(plannerTimes < currentHour){
        timecolumn.siblings(".editDiv").css("background-color", "gray");
    }
})


// if(currentTime > )


