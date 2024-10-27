function displayForm(show, hideOne, hideTwo, hideThree) {
	document.getElementsByClassName(show)[0].style.display = "block";
	document.getElementsByClassName(hideOne)[0].style.display = "none";
	document.getElementsByClassName(hideTwo)[0].style.display = "none";
	document.getElementsByClassName(hideThree)[0].style.display = "none";
}

function editName(e) {
	e.preventDefault();

	fetch("http://localhost:3002/update", {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({
			id: document.querySelector("#myForm input[name=id]").value,
			newName: document.querySelector("input[name=updatedName]").value,
		}),
	})
		.then((response) => response.json())
		.then(() => alert("Name Updated!"));

	document.getElementById("myForm").reset();
}
document.getElementById("myForm").addEventListener("submit", editName);

function deleteProducts(e) {
  e.preventDefault();
  let deleteBox = document.querySelector("#delete-product input[name=id]");
  let deleteID = deleteBox.value;

  if (isNaN(deleteID) || deleteID.length == 0) {
    deleteBox.style.backgroundColor = "pink";
    deleteBox.style.border = "red 2px solid";
    // alert("Please enter number values only");
  } else {
    deleteBox.style.backgroundColor = "";
    deleteBox.style.border = "";

    fetch("http://localhost:3002/remove-user", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: deleteID,
      }),
    }).then((response) => response.json());
    alert("User Deleted!");
    document.getElementById("delete-product").reset();
  }
}
document.getElementById("delete-product").addEventListener("submit", deleteProducts);

function listProducts() {
  const usersDiv = document.getElementById("data");
  fetch("http://localhost:3002/Products")
    .then((res) => res.json())
    .then((data) => {
      const usersDiv = document.getElementById("data");

      // Add a header for the list
      usersDiv.innerHTML = `<div class="row font-weight-bold mb-2">
            <div class="col-1">ID</div>
            <div class="col-2">Name </div>
            <div class="col-2">Description</div>
            <div class="col-2">Price</div>
						<div class="col-2">Monthly plan</div>
						<div class="col-1">url</div>
						<div class="col-2">img</div>
        </div>
        <hr>`;

      data.forEach((product) => {
          console.log(product);
        usersDiv.innerHTML += `
            <div class="row py-2 align-items-center border-bottom">
                <div class="col-1">${product.id}</div>
								<div class="col-2">${product.product_name}</div>
								<div class="col-2">${product.product_description}</div>
								<div class="col-2">${product.starting_price}</div>
                <div class="col-2">${product.price_range}</div>
                <div class="col-1">${product.product_link}</div>
                <div class="col-2">${product.product_img}</div>
            </div>`;
      });
    });
}
document.getElementById("list").addEventListener("click", listProducts);
