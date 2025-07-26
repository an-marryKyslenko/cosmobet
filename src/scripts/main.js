const authBlock = document.getElementById('authorized');
const noAuhtBlock = document.getElementById('no-authorized');
let isAuth = false;

if(isAuth) {
	noAuhtBlock.style.display = 'none';
	authBlock.style.display = 'flex';
} else {
	noAuhtBlock.style.display = 'flex';
	authBlock.style.display = 'none';
}

let timeoutId;

window.addEventListener('load', () => {
	const preloader = document.getElementById('preloader');
	const app = document.getElementById('app');

	clearTimeout(timeoutId);
	timeoutId = setTimeout(() => {
		preloader.style.display = 'none';
		app.style.display = 'flex';
	}, 3000)

});
