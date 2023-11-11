import { useState } from "react";

function Education({updateInfo}) {

        const [school,setSchool] = useState("")
        const [degree,setDegree] = useState("")

        function handleSubmit(e) {
            e.preventDefault()
            updateInfo({school,degree})
        }

        return (
        <div className = "education">
            <h2>Education</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type = "text" 
                    placeholder="School"
                    value = {school}
                    onChange={(e)=>setSchool(e.target.value)}
                />

                <input 
                    type = "text" 
                    placeholder="Degree"
                    value = {degree}
                    onChange={(e)=>setDegree(e.target.value)}
                />
                <button type = "submit">Submit</button>
            </form>

        </div>
    )
  }
  
  export default Education