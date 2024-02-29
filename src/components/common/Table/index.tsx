import { memo, useCallback } from 'react';
import {
  Center,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr
} from '@chakra-ui/react';

// Types
import { ContentMapping, HeadingMapping } from '@shared/types';

// Components
import { Pagination, TextHelper } from '@shared/components';

interface DataTableProps {
  data: ContentMapping[][];
  currentPage: number;
  totalPage: number;
  headingMapping?: HeadingMapping[];
  isLoading?: boolean;
  onChangePage: (pageNumber: number) => void;
}

const DataTable = ({
  data,
  headingMapping = [],
  currentPage,
  totalPage,
  onChangePage,
  isLoading = false
}: DataTableProps) => {
  const renderBodyTable = useCallback(() => {
    if (isLoading) {
      return (
        <TableCaption paddingY={10}>
          <Spinner />
        </TableCaption>
      );
    }

    if (data.length === 0) {
      return (
        <TableCaption paddingY={10} fontFamily="body">
          <TextHelper>No Data Found</TextHelper>
        </TableCaption>
      );
    }

    return (
      <>
        <Tbody>
          {data.map((contentMapping: ContentMapping[], index) => (
            <Tr key={`HAD_${index}`}>
              {contentMapping.map(({ customRender, value, cellStyle }) => (
                <Td {...cellStyle}>{value ?? customRender?.()}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        {!!totalPage && (
          <TableCaption>
            <Center marginTop={5}>
              <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                onChangePage={onChangePage}
              />
            </Center>
          </TableCaption>
        )}
      </>
    );
  }, [currentPage, data, isLoading, onChangePage, totalPage]);

  return (
    <TableContainer bg="light.300" height={911} overflowY="auto">
      <Table>
        <Thead>
          <Tr bg="primary.300">
            {headingMapping?.map(({ key, label, cellStyle }) => (
              <Td key={key} {...cellStyle}>
                {label}
              </Td>
            ))}
          </Tr>
        </Thead>
        {renderBodyTable()}
      </Table>
    </TableContainer>
  );
};

export default memo(DataTable);
