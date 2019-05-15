import React from 'react'
import ReactImageFallback from 'react-image-fallback'

function ImageFallback(props) {
  return (
    <ReactImageFallback
      fallbackImage="http://via.placeholder.com/300x450.png?text=Not+photo"
      {...props}
    />
  )
}

export default ImageFallback
