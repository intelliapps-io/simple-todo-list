import * as React from "react";
import "./SearchForm.scss";
import axios from "axios";
import { Input, Button, Icon } from "antd";

interface IProps {
  onSearchResults(images: IMGUR.GalleryItem[]): void
}

interface IState {
  searchValue: string;
}

class SearchForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  handleSearch() {
    const url = `https://api.imgur.com/3/gallery/search?q=${this.state.searchValue}`;
    const config = { headers: { Authorization: "Client-ID 51c73ae8c83b4a2" } };
    axios.get(url, config).then(result => {
      const galleryItems = result.data.data;
      this.props.onSearchResults(galleryItems);
    });
  }

  render() {
    return (
      <form className="search-form">
        <Input
          className="search-input"
          value={this.state.searchValue}
          onChange={evt => this.setState({ searchValue: evt.target.value })}
          placeholder="Search what's on your mind"
          prefix={<Icon type="search" />}
        />
        <Button type="primary" onClick={() => this.handleSearch()}>
          Search
        </Button>
      </form>
    );
  }
}

export default SearchForm;
