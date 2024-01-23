import { deleteOne, getAll } from "../api/product.api";
import { router } from "../utils/common";

const handleAdminPage = () => {
  const productList = document.getElementById("productList");

  getAll().then(({ data }) => {
    const contentHTML = data
      .map(
        (item) => `
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Price</td>
              <td>Image</td>
              <td>Desc</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${item.id}</td>
              <td>${item.title}</td>
              <td>${item.price}</td>
              <td><img src="${item.thumbnail}" /></td>
              <td>${item.description}</td>
              <td>
                <button class="btn btn-danger btnDelete" data-id="${
                  item.id
                }">Delete</button>${" "}
                <button class="btn btn-warning btnUpdate" data-id="${
                  item.id
                }">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
        `
      )
      .join("");
    productList.innerHTML = contentHTML;
    const btnDeletes = document.querySelectorAll(".btnDelete");
    const btnUpdates = document.querySelectorAll(".btnUpdate");

    btnDeletes.forEach((btnDelete) => {
      btnDelete.addEventListener("click", () => {
        const productId = btnDelete.getAttribute("data-id");
        deleteOne(productId).then(() => {
          console.log("Product deleted successfully");
          window.location.reload();
        });
      });
    });

    btnUpdates.forEach((btnUpdate) => {
      btnUpdate.addEventListener("click", () => {
        const productId = btnUpdate.getAttribute("data-id");
        router.navigate("/");
      });
    });
  });
};

export default handleAdminPage;
