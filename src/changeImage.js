const group1Urls = [
	'../images/home/Group-1/1-home-small-5-bw.jpg',
	'../images/home/Group-1/1-home-small-1-bw.jpg',
	'../images/home/Group-1/1-home-small-2-bw.jpg',
	'../images/home/Group-1/1-home-small-3-bw.jpg',
	'../images/home/Group-1/1-home-small-0-bw.jpg',
	'../images/home/Group-1/1-home-small-4-bw.jpg',
];
const group4Urls = [
	'../images/home/Group-4/4-home-small-1-bw.jpg',
	'../images/home/Group-4/4-home-small-3-bw.jpg',
	'../images/home/Group-4/4-home-small-4-bw.jpg',
	'../images/home/Group-4/4-home-small-5-bw.jpg',
	'../images/home/Group-4/4-home-small-6-bw.jpg',
	'../images/home/Group-4/4-home-small-0-bw.jpg',
	'../images/home/Group-4/4-home-small-7-bw.jpg',
];

console.log(window.innerWidth);

const group1Wrapper = document.getElementById('img-1');
const group4Wrapper = document.getElementById('img-4');
const time = 500;
const currentWindowWidth = window.innerWidth;
let timeoutId;
let timeoutIdLoop;

const changeImage = (images, container, step) => {
	if (currentWindowWidth > 1024) {
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
	clearTimeout(timeoutId);
	clearTimeout(timeoutIdLoop);
};

group1Wrapper.addEventListener('mouseover', () => {
	changeImage(group1Urls, group1Wrapper, time);
});
group1Wrapper.addEventListener('mouseleave', () => {
	stopChangingImage();
});
group4Wrapper.addEventListener('mouseover', () => {
	changeImage(group4Urls, group4Wrapper, time);
});
group4Wrapper.addEventListener('mouseleave', () => {
	stopChangingImage();
});

// changeImage(group1Urls, group1Wrapper, time);
// changeImage(group4Urls, group4Wrapper, time);
