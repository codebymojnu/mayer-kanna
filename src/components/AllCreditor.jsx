import Creditor from "./Creditor";

export default function AllCreditor() {
  const person = [
    {
      name: "Ariful",
      money: 4000,
      imgSrc: "",
      size: 10,
    },
    {
      name: "Habibullah",
      money: 500,
      imgSrc: "",
      size: 20,
    },
    {
      name: "Khalid",
      money: 600,
      imgSrc: "",
      size: 30,
    },
  ];

  return (
    <>
      <Creditor person={person[0]} />
      <Creditor person={person[1]} />
      <Creditor person={person[2]} />
    </>
  );
}
