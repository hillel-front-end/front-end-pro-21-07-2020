const messageContainer = document.getElementById('message-container');
const textarea = document.getElementById('message');
const button = document.getElementById('send');


function renderMessages(messages) {
  messageContainer.innerHTML = '';
  messages.forEach(msg => {
    const { text, date } = msg;
    const textDate = `${date.getHours()}:${date.getMinutes()}`;
    const $element = document.createElement('p');
    $element.innerHTML = `
      ${text} <span>${textDate}</span>
    `;
    messageContainer.appendChild($element);
  });
}

function parseMessages(jsonData) {
  const messages = JSON.parse(jsonData, (key, value) => {
    if (key === 'date') {
      return new Date(value);
    }
    return value;
  });
  return messages;
}

let messages = parseMessages(localStorage.getItem('messages'));

renderMessages(messages);

function sendMessage(text) {
  const msg = {
    text: text,
    date: new Date(),
  };
  messages.push(msg);
}

button.addEventListener('click', () => {
  sendMessage(textarea.value);
  textarea.value = '';
  renderMessages(messages);
  const data = JSON.stringify(messages);
  localStorage.setItem('messages', data);
});


window.addEventListener('storage', event => {
  messages = parseMessages(event.newValue);
  renderMessages(messages);
});

