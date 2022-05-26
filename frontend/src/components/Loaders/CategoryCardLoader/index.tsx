import ContentLoader from "react-content-loader"
import { generateList } from "utils/list";

function CategoryCardLoader() {
  const loaderItems = generateList(4);

  return (
    <>
      {loaderItems.map(item => (
        <ContentLoader
          key={item}
          speed={1}
          width={300}
          height={150}
          viewBox="0 0 300 300"
          backgroundColor="#ecebeb"
          foregroundColor="#d6d2d2"
        >
          <rect x="6" y="4" rx="2" ry="2" width="300" height="150" />
        </ContentLoader>
      ))}
    </>
  )
}

export default CategoryCardLoader;

