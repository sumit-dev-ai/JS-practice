function highlightText(){
    let pElem=document.querySelector(".info");
    pElem.style.backgroundColor="yellow";     
    
}
function showItem(){
    const searchElem=document.getElementById("searchInput");
    let input=searchElem.value;
    let itemsElem=document.querySelectorAll("ul#itemList li");
    itemsElem.forEach((item)=> {
        item.style.display=item.innerText.toLowerCase().includes(input.toLowerCase())?"list-item":"none";

    } )  

}