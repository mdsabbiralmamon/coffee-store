import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffeeDetails = useLoaderData();

  const {_id, name, chef, supplier, taster, category, details, photoUrl } =
    coffeeDetails;

  console.log(coffeeDetails);

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const formData = event.target;
    const name = formData.name.value;
    const chef = formData.chef.value;
    const supplier = formData.supplier.value;
    const taster = formData.taste.value;
    const category = formData.category.value;
    const details = formData.details.value;
    const photoUrl = formData.photoUrl.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taster,
      category,
      details,
      photoUrl,
    };
    console.log(newCoffee);

    // send data to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Click OK to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="container mx-auto">
      <h2>update : {name}</h2>

      <div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-8">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter a coffee name"
                defaultValue={name}
                className="input input-bordered"
                required
              />
            </div>
            {/* Chef */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter a coffee chef"
                defaultValue={chef}
                className="input input-bordered"
                required
              />
            </div>
            {/* supplier */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter a coffee supplier"
                defaultValue={supplier}
                className="input input-bordered"
                required
              />
            </div>
            {/* taste */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter a coffee taste"
                defaultValue={taster}
                className="input input-bordered"
                required
              />
            </div>
            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter a coffee Category"
                defaultValue={category}
                className="input input-bordered"
                required
              />
            </div>
            {/* Details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter a coffee Details"
                defaultValue={details}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter a Photo URL"
              defaultValue={photoUrl}
              className="input input-bordered"
              required
            />
          </div>
          {/* submit button */}
          <div className="form-control my-8">
            <button type="submit" className="btn btn-primary">
              Update Coffee Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
