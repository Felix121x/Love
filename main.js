function showSurprise() {
    document.querySelector('.container').classList.add('hidden');
    document.querySelector('.content').classList.remove('hidden');

    // Simulate a typewriter effect for love letter
    let letter = "My dearest love, words cannot express how much you mean to me...";
    let index = 0;
    let interval = setInterval(() => {
        document.getElementById("love-letter").textContent += letter[index];
        index++;
        if (index === letter.length) clearInterval(interval);
    }, 50);
}

function openLovePage() {
    window.location.href = "love.html";
}


function showLoveLetter() {
    document.getElementById('love-letter-box').classList.remove('hidden');
    document.getElementById('love-letter-box').classList.add('show');
}

function hideLoveLetter() {
    document.getElementById('love-letter-box').classList.remove('show');
    setTimeout(() => {
        document.getElementById('love-letter-box').classList.add('hidden');
    }, 500); // Wait for the animation to complete before hiding
}


