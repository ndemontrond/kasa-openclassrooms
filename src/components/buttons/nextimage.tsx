const NextImageButton = ({ setCurrentImageIndex, images }) => {
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    return (
        <div>
            <button onClick={nextImage}>Next</button>
        </div>
    );
};

export default NextImageButton;
