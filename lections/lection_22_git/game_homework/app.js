console.log('Let\'s play!');

// class Field {

//   _field = [];
//   _user = null;
 
//   constructor(x, y, $conatiner, user) {
//     this.$_container = $conatiner;
//     this._user = user;
//     this._generateField(x, y);
//   }

//   renderField() {
//     const $field = document.createElement('table');
//     $field.classList.add('field');
//     for (let i = 0; i < this._field.length; i++) {
//       const $row = document.createElement('tr');
//       for (let j = 0; j < this._field[i].length; j++) {
//         const $cell = this._createCell([i, j]);
//         $row.appendChild($cell);
//       }
//       $field.appendChild($row);
//     }
//     this.$_container.prepend(this._createDivider());
//     this.$_container.prepend($field);
//   }

//   clearField() {
//     this._user = null;
//   }

//   changeSize(x, y) {
//     this._generateField(x, y);
//   }

//   _createDivider() {
//     const $divider = document.createElement('div');
//     $divider.classList.add('divider');

//     return $divider;
//   }

//   _generateField(x, y) {
//     for (let i = 0; i < x; i++) {
//       for (let j = 0; j < y; j++) {
//         if (j === 0) {
//           this._field[i] = [];
//         }
//         this._field[i][j] = 0;
//       }
//     }
//   }

//   _createCell([x, y]) {
//     const $cell = document.createElement('td');
//     $cell.classList.add('cell');
//     const userCoords = (this._user instanceof User) ? this._user.getCoords() : [null, null];
//     $cell.textContent =  (userCoords[0] === x && userCoords[1] === y) ? 1 : 0;

//     return $cell;
//   }
// }

class User {

  _currentPosition = [null, null];

  constructor(x, y) {
    this._startPosition = [x, y];
  }

  start() {
    this._currentPosition = [
      ...this._startPosition,
    ];
  }

  go(direction, step) {
    const [x, y] = this._currentPosition;
    switch(direction) {
      case 'left':
        this._currentPosition = [
          x,
          (y - step < 0) ? 0 : y - step,
        ];
        break;
      case 'right':
        this._currentPosition = [
          x,
          y + step,
        ];
        break;
      case 'top':
        this._currentPosition = [
          (x - step < 0) ? 0 : x - step,
          y,
        ];
        break;
      case 'bottom':
        this._currentPosition = [
          x + step,
          y,
        ];
        break;
    }
  }

  resetPosition() {
    this._currentPosition = [
      ...this._startPosition,
    ];
  }

  getCoords() {
    return this._currentPosition;
  }
}

// const $container = document.querySelector('#game');
// const user = new User(1, 1);
// const field = new Field(3, 3, $container, user);

// field.renderField();
// user.start();
// field.renderField();











class Field {

  _field = [];
  _users = [];
 
  constructor(x, y, $conatiner) {
    this.$_container = $conatiner;
    this._generateField(x, y);
  }

  addUser(user) {
    if (user instanceof User) {
      this._users.push(user);
    }
  }

  renderField() {
    const $field = document.createElement('table');
    $field.classList.add('field');
    for (let i = 0; i < this._field.length; i++) {
      const $row = document.createElement('tr');
      for (let j = 0; j < this._field[i].length; j++) {
        const $cell = this._createCell([i, j]);
        $row.appendChild($cell);
      }
      $field.appendChild($row);
    }
    this.$_container.prepend(this._createDivider());
    this.$_container.prepend($field);
  }

  clearField() {
    this._users = [];
  }

  changeSize(x, y) {
    this._generateField(x, y);
  }

  _createDivider() {
    const $divider = document.createElement('div');
    $divider.classList.add('divider');

    return $divider;
  }

  _generateField(x, y) {
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        if (j === 0) {
          this._field[i] = [];
        }
        this._field[i][j] = 0;
      }
    }
  }

  _createCell([x, y]) {
    const $cell = document.createElement('td');
    $cell.classList.add('cell');
    const content = this._users.reduce((acc, user, index) => {
      const userCoords = user.getCoords();
      if (userCoords[0] === x && userCoords[1] === y) {
        acc.push(index + 1);
      }

      return acc;
    }, []);
    $cell.textContent = content.length ? content.join() : 0;

    return $cell;
  }
}

// const arr = [1, 2, 3, 4];
// const res = arr.reduce(function(sum, item) {
//   if (typeof item === 'number' && !isNaN(item)) {
//     sum += item;
//   }

//   return sum;
// }, 0);


const $container = document.querySelector('#game');
const field = new Field(3, 3, $container);
field.renderField();

const user1 = new User(1, 1);
const user2 = new User(2, 2);
field.addUser(user1);
field.addUser(user2);

field.renderField();
user1.start();
user2.start();
field.renderField();
