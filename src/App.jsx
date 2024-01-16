import { useState } from "react";

export function FamilyMember({ member: { name, relation }, children }) {
  const [somporko, setSomporko] = useState("");
  const [family, setFamily] = useState("");

  function handleFamilyClick() {
    const text = "Family";
    setFamily(text);
  }

  function handleClick(relation) {
    setSomporko(relation);
  }
  return (
    <div
      style={{ border: "1px solid red", padding: "10px", margin: "10px" }}
      onClick={() => handleFamilyClick()}
    >
      {family}
      <p
        style={{ border: "1px solid black", padding: "1px" }}
        onClick={(e) => {
          handleClick(relation);
          e.stopPropagation();
        }}
      >
        {children} <span>{somporko}</span>
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <FamilyMember member={{ name: "Shahadot", relation: "father" }}>
        Shahadot
      </FamilyMember>
      <FamilyMember member={{ name: "Monju", relation: "mother" }}>
        Monju
      </FamilyMember>
    </>
  );
}

export default App;
