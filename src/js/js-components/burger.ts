const burger = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger__line');

export const burgerOpen = () => {
	burger.addEventListener('click', () => {
		burgerLine.classList.toggle('line--hide');
		burger.classList.toggle('burger--transform');
	});
};

console.log('Hello from BURGER!');
