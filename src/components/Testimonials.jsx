const testimonials = [
  {
    img: "/imgs/p1.jpg",
    title: "John Doe",
    description:
      "Lorem ipsum, dolor siodit cupiditate, vitae ratione tempore exercitationem earum nulla quae numquam consequuntur dolor ",
  },
  {
    img: "/imgs/p2.jpg",
    title: "Alice Brown",
    description:
      "Lorem ipsum, dolor sit l accusantium odit cupiditate, vitae ratione tempore exercitationem earum nulla quae numquam consequuntur dolor ",
  },
  {
    img: "/imgs/p3.jpg",
    title: "Ice Tea",
    description:
      "Lorem ipsum, dolor vitae ratione tempore exercitationem earum nulla quae numquam consequuntur dolor ",
  },
  {
    img: "/imgs/p4.jpg",
    title: "Will Black",
    description: "Lorem ipsum, dolor sionsequuntur dolor ",
  },
];

function Testimonials() {
  return (
    <section className="bg-white px-4 pt-10 pb-12">
      <h1 className="text-center text-2xl lg:text-3xl font-bold py-12">
        What our clients say
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center space-x-5 space-y-5">
        {testimonials.map((testimonial, index) => {
          return (
            <div
              key={index}
              className="p-2 bg-gray-200 rounded-lg shadow-lg mb-4"
            >
              <div className="w-full flex items-center justify-center">
                <div className="w-[80px] h-[80px]">
                  <img
                    src={testimonial.img}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="font-bold text-xl mt-2">{testimonial.title}</h3>
              <p className="text-sm text-gray-700 font-semibold">
                "{testimonial.description}"
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
