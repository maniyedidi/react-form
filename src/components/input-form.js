import "./input-form.css";

const InputForm = ({ config }) => {
  const getElement = ({ type, label, errorFlag, errorMsg, options = [] }) => {
    switch (type) {
      case "text":
        return (
          <div>
            <label htmlFor={type.label}>{label}</label>
            <input type="text" id={type.label} />
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );

      case "number":
        return (
          <div>
            <label>{label}</label>
            <input type="number" />
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
      case "password":
        return (
          <div>
            <label>{label}</label>
            <input type="password" />
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
      case "date":
        return (
          <div>
            <label>{label}</label>
            <input type="date" />
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
      case "dropdown":
        return (
          <div>
            <label>{label}</label>
            <select>
              {options.map(option => {
                return <option value={option}>{option}</option>;
              })}
            </select>
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
    }
  };
  return (
    <div>
      {config.map(element => {
        return getElement(element);
      })}
    </div>
  );
};

export default InputForm;
