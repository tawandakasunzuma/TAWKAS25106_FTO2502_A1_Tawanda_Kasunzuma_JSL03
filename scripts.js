/* = = = = = = = = = =
  Starter code
= = = = = = = = = = */

const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description: "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

/* = = = = = = = = = =
  Add new tasks to initial tasks array
= = = = = = = = = = */

let id = 4;
let taskNumber = 1;

for (let i = 0; i < 3; i++) {

  // Prompts to add new task
  let taskTitle = prompt(`Enter task ${taskNumber} title:`).trim();

  // Handle if user enters nothing
  while (taskTitle.length < 1) {
    alert("No task title has been entered.")
    taskTitle = prompt(`Enter task ${taskNumber} title:`).trim();
  }

  let taskDescription = prompt(`Enter task ${taskNumber} description:`).trim();
  let taskStatus = prompt(`Enter task ${taskNumber} status (todo, doing, done):`).trim().toLowerCase();

  // Check validity of taskStatus
  while (taskStatus !== "todo" && taskStatus !== "doing" && taskStatus !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    taskStatus = prompt(`Enter task ${taskNumber} status (todo, doing, done):`).trim().toLowerCase();
  }

  // Increment task number
  taskNumber++;

  // Add new task to 'initial tasks' array
  initialTasks.push(
    {
      id: id,
      title: taskTitle,
      description: taskDescription,
      status: taskStatus
    }
  )

  // Increment ID
  id++;

}

/* = = = = = = = = = =
  Notify user task limit has been reached
= = = = = = = = = = */

alert("There are enough tasks on your board, please check them in the console.");

/* = = = = = = = = = =
  Display all tasks
= = = = = = = = = = */

console.log("All tasks:", initialTasks);

/* = = = = = = = = = =
  Display filtered tasks
= = = = = = = = = = */

const completedTasks = initialTasks.filter(task => task.status === "done");
console.log("Completed tasks:", completedTasks);