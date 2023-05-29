function append(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    const result = document.getElementById('result').value;
    const answer = eval(result);
    document.getElementById('result').value = answer;
  }
  
  function addDecimal() {
    const result = document.getElementById('result').value;
    if (
      result === '' ||
      result.endsWith('+') ||
      result.endsWith('-') ||
      result.endsWith('*') ||
      result.endsWith('/')
    ) {
      document.getElementById('result').value += '0.';
    } else if (!result.includes('.')) {
      document.getElementById('result').value += '.';
    }
    isDecimalAdded = true; // Add this line
  }
  
  
  function removeLastInput() {
    const result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
  }

  let memoryValue = 0;

function addToMemory() {
  const result = document.getElementById('result').value;
  if (result !== '') {
    memoryValue += parseFloat(result);
  }
}

function subtractFromMemory() {
  const result = document.getElementById('result').value;
  if (result !== '') {
    memoryValue -= parseFloat(result);
  }
}

function recallMemory() {
  document.getElementById('result').value = memoryValue.toString();
}

function clearMemory() {
  memoryValue = 0;
}

function toggleTheme() {
    const stylesheet = document.getElementById('theme-stylesheet');
    const currentTheme = stylesheet.getAttribute('href');
    const lightTheme = 'light-theme.css';
    const darkTheme = 'dark-theme.css';
  
    // Toggle between light mode and dark mode
    if (currentTheme.includes(lightTheme)) {
      stylesheet.setAttribute('href', darkTheme);
    } else {
      stylesheet.setAttribute('href', lightTheme);
    }
  }
  

// Rest of the existing code...

  
  // Keyboard support
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    const operators = ['+', '-', '*', '/'];
  
    if (/[0-9]/.test(key)) {
      append(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearResult();
    } else if (key === 'Backspace') {
      removeLastInput();
    } else if (operators.includes(key)) {
      const result = document.getElementById('result').value;
      if (result !== '' && !operators.includes(result.slice(-1))) {
        append(key);
      }
    }
  });
  