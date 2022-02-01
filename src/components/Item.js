//1 way to import an image, create a variable and use method "Require" to bring it
const xbutton = require("./delete.png")



function deleteItem(){
    let paragraph = document.getElementById("itemParagraph")
    console.log(paragraph)

    //tem que usar um método slice para pegar o elemento acima somente a parte de texto

    //adicionar esse texto abaixo para pegar a div e então adicionar uma classe na div que deixe ela vermelha para mostrar que o item foi deletado
    //let deleted = document.getElementById("")

}

//apagar o item cujo id seja o mesmo que esta sendo clicado
//A div já esta recebendo o valor do texto

const Item = function (props) {
    return (

        <div className="item" id={props.itemData.itemValue}>
            <p id="itemParagraph">
                {props.itemData.itemValue}
            </p>
                {/* Then the variable image can be used */}  
          <img src={xbutton} alt="x button" className="xImage" onClick={deleteItem}></img>
        </div>

    );
}
export default Item