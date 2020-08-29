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

setTimeSlotColors();