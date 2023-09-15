import { Button, Card, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RecipeListItem = ({ recipe }) => {
  return (
    <Card>
      <img src={recipe.image_url} alt="thumbnail" style={{ height: 200 }} />
      <Card.Content>
        <Popup
          trigger={
            <div
              className="recipe-title"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {recipe.title}
            </div>
          }
          content={recipe.title}
          position="top center"
          inverted
        />
        <Card.Description>
          <h4>{recipe.publisher}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button
          as={Link}
          to={`/recipes/${recipe.recipe_id}`}
          content="Details"
          color="blue"
          size="tiny"
        />
        <Button
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
          size="tiny"
        />
      </Card.Content>
    </Card>
  );
};

export default RecipeListItem;
