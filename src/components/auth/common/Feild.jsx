import React from "react";

const Feild = ({ label, children, htmlFor, error }) => {
    const id = htmlFor || getChildId(children)
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="auth-label">
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div className="text-red-600" role="alert">
          {error.message}
        </div>
      )}
    </div>
  );
};
const getChildId = (children) => {
    const child = React.Children.only(children);

    // eslint-disable-next-line no-unsafe-optional-chaining
    if ("id" in child?.props) {
      return child.props.id;
    }
};
export default Feild;
