import React from "react";

import TextInput from "./base-components/Input/Input";
import Checkbox from "./base-components/Checkbox/Checkbox";
import Button from "./base-components/Button/Button";

function App() {
  return (
    <div>
      <TextInput
        id="email"
        placeholder="Email"
        label="Email"
        value="Dharti"
        disabled={true}
      />
      <Checkbox
        id="terms"
        label="By creating an account, you agree to our
Term and Conditions"
        isChecked={false}
        disabled={false}
        errorMessage="opopo"
      />
      <Button
        id="submit-btn"
        onClick={() => console.log("*** clicked")}
        // disabled={true}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
