import axios from 'axios';                                                  
import { useEffect, useState } from 'react';
import UserDetail from './UserDetail';

const UserList = () => {
    const [users, setUsers] = useState([])                                  

    useEffect(() => {                                                       
        const fetchData = async () => {                                    
            axios
            .get('https://jsonplaceholder.typicode.com/users')              
            .then((response) => {setUsers(response.data)})                  
            .catch((error) => {console.error(error)})                       
        }

        fetchData()                                                         
    }, [])                                                                  

    return (
        <div className='d-flex-justify-content-center' style={{width: '1200px'}}>
            <h1 className='bg-info bg-gradient d-flex
             justify-content-center rounded-top-4 mt-4 mb-0 py-2'>Listes des utilisateur :</h1>
            <ul className='bg-info-subtle d-flex 
            flex-wrap justify-content-center rounded-bottom-4 mb-4 list-unstyled'>
                {users.map((user) => (                                                                                              
                    <li key={user.id}>
                        <UserDetail user={user}/>                                                                                   
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList