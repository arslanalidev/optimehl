import React, { useState } from 'react';
import { Button, Select, TextInput } from '@mantine/core';

const AddProduct = ({ onAddProduct }: { onAddProduct: Function }) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = () => {
    if (selectedProduct && quantity) {
      onAddProduct(selectedProduct, quantity);
      setSelectedProduct('');
      setQuantity('');
    }
  };

  return (
    <div>
      <Select
        mt="md"
        data={[
          'Brezeln',
          'Körnerbrötchen',
          'Mürbeteigboden',
          'Weizenbrötchen',
          'Vollkornbrötchen'
        ]}
        placeholder="Auswählen"
        value={selectedProduct}
        onChange={(value) => setSelectedProduct(value)}
      />
      <TextInput
        label="Menge"
        placeholder="Menge"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <Button onClick={handleSubmit} style={{ marginTop: '20px' }}>
        Produkt hinzufügen
      </Button>
    </div>
  );
};

export default AddProduct;
