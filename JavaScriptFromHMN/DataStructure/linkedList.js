class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkList {
    constructor (){
        this.head = null
        this.tail = null
        this.length = 0
    }
    
    isEmpty(){
        return this.length === 0
    }
    
    push (value){
        let newNode = {      // class Node {} baniye new Node diye korle repeat hobe na code
            value : value,
            next : null
        }
        
        if(this.isEmpty()){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    
    pop(){
      if(!this.head){
        return null
      }
      if(this.length ===1){
        let removedNode = this.head
        this.head= null
        this.tail= null
        this.length= 0
        return removedNode
      }
      
      let currentNode = this.head
      let newLastNode
      while(currentNode){
        if(currentNode.next == this.tail){
          newLastNode = currentNode
          break
        }
        currentNode= currentNode.next
      }
      newLastNode.next= null
      this.tail = newLastNode
      this.length --
    }
    
    shift(){
      if(!this.head){
        return null
      }
      let currentNode = this.head
      this.head = currentNode.next
      this.length--
      
      if(this.length==0){
        this.tail = null
      }
      
    }
    unshift(value){
      let newNode =new Node (value)
      if(this.length==0){
        this.head = newNode 
        this.tail = newNode 
      } else{
        newNode.next = this.head
        this.head= newNode
      }
      this.length++
    }
    
    showValues(){
      let arr =[]
      let currentNode = this.head
      while (currentNode){
        arr.push(currentNode.value)
        currentNode= currentNode.next
      }
      return arr
    }
    
    
    
}

let list = new LinkList()
//console.log(list)
list.push(5)
list.push(10)
list.push(15)
list.pop()
//list.pop()
//list.pop()
list.shift()
//list.shift()
//list.shift()
list.unshift(1)
// list.unshift(2)

console.log(list.showValues())

console.log(list)