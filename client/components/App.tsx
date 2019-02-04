import * as React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";
const { Content } = Layout;

// Components
import SearchForm from "./search-form/SearchForm";
import Gallery from "./gallery/Gallery";

interface IProps {}

interface IState {
  galleryItems: IMGUR.GalleryItem[];
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      galleryItems: []
    };
  }

  setImages(galleryItems: IMGUR.GalleryItem[]) {
    this.setState({ galleryItems });
  }

  render() {
    return (
      <Layout className="layout">
        <Content className="content">
          <Row>
            <Col sm={24} md={8}>
              <h2>Image Searcher</h2>
            </Col>
            <Col sm={24} md={16}>
              <SearchForm onSearchResults={images => this.setImages(images)} />
            </Col>
          </Row>
          <Gallery galleryItems={this.state.galleryItems} />
        </Content>
      </Layout>
    );
  }
}

export default App;
