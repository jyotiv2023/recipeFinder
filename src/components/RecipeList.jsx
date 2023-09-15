import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <Container>
      <Header content={`Recipe Lists for "${searchedQuery}"`} />
      <Grid columns={4} doubling>
        {recipes &&
          recipes.map((recipe) => (
            <Grid.Column
              style={{
                height: "450px",
                width: "300px",
              }}
              key={recipe.id} // Add a unique key when mapping elements
            >
              <RecipeListItem style={{ height: "450px" }} recipe={recipe} />
            </Grid.Column>
          ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
