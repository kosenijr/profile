// imports
import React from 'react';
import '../Body.css'

// function
const Body = () => {
    return (
        <div id="body-main">
            <div className="short-statement">
                <p>Hi, my name is Kayode Oseni. I am a front-end developer and lover of photography.</p>
                
                <p>Please, come and follow me on this journey.</p>
            </div>
            <div id='container'>
                {/* <div id="projects" className="subcontainers">PROJECTS</div> */}
                {/* <div id='photo' className='subcontainers'></div> */}
                {/* <div id='gallery' className='subcontainers'>GALLERY</div> */}
            </div>
        </div>
    )
}

// export
export default Body