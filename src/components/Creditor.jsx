import Avator from "./Avator";

export default function Creditor(props) {
  return (
    <div>
      <Avator {...props} />
      <ol>
        <li>
          {props.person.name}, money: {props.person.money}
        </li>
      </ol>
    </div>
  );
}
