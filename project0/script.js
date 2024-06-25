const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  itemCountSpan.innerText = Number(itemCountSpan.innerText) + 1;
  uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) + 1;

  let todoName = "";
  while (!todoName) {
    todoName = prompt("Enter the name of the TODO:")
  }

  let todo = document.createElement("li")

  let checkbox = document.createElement("input")
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.type = "checkbox"
  checkbox.setAttribute("onclick", "updateChecks(this)")
  let name = document.createElement("span")
  name.className = classNames.TODO_TEXT
  name.innerText = todoName
  let deleteButton = document.createElement("input")
  deleteButton.className = classNames.TODO_DELETE
  deleteButton.type = "button"
  deleteButton.setAttribute("value", "X")
  deleteButton.setAttribute("onclick", "deleteTodo(this)")

  todo.appendChild(checkbox)
  todo.appendChild(name)
  todo.appendChild(deleteButton)

  list.appendChild(todo)
}
function deleteTodo(element) {
  element.parentNode.remove()
  itemCountSpan.innerText = Number(itemCountSpan.innerText) - 1;
  todo_children = element.parentNode.childNodes
  for (let i = 0; i < todo_children.length; i++) {
    if (todo_children[i].className == classNames.TODO_CHECKBOX) {
      checkbox = todo_children[i]
      if (!checkbox.checked) {
        uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) - 1;
      }
    }
  }
}
function updateChecks(element) {
  if (element.checked) {
    uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) - 1;
  } else {
    uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) + 1;
  }
}
