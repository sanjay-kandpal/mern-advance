import Category from "../components/Category_component";

const Directory = ({items}) =>{
    return(
    <main className="App">    
     {items.map((item,index) =>(
       <Category key={index} item={item} />
      ))}
    </main>  
    )
}

export default Directory;