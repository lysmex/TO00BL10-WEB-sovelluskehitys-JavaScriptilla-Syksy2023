var nappi = document.getElementById("nappia");
nappi.addEventListener("click", addTask);

function addTask() {
    const inputTask = document.getElementById("inputTask");
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    taskItem.appendChild(document.createTextNode(inputTask.value));
    taskList.appendChild(taskItem);

    console.log(taskList);
    inputTask.value = "";
}
