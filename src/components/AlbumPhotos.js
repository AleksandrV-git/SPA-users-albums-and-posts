import React from 'react';
import { useParams } from 'react-router-dom';

import Photo from './Photo';

const AlbumPhotos = React.memo(({photos, getPhotos, currentAlbumOwner}) => {
  
  let { id } = useParams();

  const albumPhotos = photos.filter(photo => photo.albumId == id);

  React.useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
    <h2 className="section-title">{currentAlbumOwner}</h2>
    <ul className="photo-list">
      {albumPhotos.map((photo, i) => <Photo key={photo.id} photo={photo}/> )}
    </ul>
    </>
  )
})

export default AlbumPhotos; 