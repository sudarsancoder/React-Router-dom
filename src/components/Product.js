import { useParams } from "react-router-dom";
// 1.useParams: You can use it to retrieve route parameters from the component
//  rendered by the matching route.

// 2.In our React app sometimes we want to access the parameters of the current
//route in this case useParams hook comes into action.
//The react-router-dom package has useParams hooks that let you access
//the parameters of the current route.
// Syntax:   useParams();

const Product = () => {
  const { id } = useParams();
  return <h1> Product id.no {id} </h1>;
};

export default Product;
