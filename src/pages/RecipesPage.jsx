// # IMPORT DEPENDENCES

// # IMPORT HOOKS
import useRequest from "../hooks/useRequest";

// # IMPORT COMPONENTS
import CardRecipes from "../components/CardRecipes";

export default function RecipesPage() {
  const { recipes } = useRequest();
  console.log(recipes);
  return (
    <div className="container">
      <div className="row">
        {recipes.map((r) => (
          <CardRecipes key={r.id} title={r.name} image={r.image} />
        ))}
      </div>
    </div>
  );
}
