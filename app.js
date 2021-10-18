const imagesHome = [
	{
		id: 1,
		name: "chaos no.1",
		img: "./images/homepage/chaos_no.1.jpg",
	},
	{
		id: 2,
		name: "blow up no.5",
		img: "./images/homepage/blow_up_no.5.jpg",
	},
	{
		id: 3,
		name: "fishermen no.2",
		img: "./images/homepage/fishermen_no.2.jpg",
	},
	{
		id: 4,
		name: "full moon night no.3",
		img: "./images/homepage/full_moon_night_no.3.jpg",
	},
	{
		id: 5,
		name: "pink sunset no.2",
		img: "./images/homepage/pink_sunset_no.2.jpg",
	},
	{
		id: 6,
		name: "black cat white cat",
		img: "./images/homepage/black_cat_white_cat.jpg",
	},
	{
		id: 7,
		name: "burning water no.1",
		img: "./images/homepage/burning_water_no.1.jpg",
	},
	{
		id: 8,
		name: "summer no.27",
		img: "./images/homepage/summer_no.27.jpg",
	},
];

const works = [
	{
		id: 1,
		name: "chaos no.4",
		img: "./images/nature/chaos no.4 (1).jpg",
	},
	{
		id: 2,
		name: "pink sky no.2",
		img: "./images/nature/pink sky no.2 (2).jpg",
	},
	{
		id: 3,
		name: "in the forest no.3",
		img: "./images/nature/in the forest no.3 (3).jpg",
	},
	{
		id: 4,
		name: "in the forest no.5",
		img: "./images/nature/in the forest no.5 (4).jpg",
	},
	{
		id: 5,
		name: "in the forest no.5",
		img: "./images/nature/in the forest no.7 (5).jpg",
	},
	{
		id: 6,
		name: "in the forest no.11",
		img: "./images/nature/in the forest no.11 (6).jpg",
	},
];

const city = [
	{
		id: 1,
		name: "berlin museum island no.2",
		img: "./images/city/berlin museum island no.2.jpg",
	},
	{
		id: 2,
		name: "berlin no.8",
		img: "./images/city/berlin no.8.jpg",
	},
	{
		id: 3,
		name: "berlin no.9",
		img: "./images/city/berlin no.9.jpg",
	},
	{
		id: 4,
		name: "berlin no.12",
		img: "./images/city/berlin no.12.jpg",
	},
	{
		id: 5,
		name: "croatia no.66",
		img: "./images/city/croatia no.66.jpg",
	},
	{
		id: 6,
		name: "gdynia no.5",
		img: "./images/city/gdynia no.5.JPG",
	},
];

const shapes = [
	{
		id: 1,
		name: "blow up no.14",
		img: "./images/shapes/blow up no.14.jpg",
	},
	{
		id: 2,
		name: "clouds no.13",
		img: "./images/shapes/clouds no.13.jpg",
	},
	{
		id: 3,
		name: "full moon no.6",
		img: "./images/shapes/full moon no.6.jpg",
	},
	{
		id: 4,
		name: "leaves no.8",
		img: "./images/shapes/leaves no.8.jpg",
	},
	{
		id: 5,
		name: "sticks no.1",
		img: "./images/shapes/sticks no.1.jpg",
	},
	{
		id: 6,
		name: "water no.1",
		img: "./images/shapes/water no.1.jpg",
	},
	{
		id: 7,
		name: "water no.3",
		img: "./images/shapes/water no.3.jpg",
	},
];

//*** fixed navbar ***
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;
	if (scrollHeight > navHeight) {
		navbar.classList.add("fixed-nav");
	} else {
		navbar.classList.remove("fixed-nav");
	}
	if (scrollHeight > 500) {
		topLink.classList.add("show-link");
	} else {
		topLink.classList.remove("show-link");
	}
});

//*** home gallery ***
const img = document.getElementById("image");
const title = document.getElementById("title");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
	showImage(currentItem);
});

function showImage() {
	const item = imagesHome[currentItem];
	img.src = item.img;
	title.textContent = item.name;
}

nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > imagesHome.length - 1) {
		currentItem = 0;
	}
	showImage();
});

prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = imagesHome.length - 1;
	}
	showImage();
});

//*** nature gallery ***
const imgWork = document.getElementById("image-work");
const titleWork = document.getElementById("title-work");
const galleryWork = document.querySelector(".nature-gallery");

const prevBtnWork = document.querySelector(".prev-btn-work");
const nextBtnWork = document.querySelector(".next-btn-work");
const closeBtn = document.querySelector(".close-btn");

const natureBtn = document.getElementById("nature-btn");

let currentItemWork = 0;
window.addEventListener("DOMContentLoaded", function () {
	showImageWork(currentItemWork);
});

function showImageWork() {
	const item = works[currentItemWork];
	imgWork.src = item.img;
	titleWork.textContent = item.name;
}

nextBtnWork.addEventListener("click", function () {
	currentItemWork++;
	if (currentItemWork > works.length - 1) {
		currentItemWork = 0;
	}
	showImageWork();
});

prevBtnWork.addEventListener("click", function () {
	currentItemWork--;
	if (currentItemWork < 0) {
		currentItemWork = works.length - 1;
	}
	showImageWork();
});

closeBtn.addEventListener("click", function () {
	galleryWork.classList.remove("show-gallery");
});

natureBtn.addEventListener("click", function () {
	galleryWork.classList.add("show-gallery");
});
//*** city gallery ***
const imgCity = document.getElementById("image-city");
const titleCity = document.getElementById("title-city");
const galleryCity = document.querySelector(".city-gallery");

const prevBtnCity = document.querySelector(".prev-btn-city");
const nextBtnCity = document.querySelector(".next-btn-city");
const closeBtnCity = document.querySelector(".close-btn-city");

const cityBtn = document.getElementById("city-btn");

let currentItemCity = 0;
window.addEventListener("DOMContentLoaded", function () {
	showImageCity(currentItemCity);
});

function showImageCity() {
	const item = city[currentItemCity];
	imgCity.src = item.img;
	titleCity.textContent = item.name;
}

nextBtnCity.addEventListener("click", function () {
	currentItemCity++;
	if (currentItemCity > city.length - 1) {
		currentItemCity = 0;
	}
	showImageCity();
});

prevBtnCity.addEventListener("click", function () {
	currentItemCity--;
	if (currentItemCity < 0) {
		currentItemCity = city.length - 1;
	}
	showImageCity();
});

closeBtnCity.addEventListener("click", function () {
	// galleryWork.classList.add("close-gallery");
	galleryCity.classList.remove("show-gallery");
});

cityBtn.addEventListener("click", function () {
	galleryCity.classList.add("show-gallery");
});

//*** shapes gallery ***
const imgShapes = document.getElementById("image-shapes");
const titleShapes = document.getElementById("title-shapes");
const galleryShapes = document.querySelector(".shapes-gallery");

const prevBtnShapes = document.querySelector(".prev-btn-shapes");
const nextBtnShapes = document.querySelector(".next-btn-shapes");
const closeBtnShapes = document.querySelector(".close-btn-shapes");

const shapesBtn = document.getElementById("shapes-btn");

let currentItemShapes = 0;
window.addEventListener("DOMContentLoaded", function () {
	showImageShapes(currentItemShapes);
});

function showImageShapes() {
	const item = shapes[currentItemShapes];
	imgShapes.src = item.img;
	titleShapes.textContent = item.name;
}

nextBtnShapes.addEventListener("click", function () {
	currentItemShapes++;
	if (currentItemShapes > shapes.length - 1) {
		currentItemShapes = 0;
	}
	showImageShapes();
});

prevBtnShapes.addEventListener("click", function () {
	currentItemShapes--;
	if (currentItemShapes < 0) {
		currentItemShapes = shapes.length - 1;
	}
	showImageShapes();
});

closeBtnShapes.addEventListener("click", function () {
	// galleryWork.classList.add("close-gallery");
	galleryShapes.classList.remove("show-gallery");
});

shapesBtn.addEventListener("click", function () {
	galleryShapes.classList.add("show-gallery");
});
