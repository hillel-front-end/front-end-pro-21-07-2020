class Component {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.$el.style.width = `${options.width}px`;
    this.$el.style.height = `${options.height}px`;
    this.$el.style.backgroundColor = options.color;
  }
  hide() {
    this.$el.style.display = 'none';
  }
  show() {
    this.$el.style.display = 'block';
  }
}

const box1 = new Component('#box1', {
  height: 100,
  width: 100,
  color: 'red',
});
const box2 = new Component('#box2', {
  height: 120,
  width: 120,
  color: 'green',
});

/**
 * css
 * #box1 {
 *  display: none, // 'block'
 * }
 */
