import React, { useState } from 'react'


const Matching = (props) => {
    const [detail, setdetail] = useState('');
  

    const redirectLink = (event) => {
        if (event.target.value === "Friendly") {
            setdetail("/Friendly");
        }
        else {
            setdetail("/Tournament");
        }
    }


    return (
        <>


            <div class="cover">
                <h1>Plan Your Match</h1>
                <form class="flex-form" action={detail} method="get">
                    <label for="from">
                        <i class="ion-location"></i>
                    </label>
                    <select placeholder="Where do you want to go?" onChange={redirectLink}>
                        <option> Select Your Type </option>
                        <option value="Friendly">Friendly</option>
                        <option value="Tournament">Tournament</option>
                    </select>
                    <input type="submit" value="Search"/>
                </form>
                <div id="madeby">
                    <span>
                        Made By <a href="/" target="_blank">Pranshu Jain ❤</a>
                    </span>
                </div>
            </div>

        </>
    )
}

export default Matching;