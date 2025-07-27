import { Box, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Add = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  var [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });


  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        ...inputs,
        title: location.state.title,
        content: location.state.content,
        img_url: location.state.img_url,
      });
    }
  }, []);

  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in",inputs);
  };
  const addData = () => {
    if (location.state !== null) {
      console.log("clicked");
      axios
        .put(`http://localhost:3001/${location.state._id}`, inputs)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("clicked");
      axios
        .post("http://localhost:3001/post", inputs)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Title"
              onChange={inputHandler}
              name="title"
              value={inputs.title}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="content"
              onChange={inputHandler}
              name="content"
              value={inputs.content}
              multiline
              rows={4}
            />
            <TextField
              variant="outlined"
              placeholder="image url"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />

            <Button variant="contained" color="secondary" onClick={addData}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;
