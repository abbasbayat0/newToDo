import { Box, Typography, TextField } from "@mui/material";
import useToDos from "./toDos";

function App() {
  const { toDos, changeToDo, show, hide, showPup, hidePup } = useToDos();
  return (
    <div>
      {/* the container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: 400,
          height: 80,
          borderRadius: 5,
          marginTop: 5,
          boxShadow: "10",
          bgcolor: "#22C55E",
        }}
      >
        {/* open and close */}
        <Typography
          onClick={() => {
            hide();
          }}
          variant="h5"
          sx={{
            fontFamily: "sans-serif",
            cursor: "pointer",
            "::selection": {
              bgcolor: "transparent",
            },
            "&:hover": {
              color: "white",
            },
          }}
        >
          +
        </Typography>
        {/* title */}
        <Typography variant="h5" sx={{ fontFamily: "sans-serif", marginX: 14 }}>
          ToDo
        </Typography>
      </Box>
      {/* list of to Dos */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          position: "relative",
          width: 400,
          height: show ? 400 : 0,
          opacity: show ? 1 : 0,
          borderRadius: 5,
          marginTop: 2,
          boxShadow: "10",
          bgcolor: "#CBD5E1",
        }}
      >
        {/* add new one */}
        <Box
          onClick={() => hidePup()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            position: "absolute",
            bottom: -30,
            width: 200,
            height: show ? 60 : 0,
            opacity: show ? 1 : 0,
            borderRadius: 5,
            marginTop: 2,
            boxShadow: "10",
            fontFamily: "sans-serif",
            cursor: "pointer",
            "::selection": {
              bgcolor: "transparent",
            },
            "&:hover": {
              color: "white",
            },
            bgcolor: "#22c55e",
          }}
        >
          NewOne
        </Box>
      </Box>

      {/* pupUp */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 10,
          top: 0,
          left: 0,
          width: 1,
          height: showPup ? 1 : 0,
          opacity: showPup ? 1 : 0,
          boxShadow: "10",
          bgcolor: "#CBD5E1",
        }}
      >
        <Typography
          onClick={() => hidePup()}
          variant="h4"
          sx={{
            position: "absolute",
            top: 50,
            cursor: "pointer",
            right: 50,
            "::selection": {
              bgcolor: "transparent",
            },
            "&:hover": {
              color: "white",
            },
          }}
        >
          X
        </Typography>
        <TextField
          id="standard-basic"
          label="Write & Enter"
          variant="standard"
        />
      </Box>
    </div>
  );
}

export default App;
