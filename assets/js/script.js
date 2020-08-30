var current_task_color = 'rgb(220,20,60,0.8)';
var future_task_color = 'rgb(173,255,47,0.8)';

var currentDate = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDate);

var timeSlots = $(".to-do").toArray();

function setTimeSlotColors() {
    var currentTime = moment().format('kk');
    for (var i = 0; i < timeSlots.length; i++) {
        if (parseInt(timeSlots[i].id) == currentTime) {
            timeSlots[i].style.backgroundColor = current_task_color;
        } else if (parseInt(timeSlots[i].id) > currentTime) {
            timeSlots[i].style.backgroundColor = future_task_color;
        }
    }
}

console.log($("#8-text").text());
$("#8-text").text("goodbye");

$(".to-do").on("click", function () {
    console.log($("#input-form"));

    $("#input-form").css('visibility', 'visible');
    // console.log("CLICKED");
    // if ($(this).children().text() == "") {
    //     $(this).children().text("hello");
    // } else {
    //     $(this).children().text("");
    // }
});

$(".save-button").on("click", function () {
    console.log($(this).parent().children(".to-do").children(".form-control").css("visibility"));

    var currentToDo = $(this).parent().children(".to-do").children(".form-control");
    console.log(currentToDo.hidden);
    if (currentToDo.hidden == "false") {
        console.log("visible");
    } else {
        console.log("hidden");
    }
});

setTimeSlotColors();