
import React from 'react'

interface Props {
    
}

const Header = (props: Props) => {
    return (
        <header className='header'>
          <div className="container header-layout">
            <h2 className='header-logo'><span>E</span>Commerce</h2>  
          </div>
        </header>
    )
}

export default Header
