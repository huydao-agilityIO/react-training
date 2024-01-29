import { memo } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Heading,
  Text
} from '@chakra-ui/react';

interface CardComponentProps {
  name: string;
  description: string;
  url?: string;
}

const CardComponent = ({ url = '', name, description }: CardComponentProps) => {
  return (
    <Card
      direction="column"
      alignItems="center"
      boxShadow="sm"
      py={12}
      w={{ sm: '3xs', md: '2xs', lg: 'xs' }}>
      <Avatar src={url} name={name} size="xl" marginBottom={6} />
      <CardHeader p={0}>
        <Heading variant="secondary" size="md" marginBottom={1}>
          {name}
        </Heading>
      </CardHeader>
      <CardBody p={0}>
        <Text variant="helper" size="md" fontWeight="medium">
          {description}
        </Text>
      </CardBody>
    </Card>
  );
};

export default memo(CardComponent);
