const Form = function () {
    return (
        <div className="add-item">
            <div className="form-content">
            <label className="item-label">Item name</label><br></br>
            <div className="input-button">
        
            <input className="input-item" type="text" placeholder="Type your item"/>
            <button type="button" className="add-button">Add</button>
            </div>
            </div>
        </div>
    );
} 
export default Form