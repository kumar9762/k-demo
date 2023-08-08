import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  50% {
    opacity: 0.5;
  }
`;
const HeartIcon = styled(FontAwesomeIcon)`
&.heart {
  font-size: 50px;
  animation: ${blink} 1s infinite;
  color: blue;
  margin-right: 10px;
}

&.font-20 {
  font-size: 40px;
  color: red;
}
`;
const Heart = () => {
  return (
    <div> <div className="gt-hearts">
    <div className="gt-hearts-group gt-bg-white">
      {/* ------------------------------------- */}
      <HeartIcon
        icon={faHeart}
        className="font-20 heart gt-text-orange"
      />
      <HeartIcon
        icon={faHeart}
        className="font-38 heart gt-text-orange"
      />
      <HeartIcon
        icon={faHeart}
        className="font-20 heart gt-text-orange"
      />
      {/* ------------------------------------- */}
    </div>
  </div></div>
  )
}

export default Heart