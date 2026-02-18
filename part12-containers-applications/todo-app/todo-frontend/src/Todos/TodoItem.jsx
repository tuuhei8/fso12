const TodoItem = ({ text, done }) => {
 return (
  <>
    <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
        <span>
          {text}
        </span>
        {done}
      </div>
    <hr />
  </>
 )
}

export default TodoItem