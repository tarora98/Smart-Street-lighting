(function () {
    var element = function (id) {
        return document.getElementById(id);
    }

    var status = element('status');
    var messages = element('messages');



    //set default status
    var statusDefault = status.textCount;
    var setStatus = function (s) {
        //set staus
        status.textContent = s;
        if (s != statusDefault) {
            var delay = setTimeout(function () {
                setStatus(statusDefault);
            }, 4000);
        }
    };
    //connect to socket.io
    var socket = io.connect('http://localhost:4000');

    //Check for Connection
    if (socket != undefined) {
        console.log('connected to socket');
    }

    // Handle Output
    socket.on('output', function (data) {
        console.log(data);
        if (data.length) {

            for (var x = 0; x < data.length; x++) {

                var trRow = document.createElement('tr');
                //buils out message div
                var message = document.createElement('td');
                var message3=document.createElement('td');
                var message1 = document.createElement('td');
                trRow.setAttribute('class','chat-padding');
                message.setAttribute('class', 'chat-message');
                message3.setAttribute('class','chat-message');
                message.textContent = data[x].address;
                message3.textContent = data[x].city;
                if(data[x].status=="off")
                {
                    message1.setAttribute('class','chat-message1');
                }
                else{
                    message1.setAttribute('class','chat-message2');
                }
                message1.textContent = data[x].status;

                trRow.appendChild(message);
                trRow.appendChild(message3);
                trRow.appendChild(message1);
               
                messages.appendChild(trRow);
                // messages.insertBefore(message,
                //     messages.firstChild);
                // messages.insertBefore(message1,
                //         messages.firstChild);

            }
        }
    });

    // Get Status From server
    socket.on('status', function (data) {
        // Get Message status0
        setStatus((typeof data === 'object') ? data.message : data);

        // If status is clear, clear text
        if (data.clear) {
            textarea.value = '';
        }
    });


})();