var current_task_color = 'rgb(220,20,60,0.8)';
var future_task_color = 'rgb(173,255,47,0.8)';

var currentDate = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDate);

var timeSlots = $(".to-do").toArray();

var tasks = JSON.parse(localStorage.getItem("tasks"));

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

function getStoredTasks() {
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log(tasks);
    }
}


$(".to-do").on("click", function () {
    $(".form-control").each(function (index, element) {
        element.style.visibility = "hidden";
    })

    var formZoneID = "#input-form-" + ($(this)[0].id);
    $(formZoneID)[0].style.visibility = "visible";
});

$(".save-button").on("click", function () {
    var currentTaskForm = $(this).parent().children(".to-do").children(".form-control")[0];

    var currentP = $(this).parent().children(".to-do").children(".display-text")[0];
    var taskDescription = currentTaskForm.value;

    currentP.textContent = taskDescription;
    currentTaskForm.style.visibility = "hidden";

    var currentTask = {
        "p-id": 4,
        "task": taskDescription
    }
    tasks.push(currentTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
});


setTimeSlotColors();
getStoredTasks();