$(function(){
  let socket = io.connect();
  let $messageForm = $('#messageForm');
  let $message = $('#message');
  let $chat = $('#chat');
  let $messageArea = $('#messageArea');
  let $userFormArea = $('#userFormArea');
  let $userForm = $('#userForm');
  let $users = $('#users');
  let $username = $('#username');





  $messageForm.submit(function(e){
    e.preventDefault();
    socket.emit('send message', $message.val());
    $message.val('');
  })

  socket.on('new message', function(data){
    $chat.append('<div class="well bg-light" style="margin:10px;"><strong>'+data.user+ ':' + '</strong>  '+data.msg+'</div>');
  });

  $userForm.submit(function(e){
    e.preventDefault();
    socket.emit('new user', $username.val(), function(data){
      if(data){
        $userForm.hide();
        $messageArea.show();
        $messageArea.css('display', 'flex');
      }
    });
    $username.val('');
  })

  socket.on('get users', function(data){
     let html = '';
     for(i = 0; i < data.length; i++){
       html += '<li class="list-group-item">'+data[i]+'</li>';
     }
     $users.html(html);
  });

});