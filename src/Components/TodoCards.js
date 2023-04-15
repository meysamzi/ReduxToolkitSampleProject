import { Box, Card, Typography } from "@mui/material";

const TodoCards = ({ data }) => {
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
    </Card>
  );
};

export default TodoCards;
