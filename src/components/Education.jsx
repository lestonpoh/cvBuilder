import { useState } from "react";

function Education({updateData,data}) {

        const [infos,setInfos] = useState(data)

        function handleSubmit(e) {
            e.preventDefault()
            updateData(infos)
        }

        function handleInputChange(field,e){
            setInfos(infos.map(info=>{
                if (info.field === field){
                    return{...info,value:e.target.value}
                }else{
                    return info
                }
            }))

        }

        return (
            <div className = "card">
                <div className = "education">
                    <h2>Education</h2>
                    <form onSubmit={handleSubmit}>
                        {infos.map(info=>
                        <label key = {info.field+"label"}>
                            <span>{info.field}</span>
                            <input 
                                key = {info.field+"input"}
                                placeholder = {info.field}
                                value = {info.value}
                                onChange={e=>{
                                    handleInputChange(info.field,e)
                                }}
                            
                            />    
                        </label>
                             
                    )}

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
    )
  }
  
  export default Education