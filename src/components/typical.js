import React from 'react';
import Typical from 'react-typical';
const roles = ["API Developer", 2500, "Cloud Computing Expert", 2500, "Medical Imaging Researcher", 2500, "Technical Writer", 2500, "Open Source Contributor", 2500, ];
const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={300}
        wrapper="p"
        steps={roles}
      />
    );
  },
  (props, prevProps) => true
);

export default TypingAnimation;