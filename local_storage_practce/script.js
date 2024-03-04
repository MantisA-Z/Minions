document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('text');
    const saved = document.getElementById('saved');
    saved.innerHTML = localStorage.getItem('txt') || '';

    function saving(){
        saved.innerHTML = input.value;
        localStorage.setItem('txt', input.value);
    };

    input.addEventListener('input', saving);
})
