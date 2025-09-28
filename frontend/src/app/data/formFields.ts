// app/data/formFields.ts
export const formFields = [
  {
    name: "fullName",
    label: "Full Name",
    type: "TEXT",
    required: true,
    defaultValue: "Name"
  },
  {
    name: "email",
    label: "Email",
    type: "TEXT",
    required: true,
    defaultValue: "Email"
  },
  {
    name: "gender",
    label: "Gender",
    type: "RADIO",
    required: true,
    defaultValue: "Gender",
    options: ["Male", "Female", "Other"]
  }
];
