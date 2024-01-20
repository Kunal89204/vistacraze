import React, { useState } from 'react';
import img1 from "../../assets/1.jpeg"
import img2 from "../../assets/2.jpeg"
import img3 from "../../assets/3d.jpg"
import img4 from "../../assets/4.jpg"
import img5 from "../../assets/5.jpg"

const ImageGallery = () => {
  // State to keep track of the currently selected heading index
  const [selectedHeading, setSelectedHeading] = useState(null);
  // Function to handle heading click
  const handleHeadingClick = (index) => {
    // Update the selected heading index
    setSelectedHeading(index);
  };

  // Array of image URLs
  const images = [
    img1,
    img2,

    img3,
    img4,
    img5,

  ];

  return (
    <div>
      <div>
        {/* First div */}
        {[1, 2, 3, 4, 5].map((index) => (
          <h2 key={index} onClick={() => handleHeadingClick(index - 1)}>
            Heading {index}
          </h2>
        ))}
      </div>

      <div>
        {/* Second div */}
        {[1, 2, 3, 4, 5].map((index) => (
          <h2 key={index} onClick={() => handleHeadingClick(index - 1)}>
            Heading {index}
          </h2>
        ))}
      </div>

      {/* Display the selected image */}
      {selectedHeading !== null && (
        <img
          src={images[selectedHeading]}
          alt={`Image for Heading ${selectedHeading + 1}`}
        />
      )}
    </div>
  );
};

export default ImageGallery;
