import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const Rating = ({ rating, numReviews }) => {
  return (
    <HStack d="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return <BsStarFill key={i} style={{ marginLeft: '0' }} color="orange" />;
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '0' }} color="orange" />;
          }
          return <BsStar key={i} style={{ marginLeft: '0' }} color="orange" />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </HStack>
  );
};
export default Rating;
