import { useState } from 'react'
import Education from './components/Education'
import './App.css'

function App() {
  const [educationInfo,setEducationInfo] = useState({
    "school":"a",
    "degree":"b"
  })

  return (
    <>
      <Education updateInfo={setEducationInfo}/>
      <ul>
        <li>{educationInfo.school}</li>
        <li>{educationInfo.degree}</li>
      </ul>
      <div>fwefwe</div>
    </>
  )
}

export default App
