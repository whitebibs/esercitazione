import { Constants } from "../../constants";
import  useAxios from "../../hooks/useAxios";
const {BASE_API_URL} = Constants;

export const Posts = () => {
    const [data,error,loading,updateData] = useAxios(`${BASE_API_URL}/posts`);
    console.log(data)
    if(error){
        return <h3>Error: {error.message}</h3>
    }
    if(loading){
        return <h3>Loading...</h3>
    }

    const postsList = data.map((post)=>(
      
     <li key={post.id} className=" border-solid border-2 border-blue-300 p-3 m-2">
        <h4 className="mb-1 text-lg text-blue-600">{post.title}</h4>
        <p className="text-sm">{post.body}</p>
      </li>  
    ))
 
    return(
        <>
        <h1>Posts</h1>
        {loading
        ?<h3>Loading...</h3>
        :<>
        <ul>
        {postsList}
        </ul>
        </>}
            
        </>
        
    )
}

//ottenere l'elenco dei post dal server con il link mandato e messo dentro const import. 
//renderizzare una tabella che ci fa vedere i post impaginandoli a gruppi di 10. ogni pagina 10 post
//nella tabella una colonna con la possibilità di eliminare uno del post 