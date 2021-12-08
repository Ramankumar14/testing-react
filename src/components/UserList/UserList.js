import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./user-list-styles.css"
function UserList() {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchUser = async ()=>{
            const {data} = await axios.get("https://randomuser.me/api/?results=5")
            setUsers(data.results)
        }
        fetchUser()
    },[])
    return (
        <div className="userlist-container">
            <div>
                {users.map((user, index) => (
                    <div key={index} className="user-item" data-testid={`user-item-${index}`}>
                       <img alt={user.name.first} src={user.picture.large}/>
                        <div className="user-details">
                            <div className="user-item-name">
                                <h4>{user.name.first}</h4>
                            </div>
                            <p>{user.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    )
}

export default UserList
