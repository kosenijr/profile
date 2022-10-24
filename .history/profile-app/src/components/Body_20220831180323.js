// imports
import React from 'react';
import '../Body.css'

// function
const Body = () => {
    return (
        <div id="body-main">
            <div className="short-statement">
                <p className='front-text' id='text-1'>Hi, my name is Kayode Oseni. I am a front-end developer and lover of photography. I have a few things I'd like to show you.</p>
                <br />
                <p className='front-text' id='text-2'>C'mon!</p>
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