import Card from "../components/Card";

import useFetch from "../hooks/useFetch";

function AllMenu() {
  const { data, error, isPending } = useFetch(
    "https://ziynatillohmuhammadjonov.github.io/menu-api/db.json"
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

export default AllMenu;
