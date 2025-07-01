import MealItem from "@/component/MealItem";
import Error from "@/component/Error";
import useHttp from "@/hooks/useHttp";
const requestConfig = {};
export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  // const { isFetching, error, fetchedData: meals } = useFetch(fetchMeals, []);

  console.log(meals);

  if (isLoading) {
    return <p className="center">Fetching meals data...</p>;
  }

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <ul id="meals">
      <MealItem
        meals={meals}
        // isLoading={isLoading}
        // loadingText="Fetching meals data..."
        // fallbackText="No meals available."
      />
    </ul>
  );
}
