class arra_list{
    constructor(){
        this.length = 0;
        this.data = {}
    }

    push(value){
        this.data[this.length] = value
        this.length++
    }
    pop(){
        // const ans = this.data[this.length-1]
        // delete this.data[this.length-1]
        // this.length--
        // return ans
        return this.delete(this.length)
    }
    get(index){
        return this.data[index]
    }
    delete(index){
        const ans = this.data[index]
        this._collapse_to(index)
        return ans
    }
    _collapse_to(index){
        for(let i = index; i < this.length; i++){
            this.data[i] = this.data[1 + i]
        }
        delete this.data[this.length-1]
        this.length--
    }
}