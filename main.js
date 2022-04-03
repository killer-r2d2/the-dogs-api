const container = document.getElementById("container");
document.querySelector("#execute-request").addEventListener("click", getData);

async function getData() {
  try {
    const url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url);
    const data = await response.json();
    const img = document.createElement("img");
    container.innerHTML = "";
    img.src = data.message;
    container.appendChild(img);
  } catch (err) {
    console.log(err);
  }
}

getData();
