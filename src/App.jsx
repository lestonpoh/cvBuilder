import { useState } from 'react'
import Education from './components/Education'
import Personal from './components/Personal'
import Preview from './components/Preview.jsx'
import './App.css'

function App() {
  const [personalInfo,setPersonalInfo] = useState([
    {field:"Name",value:""},
    {field:"Email",value:""},
    {field:"Phone",value:""}
    ])

  const [educationInfo,setEducationInfo] = useState([
    {field:"School",value:""},
    {field:"Degree",value:""}
  ])
  
  

  const allInfo = [
    {type:"Personal", data:personalInfo},
    {type:"Education", data:educationInfo}
  ]

  return (
    <>
      <Personal updateData={setPersonalInfo} data={personalInfo}/>
      <Education updateData={setEducationInfo} data={educationInfo}/>
      <Preview allInfo={allInfo}/>
    </>
  )
}

export default App
