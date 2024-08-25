import React, { useContext, useEffect } from "react";
import { MaterialContext } from "../../components/Context";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";

const Students = () => {
  const { materials,getUser } = useContext(MaterialContext);

  useEffect(() => {
    getUser(3)
  },[])

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Students
      </Typography>
      <MaterialsList>
        <List>
          {materials.map((material) => (
            <StyledListItem key={material.id}>
              <ListItemText>
                <Typography variant="body1">
                  {`${material.name} ${material.lastName}`}
                </Typography>
                <Typography variant="body2">Age: {material.age}</Typography>
              </ListItemText>
              <NavLink to={`${material.id}/details`}>
                <Button variant="outlined" size="small">
                  Details
                </Button>
              </NavLink>
            </StyledListItem>
          ))}
        </List>
      </MaterialsList>
    </Container>
  );
};

export default Students;

const MaterialsList = styled(Box)`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Container = styled("div")`
  padding: 20px;
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  color: #333;
  transition: background-color 0.3s;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ListItemText = styled("div")`
  display: flex;
  flex-direction: column;
`;
