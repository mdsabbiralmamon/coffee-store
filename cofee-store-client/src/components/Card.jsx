import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, details, photoUrl } = coffee; //, supplier, taster, category
  // console.log(photoUrl);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE",
            
          })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deleteCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
                const remaining = coffees.filter(coffeesToCheck => coffeesToCheck._id !== _id);
                setCoffees(remaining);

            })
        }
      });
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photoUrl} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{chef}</p>
          <p>{details}</p>
        </div>
        <div className="join join-vertical space-y-4 m-4">
          <button className="btn join-item">View</button>
          <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
          <button className="btn join-item bg-red-500" onClick={ () => handleDelete(_id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func
};

export default Card;
