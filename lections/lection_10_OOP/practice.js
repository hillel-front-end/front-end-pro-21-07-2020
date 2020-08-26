class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
  hide() {
    this.$el.style.display = 'none';
  }
  show() {
    this.$el.style.display = 'block';
  }
}

class Box extends Component {
  constructor(options) { // options = { selector: '#box1', width: 100, height: 100, color: 'red'}
    super(options.selector);
    this.$el.style.width = `${options.width}px`;
    this.$el.style.height = `${options.height}px`;
    this.$el.style.backgroundColor = options.color;
  }
}

class Circle extends Box {
  constructor(options) { // options = { selector: '#circle', radius: 100, color: 'yellow' }
    super({
      selector: options.selector,
      width: options.radius * 2,
      height: options.radius * 2,
      color: options.color,
    });
    this.$el.style.borderRadius = '50%';
  }
}

const box1 = new Box({
  selector: '#box1',
  width: 100,
  height: 100,
  color: 'red',
});
console.log(box1);

const box2 = new Box({
  selector: '#box2',
  width: 120,
  height: 120,
  color: 'green',
});

const circle = new Circle({
  selector: '#circle',
  radius: 50,
  color: 'yellow',
});

console.log(circle);

class Box extends Component {
   constructor(options) {
    super(options.selector);
    this.$el.style.width = options.size + 'px';
    this.$el.style.height = options.size + 'px';
    this.$el.style.background = options.color;
   }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  color: 'red',
});

const box2 = new Box({
  selector: '#box2',
  size: 120,
  color: 'blue',
});

class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = '50%';
  }
}

const c = new Circle({
  selector: '#circle',
  size: 100,
  color: 'green',
});



