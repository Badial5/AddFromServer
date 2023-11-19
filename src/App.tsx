import React, { useEffect, useState } from 'react'
import  {AxiosError} from 'axios'
import  {CanceledError} from './expense-tracker/components/services/api-client';





import userService, { User } from './expense-tracker/components/services/userService';
import useUsers from './expense-tracker/components/hooks/useUsers';




const App = () => {


  const { users, error, isLoading, setUsers,setError } = useUsers()



  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id !== user.id))

    
     userService.delete(user.id).catch((err) => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }


  //creating 
  const addUser = () => {
    const originalUsers = [...users]
    const newUser = {id: 0, name: "Calvin"}
    setUsers([ newUser, ...users])

   
      userService.create(newUser).then(({data: savedUser}) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }

  const update = (user: User) => {
    const originalUsers = [...users]
    const updatedUser = {...user, name: user.name + "!"}

    setUsers(users.map(u => u.id === user.id ? updatedUser : u))

    
    userService.update(updatedUser).catch(err => {
      setError(err.message)
      setUsers(originalUsers)
    })

  }

  return (
    <div>
      { error && <p className="text-danger">
        {error}
      </p>} 

     <p> { isLoading &&  <div className="spinner-border"> </div>}
     </p>

      <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>

      <ul className='list-group' >
        {users.map(user => <li className='list-group-item d-flex justify-content-between' key={user.id}>{user.name}   
        
        <div>
        <button className="btn btn-outline-danger mx-1" onClick={() => deleteUser(user)}>Delete</button>
        
        <button className="btn btn-outline-secondary" onClick={() => update(user)}>Update</button>

        </div>

          </li>)} 

       
      </ul>
    </div>
  )
}

export default App
