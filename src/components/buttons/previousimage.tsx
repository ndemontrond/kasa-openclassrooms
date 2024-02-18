const PrevImageButton = ({ setCurrentImageIndex, images }) => {
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <button onClick={prevImage}>Previous</button>
        </div>
    );
};

export default PrevImageButton;
