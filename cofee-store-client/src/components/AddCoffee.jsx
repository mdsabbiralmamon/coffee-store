import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const formData = event.target;
        const name = formData.name.value;
        const chef = formData.chef.value;
        const supplier = formData.supplier.value;
        const taster = formData.taste.value;
        const category = formData.category.value;
        const details = formData.details.value;
        const photoUrl = formData.photoUrl.value;

        const newCoffee = {name, chef, supplier, taster, category, details, photoUrl};
        console.log(newCoffee);

        // send data to server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
       .then(res => res.json())
       .then(data => {
        if(data.insertedId){
            Swal.fire({
                title: 'success!',
                text: 'Click OK to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
        }
       });

    }
  return (
    <div>
      <form onSubmit={handleAddCoffee}>
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
            className="input input-bordered"
            required
          />
        </div>
        {/* submit button */}
        <div className="form-control my-8">
          <button type="submit" className="btn btn-primary">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
