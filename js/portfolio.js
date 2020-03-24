// SMOOTH SCROLLING
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.Link !== "") {
            event.preventDefault();
            var Link = this.Link;
            $('html, body').animate({
                scrollTop: $(Link).offset().top
            }, 2000, function(){
                window.location.Link = Link;
            });
        }
    });
});

// CONTACT FORM FUNCTIONS
function openContact() {
    document.getElementById("contactForm").style.display = "block";
}

function closeContact() {
    document.getElementById("contactForm").style.display = "none";
    this.Close();
}