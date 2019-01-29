'use strict';

const keyboardUser = (e) => {
	if (e.keyCode === 9) {
		document.body.classList.add('user-is-tabbing');
	}
};

const mouseUser = () => {
	document.body.classList.remove('user-is-tabbing');
};

const outlineListener = () => {
	window.addEventListener('mousedown', mouseUser);
	window.addEventListener('keydown', keyboardUser);
};

export default outlineListener;
