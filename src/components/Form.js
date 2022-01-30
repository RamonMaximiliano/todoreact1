import {useState} from "react";

const Form = function (props) {
    const [itemValue, setItemValue] = useState("")

    console.log(itemValue)
    
    const setItem = (event) => {
        setItemValue(event.target.value)
    }

/*setar o valor de itemValue, tem um jeito mais simples através da arrow function, 
Seria eliminar este código que esta acima:
const setItem = (event) => {
    setItemValue(event.target.value)
}

e no input:
<input className="input-item" type="text" placeholder="Type your item" value={itemValue} onChange={setItem} />

colocar o onChange como arrow function:
<input className="input-item" type="text" placeholder="Type your item" value={itemValue} onChange={(event) => setItemValue(event.target.value)} />
*/
    
    const myFunction = (event) => {
          event.preventDefault(); 
          console.log(itemValue)
          props.updateItemData({itemValue})
    }

    return (
        <form className="add-item"  onSubmit={myFunction}>
            <div className="form-content">
            <label className="item-label">Item name</label><br></br>
            <div className="input-button">
        
            <input className="input-item" type="text" placeholder="Type your item" value={itemValue} onChange={setItem} />
{/*             para poder usar o onSubmit function para o form, é necessário que o button ou input sejam (type="submit"), ou que seja um button sem type setado 
 */}            <button /* type="submit" */ className="add-button">Add</button>
            </div>
            </div>
        </form>
    );
} 
export default Form