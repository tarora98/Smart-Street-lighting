
$("#login").submit(function(){
    //alert("done")
    loginSubmit();
    return false;
})

function loginSubmit() {
    let admindetails = {
        id: document.getElementById('userid').value,
        password: document.getElementById('userpassword').value
    };

    $.ajax({
        type: "POST",
        url: "/login",
        dataType: "json",
        success: function (msg) {
            alert(msg);

           // return false;
            if (msg.length > 0) {
                location.href='/control';
            } else {
                alert("Invalid User !");
                return false;
            }
        },
        data: admindetails
    });
    return false;
}


function checkEmptyString(val)
{
    return (val == undefined || val == null || val.trim().length == 0);
}
