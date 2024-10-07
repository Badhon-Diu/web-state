import PropertyItem from "./PropertyItem";

const PropertiesSection = () => {
  const properties = [
    {
      image:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Modern Design villa",
      price: "$3000.00",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "S Life Villa",
      price: "$9000.00",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Charming Cottage",
      price: "$180,000.00",
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Luxury Penthouse",
      price: "$1,200,000.00",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Suburban Family Home",
      price: "$350,000.00",
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1670359036016-3fc5bde40db6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Elegant Townhouse",
      price: "$500,000.00",
      bedrooms: 3,
      bathrooms: 2,
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark  sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyItem
              key={index}
              image={property.image}
              title={property.title}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
