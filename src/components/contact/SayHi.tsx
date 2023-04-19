import { useState } from "react";
import "../../styles/artists.css";
import "../../styles/errors.css";

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
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full">
        <form onSubmit={(e) => handleSubmit(e, submitForm)}>
          <div className="text-white font-montserrat flex flex-col gap-y-4">
            <section>
              <div>
                <span>Name</span>
              </div>
              <input
                className={`${
                  formErrors.name ? "error-input" : ""
                } w-full p-2 rounded-md`}
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
              <input
                className={`${
                  formErrors.email ? "error-input" : ""
                } w-full p-2 rounded-md`}
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
              <input
                className={`${
                  formErrors.subject ? "error-input" : ""
                } w-full p-2 rounded-md`}
                placeholder="My name is Jeff"
                onChange={(e) =>
                  setSubmitForm({ ...submitForm, message: e.target.value })
                }
              />
              <p>
                {formErrors.subject && (
                  <span className="error-text">{formErrors.subject}</span>
                )}
              </p>
            </section>
            <section>
              <div>Message</div>
              <textarea
                className={`${
                  formErrors.email ? "error-input" : ""
                } w-full p-2 rounded-md h-40`}
                placeholder="I am a big fan of your work!"
                onChange={(e) =>
                  setSubmitForm({ ...submitForm, message: e.target.value })
                }
              />
              <p>
                {formErrors.message && (
                  <span
                    className="error-text"
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    {formErrors.message}
                  </span>
                )}
              </p>
            </section>
          </div>

          <button
            className="mt-8 p-3 rounded-lg bg-orange-500 text-white font-bold font-montserrat text-xs hover:bg-orange-400 zoom"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SayHi;
