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
    const { data, error, loading} = useRequest('https://dog.ceo/api/breeds/list/all');
    const [breed, setBreed] = useState("akita");
    let dogs = [];
    if(!loading && !error){
        dogs = Object.keys(data.message).filter(dog => data.message[dog].length <= 0);
        const subbreed = Object.keys(data.message).filter(dog => data.message[dog].length > 0);
        subbreed.forEach(b => data.message[b].forEach(sb => dogs.push(b+"/"+sb)));
    }
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
                <Link to="/pets/view" state={{breed:breed}}>
                    <button>View Pet</button>
                </Link>
            </div>}
        </div>
    );
}



export default ChoosePet;
