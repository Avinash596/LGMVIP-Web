import {useState, useEffect} from "react";
export default function Apii() {
const [Dat, setDat] = useState();
useEffect (()=>{
    fetch("https://reqres.in/api/users?page=1")
    .then(response=> response.json())
    .then(data=>{
        setDat(data);
    })
}, [])
return(
    <div className="container">
    <h2>Details</h2>
    <h3>Page={Dat.page}&nbsp;
    Per_page={Dat.per_page}&nbsp;
    Total={Dat.total}&nbsp;
Total_pages={Dat.total_pages}</h3>
    <table className="table table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>Avatar</th>
            </tr>
        </thead>
        <tbody>
            {

               Dat.data.map(dat=>
                <tr>
                     <td>{dat.id}</td>
                     <td>{dat.email}</td>
                     <td>{dat.first_name}</td>
                     <td>{dat.last_name}</td>
                     <td>
                         <img src={dat.avatar} width="100" height="100" />
                     </td>
                </tr>)
                
            }
        </tbody>
        </table>
        <h1>{Dat.support.url}</h1>
        <h1>{Dat.support.text}</h1>
        </div>
)
            }
