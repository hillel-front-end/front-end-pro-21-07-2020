import Modal from './modal';
// alert('Hi');

const confirmModal = new Modal({
  className: 'my-custom-class',
  title: 'Are you sure?',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est',
  closeable: true,
  buttons: [
    {
      name: 'Agree',
      className: 'modal__button',
      handler: () => {
        console.log('agree');
      },
    },
    {
      name: 'Cancel',
      className: ['modal__button', 'modal__button--danger'],
      handler: () => {
        confirmModal.close();
      },
    },
  ],
});

const $button = document.querySelector('#open-modal');
$button.addEventListener('click', () => {
  confirmModal.open();
});

confirmModal.close();


const confirmModal2 = new Modal({
  className: 'my-custom-class',
  title: 'Alert',
  closeable: true,
});

document.querySelector('#open-modal-2').addEventListener('click', () => {
  confirmModal2.open();
});

document.querySelector('#destroy').addEventListener('click', () => {
  confirmModal.destroy();
});


