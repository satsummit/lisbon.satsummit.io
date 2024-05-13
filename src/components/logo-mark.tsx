import { chakra, useToken } from '@chakra-ui/react';
import React from 'react';

export default function LogoIcon({ color }: { color: string }) {
  const [userColor, fallbackColor] = useToken('colors', [color, 'primary.500']);

  return (
    <chakra.svg
      width={{ base: '24px', lg: '32px' }}
      height={{ base: '15px', lg: '20px' }}
      viewBox='0 0 128 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M88 16L72 32V8L64 0L56 8V32L40 16H0V64H40L56 48V80H72V48L88 64H128V16H88ZM16 56H8V24H16V56ZM32 56H24V24H32V56ZM104 56H96V24H104V56ZM120 56H112V24H120V56Z'
        fill={userColor ?? fallbackColor}
      />
    </chakra.svg>
  );
}
