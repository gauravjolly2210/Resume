const toTheTop=()=>{
    document.body.scrollTop=0;
}


function FormSubmit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message=document.getElementById("message").value;
    var dataString = 'name1=' + name + '&email1=' + email + '&message=' + message;
    if (name == '' || email == '' || message == '' ) {
    alert("Please Fill All Fields");
    } else {
    // AJAX code to submit form.
    $.ajax({
            type: "POST",
            url: "/home/qainfotech/Documents/js exercises/Resume/data.txt",
            data: dataString,
            cache: false,
            success: function(html) {
            alert(html);
            }
        });
    }
    return false;
    }
const editable=()=>{
    let popUp=document.getElementById('popUp')
    popUp.style.display="block"
    
    }

const editTemplate=()=>{
    
}