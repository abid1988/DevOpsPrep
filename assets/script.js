// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    document.body.classList.toggle('sidebar-collapsed');
  });
}

// Set active nav item based on current page
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-item').forEach(link => {
  link.classList.remove('active');
  const href = link.getAttribute('href');
  if (href && currentPath.endsWith(href.replace('../', '').replace('./', ''))) {
    link.classList.add('active');
  }
});
