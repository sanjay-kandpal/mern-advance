
const App = () => {
  const items= [
    {
      item: 'HATS',
      id: 'HATS',
      img: 'https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id="hats',
      btn: 'SHOP NOW'
    },
    {
      item: 'JACKETS',
      id: 'JACKETS',
      img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id="hats',
      btn: 'SHOP NOW'
    },
    {
      item: 'SNEAKERS',
      id: 'SNEAKERS',
      img: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id="hats',
      btn: 'SHOP NOW'
    },
    {
      item: 'WOMENS',
      id: 'WOMENS',
      img: 'https://images.pexels.com/photos/17065322/pexels-photo-17065322/free-photo-of-young-brunette-standing-by-the-window-in-an-abandoned-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id="hats',
      btn: 'SHOP NOW'
    },
    {
      item: 'MENS',
      id: 'MENS',
      img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id="hats',
      btn: 'SHOP NOW'
    }
  ];
  return (
    <main className="App">    
     {items.map((item,index) =>(
      <div className="Card">
        <div className="image-container">
         <img src={item.img} className="card-background" />
        </div>
        <div className="component" key={index}>     
          <span className="inner-text">{item.id}</span>
          <span className="inner-text">{item.btn}</span>
        </div>
      </div>
      ))}
    </main>  
  );
}

export default App;
