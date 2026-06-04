// Accordion toggle for note cards
function toggleNote(headerBtn) {
  const card = headerBtn.closest('.note-card');
  card.classList.toggle('open');
}

// Auto-open the first note on page load
document.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('.note-card');
  if (first) first.classList.add('open');
});
