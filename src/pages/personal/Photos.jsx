import React from 'react';
import './Photos.css';

function Photos() {
  // Placeholder images - you can replace these with actual photo paths
  const photos = [
    { id: 1, src: '/assets/photos/photo1.jpg', caption: 'Adventure awaits', category: 'Travel' },
    { id: 2, src: '/assets/photos/photo2.jpg', caption: 'Golden hour', category: 'Nature' },
    { id: 3, src: '/assets/photos/photo3.jpg', caption: 'City lights', category: 'Urban' },
    { id: 4, src: '/assets/photos/photo4.jpg', caption: 'Mountain views', category: 'Travel' },
    { id: 5, src: '/assets/photos/photo5.jpg', caption: 'Coffee moments', category: 'Lifestyle' },
    { id: 6, src: '/assets/photos/photo6.jpg', caption: 'Sunset dreams', category: 'Nature' },
    { id: 7, src: '/assets/photos/photo7.jpg', caption: 'Street art', category: 'Urban' },
    { id: 8, src: '/assets/photos/photo8.jpg', caption: 'Beach vibes', category: 'Travel' },
  ];

  return (
    <div className="page-container photos-page">
      <div className="photos-header">
        <h1>Photo Gallery</h1>
        <p className="photos-tagline">Moments captured through my lens</p>
      </div>

      <div className="photos-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-card">
            <div className="photo-container">
              <img src={photo.src} alt={photo.caption} />
              <div className="photo-overlay">
                <span className="photo-category">{photo.category}</span>
                <p className="photo-caption">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="photos-footer">
        <p>More photos coming soon! Follow me on Instagram for daily updates.</p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-btn">
          📱 Follow on Instagram
        </a>
      </div>
    </div>
  );
}

export default Photos;
