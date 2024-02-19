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
    <HStack>
      <Button onClick={handlePreviousPage} isDisabled={currentPage === 1}>
        Previous
      </Button>{' '}
      {pageNumbers.map((number) => {
        const handleChangePage = () => {
          onChangePage(number);
        };
        return (
          <Button
            key={number}
            isDisabled={currentPage === number}
            onClick={handleChangePage}>
            {number}
          </Button>
        );
      })}
      <Button onClick={handleNextPage} isDisabled={currentPage === totalPage}>
        Next
      </Button>
    </HStack>
  );
};

export default memo(Pagination);
