import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaRocket } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

export const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 dark:bg-gradient-to-r dark:from-emerald-600 dark:via-emerald-700 dark:to-emerald-800 min-h-screen flex flex-col justify-center px-6 overflow-x-hidden">
      <div className="">
        <Header />
      </div>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:max-w-7xl mx-auto py-32 space-y-10 lg:space-y-0" data-aos="fade-up">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-6xl font-extrabold text-white mb-4">
            Master Your Money with Pennyfy 💰
          </h1>
          <p className="text-xl text-white opacity-80 mb-6">
            Stay on top of your budget, track your spending, and unlock financial freedom with ease.
          </p>
          <div className="flex justify-center lg:justify-start gap-6">
            <Link to="/login">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                <FaSignInAlt /> Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                <FaUserPlus /> Sign Up
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Finance Management"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Key Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 text-center rounded-2xl" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-12">
          Features That Make Managing Your Money Easy
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[ 
            {
              icon: <FaRocket size={40} className="text-emerald-600 dark:text-emerald-400" />,
              title: "Track Your Spending",
              desc: "Get a real-time overview of your expenses and categorize them to stay on top of your budget.",
            },
            {
              icon: <FaRocket size={40} className="text-emerald-500 dark:text-emerald-300" />,
              title: "Budgeting Made Easy",
              desc: "Set budgets, track your goals, and see your progress with a few clicks.",
            },
            {
              icon: <FaRocket size={40} className="text-emerald-700 dark:text-emerald-500" />,
              title: "Financial Insights",
              desc: "Gain valuable insights into your financial habits and find ways to save more.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 group cursor-pointer"
              data-aos="zoom-in"
            >
              <div className="mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 w-full text-center flex flex-col items-center justify-center" data-aos="zoom-in">
        <h2 className="text-5xl font-extrabold text-white mb-6">Ready to Take Charge of Your Finances?</h2>
        <p className="text-xl text-white opacity-80 mb-8">
          Join thousands of users already tracking their spending and saving smarter with Pennyfy.
        </p>
        <Link to="/signup">
          <button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            <FaRocket /> Start Your Free Trial
          </button>
        </Link>
      </section>

    </div>
  );
};

export default LandingPage;
