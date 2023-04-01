import React from "react";
import { TextInput, Button, Group, Box, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import "./Form.css";

const Form = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      text: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) => (value.length < 0 ? "Please enter a name" : null),
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      mx="auto"
      style={{ maxWidth: "35rem", marginTop: "10rem", marginLeft: "10rem" }}
    >
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          values.email = "";
          values.name = "";
          values.text = "";
        })}
      >
        <TextInput
          withAsterisk
          label="Name"
          {...form.getInputProps("name")}
          className="text-input-form"
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
          className="text-input-form"
        />

        <Textarea
          minRows={5}
          autosize
          label="Message"
          {...form.getInputProps("text")}
          className="text-area-form"
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default Form;
