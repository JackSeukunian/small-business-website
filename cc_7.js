const input = document.getElementById('newCtaText');
const button = document.getElementById('updateCtaBtn');
const ctaHeading = document.getElementById('cta');

button.addEventListener('click', () => {
  const newText = input.value.trim();
  if (newText) {
    ctaHeading.textContent = newText;
    input.value = '';
  }
});
