import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModal);
  }

  render() {
    return (
      <div
        className="Overlay"
        onClick={this.props.closeModal}
        onKeyDown={this.props.closeModal}
      >
        <div className="Modal">
          <img src={this.props.url} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
