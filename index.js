const Button = props => {
  return (
    <button className={props.class} id={props.id}>
      {' '}
      {props.children}
    </button>
  )
}

const element = (
  <div className='container'>
    <h1 className='heading'>Social Media Buttons</h1>
    <div className='btn-container'>
      <Button class='btn' id='yellow' />
      Like
      <Button class='btn' id='white' />
      Comment
      <Button class='btn' id='blue' />
      Share
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
