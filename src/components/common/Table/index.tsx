import { memo, useCallback } from 'react';
import {
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
import { TextHelper } from '@shared/components';

interface DataTableProps {
  data: ContentMapping[][];
  headingMapping?: HeadingMapping[];
  isLoading?: boolean;
}

const DataTable = ({
  data,
  headingMapping = [],
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
      <Tbody>
        {data.map((contentMapping: ContentMapping[], index) => (
          <Tr key={`HAD_${index}`}>
            {contentMapping.map(({ customRender, value, cellStyle }) => (
              <Td {...cellStyle}>{value ?? customRender?.()}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    );
  }, [data, isLoading]);

  return (
    <TableContainer w={{ sm: 'full', xl: '6xl' }} bg="light.300">
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
