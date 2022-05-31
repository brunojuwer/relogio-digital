const clockContainer = document.querySelector('.clock-container');

const updateClock = () => {
    const present = new Date();
    const hour = present.getHours();
    const minutes = present.getMinutes();
    const seconds = present.getSeconds();

    const addTime = time => `<span>${String(time).length === 1 ? " 0" + time : time}</span>`;

    clockContainer.innerHTML = `${addTime(hour)} ${addTime(minutes)} ${addTime(seconds)}`
}

setInterval(updateClock, 1000);