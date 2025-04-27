const CoffeeCard = ({ one }) => {
  console.log(one);
  const { image, details } = one;

  return (
    <div className="w-full md:w-[80%] overflow-hidden flex items-center justify-center flex-col pt-12 p-6 bg-[#0BAF9A] rounded-xl">
      <h4 className="text-center text-[1.2rem] font-medium text-white">
        {details}
      </h4>
      <p className="text-[1rem] text-center text-[#FFFFFF]">farmer"s market</p>

      <button className="py-2 px-6 cursor-pointer rounded-md bg-white text-[#0BAF9A] font-[400] text-[1rem] mx-auto mb-5 mt-4">
        Shop Now
      </button>

      <img alt="product/image" src={image} className="w-[400px] mx-auto" />

      <div>
        <div className="join join-vertical lg:join-horizontal py-6 gap-5">
          <button className="btn join-item">Edit</button>
          <button className="btn join-item">Button</button>
          <button className="btn join-item">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
