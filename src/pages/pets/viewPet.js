import { useLocation } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

function ViewPet(){
    const location = useLocation();
    const { breed } = location.state;
    const  {data,loading, error} = useRequest(`https://dog.ceo/api/breed/${breed}/images/random/3`);
    return(
        <>
            {!loading && !error && 
                data.message.map((url,index) => (<img height="300px" width= " 300px" alt={breed+":"+index} src={url} />))
            }
        </>
    );
};


export default ViewPet;