/*!
* DegreeMaps Custom Scripts
*/

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- Typed.js Initialization ---
    // Looks for an element with the ID 'typed' and initializes the library
    if (document.getElementById('typed')) {
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 45,
            backSpeed: 50,
            smartBackspace: true,
            backDelay: 2500,
            loop: true,
            loopCount: 10,
            showCursor: true,
        });
    }

    // --- ReplaceMe.js Initialization ---
    // Finds any element with the class 'replace-me' and cycles through the text provided in the HTML.
    if (document.querySelector('.replace-me')) {
        var replace = new ReplaceMe(document.querySelector('.replace-me'), {
            // --- ANIMATION OPTIONS (Uses Animate.css classes) ---
            //animation: 'animated fadeInUp',         // This creates a smooth "slide up" effect
            animation: 'animated slideInDown',      // Animation for the new text entering.
            animationOut: 'animated slideOutUp',    // Animation for the old text leaving.
            
            // --- CORE OPTIONS ---
            speed: 2500,              // The time in milliseconds between text rotations. Default: 2000
            separator: ',',           // The character used to separate words in the HTML. Default: ','
            //hoverStop: false,         // Stop rotator on phrase hover
            //clickChange: false,       // Change phrase on click
            loop: true,               // Whether the rotation should loop indefinitely. Default: true
            //loopCount: 'infinite',    // Loop Count - 'infinite' or number
            autoRun: true,            // Whether the animation should start automatically on page load. Default: true
            //onInit: false,            // Function
            //onChange: false,          // Function
            //onComplete: false         // Function
            
            // --- CALLBACK FUNCTIONS (For advanced use) ---
            onInit: function() {},    // A function that runs once when the library is initialized.
            onComplete: function() {} // A function that runs after each full text rotation cycle.
        });
    }

    // --- Facebook Messenger Chat Plugin ---
    // []
    var chatbox = document.getElementById('fb-customer-chat');
    if (chatbox) {
        chatbox.setAttribute("page_id", "101760727860793");
        chatbox.setAttribute("attribution", "biz_inbox");
    }

    window.fbAsyncInit = function() {
        FB.init({
            xfbml: true,
            version: 'v15.0'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    // --- Global Functions (attached to window object) ---

    // Animate Button on Click
    // Called via onclick="animateButton(this)" in the HTML
    window.animateButton = function(button) {
        // Disable the button to prevent multiple submissions
        //button.disabled = true;

        // Add a "clicked" class to the button to animate it
        button.classList.add('clicked');
    
        // Remove the "clicked" class after a short delay
        setTimeout(function() {
            button.classList.remove('clicked');
            // Note: We are not re-enabling the button here.
            // After a form submission, the page typically reloads, which resets the button state.
        }, 500);
    }

    // Email Input Placeholder Conditions
    // Called via onfocus/onblur in the HTML
    window.clearPlaceholder = function(input) {
        if (!input.getAttribute('data-placeholder')) {
            input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
        }
        input.setAttribute('placeholder', '');
    }

    window.restorePlaceholder = function(input) {
        input.setAttribute('placeholder', input.getAttribute('data-placeholder'));
    }

}); // End of DOMContentLoaded
