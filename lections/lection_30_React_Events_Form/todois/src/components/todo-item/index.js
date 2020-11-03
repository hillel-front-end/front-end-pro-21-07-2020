import './styles.scss';

function TodoItem({ id, title, status, onChangeStatus }) {
  return (
    <li className='list-group-item'>
      <input
        type="checkbox"
        onChange={event => {
          onChangeStatus(id, event.target.checked ? 'DONE' : 'NEW');
        }}
        checked={status === 'DONE'}
      />
      <span className={`TodoItem__title ${status === 'DONE' ? 'TodoItem__title--done': ''}`}>{title}</span>
    </li>
  );
}

export default TodoItem;
