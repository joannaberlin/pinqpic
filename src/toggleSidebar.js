const toggleNav = document.querySelector('.toggle-nav');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const closeBtn = document.querySelector('.sidebar-close');
const cursorInside = document.querySelector('.cursor');
const footer = document.querySelector('.footer');
const nav = document.querySelector('#main-nav');

toggleNav.addEventListener('click', () => {
	sidebarOverlay.classList.add('show');
	cursorInside.classList.add('cursor__version-other');
	footer.classList.add('hide');
	nav.classList.add('hide');
});
closeBtn.addEventListener('click', () => {
	sidebarOverlay.classList.remove('show');
	cursorInside.classList.remove('cursor__version-other');
	footer.classList.remove('hide');
	nav.classList.remove('hide');
});
