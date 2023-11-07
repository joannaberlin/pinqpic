import './src/cursor.js';
import './src/toggleSidebar.js';
import './src/loader.js';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

const textWrapper = document.querySelector('.text_wrapper');
const images = document.querySelectorAll('.img-section-1');
const sections = gsap.utils.toArray('.container');
const img1 = document.getElementById('img-gal-1');

gsap.from(textWrapper, {
	opacity: 0,
	duration: 1,
});

if (window.innerWidth > 847) {
	gsap.from(images, {
		opacity: 0,
		stagger: 1,
		delay: 1,
		duration: 4,
	});

	sections.forEach((container, i) => {
		ScrollTrigger.create({
			trigger: container,
			start: 'top top',
			pin: true,
			pinSpacing: false,
		});
	});
}

img1.addEventListener('click', () => {
	if (!img1.classList.contains('img-hov-1')) {
		img1.classList.add('img-hov-1');
		img1.classList.remove('img-hov-1-reverse');
	} else {
		img1.classList.add('img-hov-1-reverse');
		img1.classList.remove('img-hov-1');
	}
});
