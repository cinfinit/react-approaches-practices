import { useState } from 'react';
import useRequest  from '../../hooks/useRequest';


const style = {
    position:"absolute",
    top: "50%",
    left:"50%",
    width : "200px",
    height:"200px",
    marginLeft:"-100px",
    marginTop:"-100px"
}

function ChoosePet() {
    const { data, error, loading} = useRequest('https://dog.ceo/api/breeds/list/all');
    const [dog, setDog] = useState("akita");
    let dogs = [];
    if(!loading && !error){
        dogs = Object.keys(data.message).filter(dog => data.message[dog].length <= 0);
        const subbreed = Object.keys(data.message).filter(dog => data.message[dog].length > 0);
        subbreed.forEach(b => data.message[b].forEach(sb => dogs.push(sb +" "+ b)));
    }
    return (
        <div style= {style} >
            { loading ? 
            (
            <div> Loading...</div>) :
            <div>
                <label htmlFor="dogs">Choose a breed:</label>
                <select name="dogs" id="dogs" value={dog} onChange= {(evt) => setDog(evt.target.value)}>
                    {dogs.map(dog => ( <option key={dog} value={dog}>{dog}</option>))}
                </select>
            </div> }
        </div>
    );
}



export default ChoosePet;
