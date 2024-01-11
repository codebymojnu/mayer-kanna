import Creditor from "./Creditor";

export default function AllCreditor() {
  const person = [
    {
      name: "Ariful",
      money: 4000,
      imgSrc:
        "https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/348620113_130400866673733_8230452310887886455_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hRnU8B9oFDoAX9UXOMT&_nc_ht=scontent.fdac90-1.fna&oh=00_AfCJYBBjkN_WUEopreVNMztcu0bWwOMRS74Z02WXDZFv-A&oe=65A395A0",
      size: 10,
    },
    {
      name: "Habibullah",
      money: 500,
      imgSrc:
        "https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/348620113_130400866673733_8230452310887886455_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hRnU8B9oFDoAX9UXOMT&_nc_ht=scontent.fdac90-1.fna&oh=00_AfCJYBBjkN_WUEopreVNMztcu0bWwOMRS74Z02WXDZFv-A&oe=65A395A0",
      size: 20,
    },
    {
      name: "Khalid",
      money: 600,
      imgSrc:
        "https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/348620113_130400866673733_8230452310887886455_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hRnU8B9oFDoAX9UXOMT&_nc_ht=scontent.fdac90-1.fna&oh=00_AfCJYBBjkN_WUEopreVNMztcu0bWwOMRS74Z02WXDZFv-A&oe=65A395A0",
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
