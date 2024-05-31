document.addEventListener('DOMContentLoaded', (event) => {
    let timerInterval;
    let remainingTime; // in seconds

    const timerElement = document.getElementById('timer');
    const startButton = document.getElementById('startQuiz');
    const endButton = document.getElementById('endQuiz');

    function startTimer() {
        const totalTime = 1200; 
        remainingTime = totalTime;
        timerInterval = setInterval(updateTimer, 1000);
        startButton.disabled = true;
        endButton.disabled = false;
    }

    function updateTimer() {
        if (remainingTime > 0) {
            remainingTime--;
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            timerElement.textContent = `Time: ${pad(minutes)}:${pad(seconds)}`;
        } else {
            clearInterval(timerInterval);
            alert("Time's up!");
            startButton.disabled = false;
            endButton.disabled = true;
        }
    }

    function pad(number) {
        return number < 10 ? `0${number}` : number;
    }

    function endTimer() {
        clearInterval(timerInterval);
        startButton.disabled = false;
        endButton.disabled = true;
        alert(`Quiz ended with ${timerElement.textContent.split(" ")[1]} remaining`);
    }

    startButton.addEventListener('click', startTimer);
    endButton.addEventListener('click', endTimer);
});
