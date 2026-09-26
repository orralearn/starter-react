import { useState } from "react";
import { badNetwork, setBadNetwork } from "./fake-server.ts";

// Made for you: put <BadNetworkSwitch /> in your app (a footer is fine)
// so you and your reviewer can test what happens when the network
// fails. The address ?network=bad turns it on too.
export function BadNetworkSwitch() {
  const [on, setOn] = useState(badNetwork());
  return (
    <label className="bad-network">
      <input
        type="checkbox"
        checked={on}
        onChange={(e) => {
          setBadNetwork(e.target.checked);
          setOn(e.target.checked);
        }}
      />
      Simulate a bad network
    </label>
  );
}
