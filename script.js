const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

if (document.body.classList.contains('dark')) {
  document.body.style.backgroundColor = '#111';
  document.body.style.color = '#eee';
}
