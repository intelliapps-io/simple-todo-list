declare namespace IMGUR {
  interface Image {
    account_id: string;
    account_url: string;
    ad_type: number;
    ad_url: string;
    animated: true;
    bandwidth: number;
    comment_count: number;
    datetime: number;
    description: string;
    downs: number;
    favorite: boolean;
    favorite_count: number;
    has_sound: boolean;
    height: number;
    id: string;
    in_gallery: boolean;
    in_most_viral: boolean;
    is_ad: boolean;
    link: string;
    mp4_size: number;
    nsfw: boolean;
    gifv: string;
    mp4: string;
    points: number;
    processing: { status: string };
    score: number;
    section: boolean;
    size: number;
    tags: Tag[]; 
    title: string;
    type: string;
    ups: number;
    views: number;
    width: number;
  }

  interface Tag {
    accent: string;
    background_hash: string;
    background_is_animated: boolean;
    description: string;
    display_name: string;
    followers: number;
    following: boolean;
    is_promoted: boolean;
    logo_destination_url: string;
    logo_hash: string;
    name: string;
    thumbnail_hash: string;
    thumbnail_is_animated: boolean;
    total_items: number;
  }

  interface GalleryItem {
    account_id: number;
    account_url: string;
    ad_type: number;
    ad_url: string;
    comment_count: number;
    cover: string;
    cover_height: number;
    cover_width: number;
    datetime: number;
    description: string;
    downs: number;
    favorite: boolean;
    favorite_count: number;
    id: string;
    images: Image[];
    images_count: number;
    in_gallery: boolean;
    in_most_viral: boolean;
    include_album_ads: boolean;
    is_ad: boolean;
    is_album: boolean;
    layout: string;
    link: string;
    nsfw: false;
    points: number;
    privacy: string;
    score: number;
    section: string;
    tags: Tag[];
    title: string;
    topic: string;
    topic_id: number;
    ups: number;
    views: number;
    vote: null;
  }
}
