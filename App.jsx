export default function SmashByAnas() {
  const customerCredentials = {
    email: 'customer@smashbyanas.com',
    password: 'Customer@123',
  };

  const ownerCredentials = {
    email: 'owner@smashbyanas.com',
    password: 'Owner@123',
  };

  const liveOrders = [
    {
      id: '#SB101',
      customer: 'Rahul',
      item: 'Double Cheese Burger',
      status: 'Preparing',
    },
    {
      id: '#SB102',
      customer: 'Aman',
      item: 'Peri Peri Fries',
      status: 'Out for Delivery',
    },
  ];

  const menu = [
    {
      category: 'Smash Burgers',
      items: [
        'Classic Smash Burger',
        'Double Cheese Burger',
        'Spicy Chicken Burger',
        'BBQ Loaded Burger',
      ],
    },
    {
      category: 'Fries',
      items: [
        'Peri Peri Fries',
        'Cheese Loaded Fries',
        'Masala Fries',
        'Crispy Potato Wedges',
      ],
    },
    {
      category: 'Mocktails',
      items: [
        'Blue Lagoon',
        'Mint Mojito',
        'Watermelon Blast',
        'Strawberry Fizz',
      ],
    },
  ];

  const features = [
    'Online Ordering Backend',
    'UPI & Razorpay Payments',
    'Admin Dashboard',
    'Live Order Tracking',
    'WhatsApp Ordering',
    'Mobile App Ready',
    'Cloud Database Setup',
    'AI Food Recommendation',
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-yellow-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[5px] text-red-400 mb-4 text-sm">
              Burgers • Fries • Mocktails
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Smash <span className="text-red-500">by Anas</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Hot and juicy smash burgers, crispy fries, and refreshing mocktails delivered fast to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-xl">
                Order Now
              </button>

              <button className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-bold text-lg">
                View Menu
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
              alt="Burger"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {['Fast Online Delivery', 'Fresh Ingredients', 'Premium Taste'].map((feature) => (
          <div
            key={feature}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur"
          >
            <h3 className="text-2xl font-bold mb-3">{feature}</h3>
            <p className="text-gray-400">
              Experience delicious fast food with top quality and trendy flavors.
            </p>
          </div>
        ))}
      </section>

      {/* Menu Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Our Trending Menu
          </h2>
          <p className="text-gray-400 text-lg">
            Freshly prepared for burger lovers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menu.map((section) => (
            <div
              key={section.category}
              className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:scale-105 transition duration-300"
            >
              <h3 className="text-3xl font-black text-red-400 mb-6">
                {section.category}
              </h3>

              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex justify-between items-center bg-black/30 rounded-2xl px-4 py-3"
                  >
                    <span>{item}</span>
                    <button className="bg-red-500 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-600 transition">
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-[40px] p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready To Order?
          </h2>

          <p className="text-lg md:text-xl mb-8 text-white/90">
            Order your favorite burgers and fries online in just one click.
          </p>

          <button className="bg-black hover:bg-gray-900 transition text-white px-10 py-5 rounded-2xl font-black text-lg shadow-lg">
            Start Ordering
          </button>
        </div>
      </section>

      {/* Login Panels */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Login Portals
          </h2>
          <p className="text-gray-400 text-lg">
            Separate dashboards for customers and restaurant owner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-red-400 mb-6">
              Customer Login
            </h3>

            <div className="space-y-5">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="password"
                placeholder="Enter Password"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <button className="w-full bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl font-bold text-lg">
                Login as Customer
              </button>

              <div className="bg-black/30 rounded-2xl p-4 text-sm text-gray-300">
                <p>Email: {customerCredentials.email}</p>
                <p>Password: {customerCredentials.password}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-yellow-400 mb-6">
              Owner Dashboard Login
            </h3>

            <div className="space-y-5">
              <input
                type="email"
                placeholder="Owner Email"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="password"
                placeholder="Owner Password"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-2xl font-bold text-black text-lg">
                Login as Owner
              </button>

              <div className="bg-black/30 rounded-2xl p-4 text-sm text-gray-300">
                <p>Email: {ownerCredentials.email}</p>
                <p>Password: {ownerCredentials.password}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Smart Restaurant System
          </h2>

          <p className="text-gray-400 text-lg">
            Modern online food delivery features for customers and admin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-3 text-red-400">
                {feature}
              </h3>

              <p className="text-gray-400 text-sm">
                Premium smart feature integrated for modern restaurant management.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Order Tracking */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
            <div>
              <h2 className="text-4xl font-black mb-2">
                Live Orders Dashboard
              </h2>

              <p className="text-gray-400">
                Real-time customer order tracking.
              </p>
            </div>

            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl font-bold">
              WhatsApp Orders
            </button>
          </div>

          <div className="space-y-5">
            {liveOrders.map((order) => (
              <div
                key={order.id}
                className="bg-black/40 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold">{order.id}</h3>
                  <p className="text-gray-400">
                    {order.customer} ordered {order.item}
                  </p>
                </div>

                <span className="bg-red-500 px-5 py-2 rounded-xl font-bold w-fit">
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Recommendation Section */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-[40px] p-10 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            AI Food Recommendations
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Smart AI suggests burgers, fries, and mocktails based on customer taste.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-black px-6 py-3 rounded-2xl font-bold hover:bg-gray-900 transition">
              Recommend Burger
            </button>

            <button className="bg-black px-6 py-3 rounded-2xl font-bold hover:bg-gray-900 transition">
              Recommend Mocktail
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        <p>© 2026 Smash by Anas — All Rights Reserved.</p>
      </footer>
    </div>
  );
}
