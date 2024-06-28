const deleteBtn = document.querySelectorAll('.fa-trash') //assigns all elements with trash can class to a variable
const item = document.querySelectorAll('.item span') //assigns all span elements with item class to a variable
const itemCompleted = document.querySelectorAll('.item span.completed') //assigns all span elements with 'item' and 'completed' classes to a variable

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
}) //creates array from all delete icons and adds click event to each item

Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)
}) //creates array from all html elements with item class (items on to do list) and adds click event to each item

Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete)
}) //creates array from all html elements with 'completed' class and adds click event to each item

async function deleteItem(){ //callback function for delete click event
    const itemText = this.parentNode.childNodes[1].innerText //sets text attached to delete icon to variable
    try{
        const response = await fetch('deleteItem', { //fetching a delete request
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': itemText //sending above variable in body of request 
            })
          })
        const data = await response.json() //setting JSON response from delete request to a variable
        console.log(data)
        location.reload() //refresh page

    }catch(err){
        console.log(err)
    }
}

async function markComplete(){ //callback function for mark-complete click event
    const itemText = this.parentNode.childNodes[1].innerText //sets text value of click event to variable
    try{
        const response = await fetch('markComplete', { //fetching an update/put request
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText //sending above variable in body of request
            })
          })
        const data = await response.json() //setting JSON response from update/put request to a variable
        console.log(data)
        location.reload() //refresh page

    }catch(err){
        console.log(err)
    }
}

async function markUnComplete(){ //callback function for mark-uncomplete click event
    const itemText = this.parentNode.childNodes[1].innerText //sets text value of click event to variable
    try{
        const response = await fetch('markUnComplete', { //fetching an update/put request
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText //sending above variable in body of request
            })
          })
        const data = await response.json() //setting JSON response from update/put request to a variable
        console.log(data)
        location.reload() //refresh page

    }catch(err){
        console.log(err)
    }
}