import { useDispatch } from "react-redux"
import { useState } from "react";
import { addUser } from "../Redux/userSlice";

const InputData = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()


    const cocreta = async (url) => {
        try {
          const response = await fetch(url)
          const data = await response.json()
          console.log(data.length)
          return data.length
    
        } catch (error) {
          
        }
      }
    
      const handleFetchData = (event) => {
        event.preventDefault()
        fetch("https://api.github.com/users/" + input)
        .then(res => res.json())
        .then(async data => {
          const currentFolowers = await cocreta(data.followers_url)
          const currentRepositories = await cocreta(data.repos_url)
          
          const newData = {
            ...data,
            currentFolowers,
            currentRepositories
          }
    
          dispatch(addUser(newData))
        })
        
        setInput("")
      }

      return (
        <div className="form">
            <form onSubmit={handleFetchData}>
                <input 
                    type="text"
                    placeholder="Introduce usuario"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
      )
    

}

export default InputData;