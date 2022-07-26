import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModal);
  }

  render() {
    const { closeModal, alt, url } = this.props;
    return (
      <div className="Overlay" onClick={closeModal} onKeyDown={closeModal}>
        <div className="Modal">
          <img src={url} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
