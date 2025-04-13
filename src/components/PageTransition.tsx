
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
      // Scroll to top when navigating between pages
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        transitionStage === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
      onTransitionEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

export default PageTransition;
