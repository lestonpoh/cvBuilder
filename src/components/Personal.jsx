import { useState } from "react";

function Personal({updateData,data}) {

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
                <div className = "personal">
                    <h2>Personal Information</h2>
                    <form onSubmit={handleSubmit}>
                        {infos.map(info=>
                    
                        <input 
                            key = {info.field}
                            placeholder = {info.field}
                            value = {info.value}
                            onChange={e=>{
                                handleInputChange(info.field,e)
                            }}
                        
                        />         
                    )}

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
    )
  }
  
  export default Personal