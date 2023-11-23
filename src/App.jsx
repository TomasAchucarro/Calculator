import { Button } from "@mui/material";

function App() {
  const addNumbers = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(
        <Button sx={{fontSize:"20px",cursor:"pointer"}} key={i} variant="contained" size="small">
          {i}
        </Button>
      );
    }
    return numbers;
  };

  return (
    <>
      <div className="app">
        <div className="calculator">
          <div className="display">
            <span>(0)</span>0
          </div>
          <div className="operators">
            <Button variant="outlined" size="small">
              +
            </Button>
            <Button variant="outlined" size="small">
              -
            </Button>
            <Button variant="outlined" size="small">
              *
            </Button>
            <Button variant="outlined" size="small">
              /
            </Button>
            <Button variant="outlined" size="small">
              DEL
            </Button>
          </div>
          <div className="numbers">
            {addNumbers()} 
            <Button variant="contained" size="small">
              0
            </Button>
            <Button variant="contained" size="small">
              .
            </Button>
            <Button variant="outlined" size="small">
              =
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
