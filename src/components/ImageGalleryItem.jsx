import { Component } from 'react';

const API_KEY = '24098743-7553027393eef521f019e0de7';

class ImageGalleryItem extends Component {
  state = {
    gallery: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const name = this.props.searchName;
    if (prevProps.searchName !== name) {
      fetch(
        `https://pixabay.com/api/?q=${name}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(gallery => this.setState({ gallery: gallery.hits }));
    }
  }

  render() {
    return this.state.gallery.map(image => (
      <li
        onClick={() => this.props.handleClick(image.largeImageURL, image.tags)}
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
