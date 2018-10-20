angular.module('app', [])
 .controller('TodoCtrl', function () {
   this.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false},
      {text:'modify', done:true},
      {text:'test', done:false},
      {text:'close', done:false},
      {text: 'share', done: true}
      ];
  this.remaining = () => {
      return this.todos.length - this.todos.filter(item => item.done).length;
   }
  this.addTodo = () => {
      this.todos = [...this.todos, ...[{text: this.newItem, done: false}]];
  }
  this.removeItem = (index) =>{
      //this.todos = this.todos.filter(i => i == index); 
      this.todos.splice(index,1);      
  }
  this.archive = () =>{
      this.todos = this.todos.filter(item => !item.done);
  }

 });

 //http://jsfiddle.net/kdbhua7y/1/