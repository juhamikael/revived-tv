import { useState } from "react";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

const ContactForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <div className="text-white font-montserrat flex flex-col">
          <div>Email</div>

          <TextInput
            withAsterisk
            label={null}
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
        </div>

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group position="right" mt="md">
          <Button type="submit" onClick={() => handleSubmit(form.values)}>
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default ContactForm;
