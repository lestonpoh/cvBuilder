import { useState } from "react";

function Education({updateInfo}) {

        const [companyName,setCompanyName] = useState("")
        const [position,setPosition] = useState("")
        const [responsibility,setResponsibility] = useState("")
        const [dateFrom,setDateFrom] = useState("")
        const [dateTo,setDateTo] = useState("")

        function handleSubmit(e) {
            e.preventDefault()
            updateInfo({companyName,position,responsibility,dateFrom,dateTo})
        }

        return (
            <div className = "card">
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
            </div>
    )
  }
  
  export default Education