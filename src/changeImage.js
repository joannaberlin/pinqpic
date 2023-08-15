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
const time = 500;
const currentWindowWidth = window.innerWidth;
let timeoutId;
let timeoutIdLoop;

const changeImage = (images, container, step) => {
	if (currentWindowWidth > 576) {
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
	}
};

const stopChangingImage = () => {
	if (currentWindowWidth > 576) {
		clearTimeout(timeoutId);
		clearTimeout(timeoutIdLoop);
	}
};

group1Wrapper.addEventListener('mouseover', () => {
	changeImage(group1Urls, group1Wrapper, time);
});
group1Wrapper.addEventListener('mouseleave', () => {
	stopChangingImage();
});
group2Wrapper.addEventListener('mouseover', () => {
	changeImage(group2Urls, group2Wrapper, time);
});
group2Wrapper.addEventListener('mouseleave', () => {
	stopChangingImage();
});
group3Wrapper.addEventListener('mouseover', () => {
	changeImage(group3Urls, group3Wrapper, time);
});
group3Wrapper.addEventListener('mouseleave', () => {
	stopChangingImage();
});
group4Wrapper.addEventListener('mouseover', () => {
	changeImage(group4Urls, group4Wrapper, time);
});
group4Wrapper.addEventListener('mouseleave', () => {
	stopChangingImage();
});
group5Wrapper.addEventListener('mouseover', () => {
	changeImage(group5Urls, group5Wrapper, time);
});
group5Wrapper.addEventListener('mouseleave', () => {
	stopChangingImage();
});
