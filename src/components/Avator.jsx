export default function ({ person }) {
  return (
    <div>
      <img src={person?.imgSrc} alt={person.name} height={person.size} />
    </div>
  );
}
