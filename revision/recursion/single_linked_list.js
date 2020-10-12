function traverse(list){
    console.log(list.value)
    if(list.next) return traverse(list.next)
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }

  console.log(traverse(list))