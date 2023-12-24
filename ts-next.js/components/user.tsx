import { FC } from "react";

type Shape = {
  name: string;
  age: number;
}

const User: FC<Shape> = ({ name, age }) => {
  return (
    <main>
       <h1>{name}</h1>
      <h1>{age}</h1>
    </main>
  )
}



// import { ReactNode } from "react";

// type User = { children: ReactNode }

// const User = ({ children }: User) => {
//   return (
//     <main>
//       {children}
//     </main>
//   )
// }



// type User = { 
//   name: string; 
//   age: number; 
// }
// interface User { 
//   name: string; 
//   age: number; 
// }

// const User = ({ name, age }: User) => {
//   return (
//     <main>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </main>
//   )
// }



// const User = (
//   { name, age, isDeveloper}
//   // props
//   : { name: string; age: number; isDeveloper: boolean }) => {
//   return (
//     <main>
//       {/* <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.isDeveloper}</h1> */}
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{isDeveloper}</h1>
//     </main>
//   );
// };

export default User;