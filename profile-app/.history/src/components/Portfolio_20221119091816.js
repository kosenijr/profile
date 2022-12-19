// imports
import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import '../styles/portfolio.css'
import image from "../main-pictures/building2.jpg"

// function
const Portfolio = () => {
    const navigate = useNavigate();
    return (
        <div id="background" style={{ backgroundImage: `url(${image})` }}>
            <div className='main-container'>
                <h1 className='title'>Portfolio</h1>
                <div className='inner-main-container'>
                    <div>
                        <div className="sub-containers">
                            <h5>Triage</h5>
                            <div className="inner-sub-container"></div>
                        </div><div className="sub-containers">
                            <h5>Tasky</h5>
                            <div className="inner-sub-container"></div>
                        </div>

                    </div>

                </div>
                <div className='arrows-sub-container'>
                    <FaArrowCircleLeft className='arrows' onClick={() => navigate('/about')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/contact')} />
                </div>
            </div>
        </div>
    )
}


// export
export default Portfolio