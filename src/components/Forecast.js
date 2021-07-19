import React, { useState } from "react";
import { Input } from "./styled-components/styled-components";

export default function Forecast() {
  const [location, setLocation] = useState();
  console.log(location);
  return (
    <div>
      <Input onChange={(e) => setLocation(e.target.value)} />
    </div>
  );
}
