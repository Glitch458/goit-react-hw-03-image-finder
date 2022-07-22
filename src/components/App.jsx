import { Component } from 'react';
import ImageGallery from './ImageGallery';
import SearchBar from './Searchbar';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from './Modal';
import Button from './Button';

class App extends Component {
  state = {
    searchName: '',
    largeImg: { url: '', alt: '' },
    modalIsOpen: false,
    buttonIsShown: false,
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  handleClick = (url, alt) => {
    this.setState({ largeImg: { url, alt }, modalIsOpen: true });
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState({ modalIsOpen: false });
    }
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            searchName={this.state.searchName}
            handleClick={this.handleClick}
          />
          {this.state.buttonIsShown && <Button />}
        </ImageGallery>
        {this.state.modalIsOpen && (
          <Modal
            url={this.state.largeImg.url}
            alt={this.state.largeImg.alt}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
