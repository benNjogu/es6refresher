let todoList = [];
function remember(task) {
  todoList.push(task); //adds an item at the back of the queue
}

function getTask() {
  return todoList.shift(); //shift gets and removes the front item of the queue
}

function rememberUrgently(task) {
  todoList.unshift(task); //unshift adds an item but at the top of the queue
}

remember("groceries");
remember("weed");
remember("rice");
remember("frolence");
remember("dayaanaaah");

console.log(getTask());
console.log(getTask());
console.log(todoList.length);

rememberUrgently("the prince");
console.log(todoList[0]);
