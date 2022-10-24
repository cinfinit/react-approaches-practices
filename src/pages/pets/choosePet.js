import { useState } from 'react';
import useRequest  from '../../hooks/useRequest';
import { Link } from 'react-router-dom';

const style = {
    position:"absolute",
    top: "50%",
    left:"50%",
    width : "400px",
    height: "300px",
    marginLeft:"-100px",
    marginTop:"-100px"
}
const flex ={
    display: 'flex',
    justifyContent: 'space-between'
};

function ChoosePet() {
    const { data, error, loading} = useRequest('https://dog.ceo/api/breeds/list/all'); //use customHook to retrieve data
    const [breed, setBreed] = useState("akita");
    const dogs = !loading && !error ? getBreeds():[] //Call only if loaded and no error
    return (
        <div style= {style} >
            { loading ? 
            (
            <div> Loading...</div>) :
            <div style={{display:'flex',flexDirection:'column',  rowGap: '1em'}}>
                <div style = {flex}>
                    <label htmlFor="dogs">Choose a breed:</label>
                    <select name="dogs" id="dogs" value={breed} onChange= {(evt) => setBreed(evt.target.value)}>
                        {dogs.map(breed => ( <option key={breed} value={breed}>{breed}</option>))}
                    </select>
                </div> 
                <Link to="/pets/view" state={{breed:breed}}> {/* Pass breed data to link to be used by other component */}
                    <button>View Pet</button>
                </Link>
            </div>}
        </div>
    );
    
    /**
     * Returns all dog breeds by processing the response
     * @returns String[]
     */
    function getBreeds() {
        const dogs = Object.keys(data.message).filter(dog => data.message[dog].length <= 0);
        const subbreed = Object.keys(data.message).filter(dog => data.message[dog].length > 0);
        subbreed.forEach(b => data.message[b].forEach(sb => dogs.push(b + "/" + sb)));
        return dogs;
    }
}



export default ChoosePet;
