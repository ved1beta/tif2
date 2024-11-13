'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart2, PieChart, TrendingUp } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="text-green-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const StockTicker = () => {
  const [stocks, setStocks] = useState([
    { symbol: 'AAPL', price: 150.25, change: 2.5 },
    { symbol: 'GOOGL', price: 2750.80, change: -1.2 },
    { symbol: 'MSFT', price: 305.75, change: 0.8 },
    { symbol: 'AMZN', price: 3300.50, change: 1.5 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks =>
        prevStocks.map(stock => ({
          ...stock,
          price: +(stock.price + (Math.random() - 0.5) * 2).toFixed(2),
          change: +((Math.random() - 0.5) * 4).toFixed(2),
        }))
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-green-100 p-4 overflow-hidden">
      <div className="flex animate-marquee">
        {stocks.map(stock => (
          <div key={stock.symbol} className="flex items-center mr-8">
            <span className="font-bold">{stock.symbol}</span>
            <span className="ml-2">${stock.price.toFixed(2)}</span>
            <span className={`ml-2 ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TIFInvestmentUI() {
  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-green-600">
              TIF
              <span className="text-gray-800"> The Investment Forum</span>
            </h1>
          </motion.div>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-8"
          >
            Invest in Your Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12"
          >
            Join TIF and unlock the potential of smart investments
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Started
          </motion.button>
        </section>

        <StockTicker />

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Investment Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChart2 size={32} />}
              title="Market Analysis"
              description="Get in-depth market analysis and insights to make informed decisions."
            />
           
            <FeatureCard
              icon={<TrendingUp size={32} />}
              title="Performance Tracking"
              description="Monitor your investments' performance"
            />
          </div>
        </section>

        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Investing?</h2>
            <p className="text-xl mb-12">Learn with hundreds of inovative students in TIF</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Join <ArrowUpRight className="ml-2" />
            </motion.button>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p> TIF - The Investment Forum.</p>
        </div>
      </footer>
    </div>
  )
}