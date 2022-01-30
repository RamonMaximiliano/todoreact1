//1 way to import an image, create a variable and use method "Require" to bring it
const xbutton = require("./delete.png")
const Item = function (props) {
    return (
        <div className="item">
            <p>
                {props.itemData.itemValue}
            </p>
                {/* Then the variable image can be used */}  
          <img src={xbutton} alt="x button" className="xImage"></img>
        </div>

    );
}
export default Item