import React from "react";

import TextInput from "./base-components/TextInput/TextInput";

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
    </div>
  );
}

export default App;
