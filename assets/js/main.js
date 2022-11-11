const inputText = document.querySelector(".input-text");
const div = document.querySelector(".todo-list");
const form = document.querySelector(".form");
const currentTasks = document.querySelectorAll(".delete");

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ add Task Function                                                       │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const addTasks = () => {
  const textInserted = inputText.value.trim(); // to remove the white space at beginning and at the end
  let wrapDiv = document.createElement("div");
  let p = document.createElement("p");
  let button = document.createElement("button");
  div.appendChild(wrapDiv);
  wrapDiv.appendChild(p);
  wrapDiv.appendChild(button);
  button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  wrapDiv.setAttribute("id", "tasks");
  button.classList.add("delete");
  p.textContent = textInserted;
  inputText.value = "";
  inputText.focus();
};
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Remove Task Function                                                    │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const removeTasks = () => {
  let currentTasks = document.querySelectorAll(".delete");
  currentTasks.forEach((task) => {
    task.addEventListener("click", () => {
      task.parentElement.remove();
      inputText.value = "";
      inputText.focus();
    });
  });
};

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   addTasks();
// removeTasks();
// });
document.addEventListener("keydown", (keyboard) => {
  if (keyboard.code === "Enter") {
    //Enter E has to be capital letter
    if (inputText.value == "") {
      alert("please enter a Task");
    } else {
      addTasks();
      removeTasks();
    }
  }
});
