import { Box, Typography } from "@mui/material";
import useStore from "../../store";
import { useQuery } from "react-query";
import axios from "axios";

const List = () => {
  const { changeShowAddForm } = useStore();
  const { data } = useQuery("toDo", () => {
    return axios.get("http://localhost:3000/toDos");
  },{
    refetchInterval: 1000
  });
  return (
    <Box
      sx={{
        width: "450px",
        height: "550px",
        bgcolor: "#CBD5E1",
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* the list of to dos */}
      <Box
        sx={{
          width: "full",
          height: "100px",
          bgcolor: "#22C55E",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            ":hover": { color: "white" },
            cursor: "pointer",
            "::selection": { bgcolor: "transparent" },
          }}
        >
          ToDo
        </Typography>
      </Box>

      <div
        id="scroll"
        style={{
          height: "350px",
          overflow:"scroll",
          width: "full",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "50px",
        }}
      >
        {data?.data.map((data, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "400px",
                borderRadius: "20px",
                bgcolor: "#6B7280",
                justifyContent: "space-around",
                minHeight: "50px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  ":hover": { color: "yellowgreen" },
                  cursor: "pointer",
                  "::selection": { bgcolor: "transparent" },
                }}
              >
                {data.value}
              </Typography>
              <div style={{ display: "flex", gap: "10px" }}>
                <Typography
                  sx={{
                    color: "white",
                    ":hover": { color: "yellowgreen" },
                    cursor: "pointer",
                    "::selection": { bgcolor: "transparent" },
                  }}
                >
                  Edit
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    ":hover": { color: "red" },
                    cursor: "pointer",
                    "::selection": { bgcolor: "transparent" },
                  }}
                >
                  Delete
                </Typography>
              </div>
            </Box>
          );
        })}
      </div>

      <Box
        sx={{
          width: "200px",
          height: "70px",
          bgcolor: "#22C55E",
          display: "flex",
          position: "absolute",
          bottom: "0px",
          left: "50%",
          translate: "-50%",
          borderRadius: "20px",
          justifyContent: "space-around",
          alignItems: "center",
          cursor: "pointer",
          ":hover": { color: "white" },
          "::selection": { bgcolor: "transparent" },
          fontFamily: "sans-serif",
        }}
        onClick={changeShowAddForm}
      >
        New One
      </Box>
    </Box>
  );
};

export default List;
