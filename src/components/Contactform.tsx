import React from "react";

interface ContactFormProps {
  label: string;
  name: string;
  type: string;
  id?: string;
  options?: string[];
}
const ContactForm: React.FC<ContactFormProps> = ({ label, name, type, id, options }) => {

  return (
    <div>
      <div className="inputBox">
        <label className="inputLabel">{label}</label>
        <input className="inputField" type={type} name={name} placeholder={label} required />
        <input type="hidden" name="_captcha" value="false"></input>
      </div>
    </div>
  );
};

export default ContactForm;
