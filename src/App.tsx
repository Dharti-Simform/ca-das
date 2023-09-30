import React from "react";

import TextInput from "./base-components/Input/Input";
import Checkbox from "./base-components/Checkbox/Checkbox";

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
    </div>
  );
}

export default App;
