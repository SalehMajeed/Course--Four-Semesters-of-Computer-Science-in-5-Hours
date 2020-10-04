function stack(array){
    let operation = Object.create(this.operations)
    this.array = array
}

stack.prototype.operations = function (){
    let obj = {
    push:(val)=>{
        this.array[this.array.length] = val
        return this.array
    },
    pop:()=>{
        this.array.length--
        return this.array
    }
}
return obj
}

var x = new stack([1,2,3,4,5])