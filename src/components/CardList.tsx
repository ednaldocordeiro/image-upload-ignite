import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing={10} mb="10">
        {cards?.map(card => (
          <Box
            key={card.id}
            borderRadius="6"
            width="3x"
            height="xs"
            bgColor="pGray.800"
            overflow="hidden"
          >
            <Image src={card.url} w="100%" h="70%" objectFit="cover" />
            <Box padding="4">
              <Heading size="md">{card.title}</Heading>
              <Text size="xs">{card.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
