import React from 'react'
import '../Form.css'

const Form2 = () => {
  return (
    <>
      <div class="login-box">
  <h2>Tournament Match Form</h2>
  <form>
    <div class="user-box">
      <input type='date' name="startdate" required="" />
      <label>Start Date</label>
    </div>
    <div class="user-box">
      <input type="date" name="enddate" required="" />
      <label>End Date</label>
    </div>
    <div class="user-box">
      <input type="text" name="location" required="" />
      <label>Match Location</label>
    </div>
    <div class="user-box">
      <input type="text" name="Tname" required="" />
      <label>Tournament Name</label>
    </div>
    <div class="user-box">
      <span style={{color: "#03d2bd"}}> Comments </span><br/>
      <textarea required=""  placeholder='Write Your Comments' name='comments' cols='30' rows='5' style={{color: 'white' , marginTop: '10px' , background: "#0B121C"}} />
    </div>
    <a href="/TeamDetails">
      Submit
    </a>
  </form>
</div>
    </>
  )
}

export default Form2;