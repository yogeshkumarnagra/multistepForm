/* eslint-disable default-case */
import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Name } from "./Steps/Name";
import { Contact } from "./Steps/Contact";
import { Address } from "./Steps/Address";
import { Review } from "./Steps/Review";
import { Submit } from "./Steps/Submit";
import "./multi.css";

const defaultData = {
  firstName: "",
  lastName: "",
  nickName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  pincode: "",
};

const steps = [
  { id: "name" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];

export const MultistepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ steps, initialStep: 0 });
  console.log("steps", steps);
  console.log("defaultdata", defaultData);

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "name":
      return <Name {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>mult step form</h1>
    </div>
  );
};
