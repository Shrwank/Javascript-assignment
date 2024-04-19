const colorDisplay = document.getElementById('colorDisplay');
const btn = document.getElementById('btn');

const colors = ['#f1f5f8', '#3c6382', '#d1ccc0', '#78e08f', '#f6e58d', '#ff7979', '#badc58', '#6ab04c', '#7ed6df', '#30336b', '#95afc0', '#535c68', '#ffeaa7', '#ff6b81', '#b71540'];

btn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
});
