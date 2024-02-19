import { Button, HStack } from '@chakra-ui/react';
import { memo } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onChangePage: (pageNumber: number) => void;
}

const Pagination = ({
  currentPage,
  totalPage,
  onChangePage
}: PaginationProps) => {
  const pageNumbers: number[] = Array(totalPage)
    .fill(null)
    .map((_, index) => index + 1);

  const handleNextPage = () => {
    onChangePage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    onChangePage(currentPage - 1);
  };

  return (
    <HStack gap={0}>
      <Button
        variant="outline"
        size="xs"
        borderRadius="null"
        color="primary.300"
        _disabled={{
          bg: 'primary.300',
          borderColor: 'primary.300',
          color: 'light.300'
        }}
        _hover={{
          bg: 'primary.300',
          borderColor: 'primary.300',
          color: 'light.300'
        }}
        isDisabled={currentPage === 1}
        onClick={handlePreviousPage}>
        Previous
      </Button>
      {pageNumbers.map((number) => {
        const handleChangePage = () => {
          onChangePage(number);
        };
        return (
          <Button
            key={number}
            variant="outline"
            size="xs"
            borderRadius="null"
            color="primary.300"
            _disabled={{
              bg: 'primary.300',
              borderColor: 'primary.300',
              color: 'light.300'
            }}
            _hover={{
              bg: 'primary.300',
              borderColor: 'primary.300',
              color: 'light.300'
            }}
            isDisabled={currentPage === number}
            onClick={handleChangePage}>
            {number}
          </Button>
        );
      })}
      <Button
        variant="outline"
        size="xs"
        borderRadius="null"
        color="primary.300"
        _disabled={{
          bg: 'primary.300',
          borderColor: 'primary.300',
          color: 'light.300'
        }}
        _hover={{
          bg: 'primary.300',
          borderColor: 'primary.300',
          color: 'light.300'
        }}
        isDisabled={currentPage === totalPage}
        onClick={handleNextPage}>
        Next
      </Button>
    </HStack>
  );
};

export default memo(Pagination);
