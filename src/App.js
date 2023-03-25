// import React, {useState,useEffect} from 'react';
// import Loading from './Page/Loading';
// import User from './Page/User';
// const App = ()=> {
//   const [setUsers]=useState([]);
//   const [loading,setLoading] = useState(true);
//   const getusers = async ()=>{
//     try {
//       const response = await fetch('https://api.github.com/users');
//       setLoading(false);
//       setUsers(await response.json ());
//     }
//     catch (error){
//       setLoading(false);
// console.log ("my error is"+error);
//     }
//   }
//   useEffect(()=>{
//     getusers ();
//   },[]);

//   if(loading){
//     return <Loading/>
//   }
//   return (
//     <>
//    <User user={User}/>
    
//     </>
//   )

// }
// export default App;

