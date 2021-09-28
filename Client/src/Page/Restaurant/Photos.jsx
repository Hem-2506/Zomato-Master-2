import React, {useState} from 'react';
import ImageViewer from "react-simple-image-viewer";
import PhotoCollection from '../../Components/restaurant/PhotosCollection';


const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/reviews_photos/376/73ec2438eefd7176fff7478e0791f376_1559451375.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/e1e/12b7ad86fe01a7cf4e0dc0251b11ae1e_1478311276.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/e1e/12b7ad86fe01a7cf4e0dc0251b11ae1e_1478311276.jpg"
    ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);

  const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={CurrentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotoCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
        </>
    );
};

export default Photos
