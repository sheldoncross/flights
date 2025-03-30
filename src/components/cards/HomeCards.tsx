import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

// Styles for the components

interface CardItem {
  id: string;
  title: string;
  description: string;
}

const HomeCards = () => {
  // Sample data for the cards (replace with your actual data)
  const [data, setData] = useState<CardItem[]>([
    { id: '1', title: 'Card 1', description: 'Description for card 1' },
    { id: '2', title: 'Card 2', description: 'Description for card 2' },
    { id: '3', title: 'Card 3', description: 'Description for card 3' },
    { id: '4', title: 'Card 4', description: 'Description for card 4' },
    { id: '5', title: 'Card 5', description: 'Description for card 5' },
    { id: '6', title: 'Card 6', description: 'Description for card 6' },
    { id: '7', title: 'Card 7', description: 'Description for card 7' },
    { id: '8', title: 'Card 8', description: 'Description for card 8' },
    { id: '9', title: 'Card 9', description: 'Description for card 9' },
    { id: '10', title: 'Card 10', description: 'Description for card 10' },
  ]);

  // Function to render each card
  const renderCard = ({ item }: { item: CardItem }) => (
    <TouchableOpacity onPress={() => alert(`Pressed ${item.title}`)}>
      <Card>
        <Card.Content>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  // Key extractor for the FlatList (using the 'id' property)
  const keyExtractor = (item: CardItem) => item.id;

  return (
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={keyExtractor}
      />
  );
}

export default HomeCards;
