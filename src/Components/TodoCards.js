import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "../Features/Atm/Slice";
import { Box, Card, Typography, Button } from "@mui/material";

const TodoCards = ({ data }) => {
  const { dataUpdateRes } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {Object.keys(data).map((objectKey) => (
        <Box
          key={objectKey.id}
          sx={{
            display: "flex",
            //   justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}> {objectKey}</Typography>
          <Typography sx={{ textAlign: "justify" }}>
            {data[objectKey]}
          </Typography>
        </Box>
      ))}
      <Box>
        <Button onClick={() => dispatch(changeTitle(data))} variant="contained">
          Change Title
        </Button>
      </Box>
    </Card>
  );
};

export default TodoCards;
