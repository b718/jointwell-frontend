import React, { useState } from "react";
import { TextInput, Button, Group, Box, Textarea } from "@mantine/core";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [nameClicked, setNameClicked] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const backEndObj = { name: { name }, email: { email }, text: { text } };
    console.log(backEndObj);
    //cors is basically saying when we are not on the same domian
    //we cannot do that unless we add cors
    await fetch("http://localhost:3001/client", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setEmail("");
    setName("");
    setText("");
    setNameClicked(false);
    setEmailClicked(false);
  };

  const emailClickChecker = () => {
    if (emailClicked) {
      return email.length > 0 && validateEmail(email);
    } else {
      return true;
    }
  };

  const nameClickChecker = () => {
    if (nameClicked) {
      return name.length > 0;
    } else {
      return true;
    }
  };

  return (
    <Box
      mx="auto"
      style={{ maxWidth: "40rem", marginTop: "10rem", marginLeft: "0rem" }}
    >
      <form onSubmit={onSubmit} className="form-container-box">
        <label>Name</label>
        <TextInput
          withAsterisk
          className="text-input-form"
          radius="xs"
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
            console.log(name);
          }}
          onClick={() => {
            setNameClicked(true);
          }}
          placeholder="John Loon"
          required
          error={nameClickChecker() ? "" : "This is required"}
        />

        <label style={{ marginTop: "1rem", display: "block" }}>Email</label>
        <TextInput
          withAsterisk
          placeholder="your@email.com"
          className="text-input-form"
          radius="xs"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
            console.log(email);
          }}
          onClick={() => {
            setEmailClicked(true);
          }}
          type="email"
          error={emailClickChecker() ? "" : "Invalid Email"}
        />

        <label style={{ marginTop: "1rem", display: "block" }}>Message</label>
        <Textarea
          minRows={5}
          autosize
          className="text-area-form"
          radius="xs"
          value={text}
          onChange={(e) => {
            setText(e.currentTarget.value);
            console.log(text);
          }}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default Form;
