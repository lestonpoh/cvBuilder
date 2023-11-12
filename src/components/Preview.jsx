function Preview({allInfo}){

    return(
        <div className="resume">
            <h2>Resume</h2>
            <div>
                {allInfo.map(info=>
                    <div key={info.type} className={info.type}>
                        {info.data.map(item=>
                        <div key={item.field}>{item.value}</div>)}
                        
                        
                    </div>
                )}
            </div>

                
        </div>

    )
}

export default Preview