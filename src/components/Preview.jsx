function Preview({personalInfo,educationInfo,experienceInfo}){

    return(
        <div className="resume">
            {/* <h2>Resume</h2> */}
            <div className="Personal">
                {personalInfo.map(info=>
                    <div key={info.field}>{info.value}</div>)}
            </div>
            <div className="Education">
                <h3>Education</h3>
                {educationInfo.map(info=>
                    <div key={info.field}>{info.field +": "+ info.value}</div>)}
            </div>
            <div className="Experience">
                <h3>Experience</h3>
                {experienceInfo.map(infos=>
                    <div key={"experience"+infos.number}>
                        <h4>{infos.fields[0].value}</h4>
                        {infos.fields.slice(1).map(item=>
                            <div key={item.field+infos.number}>{item.field+": "+item.value}</div>  )}
                    </div>)}
            </div>

                
        </div>

    )
}

export default Preview