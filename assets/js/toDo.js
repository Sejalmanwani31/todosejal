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
    console.log("🚀 ~ file: toDo.js:13 ~ requestBody ~ requestBody:", requestBody)
    $.ajax({
        type: "POST",
        url: "/toDo/addToDo",
        data: requestBody,
        success: function (response) {
            console.log("🚀 ~ file: toDo.js:26 ~ response:", response)

            // hide_loader();

        },
        error: function (response) {
            // hide_loader();

        },
    });

}
