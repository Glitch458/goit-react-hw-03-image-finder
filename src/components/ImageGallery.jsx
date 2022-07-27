import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ gallery, handleClick }) => {
  return (
    <ul className="imageGallery">
      {gallery.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ImageGallery;
