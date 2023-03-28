import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function Breakfast() {
  const { data, error, isPading } = useFetch(
    "https://ziynatillohmuhammadjonov.github.io/menu-api/db.json",
    "breakfast"
  );
  return (
    <div className="section-center">
      {data &&
        data.map((item) => {
          return <Card item={item} />;
        })}
    </div>
  );
}

export default Breakfast;
