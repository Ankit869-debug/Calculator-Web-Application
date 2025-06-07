const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});

// Keyboard input handling
document.addEventListener('keydown', e => {
  const validKeys = '0123456789+-*/.=';
  if (validKeys.includes(e.key)) {
    if (e.key === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += e.key;
    }
  } else if (e.key === 'Enter') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
});
