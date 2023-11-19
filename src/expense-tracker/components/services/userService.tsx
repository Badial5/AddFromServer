import apiClient from "./api-client";
import create from "./http-services";

export interface User {
    id: number;
    name: string
  }

// class UserService {



//     getAllUsers() {
//         const controller = new AbortController()
        
//         const request = apiClient.get<User[]>("/users",{signal: controller.signal})

//         return {request, cancel: () => controller.abort()}
//     }


//     deleteUser(id: number)  {
//        return  apiClient.delete("/users/" + id)
//     }

//     createUser(User: User) {
//        return apiClient.post("/users", User)
//     }

//     updateUser(user: User) {
//         return apiClient.patch("/users/" + user.id, user)
//     }
// }



export default create("/users")