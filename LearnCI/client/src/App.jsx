// import Card from './Card.jsx';

// const ComponentA = (props) => {
//   console.log(props);
//   const age = 10;
//   const handleClickBtn = () => {
//       console.log("Hi!");
//   }
  
//   return <div className="componentA">
//       <h1 style={{color:"red"}}>Hello MindX {age} tuổi!</h1>
//       <button onClick={handleClickBtn}>Click me</button>
//   </div>
// }

// function App() {
//   const age = 20;
//   return (
//     <div className="app">
//       <ComponentA name="CIJS98"/>
//       <h1 style={{color: "red", backgroundColor: "black"}}>Bạn là người {age >= 20 ? "trưởng thành" : "đang lớn"}</h1>
//       <Card name="Macbook" price={100000000} onClick={() => {
//         console.log("Hello");
//       }}>
//         <h1>Tôi là thẻ bên trong Card1</h1>
//       </Card>
//       <Card name="Thinkpad" price={500000} onClick={() => {
//         console.log("Hi");
//       }}>
//         <h1>Tôi là thẻ bên trong Card2</h1>
//       </Card>
//       <Card name="Lenovo" price={2500000} onClick={() => {
//         console.log("Xin chào");
//       }}>
//         <h1>Tôi là thẻ bên trong Card3</h1>
//       </Card>
//     </div>
//   )
// }

// export default App;

// ----------------------------------------------

// import { useState } from 'react';
// function App() {
//   // giá trị index 0 là giá trị hiện tại của state
//   // giá trị index 1 là hàm cập nhật giá trị
//   // khi sử dụng hàm cập nhật giá trị state -> component sẽ bắt buộc tính toán lại và có thể thay đổi giá trị
//   const [count, setCount] = useState(0);
//   // console.log(count[1]);
//   const handleIncre = () => {
//     // xử lý cập nhật state
//     // bên trong lời gọi hàm này, sẽ truyền 1 giá trị 'mới'
//     // khi nhận vào 1 giá trị mới -> react tiến hành so sánh giá trị cũ và giá trị mới xem có khác nhau hay không
//     // nếu khác thì tiến hành cập nhật re-render, nếu không thì thôi
//     setCount(count + 1);
//   };
//   return (
//     <div className="app">
//       <p>Đếm: {count}</p>
//       <button onClick={handleIncre}>Click</button>
//     </div>
//   );
// }
// export default App;

// ----------------------------------------------

// import { useState } from 'react';
// const App = () => {
//   const [person, setPerson] = useState({ name: 'MindX', age: 10 });
//   const increaseAge = () => {
//     person.age = person.age + 1;
//     console.log(person);
//     setPerson({...person});
//   };
//   return (
//     <div>
//       <p>
//         Hello! I'm {person.name}. I'm {person.age} years old.
//       </p>
//       <button onClick={increaseAge}>Increase age</button>
//     </div>
//   );
// };
// export default App;

// ----------------------------------------------

import { useState } from 'react';
const App = () => {
  // true: sáng, false: tối
  const [theme, setTheme] = useState(true);
  const handleSetTheme = () => {
    setTheme(!theme);
  };
  // mặc định giá trị cho theme sáng
  let styleTheme = {
    backgroundColor: 'white',
    color: 'black',
  };
  let currTheme = !theme ? 'Light' : 'Dark';
  if (!theme) {
    styleTheme = {
      backgroundColor: 'black',
      color: 'white',
    };
  }
  
  return (
    <div style={styleTheme}>
      <p>Hello! I'm MindX. 10 years old.</p>
      <button onClick={handleSetTheme}>Change theme {currTheme}</button>
    </div>
  );
};
export default App;