const Category = ({item}) =>{
    // console.log(id);
    // console.log(img);
    return(
        <div className="Card">
        <div className="image-container">
         <img src={item.img} className="card-background" />
        </div>
        <div className="component">     
          <span className="inner-text">{item.id}</span>
          <span className="inner-text">Shop Now</span>
        </div>
      </div>
    )
}

export default Category;