let history = [];

function appendValue(value) {
  document.getElementById('display').value += value;
}

function appendFunction(fn) {
  document.getElementById('display').value += fn;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = document.getElementById('display').value;
    const result = eval(expression);
    
    // Update history
    history.push(`${expression} = ${result}`);
    if (history.length > 3) history.shift();
    document.getElementById('history').textContent = history.join('; ');
    
    document.getElementById('display').value = result;
  } catch {
    alert("Invalid Expression");
  }
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
}

// Keyboard Support
document.addEventListener('keydown', (e) => {
  if (/[0-9+\-*/.]/.test(e.key)) appendValue(e.key);
  if (e.key === 'Enter') calculate();
  if (e.key === 'Escape') clearDisplay();
  if (e.key === 'Backspace') backspace();
});
let memory = 0;

function memoryAdd() {
  memory += parseFloat(document.getElementById('display').value) || 0;
  showToast(`Added to memory (M = ${memory})`);
}
function toggleScientific() {
  const sciButtons = document.querySelector('.scientific-buttons');
  sciButtons.style.display = sciButtons.style.display === 'grid' ? 'none' : 'grid';
}
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}