import "./categories.styles.scss"
import CategoryItem from "./Components/CategoryItem/CategoryItem.component";

const App = () => {

  //each sub post
  const categories = [
    {id: 1, title: "Photos", imageUrl: "https://img1.wsimg.com/isteam/ip/66f773a2-5301-4857-93f7-d1bb6dd3ed29/03c77df7-c0bc-4a21-ad54-4c7282770abc.JPG/:/rs=w:1280"},
    {id: 2, title: "Photos", imageUrl: "https://img1.wsimg.com/isteam/ip/66f773a2-5301-4857-93f7-d1bb6dd3ed29/e67997e9-6949-42a0-99e7-87a889850aa6.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:3840,m"},
    {id: 3, title: "Photos", imageUrl: "https://img1.wsimg.com/isteam/ip/66f773a2-5301-4857-93f7-d1bb6dd3ed29/AlyssaMontana-9893%20online.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:3840,m"},
    {id: 4, title: "Photos", imageUrl: "https://img1.wsimg.com/isteam/ip/66f773a2-5301-4857-93f7-d1bb6dd3ed29/Online%20Mel%26JonWedding-0971.jpg/:/rs=w:3840,m"},
    {id: 5, title: "Photos", imageUrl: "https://img1.wsimg.com/isteam/ip/66f773a2-5301-4857-93f7-d1bb6dd3ed29/ec4e5be7-a7bc-40e4-a1e7-0ea45d8e7f48.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:3840,m"}
  ];


  return (
    <div className="categories-container">
      {/* map and destructure categories */}
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;