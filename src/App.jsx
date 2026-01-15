import React from "react";
import NestedCheckBox from "./components/01.nested checkbox/NestedCheckBox";
import NestedComments from "./components/02.nested comments/NestedComments";
import NestedDropdown from "./components/04. nested dropdown/NestedDropdown";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <NestedCheckBox /> */}
      {/* <NestedComments /> */}
      <NestedDropdown />
    </div>
  );
};

export default App;
