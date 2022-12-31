const Event = ({event}) => {
    if (event) {
        const { image, title, description } = event;
        return (
            <>
                <img src={image} alt={title} style={{ width: '150px' }} />
                <div className="m-4">
                    <h5 className='fw-bold'>{title}</h5>
                        {description}
                </div>
            </>
        );
    }
    return null;
}

export default Event;