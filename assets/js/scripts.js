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

    // --- Facebook Messenger Chat Plugin ---
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
        button.classList.add('clicked');
        setTimeout(function() {
            button.classList.remove('clicked');
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
