// ResponsiveComponent.jsx
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ResponsiveComponent = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

};

export default ResponsiveComponent;