import * as React from "react";
import "./Gallery.scss";

interface IProps {
  galleryItems: IMGUR.GalleryItem[];
}

class Gallery extends React.Component<IProps> {
  renderImages() {
    let images: React.ReactNode[] = [];
    this.props.galleryItems.forEach(galleryItem => {
      if (galleryItem.images) {
        if (galleryItem.images.length > 0) {
          galleryItem.images.forEach(image => {
            if (!(image.link.indexOf(".mp4") > -1)) {
              images.push(
                <div key={image.id} className="image-container">
                  <img src={image.link} />
                </div>
              );
            }
          });
        }
      }
    });
    return images;
  }

  render() {
    return <div className="gallery">{this.renderImages()}</div>;
  }
}

export default Gallery;
