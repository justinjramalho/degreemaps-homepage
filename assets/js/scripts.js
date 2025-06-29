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


    // --- Animate Button on Click ---
    // This function is called via onclick="animateButton(this)" in the HTML
    // It adds a 'clicked' class for a CSS animation and removes it after 500ms.
    // NOTE: This function needs to be attached to the window object to be accessible from the HTML onclick attribute.
    window.animateButton = function(button) {
        // Add a "clicked" class to the button to animate it
        button.classList.add('clicked');
    
        // Remove the "clicked" class after a short delay
        setTimeout(function() {
            button.classList.remove('clicked');
        }, 500);
    }


    // --- Email Input Placeholder Conditions ---
    // Saves the original placeholder text, clears it on focus, and restores it on blur.
    // NOTE: These functions need to be attached to the window object to be accessible from the HTML onfocus/onblur attributes.
    window.clearPlaceholder = function(input) {
        // Save the original placeholder value if it hasn't been saved yet
        if (!input.getAttribute('data-placeholder')) {
            input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
        }
        // Clear the placeholder value
        input.setAttribute('placeholder', '');
    }

    window.restorePlaceholder = function(input) {
        // Restore the original placeholder value
        input.setAttribute('placeholder', input.getAttribute('data-placeholder'));
    }

}); // End of DOMContentLoaded
