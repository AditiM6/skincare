//Banner animation
document.addEventListener('DOMContentLoaded', function() {
    var myIndex = 0;
    carousel();
                
    function carousel() {
        var i;
        var x = document.getElementsByClassName("banner");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
});

window.onpageshow = function(event) {
    if (event.persisted) {
        location.reload();
    }
};