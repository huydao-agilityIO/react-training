import { FormEventHandler, ReactNode } from 'react';
import { Box, Container, Heading, Link, Stack, VStack } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';

// Components
import { TextErrorMessage, TextLink } from '@shared/components';

interface AuthFormContainerProps {
  children: ReactNode;
  linkRouter?: string;
  mainTitle?: string;
  idForm?: string;
  pathRouter?: string;
  errorResponseAPI?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const AuthFormContainer = ({
  children,
  linkRouter = '',
  idForm = '',
  mainTitle = '',
  pathRouter = '',
  errorResponseAPI = '',
  onSubmit
}: AuthFormContainerProps) => {
  return (
    <VStack height="100vh" alignItems="center" justifyContent="center">
      <Container maxW={{ sm: 396, md: '3xl' }}>
        <Box as="form" id={idForm} onSubmit={onSubmit}>
          <VStack
            borderWidth={1}
            borderRadius="base"
            borderStyle="solid"
            borderColor="dark.400"
            overflowX="auto"
            bg="light.300">
            <Stack py={6} px={7.5} spacing={2} bg="light.250" w="full">
              <Heading variant="helper" size="lg">
                {mainTitle}
              </Heading>
              {errorResponseAPI && (
                <TextErrorMessage>{errorResponseAPI}</TextErrorMessage>
              )}
            </Stack>
            <VStack px={7.5} py={9} w="full">
              <VStack spacing={5} w="full" alignItems="flex-start">
                {children}
              </VStack>
              <VStack marginTop={6} spacing={5}>
                <TextLink link={linkRouter} pathRouter={pathRouter}>
                  Need an account?
                </TextLink>
                <Link
                  color="secondary.400"
                  _hover={{ textDecoration: 'none' }}
                  as={LinkRouter}
                  to="">
                  Forget Password?
                </Link>
              </VStack>
            </VStack>
          </VStack>
        </Box>
      </Container>
    </VStack>
  );
};

export default AuthFormContainer;
