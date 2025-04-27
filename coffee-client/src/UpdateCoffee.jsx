import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { image, details, name, teste, _id, chef, supplier, category,  } = coffee;

  const handleForm = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const chef = form.chef.value;
      const supplier = form.supplier.value;
      const teste = form.teste.value;
      const category = form.category.value;
      const details = form.details.value;
      const image = form.image.value;
      const updateData = {name, chef, supplier, teste, category, details,image};
    
      // server site added
      Swal.fire({
           title: "Are you sure?",
           text: "You won't be able to revert this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, update it!",
         }).then((result) => {
           if (result.isConfirmed) {
             fetch(`http://localhost:5000/coffee/${_id}`, {
               method: "PUT",
               headers: {
                'content-type' : 'application/json'
               },
               body: JSON.stringify(updateData)
             })
               .then((res) => res.json())
               .then((data) => {
                 console.log(data);
                 if (data.matchedCount) {
                   Swal.fire({
                     title: "Updated!",
                     text: "Your coffee has been updated.",
                     icon: "success",
                   });
                 }
               });
           }
         });
    };
  return (
    <div>
      <h1>
        Update {name}
        {name}
      </h1>
      <div>
        <form onSubmit={handleForm} className="w-full mt-[50px]">
          <div className="flex flex-col sm:flex-row items-center gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
              <label className="relative">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                />
                <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                  Coffee Name
                </span>
              </label>
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
              <label className="relative">
                <input
                  type="chef"
                  name="chef"
                  defaultValue={chef}
                  className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                />
                <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                  Chef
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
              <label className="relative">
                <input
                  type="supplier"
                  name="supplier"
                  defaultValue={supplier}
                  className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                />
                <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                  Supplier
                </span>
              </label>
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
              <label className="relative">
                <input
                  type="teste"
                  name="teste"
                  defaultValue={teste}
                  className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                />
                <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                  Taste
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
              <label className="relative">
                <input
                  type="category"
                  name="category"
                  defaultValue={category}
                  className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                />
                <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                  Category
                </span>
              </label>
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
              <label className="relative">
                <input
                  type="details"
                  name="details"
                  defaultValue={details}
                  className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                />
                <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                  Details
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] w-full sm:w-[100%] my-5">
            <label className="relative">
              <input
                type="images"
                name="image"
                defaultValue={image}
                className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                image
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="py-2 px-6 border border-[#3B9DF8] text-[#3B9DF8] rounded font-[500] relative overflow-hidden z-10 mt-[50px] cursor-pointer"
          >
            Update coffee
          </button>
        </form>
      </div>
      <Link to="/"><button className="btn space-x-4 my-3">Home</button></Link>
    </div>
  );
};

export default UpdateCoffee;
