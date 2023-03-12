import { Constants } from "../../constants";
import  useAxios from "../../hooks/useAxios";
const {BASE_API_URL} = Constants;

export const Posts = () => {
    const [data,error,loading,updateData] = useAxios("https://jsonplaceholder.typicode.com/posts");
    if(error){
        return <h3>Error: {error.message}</h3>
    }
    if(loading){
        return <h3>Loading...</h3>
    }
 
    return(
        <>
        <h1>Posts</h1>
        {loading
        ?<h3>Loading...</h3>
        :<h1>I dati ci sono</h1>}
        </>
        
    )
}

//ottenere l'elenco dei post dal server con il link mandato e messo dentro const import. 
//renderizzare una tabella che ci fa vedere i post impaginandoli a gruppi di 10. ogni pagina 10 post
//nella tabella una colonna con la possibilità di eliminare uno del post 