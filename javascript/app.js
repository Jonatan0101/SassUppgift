// Sätter html element som konstanter

const modal = document.querySelector('#buy-screen');

const openModal = document.querySelector('#submit-btn');

const closeModal = document.querySelector('#close-modal');

const orderBtn = document.querySelector('#buy-btn');


// Variabel om sektionen visas
var modalShowing = false;


// Tar fram sektionen
openModal.addEventListener('click', function() {
    if (modalShowing === false) {
        modal.classList.remove('hidden');
        modalShowing = !modalShowing;
    }
       
});

// Tar bort sektionen
closeModal.addEventListener('click', function() {
    if(modalShowing) {

        modal.classList.add('hidden');
        modalShowing = !modalShowing;





    }
});


// Skickar användaren vidare efter beställning
orderBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    modalShowing = !modalShowing;
    open('./error.html');
});