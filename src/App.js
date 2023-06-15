import Directory from "./directory/Directory_component";

const App = () => {
  const items= [
    {
      item: 'HATS',
      id: 'HATS',
      img: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      item: 'JACKETS',
      id: 'JACKETS',
      img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id="hats',
    
    },
    {
      item: 'SNEAKERS',
      id: 'SNEAKERS',
      img: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id="hats',    
    },
    {
      item: 'WOMENS',
      id: 'WOMENS',
      img: 'https://images.pexels.com/photos/17065322/pexels-photo-17065322/free-photo-of-young-brunette-standing-by-the-window-in-an-abandoned-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id="hats',
    },
    {
      item: 'MENS',
      id: 'MENS',
      img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" id="hats',
    }
  ];
  return (
    <Directory items={items} />
  );
}

export default App;
