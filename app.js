var itemList = []
	function getRandomItem(arr) {

    
    const randomIndex = Math.floor(Math.random() * arr.length);

    
    const item = arr[randomIndex];
    document.getElementById("result").innerHTML = item
    
    return item;
}


	function addItem() {
	
    var string1 = document.getElementById("text1").value;
    
    itemList.push(string1)
    
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(string1));
    ul.appendChild(li);
           




   

}