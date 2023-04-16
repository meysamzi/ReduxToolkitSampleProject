import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Card, Typography } from "@mui/material";
import { getTodoData } from "./Features/Atm/Slice";
import useIntersectionObserver from "./CustomHooks/useIntersectionObserver";
import TodoCards from "./Components/TodoCards";

function App() {
  const { isGetDataLoading, todoData, isUpdateDataLoading, dataUpdateRes } =
    useSelector((store) => store.todo);
  const dispatch = useDispatch();
  const [dataCounter, setDataCounter] = useState(50);
  const intersectionObserverElement = useRef(null);
  let slicedData = useRef([]);
  let inView = useIntersectionObserver(intersectionObserverElement);
  slicedData.current = todoData?.slice(0, dataCounter);
  console.log(todoData);
  useEffect(() => {
    dispatch(getTodoData());
  }, []);
  useEffect(() => {
    inView && setDataCounter((prev) => prev + 20);
  }, [inView]);

  return (
    <>
      {isGetDataLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "1rem",
            padding: "2rem",
          }}
        >
          {isUpdateDataLoading ? (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "50%",
              }}
            >
              <CircularProgress />
            </Box>
          ) : Object.keys(dataUpdateRes).length > 0 ? (
            <Card
              sx={{
                padding: "1.5rem",
                position: "absolute",
                top: "50%",
                right: "50%",
              }}
            >
              {Object.keys(dataUpdateRes)?.map((objkeys) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>{objkeys}</Typography>
                  <Typography>{dataUpdateRes[objkeys]}</Typography>
                </Box>
              ))}
            </Card>
          ) : Object.keys(dataUpdateRes).length === 0 ? (
            slicedData.current?.map((data) => <TodoCards data={data} />)
          ) : null}
        </Box>
      )}
      <Box
        ref={intersectionObserverElement}
        style={{ visibility: "hidden" }}
      ></Box>
    </>
  );
}

export default App;
