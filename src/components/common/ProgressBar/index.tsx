import {
  Progress,
  Stack,
  ProgressProps,
  Text,
  Heading
} from '@chakra-ui/react';
import { memo, useCallback } from 'react';

interface ProgressBarComponentProps extends ProgressProps {
  variant?: 'default' | 'success' | 'warning' | 'danger';
  label?: string;
  value?: number;
}

const ProgressBarComponent = ({
  label,
  variant,
  value,
  size
}: ProgressBarComponentProps) => {
  const renderValueProgress = useCallback(() => {
    const MAPPING_COLOR_VALUE_PROGRESS = {
      default: { color: 'primary.500' },
      success: { color: 'success.200' },
      danger: { color: 'danger.200' },
      warning: { color: 'warning.200' }
    };

    return (
      <Text
        size="xs"
        position="absolute"
        top="-2%"
        display="block"
        width="full"
        textAlign="right"
        {...MAPPING_COLOR_VALUE_PROGRESS[variant ?? 'default']}>
        {value}%
      </Text>
    );
  }, [value, variant]);

  return (
    <Stack position="relative">
      <Heading
        textTransform="uppercase"
        color="dark.200"
        fontSize="xs"
        lineHeight="shorter">
        {label}
      </Heading>
      {renderValueProgress()}
      <Progress variant={variant} value={value} borderRadius="md" size={size} />
    </Stack>
  );
};

export default memo(ProgressBarComponent);
