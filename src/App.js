// import { Hello } from "./Hello";
import React from "react";
// import { Counter } from "./Counter";
// import { ClickTracker } from "./ClickTracker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";

export class App extends React.Component {
  defaultLoginStatus = {
    status: "failure!",
  };

  render() {
    return (
      <div>
        {/* <Hello /> */}
        {/* <Counter
          initialValue={0}
          incrementAmount={2}
          incrementInterval={1000}
        /> */}
        {/* <ClickTracker /> */}
        {/* <InteractiveWelcome /> */}
        {/* <Login login="test" /> */}
        <UncontrolledLogin login={this.defaultLoginStatus} />
      </div>
    );
  }
}
