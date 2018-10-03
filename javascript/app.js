const modal = document.querySelector('#buy-screen');

const openModal = document.querySelector('#submit-btn');

const closeModal = document.querySelector('#close-modal');

const orderBtn = document.querySelector('#buy-btn');

var modalShowing = false;


openModal.addEventListener('click', function() {
    if (modalShowing === false) {
        modal.classList.remove('hidden');
        modalShowing = !modalShowing;
    }
       
});

closeModal.addEventListener('click', function() {
    if(modalShowing) {

        modal.classList.add('hidden');
        modalShowing = !modalShowing;





    }
});


orderBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    modalShowing = !modalShowing;
    open('./error.html');
});