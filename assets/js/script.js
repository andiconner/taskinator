var formEl = document.querySelector("#task-form");
 //variable reference to the task list . We target the <ul> element in the DOM
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();
  
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

  formEl.addEventListener("submit", createTaskHandler);
  
 