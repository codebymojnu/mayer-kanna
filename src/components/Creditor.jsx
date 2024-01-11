import Avator from "./Avator";
import Card from "./Card";

export default function Creditor(props) {
  return (
    <div>
      <Card>
        <Avator {...props} />
        <ol>
          <li>
            {props.person.name}, money: {props.person.money}
          </li>
        </ol>
      </Card>
    </div>
  );
}
