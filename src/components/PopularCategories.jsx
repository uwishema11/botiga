import './../styles/HomeView.css'

export default function CategoriesCard({pic, productName}) {
  return (
    <div className="categories-card">
        <img src= {pic} alt= {productName} className='products-images'></img>
        <h2 className='products-heading'>{productName}</h2>
    </div>
  )
}
