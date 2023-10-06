import { Box, Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const myForm = () => {
  return (
    <form onSubmit={submitForm}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2em",
        }}
      >
        <TextField
          required
          name="name"
          id="outlined-required"
          label="name"
          onChange={saveFields}
        />
      </Box>
    </form>
  );
};
export default myForm;
