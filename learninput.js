import { useEffect, useState } from "react";
function Ronak(){
  const [number,setnumber] = useState ('5');
 
  const [text,setText] = useState ('Ronak Patel');

  let [email,setemail] = useState ('rp1896617@gmail.com');
  const [password,setpassword] = useState('ronak045');
   
  const [Date,setDate] = useState('20-nov-2003')
  const ronak = useEffect(() => {
    
    setemail('santoki051@gmail.com')
    return () => {
    setnumber('45');    
    }
  }, [])
  
  return(
   <>
    <input type = "number" value ={number} /> <br/><br/>

    <input type = "text" value={text} /> <br/><br/><br/>
    <img src="https://cdn.pixabay.com/photo/2024/02/17/08/27/bird-8578905_640.jpg" height={400} width={400}/>
<br/><br/>
    <input type = "email" value={email} />
<br/><br/>
    <input type = "password" value={password} />
  
    <h1>hello! goood morning INDIA</h1>
    <h2>Radhe Radhe</h2>
    <img src="https://wallpaperaccess.com/full/7795599.jpg" height={200} width={200}/>
    <br/><br/>
    
    <p>Lord Krishna is perhaps the most charismatic avatar of god Vishnu, and he is one of the most popular among Hindu Gods and Goddesses. Not only are his stories fascinating and inspiring, but they are also at times relevant to human lives. #1. Shri Krishna was born as the eighth son of Devaki and Vasudeva in Rohini Nakshatra. </p>
    <input type="Date" value={Date}/>
    </>
    
  );
}
export default Ronak;    
