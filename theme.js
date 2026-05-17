(function () {
  var saved = localStorage.getItem('theme');
  var sysLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  document.documentElement.dataset.theme = saved || (sysLight ? 'light' : 'dark');
})();

function toggleTheme() {
  var next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
}
