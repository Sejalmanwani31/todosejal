
function onSubmitTodo(event) {
    event.preventDefault()
    const todoData = $('#taskform').serializeArray()
    const requestBody = todoData.reduce((obj, item) => {
        obj[item.name] = item.value;
        return obj;
    }, {});
    if (!todoData) {
        $('#errorMsg').html('Please fill all Mandatory Fields')
        return;
    }
    $.ajax({
        type: "POST",
        url: "/toDo/addToDo",
        data: todoData,
        success: function (response) {
            console.log("🚀 ~ file: toDo.js:26 ~ response:", response.toDoObj)
            const row = `<tr><td>${response.toDoObj.id}</td>
            <td>${response.toDoObj.todo}</td>
            <td><input type=checkbox id="checkboxx" title="check" placeholder="tick"  onchange ="upDate(event)" value=${response.toDoObj.isDone}> &nbsp &nbsp &nbsp
     
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

//  const checkboxes = $('#checkboxx');
//  const selectedCheck = []
//  checkboxes.change(function(){
//     selectedCheck = checkboxes.filter(":checked").map(function(){
//         return this.value;
//     }).get()
//     console.log(selectedCheck)
//  })
function upDate(event){
    event.preventDefault()
    const checkboxes = $('#checkboxx')
    const selectedCheck = checkboxes.filter(":checked").map(function(){
                return this.value;
            }).get()
            console.log(selectedCheck)
}