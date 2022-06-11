import React from 'react'
import '../Form.css'

const Form2 = () => {


    return (
        <>
            <div class="login-box">
                <h2>Team Details</h2>
                <hr />
                <form>
                    <h3 style={{ textAlign: "center", color: "white" , fontSize: "20px"}}> Team 1 </h3>

                    <div class="user-box">
                        <input type='text' name="startdate" required="" />
                        <label>Team Name</label>
                    </div>
                    <div class="user-box">
                    <span style={{color: "#03d2bd" , fontSize: "13px" ,  fontWeight: "700px"}}> Type </span><br/>
                        <select className='form-select'>
                            <option value="Home">Home</option>
                            <option value="Away">Away</option>
                        </select>
                    </div>
                    <hr style={{ margin: "40px 0px" }} />
                    <h3 style={{ textAlign: "center", color: "white" , fontSize: "20px"}}> Team 2 </h3>
                    <div class="user-box">
                        <input type="text" name="enddate" required="" />
                        <label>Team Name</label>
                    </div>
                    <div class="user-box">
                    <span style={{color: "#03d2bd" , fontSize: "13px" , fontWeight: "700px"}}> Type </span><br/>
                        <select className='form-select'>
                            <option value="Home">Home</option>
                            <option value="Away">Away</option>
                        </select>
                    </div>


                    <a href="/Final">
                        Submit
                    </a>
                </form>
            </div>
        </>
    )
}

export default Form2;