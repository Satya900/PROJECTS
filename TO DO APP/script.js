document.addEventListener("DOMContentLoaded", () => {
    const TaskInput = document.getElementById("TaskInput");
    const addTaskButton = document.getElementById("add_task_bttn");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const TaskText = TaskInput.value.trim(); 

        if (TaskText === "") {
            alert("Enter Task Please");
            return;
        }

        const taskItem = document.createElement("li"); 
        taskItem.textContent = TaskText;

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "ioi");
        deleteButton.textContent = "DELETE";

        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem); 
        });

        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("Completed"); 
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        TaskInput.value = "";
    }
});