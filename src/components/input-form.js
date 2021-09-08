import "./input-form.css";

const InputForm = ({ config }) => {
  const getElement = ({
    type,
    label,
    errorFlag,
    errorMsg,
    options,
    onChange,
    value
  }) => {
    switch (type) {
      case "text":
        return (
          <div>
            <label>{label}</label>
            <input type="text" onChange={onChange} value={value} />
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );

      case "number":
        return (
          <div>
            <label>{label}</label>
            <input type="number" onChange={onChange} value={value} />
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
      case "password":
        return (
          <div>
            <label>{label}</label>
            <input type="password"  onChange={onChange} value={value} />
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
      case "date":
        return (
          <div>
            <label>{label}</label>
            <input type="date"  onChange={onChange} value={value} />
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
      case "dropdown":
        return (
          <div>
            <label>{label}</label>
            <select onChange={onChange} value={value}>
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
