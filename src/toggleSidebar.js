const toggleNav = document.querySelector('.toggle-nav');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const closeBtn = document.querySelector('.sidebar-close');
const cursorInside = document.querySelector('.cursor');

toggleNav.addEventListener('click', () => {
	sidebarOverlay.classList.add('show');
	cursorInside.classList.add('cursor__version-other');
});
closeBtn.addEventListener('click', () => {
	sidebarOverlay.classList.remove('show');
	cursorInside.classList.remove('cursor__version-other');
});
