const container = document.getElementById("container");
document.querySelector("#request-btn").addEventListener("click", getData);

async function getData() {
  try {
    // conect
    const url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url);
    const data = await response.json();
    const img = document.createElement("img");
    container.innerHTML = "";
    img.src = data.message;
    container.appendChild(img);
    // error handling
  } catch (err) {
    console.log(err);
  }
}

getData();
