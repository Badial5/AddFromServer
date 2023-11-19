import React, { useEffect, useState } from 'react'
import userService, { User } from '../services/userService'
import { CanceledError } from '../services/api-client'

const useUsers = () => {

    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)
  
    // useEffect(() => {
    //   const controller = new AbortController()
  
    //   const fetchUsers = async () => {
  
    //     try {
    //       const res = axios.get<User[]>("https://jsonplaceholder.typicode.com/users", )
    //     setUsers(res.data)
    //     }
  
    //     catch (err) {
    //       setError((err as AxiosError).message)
    //     }
        
      
  
    //   }
     
    // },[])
  
    useEffect(() => {
     
  
      setLoading(true)
  
      const {request, cancel} = userService.getAll<User>() 
       request.then((res) => { 
        setUsers(res.data)
        setLoading(false)
       })
      .catch((err) => { 
        if(err instanceof CanceledError ) return
        setError(err.message) 
        setLoading(false)
      } )
  
  
        //does not work with strictmode turned on
        // .finally(() => {
        //   setLoading(false)
        // })
  
      return () => cancel()
    }, [])

    return {users, error, isLoading, setError, setUsers}
}

export default useUsers
