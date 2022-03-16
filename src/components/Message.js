import { useEffect, useState } from "react"
import { privateRequest } from "../api/privateRequest"

const Message = () => {
    const [data, setData] = useState([])
    const [post, setPost] = useState('') 
    const [reload, setReload] = useState(false)
    const [visible, setVisible] = useState(false)

    const getMessage = async() => {
        const result = await privateRequest.get("/posts")
        setData(result.data)
        // console.log(result.data,"result")
    }

    const addMessage = async(values) => {
        const result = await privateRequest.post("/posts",{
            title: values,
        })
        setReload(!reload)
        console.log(result.data,"result")
    }

    const removeMessage = async(id) => {
        const result = await privateRequest.delete(`/posts/${id}`)
        setReload(!reload)
        console.log(result.data,"result")
    }

    const handleChange = (value) => {
        setPost(value);
        console.log(value);
    }

    const editData = () => {
        setVisible(!visible)
    }

    useEffect(() => {   
        getMessage()    
    }, [reload])

  return (
    <>
        <input type="text" name="title" onChange={(e)=>handleChange(e.target.value)} />
        <button onClick={()=>addMessage(post)}>ADD</button>

        {
            visible && <input type="text" name="title" onChange={(e)=>handleChange(e.target.value)} />
        }

        { data.length === 0?<h1>Loading...</h1>:
           data && data.filter((data,index)=>index<=5).
            map(item => {
                return (
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <span>{item.title}</span>
                    <button onClick={()=>removeMessage(item.id)}>Delete</button>
                    <button onClick={editData} >Edit</button>
                </div>
                )
            })
        }
    </>
  )
}

export default Message