import "./orded.css";
import { useSelector } from "react-redux";
export function Orded() {
  const Result = useSelector((state) => state);

  console.log(Result);
  return (
    <div className="orded_container">
      <strong className="orded_container_title">Récapitulatif de la commande</strong>
      <p className="orded_container-body">
        “Je bois mon café <span>{Result.how_drink.value ? Result.how_drink.value : '____'}</span> , avec un grain
        de type <span>{Result.type_coffee.value ?Result.type_coffee.value : '____'}</span>.{" "}
        <span>{Result.how_much_coffee.value ?Result.how_much_coffee.value: '____'}</span> moulus à la{" "}
        <span>{ Result.grind_coffe.value ? Result.grind_coffe.value :'____'}</span>, envoyés chaque{" "}
        <span>{  Result.delivery_coffee.value ? Result.delivery_coffee.value: '____'}</span>.”
      </p>
    </div>
  );
}
