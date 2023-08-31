const group1Urls = [
	'../images/home/Group-1/1-home-small-5-bw.jpg',
	'../images/home/Group-1/1-home-small-1-bw.jpg',
	'../images/home/Group-1/1-home-small-2-bw.jpg',
	'../images/home/Group-1/1-home-small-3-bw.jpg',
	'../images/home/Group-1/1-home-small-0-bw.jpg',
	'../images/home/Group-1/1-home-small-4-bw.jpg',
];
const group2Urls = [
	'../images/home/Group-2/2-home-small-1-bw.jpg',
	'../images/home/Group-2/2-home-small-2-bw.jpg',
	'../images/home/Group-2/2-home-small-3-bw.jpg',
	'../images/home/Group-2/2-home-small-0-bw.jpg',
	'../images/home/Group-2/2-home-small-4-bw.jpg',
];
const group3Urls = [
	'../images/home/Group-3/3-home-small-1-bw.jpg',
	'../images/home/Group-3/3-home-small-2-bw.jpg',
	'../images/home/Group-3/3-home-small-3-bw.jpg',
	'../images/home/Group-3/3-home-small-4-bw.jpg',
	'../images/home/Group-3/3-home-small-5-bw.jpg',
	'../images/home/Group-3/3-home-small-0-bw.jpg',
	'../images/home/Group-3/3-home-small-6-bw.jpg',
];
const group4Urls = [
	'../images/home/Group-4/4-home-small-1-bw.jpg',
	'../images/home/Group-4/4-home-small-2-bw.jpg',
	'../images/home/Group-4/4-home-small-3-bw.jpg',
	'../images/home/Group-4/4-home-small-4-bw.jpg',
	'../images/home/Group-4/4-home-small-0-bw.jpg',
	'../images/home/Group-4/4-home-small-5-bw.jpg',
];
const group5Urls = [
	'../images/home/Group-5/5-home-small-1-bw.jpg',
	'../images/home/Group-5/5-home-small-2-bw.jpg',
	'../images/home/Group-5/5-home-small-3-bw.jpg',
	'../images/home/Group-5/5-home-small-0-bw.jpg',
	'../images/home/Group-5/5-home-small-4-bw.jpg',
];

const group1Wrapper = document.getElementById('img-1');
const group2Wrapper = document.getElementById('img-2');
const group3Wrapper = document.getElementById('img-3');
const group4Wrapper = document.getElementById('img-4');
const group5Wrapper = document.getElementById('img-5');
const time = 1000;
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

window.requestAnimationFrame(
	changeImage(group1Urls, group1Wrapper, time),
	changeImage(group2Urls, group2Wrapper, time),
	changeImage(group3Urls, group3Wrapper, time),
	changeImage(group4Urls, group4Wrapper, time),
	changeImage(group5Urls, group5Wrapper, time)
);
