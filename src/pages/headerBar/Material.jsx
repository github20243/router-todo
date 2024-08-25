import React, { useContext, useState } from 'react';
import { Button, Modal, Box, TextField, Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { MaterialContext } from '../../components/Context';

const Material = () => {
  const { materials, setMaterials } = useContext(MaterialContext);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNameChange = (event) => setName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);

  const handleSubmit = () => {
    if (name.trim() && lastName.trim() && age.trim()) {
      setMaterials([...materials, { name, lastName, age ,id: Math.floor(Math.random() * 1000)}]);
      setName('');
      setLastName('');
      setAge('');
      handleClose();
    }
  };

  const navigate = useNavigate();

  const isValidMaterial = (material) => 
    material && typeof material.name === 'string' &&
    typeof material.lastName === 'string' &&
    typeof material.age === 'string';

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Material
      </Typography>
      <Button variant='outlined' onClick={handleOpen}>
        Add New Material
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalBox>
          <Typography id="modal-title" variant="h6" component="h2">
            Add New Material
          </Typography>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Last Name"
            fullWidth
            variant="outlined"
            value={lastName}
            onChange={handleLastNameChange}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Age"
            fullWidth
            variant="outlined"
            value={age}
            onChange={handleAgeChange}
            sx={{ mt: 2 }}
          />
          <Box sx={{ mt: 2 }}>
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
            <Button onClick={handleClose} variant="outlined" sx={{ ml: 1 }}>
              Cancel
            </Button>
          </Box>
        </ModalBox>
      </Modal>

      <MaterialsList>
        <List>
          {materials.filter(isValidMaterial).map((material, index) => (
            <ListItem key={index} secondaryAction={
              <Button onClick={() => navigate("/courses/students")} variant="outlined" size="small">
                Details
              </Button>
            }>
              <ListItemText
                primary={`${material.name} ${material.lastName}`}
                secondary={`Age: ${material.age}`}
              />
            </ListItem>
          ))}
        </List>
      </MaterialsList>
    </Container>
  );
};

export default Material;

const Container = styled('div')`
  padding: 20px;
`;

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;

const MaterialsList = styled(Box)`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;
