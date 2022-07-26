import { Component } from 'react';
import ImageGallery from './ImageGallery';
import SearchBar from './Searchbar';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from './Modal';
import Button from './Button';
import { API } from 'services/galleryAPI';
import Loader from './Loader';

class App extends Component {
  state = {
    searchName: '',
    largeImg: { url: '', alt: '' },
    gallery: [],
    modalIsOpen: false,
    pageNumber: 1,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchName, pageNumber } = this.state;

    if (prevState.searchName !== searchName) {
      this.setState({ status: 'pending' });
      API(searchName, pageNumber)
        .then(gallery => this.setState({ gallery: gallery.hits }))
        .finally(() => {
          this.setState({ status: 'resolve' });
        });
    }

    if (prevState.pageNumber !== pageNumber) {
      API(searchName, pageNumber).then(newGallery =>
        this.setState({ gallery: [...prevState.gallery, ...newGallery.hits] })
      );
    }
  }

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  handleClick = (url, alt) => {
    this.setState({
      largeImg: { url, alt },
      modalIsOpen: true,
    });
  };

  handleShowButton = value => {
    this.setState({ buttonIsShown: value });
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState({ modalIsOpen: false });
    }
  };

  handleLoadMore = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  // handleChangeStatus = (value) => {
  //   this.setState({status: value})
  // }

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.status === 'pending' && <Loader />}
        {this.state.status === 'resolve' && (
          <>
            <ImageGallery>
              <ImageGalleryItem
                gallery={this.state.gallery}
                handleClick={this.handleClick}
              />
            </ImageGallery>
            <Button loadMore={this.handleLoadMore} />
          </>
        )}
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
