/*Profile img input */

const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

/*Read */
document.querySelector("#plus1").addEventListener("click", () => {
    document.querySelector("#allItems1").textContent = "";
  })
  
  document.querySelector("#userInput1").addEventListener("keydown", (event) => {
    if(event.key == "Enter")
      addItem1();
  });
  
  addItem1 = () => {
    const item = document.createElement("h2")
    item.textContent = "- " + document.querySelector("#userInput1").value;
  
    item.addEventListener("click", () => {
      if(item.style.textDecoration != "line-through")
        item.style.textDecoration = "line-through";
      else
        item.style.textDecoration = "none";
    })
  
    document.querySelector("#allItems1").appendChild(item);
    document.querySelector("#userInput1").value = "";
  }


/*lIST */
document.querySelector("#plus2").addEventListener("click", () => {
  document.querySelector("#allItems2").textContent = "";
})

document.querySelector("#userInput2").addEventListener("keydown", (event) => {
  if(event.key == "Enter")
    addItem();
});

addItem = () => {
  const item = document.createElement("h2")
  item.textContent = "- " + document.querySelector("#userInput2").value;

  item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through")
      item.style.textDecoration = "line-through";
    else
      item.style.textDecoration = "none";
  })

  document.querySelector("#allItems2").appendChild(item);
  document.querySelector("#userInput2").value = "";
}

/*Suggest */
document.querySelector("#plus3").addEventListener("click", () => {
  document.querySelector("#allItems3").textContent = "";
})

document.querySelector("#userInput3").addEventListener("keydown", (event) => {
  if(event.key == "Enter")
    addItem3();
});

addItem3 = () => {
  const item = document.createElement("h2")
  item.textContent = "- " + document.querySelector("#userInput3").value;

  item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through")
      item.style.textDecoration = "line-through";
    else
      item.style.textDecoration = "none";
  })

  document.querySelector("#allItems3").appendChild(item);
  document.querySelector("#userInput3").value = "";
}