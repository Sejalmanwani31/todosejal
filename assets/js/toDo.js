


function onSubmitTodo(event) {
    event.preventDefault()
    const todoData = $('#taskinput').val()

    
    $.ajax({
        type: "POST",
        url: "/toDo/addToDo",
        data: {todoData},
        success: function (response) {
            console.log("🚀 ~ file: toDo.js:26 ~ response:", response.toDoObj)
            const row = `<tr><td>${response.toDoObj.id}</td>
            <td id="upy">${response.toDoObj.todo}</td>
            <td><input type=checkbox  title="check" id="checkboxx" data-id = "${response.toDoObj.id}" placeholder="tick"  onclick ="checkedBox(this)" value=${response.toDoObj.isDone}> &nbsp &nbsp &nbsp
            <button id="btn" onclick = "getTodo(this)" data-todoid = "${response.toDoObj.id}">Update</button>
     
            </td></tr>`
            $('#toDoBody').append(row)


            // hide_loader();

        },
        error: function (response) {
            // hide_loader();

        },
    });

}

function deleted(event){
    event.preventDefault()
    $('#toDoBody').empty()
    $.ajax({
        type: "DELETE",
        url : "/toDo/deleteAll",
        success : function(response){
            console.log(response.toDoObjjj)
        }
    })
}


function checkedBox(_this){
    console.log("check is working");
    const check = $(_this).data('id')
    $.ajax({
        type :"PUT",
        url: "/toDo/check",
        data: {check},
        success: function(response){
            console.log(response);
        }
    })
}
function getTodo(_this){
    console.log("updateTodo working", 
    _this);
    const update = $(_this).data('todoid');
    $.ajax({
    type:"GET",
    url: "/toDo/getSingleToDo",
    data:{update},
    success :function(response){
        console.log(response);
        $('#taskinput').val(response.toDoObj.todo)
        $('#tasksubmit').val("Update Task") ;
        $('#submitTodo').html(`
        <input  id="updatetasksubmit" value="Update Task" data-todoid=${response.toDoObj.id} onclick="updateTask(this)">`)


    }
})
}
function updatetask(_this){
    console.log("updateTodo working", 
    _this);
    const updatedTask = $(_this).data('todoid');
    console.log(updatedTask)
    $.ajax({
    type:"PUT",
    url: "/toDo/",
    data:{updatedTask},
    success :function(response){
        console.log(response)}
    })
}

            
          
        
