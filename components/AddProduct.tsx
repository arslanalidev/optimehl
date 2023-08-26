import React, { useState } from 'react';
import { Button, Select, TextInput } from '@mantine/core';

const AddProduct = ({ onAddProduct }) => {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = () => {
        if (selectedProduct && quantity) {
            onAddProduct(selectedProduct, quantity);
            setSelectedProduct('');
            setQuantity('');
        }
    }

    return (
        <div>
            <Select
                mt="md"
                data={['Brezeln', 'Körnerbrötchen', 'Mürbeteiggebäck', 'Weizenbrötchen', 'Vollkornbrötchen']}
                placeholder="Pick one"
                label="Your favorite library/framework"
                value={selectedProduct}
                onChange={(value) => setSelectedProduct(value)}
            />
            <TextInput
                label="Menge"
                placeholder="Menge"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
            />
            <Button
                onClick={handleSubmit}
                style={{marginTop: '20px'}}
            >
                Click
            </Button>
        </div>
    );
}

export default AddProduct;
