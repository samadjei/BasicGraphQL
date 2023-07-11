const renderTodoList = (todos) => {
  todos.forEach((todo) => {
    renderTodo(todo);
  });
};

(async () => {
  const todos = [...(await fetchTodos())];
  renderTodoList(todos);
  document.querySelectorAll(".todo-item").onclick = (e) => {
    console.log(e);
  };
})();