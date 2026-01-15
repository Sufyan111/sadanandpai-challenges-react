import React from "react";
import NestedCheckBox from "./components/01.nested checkbox/NestedCheckBox";
import NestedComments from "./components/02.nested comments/NestedComments";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <NestedCheckBox /> */}
      <NestedComments />
    </div>
  );
};

export default App;
