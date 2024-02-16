import { useMediaQuery } from '@chakra-ui/react';

const breakpoints: Record<string, string> = {
  sm: '414px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  '2xl': '1440px'
};

const useBreakpoints = () => {
  const [isLargeThan414]: Array<boolean> = useMediaQuery(
    `(min-width: ${breakpoints.sm})`
  );
  const [isLargeThan768]: Array<boolean> = useMediaQuery(
    `(min-width: ${breakpoints.md})`
  );
  const [isLargeThan1024]: Array<boolean> = useMediaQuery(
    `(min-width: ${breakpoints.lg})`
  );
  const [isLargeThan1200]: Array<boolean> = useMediaQuery(
    `(min-width: ${breakpoints.xl})`
  );
  const [isLargeThan1440]: Array<boolean> = useMediaQuery(
    `(min-width: ${breakpoints['2xl']})`
  );

  return {
    isLargeThan414,
    isLargeThan768,
    isLargeThan1024,
    isLargeThan1200,
    isLargeThan1440
  };
};

export default useBreakpoints;
