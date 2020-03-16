////////////////////////////////////////////////////////////
// This is an implementation of a Stack using ECMAScript 6
////////////////////////////////////////////////////////////
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}



////////////////////////////////////////////////////////////
// Implement a Queue using Stacks using EcmaScript 6 Syntax
////////////////////////////////////////////////////////////

class Queue {
  constructor(){
    this.data = [];
  }
  enqueue(record){
    this.data.unshift(record);
  }
  dequeue() {
    return this.data.pop();
  }

}

//  this is how to implement queue using ES6 to add and remove . 
class Queue1 {
  
  constructor() {
    this.last = 0;
    this.storage = {};
  }
  
  enqueue(value) {
    var tempObj = {};
    for (var key in this.storage){
      var key2 =parseInt(key)+1;
      tempObj[key2] = this.storage[key];
    }
    tempObj[0] = value;
    this.last++;
    this.storage = tempObj;
    return this.last;
  }

  dequeue(){
    if(this.last === 0){
      return -1;
    }
    this.last--;
    var tmp = this.storage[this.last];
    delete this.storage[this.last];
    return tmp;
  }

  
}