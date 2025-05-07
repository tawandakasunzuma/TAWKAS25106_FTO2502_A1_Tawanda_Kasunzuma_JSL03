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
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

let id = 3;

for (let i = 0; i < 3; i++) {

  // Prompts to add new task
  const taskTitle = prompt("Enter task title:").trim();
  const taskDescription = prompt("Enter task description:").trim();
  let taskStatus = prompt("Enter task status (todo, doing, done):").trim().toLowerCase(); 

  // Check validity of taskStatus
  while (taskStatus !== "todo" && taskStatus !== "doing" && taskStatus !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    taskStatus = prompt("Enter task status (todo, doing, done):").trim().toLowerCase();
  }
}