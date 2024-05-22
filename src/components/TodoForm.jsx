import React from 'react'

const TodoForm = () => {
  return (
    <div style={styles.container}>
      <form>
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '12px',
  },
  formInput: {
    height: '46px',
    width: '80%',
    fontSize: '16px',
    padding: '0 16px',
  },
  button: {
    height: '72px',
    fontSize: '16px',
  },
}

export default TodoForm