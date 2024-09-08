const destinations = [
  {
    img: "/imgs/pillar.jpg",
    title: "Malindi",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus libero voluptatibus, a, facere officiis non nihil accusantium odit cupiditate, vitae ratione tempore exercitationem earum nulla quae numquam consequuntur dolor ",
  },
  {
    img: "/imgs/flamingo.jpg",
    title: "Nakuru",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus libero voluptatibus, a, facere officiis non nihil accusantium odit cupiditate, vitae ratione tempore exercitationem earum nulla quae numquam consequuntur dolor ",
  },
  {
    img: "/imgs/fish.jpg",
    title: "Kisumu",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus libero voluptatibus, a, facere officiis non nihil accusantium odit cupiditate, vitae ratione tempore exercitationem earum nulla quae numquam consequuntur dolor ",
  },
  {
    img: "/imgs/hill.jpg",
    title: "Kakamega",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus libero voluptatibus, a, facere officiis non nihil accusantium odit cupiditate, vitae ratione tempore exercitationem earum nulla quae numquam consequuntur dolor ",
  },
  {
    img: "/imgs/beach.jpg",
    title: "Mombasa",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus libero voluptatibus, a, facere officiis non nihil accusantium odit cupiditate, vitae ratione tempore exercitationem earum nulla quae numquam consequuntur dolor ",
  },
];

function Popular() {
  return (
    <section className="bg-gray-300 p-4">
      <h1 className="text-center text-2xl lg:text-3xl font-bold py-10">
        Our Popular Destinations
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center space-x-5">
        {destinations.map((destination, index) => {
          return (
            <div
              key={index}
              className="p-2  bg-white rounded-lg overflow-hidden  shadow-lg mb-4"
            >
              <div className="flex-1 w-full h-[50%]">
                <img
                  src={destination.img}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-4 h-[150px] lg:h-full overflow-hidden">
                <h3 className="font-bold text-lg">{destination.title}</h3>
                <p className="text-[12px] text-gray-500">
                  {destination.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Popular;
