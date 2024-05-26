const App = () => {
  const name = 'Akshat'
  const a = 10
  const b = 20
  const names = ['Akshat', 'Aman', 'Ankit', 'Anshul']
  const loggedIn = false
  const styles = {
    color: 'red',
    fontSize: '40px'
  }
  return (
    <> 
    <div className='text-5xl'>App</div>
    <p style = {styles}>Hello {name}</p>
    <p>The sum of {a} and {b} is {a+b}</p>
    <ul>
      {names.map((names,index) =>(
        <li key = {index}>{names}</li>
      ))}
    </ul>
    {loggedIn ? <h1>Welcome User</h1> : <h1>Please login</h1>}
    </>
  )
}

export default App