import { useState } from "react";

function Experience({updateData,data}) {
        const [experiences,setExperiences] = useState(data)

        function handleSubmit(e) {
            e.preventDefault()
            updateData(experiences)
        }

        function handleInputChange(number,field,e){
            setExperiences(experiences.map(experience=>{
                if (experience.number === number){
                    let updatedExperience =experience.fields.map(info=>{
                        if (info.field === field){
                            return {...info,value:e.target.value}
                        }else{
                            return info
                        }
                    })
                    return{...experience,fields:updatedExperience}
                }else{
                    return experience
                }
            }))

        }

        function handleAddExperience(){
            setExperiences(experiences.concat(
              {number:experiences[experiences.length-1].number+1,fields:[{field:"Company Name",value:""},
                                                          {field:"Responsibility",value:""},
                                                          {field:"Date From",value:""},
                                                          {field:"Date To",value:""}]}
            ))
            updateData(experiences.concat(
                {number:experiences[experiences.length-1].number+1,fields:[{field:"Company Name",value:""},
                                                            {field:"Responsibility",value:""},
                                                            {field:"Date From",value:""},
                                                            {field:"Date To",value:""}]}
              ))
          }

           

        return (
            <div className = "card">
                <div className = "experiences">
                    <h2>Experience</h2>
                    <form onSubmit={handleSubmit}>
                        {experiences.map(experience=>
                        <div key = {"experience"+experience.number} className = "experience">
                            {experience.fields.map(info=>
                            <label key = {info.field+experience.number+"label"}>
                                <span>{info.field}</span>
                                <input 
                                    key = {info.field+experience.number+"input"}
                                    placeholder = {info.field}
                                    value = {info.value}
                                    onChange={e=>{
                                        handleInputChange(experience.number,info.field,e)
                                    }}                         
                                />    
                            </label>
                            )}
                        </div>        
                        )}
                        <div className="buttons">
                            <button type="button" onClick={handleAddExperience}>Add experience</button>
                            <button type="submit">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
    )
  }
  
  export default Experience