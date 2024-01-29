import { memo } from 'react';
import { Link, Text, TextProps } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';

interface TextLinkProps extends TextProps {
  link: string;
  pathRouter: string;
}

export const TextErrorMessage = memo(({ children, ...props }: TextProps) => (
  <Text {...props} variant="error" size="xs">
    {children}
  </Text>
));

export const TextHelper = memo(({ children, ...props }: TextProps) => (
  <Text {...props} variant="helper" size="md">
    {children}
  </Text>
));

export const TextLink = memo(
  ({ children, link, pathRouter, ...props }: TextLinkProps) => (
    <Text {...props} variant="link" size="lg" fontWeight="medium">
      {children}{' '}
      <Link
        color="secondary.400"
        _hover={{ textDecoration: 'none' }}
        as={LinkRouter}
        to={pathRouter}>
        {link}
      </Link>
    </Text>
  )
);
