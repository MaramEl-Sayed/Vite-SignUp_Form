
function App() {

  return (
    <>
    <div className='d-flex justify-content-center align-items-center flex-grow-1 p-5'>
    <form className="border rounded-4 w-50 p-4">
      <h2 className='text-center mb-3'>Sign Up</h2>

      <div className="form-group">
        <label className='mb-2' htmlFor='Name'>Enter your Name: </label>
        <input type="text" className="form-control" id='Name' required />
      </div>

      <div className="form-group mt-3">
        <label className='mb-2' htmlFor='Email'>Enter your Email: </label>
        <input type="email" className="form-control" id='Email' required />
      </div>

      <div className="form-group mt-3">
        <label className='mb-2' htmlFor='Password'>Enter your Password: </label>
        <input type="password" className="form-control" id='Password' required />
      </div>

      <div className="form-check form-check-inline mt-3">
        <input type="radio" className="form-check-input" id="male" name="gender" value="male" required />
        <label className="form-check-label" htmlFor="male">Male</label>
      </div>
      <div className="form-check form-check-inline mt-3">
        <input type="radio" className="form-check-input" id="female" name="gender" value="female" required />
        <label className="form-check-label" htmlFor="female">Female</label>
      </div>


      <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>


    </form>
    </div>
      
    </>
  )
}

export default App
