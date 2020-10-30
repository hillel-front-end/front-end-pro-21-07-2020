import './modal.scss';

class Modal {
  constructor(config) {
    this.config = config;
  }

  open() {
    if (this.$modal) {
      this.$modal.classList.remove('modal--hide');
    } else {
      this._create();
    }
  }
  close() {
    if (this.$modal) {
      this.$modal.classList.add('modal--hide');
    }
  }

  destroy() {
    if (!this.$modal) {
      return;
    }
    this.$modal.removeEventListener('click', this._closeHandler);
    this.$modal.parentElement.removeChild(this.$modal);
  }

  _create() {
    const { className, title, content } = this.config;
    const $modal = document.createElement('div');
    $modal.classList.add('modal');
    if (className) {
      $modal.classList.add(className);
    }
    const $footer = this._footer();
    const html = `
      <div class="modal__overlay" data-close="true">
        <div class="modal__window" id="modal-content">
          <div class="modal__header">
            <div class="modal__title">${title || ''}</div>
            <button class="modal__closeBtn" data-close="true">&times;</button>
          </div>
          <div class="modal__content">
            ${content || ''}
          </div>
        </div>
      </div>
    `;
    $modal.insertAdjacentHTML('afterbegin', html);
    $modal
      .querySelector('#modal-content')
      .insertAdjacentElement('beforeend', $footer);
    this.$modal = $modal;
    document.body.appendChild($modal);
    this.$modal.addEventListener('click', this._closeHandler);
  }

  _footer() {
    const { buttons } = this.config;
    const $footer = document.createElement('div');
    $footer.classList.add('modal__footer');
    if (!Array.isArray(buttons) || buttons.length === 0) {
      return $footer;
    }
    buttons.forEach(button => {
      const $button = document.createElement('button');
      $button.innerHTML = button.name;
      if (Array.isArray(button.className) && button.className.length > 0) {
        for (let className of button.className) {
          $button.classList.add(className);
        }
      } else if (typeof button.className === 'string') {
        $button.classList.add(button.className);
      }
      if (button.handler) {
        $button.onclick = button.handler;
      }
      $footer.appendChild($button);
    });

    return $footer;
  }

  _closeHandler = (event) => {
    if (event.target.dataset.close) {
      this.close();
    }
  }
}

export default Modal;
// {
//   className: 'my-custom-class',
//   title: 'Are you sure?',
//   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est',
//   closeable: true,
//   buttons: [
//     {
//       name: 'Agree',
//       class: 'modal__button',
//       handler: () => {
//         console.log('agree'),
//       },
//     },
//     {
//       name: 'Cancel',
//       class: 'modal__button modal__button--danger',
//       handler: () => {
//         console.log('cancel'),
//       },
//     },
//   ],
// }
