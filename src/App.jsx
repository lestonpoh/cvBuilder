import { useState } from 'react'
import Header from './components/Header'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import Preview from './components/Preview.jsx'
import './App.css'

function App() {
  const [showPreview, setShowPreview] = useState(false)

  const [personalInfo,setPersonalInfo] = useState(
    [
    {field:"Name",value:""},
    {field:"Email",value:""},
    {field:"Phone",value:""}
    ]
    )

  const [educationInfo,setEducationInfo] = useState(
    [
    {field:"School",value:""},
    {field:"Degree",value:""}
  ]
  )
  
  const [experienceInfo, setExperienceInfo] = useState(
    [
      {number:1,fields:[{field:"Company Name",value:""},
                        {field:"Responsibility",value:""},
                        {field:"Date From",value:""},
                        {field:"Date To",value:""}]}
    ]
  )


  return (
    <>
      <div className="editor">
        <Header togglePreview={()=>setShowPreview(!showPreview)}/>
        <Personal updateData={setPersonalInfo} data={personalInfo}/>
        <Education updateData={setEducationInfo} data={educationInfo}/>
        <Experience updateData={setExperienceInfo} data={experienceInfo}/>
        {showPreview && <Preview personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo}/>}
      </div>

      
    </>
  )
}

export default App
