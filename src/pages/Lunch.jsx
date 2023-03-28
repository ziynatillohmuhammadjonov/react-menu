import useFetch from "../hooks/useFetch";

import Card from "../components/Card";
function Lunch() {
  const { data, error, isPading } = useFetch(
    "https://ziynatillohmuhammadjonov.github.io/menu-api/db.json",
    "lunch"
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

export default Lunch;
