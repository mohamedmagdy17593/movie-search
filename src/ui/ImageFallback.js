import React from 'react'
import Img from 'react-image'

function ImageFallback({src, ...rest}) {
  return (
    <Img
      src={[
        src,
        'http://via.placeholder.com/300x450.png?text=Not+photo',
      ].flatMap(i => i)} // to flat src if it array or string
      {...rest}
    />
  )
}

export default ImageFallback
