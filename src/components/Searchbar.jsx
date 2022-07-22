import { Component } from 'react';

const InitialState = {
  searchName: '',
};

class SearchBar extends Component {
  state = InitialState;

  handleInput = e => {
    this.setState({ searchName: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchName.trim() === '') {
      return alert('Please, input search name');
    }
    this.props.onSubmit(this.state.searchName);
    this.setState(InitialState);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
