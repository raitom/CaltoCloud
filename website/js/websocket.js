$(function(){
    var socket;

    if(window.WebSocket){
        var socket = new WebSocket("ws://localhost:12369");

        socket.onmessage = function(msg){
            if(msg.data == "")
            {
                $('#entreeCalcul').val("Error");
            }else{
                $('#entreeCalcul').val(msg.data)
            }
            console.log(msg);
        }
    }

    function sendMessage(msg){
        socket.send(msg);
    }

    $('.boutonAction').click(function(){
        $('#entreeCalcul').val($('#entreeCalcul').val() + $(this).html());
    });

    $('#boutonEnvois').click(function(){
        sendMessage($('#entreeCalcul').val());
    });

    $('#entreeCalcul').click(function(){
        $('#entreeCalcul').val("");
    })

    $(document).keypress(function(k) {
        if(!$('#entreeCalcul').is(":focus"))
        {
            switch(k.keyCode)
            {
                //Entrée
                case 13:
                    sendMessage($('#entreeCalcul').val());
                    break;
                case 42:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "*");
                    break;
                case 43:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "+");
                    break;
                case 45:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "-");
                    break;
                case 46:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + ".");
                    break;
                case 47:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "/");
                    break;
                case 48:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "0");
                    break;
                case 49:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "1");
                    break;
                case 50:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "2");
                    break;
                case 51:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "3");
                    break;
                case 52:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "4");
                    break;
                case 53:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "5");
                    break;
                case 54:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "6");
                    break;
                case 55:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "7");
                    break;
                case 56:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "8");
                    break;
                case 57:
                    $('#entreeCalcul').val($('#entreeCalcul').val() + "9");
                    break;
                case 61:
                    sendMessage($('#entreeCalcul').val());
                    break;
                case 99:
                    $('#entreeCalcul').val("");
                    break;
            }
        }
    });
});