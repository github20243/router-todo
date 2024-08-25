import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MaterialContext } from "../components/Context";
import { ListItem, styled, Typography } from "@mui/material";

const StudentInfo = () => {
  const { id } = useParams();
  const { materials } = useContext(MaterialContext);

  const studentInfo = materials.find((item) => item.id === +id);
  return (
    <div>
      <StyledListItem key={studentInfo?.id}>
        <ListItemText>
          <Typography variant="body1">
            {`${studentInfo?.name} ${studentInfo?.lastName}`}
          </Typography>
          <Typography variant="body2">Age: {studentInfo?.age}</Typography>
        </ListItemText>
      </StyledListItem>
    </div>
  );
};

export default StudentInfo;

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
