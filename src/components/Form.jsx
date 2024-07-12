import { Button, TextField, Typography } from "@mui/material";
import useStore from "../../store";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import axios from "axios";

const Form = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const { data } = useQuery("data", () => {
    return axios.get("http://localhost:3000/toDos");
  });
  const { changeShowAddForm } = useStore();
  const onSubmit = (ta) => {
    const length = data?.data.length;
    const newToDo = { id: length + 1, value: ta.input };

    axios
      .post("http://localhost:3000/toDos", newToDo)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
    changeShowAddForm()
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        width: "100%",
        height: "100vh",
        zIndex: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
      noValidate
    >
      <TextField
        variant="standard"
        label="Type & Enter"
        id="input"
        {...register("input", {
          required: {
            value: true,
            message: "require",
          },
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "only alphabets",
          },
          maxLength: {
            value: 30,
            message: "type less",
          },
          minLength: {
            value: 4,
            message: "type more",
          },
        })}
      />
      <Typography sx={{ color: "red" }}>{errors.input?.message}</Typography>
      <Button
        variant="contained"
        sx={{ marginTop: 5 }}
        type="submit"
      >
        Add
      </Button>

      <Button
        onClick={changeShowAddForm}
        variant="contained"
        sx={{ position: "absolute", top: 20, right: 20, bgcolor: "red" }}
      >
        X
      </Button>
    </form>
  );
};

export default Form;
