import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
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
  const { isOpen, onClose, onOpen } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImage, setSelectedImage] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function viewImage(url: string): void {
    setSelectedImage(url);
    onOpen();
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid as="ul" columns={3} spacing={10} mb="10">
        {cards?.map(card => (
          <Card key={card.id} data={card} viewImage={url => viewImage(url)} />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage
        imgUrl={selectedImage}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
