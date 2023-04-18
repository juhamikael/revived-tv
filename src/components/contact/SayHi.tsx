import { useState } from "react";
import { TextInput, Textarea, Button, Group, Box } from "@mantine/core";
import "../../styles/artists.css";
import "../../styles/errors.css";

import DiscordService from "./DiscordService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IForm {
  name: string;
  email: string;
  message: string;
  subject: string;
}

interface IFormErrors {
  name: string | null;
  email: string | null;
  message: string | null;
  subject: string | null;
}

const SayHi = () => {
  const [submitForm, setSubmitForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  } as IForm);

  const [formErrors, setFormErrors] = useState({
    name: null,
    email: null,
    message: null,
    subject: null,
  } as IFormErrors);

  const { send } = DiscordService({ submitForm });
  const validateForm = (formValues: IForm): IFormErrors => {
    const errors: IFormErrors = {
      name: null,
      email: null,
      message: null,
      subject: null,
    };

    if (!formValues.name) {
      errors.name = "Name is required";
    }

    if (!formValues.email || !formValues.email.includes("@")) {
      errors.email = "Invalid email";
    }

    if (!formValues.subject || !formValues.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formValues.message || !formValues.message.trim()) {
      errors.message = "Message is required";
    } else if (formValues.message.length > 500) {
      errors.message = "Message is too long (max 500 characters)";
    }

    return errors;
  };

  const handleSubmit = (event: React.FormEvent, formValues: IForm) => {
    event.preventDefault();

    const errors = validateForm(formValues);
    setFormErrors(errors);

    if (!errors.name && !errors.email && !errors.message) {
      toast.success("Message sent!");
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, submitForm)}>
        <div className="text-white font-montserrat flex flex-col gap-y-4">
          <section>
            <div>
              <span>Name</span>
            </div>
            <TextInput
              className={formErrors.name ? "error-input" : ""}
              withAsterisk
              label={null}
              placeholder="Jeff"
              onChange={(e) =>
                setSubmitForm({ ...submitForm, name: e.target.value })
              }
            />
            <p>
              {formErrors.name && (
                <span className="error-text">{formErrors.name}</span>
              )}
            </p>
          </section>
          <section>
            <div>Email</div>
            <TextInput
              className={formErrors.email ? "error-input" : ""}
              withAsterisk
              label={null}
              placeholder="your@email.com"
              onChange={(e) =>
                setSubmitForm({ ...submitForm, email: e.target.value })
              }
            />
            <p>
              {formErrors.email && (
                <span className="error-text">{formErrors.email}</span>
              )}
            </p>
          </section>
          <section>
            <div>Subject</div>
            <TextInput
              className={formErrors.message ? "error-input" : ""}
              withAsterisk
              label={null}
              placeholder="My name is Jeff"
              onChange={(e) =>
                setSubmitForm({ ...submitForm, message: e.target.value })
              }
            />
            <p>
              {formErrors.email && (
                <span className="error-text">{formErrors.subject}</span>
              )}
            </p>
          </section>
          <section>
            <div>Message</div>
            <Textarea
              className={formErrors.message ? "error-input" : ""}
              withAsterisk
              label={null}
              placeholder="I am a big fan of your work!"
              onChange={(e) =>
                setSubmitForm({ ...submitForm, message: e.target.value })
              }
              minRows={4}
            />
          </section>
          <p>
            {formErrors.message && (
              <span className="error-text">{formErrors.message}</span>
            )}
          </p>
        </div>

        <Group position="left" mt="md">
          <button
            className="p-3 rounded-lg bg-orange-500 text-white font-bold font-montserrat text-xs hover:bg-orange-400 zoom"
            type="submit"
          >
            Submit
          </button>
        </Group>
      </form>
      <ToastContainer />
    </>
  );
};

export default SayHi;
