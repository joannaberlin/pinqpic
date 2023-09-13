import './src/cursor.js';
import './src/toggleSidebar.js';
import './src/loader.js';

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

const textWrapper = document.querySelector('.text_wrapper');
const images = document.querySelectorAll('.img-section-1');
const sections = gsap.utils.toArray('.container');

gsap.from(textWrapper, {
	opacity: 0,
	duration: 6,
});

if (window.innerWidth > 847) {
	gsap.from(images, {
		opacity: 0,
		stagger: 1,
		delay: 6,
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
