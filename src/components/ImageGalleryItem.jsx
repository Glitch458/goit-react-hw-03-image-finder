import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { gallery, handleClick } = this.props;
    return gallery.map(image => (
      <li
        onClick={() => handleClick(image.largeImageURL, image.tags)}
        key={image.id}
        className="imageGalleryItem"
      >
        <img
          className="ImageGalleryItem-image"
          src={image.webformatURL}
          alt={image.tags}
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
