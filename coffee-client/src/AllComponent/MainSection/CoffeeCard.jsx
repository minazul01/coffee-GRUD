import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ one, coffee, setCoffee }) => {
  const { image, details, name, teste, chef, _id } = one;
 
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-server-navy.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
           
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffee.filter((cof) => cof._id !== id);
              setCoffee(remaining);
           
            }
          });
      }
    });
  };

  return (
    <div className="w-full md:w-[80%] overflow-hidden flex items-center justify-center flex-col pt-12 p-6 bg-[#0BAF9A] rounded-xl">
      <h4 className="text-center text-[1.2rem] font-medium text-white">
        {details}
      </h4>
      <p className="text-[1rem] text-center text-[#FFFFFF]">
        coffee name: {name}
      </p>
      <p className="text-[1rem] text-center text-[#FFFFFF]">
        chef name: {chef}
      </p>
      <p className="text-[1rem] text-center text-[#FFFFFF] my-3">
        teste: {teste}
      </p>

      <img alt="product/image" src={image} className="w-[400px] mx-auto" />

      <div>
        <div className="join join-horizontal py-6 gap-5">
          <Link to={`/updatecoffee/${_id}`}>
            <button className="btn join-item">Edit</button>
          </Link>
          <button className="btn join-item">View</button>
          <button onClick={() => handleDelete(_id)} className="btn join-item">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
