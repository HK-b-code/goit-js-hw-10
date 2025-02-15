import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('[data-start]');
const dateInput = document.querySelector('#datetime-picker');
const timerFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let selectedTime = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
    } else {
      selectedTime = selectedDates[0];
      startBtn.disabled = false;
    }
  },
};

flatpickr(dateInput, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor(((ms % day) % hour) / minute),
    seconds: Math.floor((((ms % day) % hour) % minute) / second),
  };
}

function startTimer() {
  timerId = setInterval(() => {
    const diff = selectedTime - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
      iziToast.success({ title: 'Done', message: 'Countdown finished!' });
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(diff);
    timerFields.days.textContent = String(days).padStart(2, '0');
    timerFields.hours.textContent = String(hours).padStart(2, '0');
    timerFields.minutes.textContent = String(minutes).padStart(2, '0');
    timerFields.seconds.textContent = String(seconds).padStart(2, '0');
  }, 1000);

  startBtn.disabled = true;
  dateInput.disabled = true;
}

startBtn.addEventListener('click', startTimer);
