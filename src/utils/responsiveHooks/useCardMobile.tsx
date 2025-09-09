import { useEffect, useRef, useState } from 'react';

const useCardMobile = (
  breakpoint: number,
): [boolean, (node: HTMLElement | null) => void] => {
  const [isCardMobile, setIsCardMobile] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        const isMobile = elementRef.current.offsetWidth <= breakpoint;
        console.log(
          'Card width:',
          elementRef.current.offsetWidth,
          'Breakpoint:',
          breakpoint,
          'isMobile:',
          isMobile,
        );
        setIsCardMobile(isMobile);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  const setRef = (node: HTMLElement | null) => {
    elementRef.current = node;
    if (node) {
      setIsCardMobile(node.offsetWidth <= breakpoint);
    }
  };

  return [isCardMobile, setRef];
};

export default useCardMobile;
