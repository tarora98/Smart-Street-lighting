$("#update").click(function () {
    //alert("done")
    submitRequest();
    return false;
})

function submitRequest() {
    let updateDetail = {
        city: document.getElementById('city').value,
        address: document.getElementById('address').value,
        brightness: document.getElementById('brightness').value,
        timeslot: document.getElementById('timeslot').value
    };

    $.ajax({
        type: "POST",
        url: "/updateForm",
        dataType: "json",
        success: function (msg) {
            // return false;
            if (msg.length > 0 && msg[0].status == true) {
                alert(msg[0].message);
                location.href = '/updateForm';
            } else {
                alert(msg[0].message);
                // alert("Invalid User !");
                return false;
            }
        },
        data: updateDetail
    });
    return false;
}
