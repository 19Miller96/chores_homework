import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      title: "ToDo's",
      todos: [
          "Laundry", "Washing", "Tidy Room"
      ],
        createTodo: ""
    },
    methods: {
      saveCreateTodo: function(){
        this.todos.push(this.createTodo);
          this.createTodo = "";
        },
      }
  });
});
