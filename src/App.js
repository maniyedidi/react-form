import React from "react";
import InputForm from "./components/input-form";
import { getLoginConfig, getSignUpConfig, getDetailsConfig } from "./example/config";
function App() {
  const [formDetails, setFormDetails] = React.useState({});

  const onChange = (value, dataLabel) => {
    setFormDetails({
      ...formDetails,
      [dataLabel]: value
    });
  };

  return (
    <div className="App">
      <div className="f-c">
        <h1>Login</h1>
        <InputForm config={getLoginConfig(onChange, formDetails)} />
      </div>
      <div className="f-c">
        {/* Signup form      */}
        <h1>Signup</h1>
        <InputForm config={getSignUpConfig(onChange, formDetails)} />
      </div>

      <div className="f-c">
        {/* Signup form      */}
        <h1>Details</h1>
        <InputForm config={getDetailsConfig(onChange, formDetails)} />
      </div>
    </div>
  );
}

export default App;
