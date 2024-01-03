function showColorPicker() {
  const colorInput = document.createElement('input');
  colorInput.type = 'color';
  const root = document.documentElement;
  
  colorInput.addEventListener('change', function() {
    root.style.setProperty('--sidebar-background-color', colorInput.value);
  })

  colorInput.click(); //init
}