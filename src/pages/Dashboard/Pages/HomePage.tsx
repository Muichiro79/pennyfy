import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useForm, SubmitHandler } from 'react-hook-form';

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ExpenseFormData {
  description: string;
  amount: number;
  category: string;
}

interface Transaction {
  description: string;
  amount: number;
  category: string;
}

const HomePage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { register, handleSubmit, reset } = useForm<ExpenseFormData>();

  // Chart Data for Expenses Overview
  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Time labels
    datasets: [
      {
        label: 'Expenses',
        data: [200, 300, 250, 500], // Expense data points (weekly)
        borderColor: 'rgb(34, 197, 94)', // Green color for expenses
        backgroundColor: 'rgba(34, 197, 94, 0.2)', // Light green background
        fill: true,
      },
      {
        label: 'Budget',
        data: [1000, 1000, 1000, 1000], // Constant budget line
        borderColor: 'rgb(59, 130, 246)', // Blue color for budget
        backgroundColor: 'rgba(59, 130, 246, 0.2)', // Light blue background
        fill: true,
      },
    ],
  };

  // Handle Expense Form Submission
  const onSubmit: SubmitHandler<ExpenseFormData> = (data) => {
    const newTransaction = {
      description: data.description,
      amount: data.amount,
      category: data.category,
    };
    setTransactions([...transactions, newTransaction]);
    reset(); // Reset form after submission
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-emerald-600">Budget Tracker</h2>

      {/* Budget Overview */}
      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl text-emerald-500">Current Budget</h3>
        <p className="text-3xl font-bold text-emerald-600">$1000</p>
      </div>

      {/* Expense Chart */}
      <div className="mt-6">
        <Line data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>

      {/* Expense Form */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-emerald-500">Add Expense</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label className="text-gray-400">Description</label>
            <input
              {...register('description', { required: true })}
              className="w-full p-2 mt-2 border rounded-lg  text-emerald-400"
              placeholder="Expense description"
            />
          </div>

          <div>
            <label className="text-gray-400">Amount</label>
            <input
              {...register('amount', { required: true })}
              className="w-full p-2 mt-2 border rounded-lg"
              placeholder="Amount"
              type="number"
            />
          </div>

          <div>
            <label className="text-gray-400">Category</label>
            <select {...register('category', { required: true })} className="w-full p-2 mt-2 border rounded-lg text-emerald-400">
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600">
            Add Expense
          </button>
        </form>
      </div>

      {/* Transactions List */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-emerald-500">Recent Transactions</h3>
        <ul className="mt-4 space-y-4">
          {transactions.map((transaction, index) => (
            <li key={index} className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
              <div>
                <p className="font-semibold text-emerald-600">{transaction.description}</p>
                <p className="text-gray-600">{transaction.category}</p>
              </div>
              <p className="font-semibold text-emerald-600">${transaction.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
