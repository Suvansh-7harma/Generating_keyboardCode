document.addEventListener('DOMContentLoaded', function () {
    const keyDisplay = document.getElementById('key-display');
    const keycodeDisplay = document.getElementById('keycode-display');

    document.addEventListener('keydown', function (event) {
        const key = event.key;
        const keycode = event.keyCode;

        
        keyDisplay.textContent = `Pressed Key: ${key}`;
        
      
        keycodeDisplay.textContent = `Keycode: ${keycode}`;

        keyDisplay.style.color = '#00cc00'; 

       
        playKeySound();
        logKeyPress(key, keycode);
    });

    document.addEventListener('keyup', function () {
    
        keyDisplay.style.color = '#333'; 
    });

    
    function playKeySound() {
       
    }


    function logKeyPress(key, keycode) {
       
    }
});
