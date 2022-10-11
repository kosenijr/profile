// imports


// function
const Service = () => {
    return (
        <div>
            <h1>Service</h1>
            <FaArrowCircleLeft className='arrows' onClick={() => navigate('')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/service')} />
        </div>
    )
}


// export
export default Service