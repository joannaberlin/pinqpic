const group1Urls = [
	'../images/home/Group-1/1-home-small-5-bw.jpg',
	'../images/home/Group-1/1-home-small-1-bw.jpg',
	'../images/home/Group-1/1-home-small-2-bw.jpg',
	'../images/home/Group-1/1-home-small-3-bw.jpg',
	'../images/home/Group-1/1-home-small-0-bw.jpg',
	'../images/home/Group-1/1-home-small-4-bw.jpg',
];

const group1Wrapper = document.getElementById('img-1');
let start, previousTimeStamp;
let done = false;
const time = 700;
let timeoutId;
let timeoutIdLoop;

const changeImage = (images, container, step) => {
	images.forEach(
		(image, index) =>
			(timeoutId = setTimeout(() => {
				container.style.backgroundImage = `url(${image})`;
			}, step * (index + 1)))
	);
	timeoutIdLoop = setTimeout(
		() => changeImage(images, container, step),
		step * images.length
	);
};

window.requestAnimationFrame(changeImage(group1Urls, group1Wrapper, time));
