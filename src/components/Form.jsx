import { Button, TextField, Typography } from "@mui/material";
import useStore from "../../store";
import { useForm } from "react-hook-form";

const Form = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  const { changeShowAddForm } = useStore();
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
      <Button variant="contained" sx={{ marginTop: 5 }} type="submit">
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
