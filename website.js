let man = document.querySelector('.man');
let moveBy = 10;
 
window.addEventListener('load', () => {
    man.style.position = 'absolute';
    man.style.left = 0;
    man.style.top = 0;
});
 
 
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
        	man.style.left = parseInt(man.style.left) - moveBy + 'px';
            break;
       
        case 'ArrowRight':
            man.style.left = parseInt(man.style.left) + moveBy + 'px';
            break;
		           
        case 'ArrowUp':
            man.style.top = parseInt(man.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            man.style.top = parseInt(man.style.top) + moveBy + 'px';
            break;
    }
});