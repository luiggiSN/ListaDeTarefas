$(document).ready(function () {
    $('#taskForm').submit(function (event) {
        event.preventDefault();

        var taskName = $('#taskInput').val();

        if (taskName.trim() !== '') {
            var newTask = $('<li>').text(taskName);
            $('#taskList').append(newTask);
            $('#taskInput').val('');

            newTask.click(function () {
                $(this).toggleClass('completed');
            });
        }
    });
});
