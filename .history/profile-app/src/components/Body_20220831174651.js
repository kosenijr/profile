// imports
import React from 'react';
import '../Body.css'

// function
const Body = () => {
    return (
        <div id="body-main">
            <div className="short-statement">
                <p className=''>Hi, my name is Kayode Oseni. I am a front-end developer and lover of photography.</p>
                <br />
                <p  className=''>Follow me on this exciting journey.</p>
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