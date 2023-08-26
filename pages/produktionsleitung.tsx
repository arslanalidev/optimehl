import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Table, Container, Paper } from '@mantine/core';
import AddProduct from '../components/AddProduct';
import BakeryFlow from '../components/BakeryFlow';

const Produktionsleitung = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [products, setProducts] = useState([]);

  //   @ts-ignore
  const handleAddProduct = (product, quantity) => {
    // @ts-ignore
    setProducts((prevProducts) => [...prevProducts, { product, quantity }]);
  };

  return (
    <Container mih={'80vh'} mt={'5vh'}>
      <Modal opened={opened} onClose={close} title="Produkt hinzufügen">
        <AddProduct onAddProduct={handleAddProduct}></AddProduct>
      </Modal>

      <Paper style={{ width: '100%', marginBottom: '20px' }}>
        <Table>
          <thead>
            <tr>
              <th>Produkt</th>
              <th>Menge</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, index) => (
              <tr key={index}>
                {/* @ts-ignore */}
                <td>{prod.product}</td>
                {/* @ts-ignore */}
                <td>{prod.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>

      <Button onClick={open} style={{ marginTop: '20px' }}>
        Produkt hinzufügen
      </Button>
      <BakeryFlow />
    </Container>
  );
};

export default Produktionsleitung;
