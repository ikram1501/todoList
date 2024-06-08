import React from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitleStyle = () => {
    return todo.completed ? { textDecoration: 'line-through', color: '#999' } : { textDecoration: 'none', color: '#333' };
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={{ ...getTodoTitleStyle(), ...styles.todoText }}>{todo.title}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
};

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  },
  checkbox: {
    height: '16px',
    width: '16px',
  },
  todoText: {
    flex: 1,
    padding: '0 10px',
  },
  button: {
    backgroundColor: '#dc3545',
    color: '#fff',
    height: '30px',
    width: '30px',  // Adjusted width to make button square
    borderRadius: '50%',  // Makes the button circular
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',  // Adjusted font size
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',  // Centers the text in the button
  },
};

export default TodoItem;
