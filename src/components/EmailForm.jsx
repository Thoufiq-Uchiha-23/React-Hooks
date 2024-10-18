import { useId } from "react";

const EmailForm = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}.email`}>Email</label>
      <input id={`${id}.email`} type="email" />
      <label htmlFor={`${id}.name`}>Name</label>
      <input id={`${id}.name`} type="name" />
    </div>
  );
};

export default EmailForm;
