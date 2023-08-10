const group1Urls = [
	'../images/home/Group-1/1-home-small-0-bw.jpg',
	'../images/home/Group-1/1-home-small-1-bw.jpg',
	'../images/home/Group-1/1-home-small-2-bw.jpg',
	'../images/home/Group-1/1-home-small-3-bw.jpg',
	'../images/home/Group-1/1-home-small-4-bw.jpg',
	'../images/home/Group-1/1-home-small-5-bw.jpg',
];
const group4Urls = [
	'../images/home/Group-4/4-home-small-0-bw.jpg',
	'../images/home/Group-4/4-home-small-1-bw.jpg',
	'../images/home/Group-4/4-home-small-2-bw.jpg',
	'../images/home/Group-4/4-home-small-3-bw.jpg',
	'../images/home/Group-4/4-home-small-4-bw.jpg',
	'../images/home/Group-4/4-home-small-5-bw.jpg',
	'../images/home/Group-4/4-home-small-6-bw.jpg',
	'../images/home/Group-4/4-home-small-7-bw.jpg',
];

const group1Wrapper = document.getElementById('img-1');
const group4Wrapper = document.getElementById('img-4');
const time = 1000;

const changeImage = (images, container, step) => {
	images.forEach((image, index) =>
		setTimeout(() => {
			container.style.backgroundImage = `url(${image})`;
		}, step * (index + 1))
	);
	setTimeout(() => changeImage(images, container, step), step * images.length);
};

changeImage(group1Urls, group1Wrapper, time);
changeImage(group4Urls, group4Wrapper, time);
