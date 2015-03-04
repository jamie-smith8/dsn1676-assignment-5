var $form = $('.form');
var $todo = $('.todo');
var $list = $('.list');

$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>');
    var $todoH2 = $('<h2>').html($todo.val());
    
});
