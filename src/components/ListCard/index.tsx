import { List, ListItem } from '@chakra-ui/react';

// Types
import { HospitalStaff } from '@shared/types';

// Utils
import { formatFullName } from '@shared/utils';

// Components
import { Card } from '@shared/components';

interface ListCardProps {
  cards: HospitalStaff[];
}

const ListCard = ({ cards }: ListCardProps) => (
  <List display="flex" gap={7.5}>
    {cards.map(({ id, urlAvatar, firstName, lastName, description }) => (
      <ListItem key={id}>
        <Card
          url={urlAvatar}
          description={description}
          name={formatFullName(firstName, lastName)}
        />
      </ListItem>
    ))}
  </List>
);

export default ListCard;
