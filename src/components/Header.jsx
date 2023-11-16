function Header({togglePreview}) {



        return (
            <div className="header">
                <h1>CV Builder</h1>
                <button type="button" onClick={togglePreview}>Show preview</button>
            </div>
    )
  }
  
  export default Header