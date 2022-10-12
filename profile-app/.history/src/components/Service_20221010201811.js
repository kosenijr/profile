// imports


// function
const Service = () => {
    return (
        <div>
            <h1>Service</h1>
            <FaArrowCircleLeft className='arrows' onClick={() => navigate('/about')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/')} />
        </div>
    )
}


// export
export default Service