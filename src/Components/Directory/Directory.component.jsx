import "./directory.styles.scss"
import CategoryItem from "../CategoryItem/CategoryItem.component";

const Directory = ({categories}) => {
  return(
    <div className="directory-container">
      {/* map and destructure categories */}
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory;