import React from 'react';
import { Heart, Users, Leaf, Award, Coffee, Package, Truck, ShoppingBag } from 'lucide-react';

const AboutSection: React.FC = () => {
  // Services Data with background images
  const servicesData = [
    {
      title: 'Coffee Roasting',
      description: 'Expert roasting techniques bringing out the unique characteristics and rich flavors of every bean.',
      image: `${process.env.PUBLIC_URL}/assets/images/mission/roasting.avif`
    },
    {
      title: 'Fast Delivery',
      description: 'Reliable nationwide shipping ensuring your fresh coffee reaches you quickly and safely.',
      image: `${process.env.PUBLIC_URL}/assets/images/mission/delivery.avif`
    },
    {
      title: 'Bulk Wholesale',
      description: 'Flexible wholesale solutions with competitive pricing for businesses and retailers.',
      image: `${process.env.PUBLIC_URL}/assets/images/products/coffeebeans2.jpeg`
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PART 1 – OUR STORY (Top Section) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 leading-tight">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-amber-500"></div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Born from a passion to connect cultures through exceptional brews, we journey across continents to source the finest beans and leaves.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every cup celebrates the dedication of farmers, the richness of African heritage, and our commitment to quality that transcends borders.
            </p>
            <div className="flex items-center space-x-3 pt-4">
              <Heart className="w-8 h-8 text-amber-500" />
              <span className="text-lg font-semibold text-amber-900">
                Crafted with Purpose, Served with Pride
              </span>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-60 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/mission/woman.webp`}
              alt="Coffee farm landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* PART 2 – STORY CONTINUATION (Reversed Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Smaller Image */}
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/mission/coffecup.avif`}
              alt="Roasted coffee beans"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent"></div>
          </div>

          {/* Right Side - Supporting Text */}
          <div className="space-y-5 order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-amber-900">
              From Farm to Cup
            </h3>
            <div className="w-16 h-1 bg-amber-500"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our processing methods honor traditional techniques while embracing modern precision. Each bean is carefully roasted to unlock its unique character and flavor profile.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe quality isn't just about the final product—it's about respecting every step of the journey, from seed to sip.
            </p>
          </div>
        </div>

        {/* PART 3 – OUR SERVICES (Horizontal Cards) */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group relative h-40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h4>
                  <p className="text-amber-50 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;