import { imagesHome, city, works, shapes } from "./data.js";

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

//*** toggle navbar ***
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
	links.classList.toggle("show-links");
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
