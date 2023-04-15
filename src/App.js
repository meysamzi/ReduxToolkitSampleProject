import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import { getTodoData } from "./Features/Atm/Slice";
import useIntersectionObserver from "./CustomHooks/useIntersectionObserver";
import TodoCards from "./Components/TodoCards";

function App() {
  const { isGetDataLoading, todoData } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  const [dataCounter, setDataCounter] = useState(50);
  const intersectionObserverElement = useRef(null);
  let slicedData = useRef([]);
  let inView = useIntersectionObserver(intersectionObserverElement);
  slicedData.current = todoData?.slice(0, dataCounter);

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
          {slicedData.current?.map((data) => (
            <TodoCards data={data} />
          ))}
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
