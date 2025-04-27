import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const AddCoffee = () => {
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
    const inputData = {name, chef, supplier, teste, category, details,image};
    console.log(inputData)
    // server site added
    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(inputData)
    })  
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Added',
          text: 'coffee data added',
          icon: 'success',
          confirmButtonText: 'okay'
        })
      }
    })
  };
  return (
    <div>
      <section className="w-full">
        {/* title */}
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-[2rem] font-bold text-[#3B9DF8] leading-[36px]">
            Add coffee
          </h1>
        </div>

        {/* form area */}
        <form onSubmit={handleForm} className="w-full mt-[50px]">
          <div className="flex flex-col sm:flex-row items-center gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
              <label className="relative">
                <input
                  type="text"
                  name="name"
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
            Added
          </button>
        </form>
      </section>
      <Link to="/updatecoffee">
        <button className="px-6 py-2 border border-[#3B9DF8] bg-primary text-[#fff] hover:bg-secondary hover:text-[#3B9DF8] transition duration-300 rounded my-10 cursor-pointer">
         move to update coffee
        </button>
      </Link>
    </div>
  );
};

export default AddCoffee;
