// import { useState, useEffect } from 'react'
// import toast from 'react-hot-toast'
// import Logo from '@/components/Layout/Header/Logo'
// import { CryptoData } from '@/app/api/data' // Adjust import as necessary

// interface Crypto {
//   name: string
//   price: number
// }

// const SellCrypto = () => {
//   const [loading, setLoading] = useState(false)
//   const [cryptos, setCryptos] = useState<Crypto[]>([])
//   const [formData, setFormData] = useState<{
//     name: string
//     price: number
//     amount: string
//   }>({
//     name: '',
//     price: 0,
//     amount: '',
//   })
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)

//   useEffect(() => {
//     setCryptos(CryptoData)
//     if (CryptoData.length > 0) {
//       setFormData((prevData) => ({
//         ...prevData,
//         name: CryptoData[0].name,
//         price: CryptoData[0].price,
//       }))
//     }
//   }, [])

//   const handleChange = (
//     e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
//   ) => {
//     const { name, value } = e.target
//     if (name === 'amount') {
//       setFormData((prevData) => ({ ...prevData, amount: value }))
//     }
//   }

//   const handleDropdownSelect = (crypto: Crypto) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       name: crypto.name,
//       price: crypto.price,
//     }))
//     setIsDropdownOpen(false)
//   }

//   const totalCost = formData.amount
//     ? (formData.price * parseFloat(formData.amount)).toFixed(2)
//     : '0.00'

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setLoading(true)
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 2000))
//       toast.success('Crypto purchase successful!')
//       setFormData((prevData) => ({ ...prevData, amount: '' }))
//     } catch (error) {
//       toast.error('An error occurred during the purchase.')
//       console.error(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className='max-w-md mx-auto p-4'>
//       <div className='flex justify-center mb-16'>
//         <Logo />
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className='mb-4 relative'>
//           <div
//             onClick={() => setIsDropdownOpen((prev) => !prev)}
//             className='cursor-pointer text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 text-start'>
//             {formData.name}
//           </div>
//           {isDropdownOpen && (
//             <div className='absolute z-10 bg-dark border border-dark_border/60 mt-1 rounded-md w-full'>
//               {cryptos.map((crypto) => (
//                 <div
//                   key={crypto.name}
//                   onClick={() => handleDropdownSelect(crypto)}
//                   className='px-3 bg-dark_grey text-white hover:text-darkmode py-2 hover:bg-primary cursor-pointer'>
//                   {crypto.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className='mb-4'>
//           <input
//             id='crypto-price'
//             type='text'
//             name='price'
//             className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
//             value={`$${formData.price.toLocaleString()}`}
//             disabled
//             required
//           />
//         </div>
//         <div className='mb-4'>
//           <input
//             id='amount'
//             type='number'
//             name='amount'
//             placeholder='Amount'
//             value={formData.amount}
//             onChange={handleChange}
//             min='0'
//             required
//             className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
//           />
//         </div>
//         <div className='flex justify-between mb-4 text-white'>
//           <p>Total Price: </p>
//           <p>${totalCost}</p>
//         </div>
//         <button className='hover:text-darkmode font-medium text-18 bg-transparent w-full border border-primary rounded-lg py-3 text-primary hover:bg-primary'>
//           Sell
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SellCrypto
// 'use client'

// import { useState, useEffect } from 'react'
// import toast from 'react-hot-toast'
// import Logo from '@/components/Layout/Header/Logo'
// import { CryptoData } from '@/app/api/data' // Adjust the path if needed

// interface Crypto {
//   name: string
//   price: number
// }

// const SellCrypto = () => {
//   const [loading, setLoading] = useState(false)
//   const [cryptos, setCryptos] = useState<Crypto[]>([])
//   const [formData, setFormData] = useState({
//     name: '',
//     price: 0,
//     amount: '',
//   })
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)

//   useEffect(() => {
//     setCryptos(CryptoData)
//     if (CryptoData.length > 0) {
//       setFormData((prev) => ({
//         ...prev,
//         name: CryptoData[0].name,
//         price: CryptoData[0].price,
//       }))
//     }
//   }, [])

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleDropdownSelect = (crypto: Crypto) => {
//     setFormData((prev) => ({
//       ...prev,
//       name: crypto.name,
//       price: crypto.price,
//     }))
//     setIsDropdownOpen(false)
//   }

//   const totalPrice = formData.amount
//     ? (formData.price * parseFloat(formData.amount || '0')).toFixed(2)
//     : '0.00'

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setLoading(true)
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulated request
//       toast.success('Crypto sold successfully!')
//       setFormData((prev) => ({ ...prev, amount: '' }))
//     } catch (error) {
//       toast.error('An error occurred during the sale.')
//       console.error(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className='max-w-md mx-auto p-4'>
//       <div className='flex justify-center mb-16'>
//         <Logo />
//       </div>

//       <form onSubmit={handleSubmit}>
//         {/* Crypto Dropdown */}
//         <div className='mb-4 relative'>
//           <div
//             onClick={() => setIsDropdownOpen((prev) => !prev)}
//             className='cursor-pointer text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 text-start'
//           >
//             {formData.name || 'Select crypto'}
//           </div>
//           {isDropdownOpen && (
//             <div className='absolute z-10 bg-dark border border-dark_border/60 mt-1 rounded-md w-full'>
//               {cryptos.map((crypto, index) => (
//                 <div
//                   key={`${crypto.name}-${index}`}
//                   onClick={() => handleDropdownSelect(crypto)}
//                   className='px-3 bg-dark_grey text-white hover:text-darkmode py-2 hover:bg-primary cursor-pointer'
//                 >
//                   {crypto.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Price (read-only) */}
//         <div className='mb-4'>
//           <input
//             type='text'
//             name='price'
//             value={`$${formData.price.toLocaleString()}`}
//             disabled
//             required
//             className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
//           />
//         </div>

//         {/* Amount */}
//         <div className='mb-4'>
//           <input
//             type='number'
//             name='amount'
//             placeholder='Amount'
//             value={formData.amount}
//             onChange={handleChange}
//             min='0'
//             required
//             className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
//           />
//         </div>

//         {/* Total Price */}
//         <div className='flex justify-between mb-4 text-white'>
//           <p>Total Price:</p>
//           <p>${totalPrice}</p>
//         </div>

//         {/* Submit Button */}
//         <button
//           type='submit'
//           disabled={loading}
//           className='font-medium text-18 bg-transparent w-full border border-primary rounded-lg py-3 text-primary hover:bg-primary hover:text-darkmode'
//         >
//           {loading ? 'Processing...' : 'Sell'}
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SellCrypto
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
// import Logo from '@/components/Layout/Header/Logo' // Update this path if `@/` is not configured
import { CryptoData } from '../../../api/data' // Adjust path if needed

const SellCrypto = () => {
  const [loading, setLoading] = useState(false)
  const [cryptos, setCryptos] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    amount: '',
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    setCryptos(CryptoData)
    if (CryptoData.length > 0) {
      setFormData((prev) => ({
        ...prev,
        name: CryptoData[0].name,
        price: CryptoData[0].price,
      }))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDropdownSelect = (crypto) => {
    setFormData((prev) => ({
      ...prev,
      name: crypto.name,
      price: crypto.price,
    }))
    setIsDropdownOpen(false)
  }

  const totalPrice = formData.amount
    ? (formData.price * parseFloat(formData.amount || '0')).toFixed(2)
    : '0.00'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulated request
      toast.success('Crypto sold successfully!')
      setFormData((prev) => ({ ...prev, amount: '' }))
    } catch (error) {
      toast.error('An error occurred during the sale.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='max-w-md mx-auto p-4'>
      <div className='flex justify-center mb-16'>
        {/* <Logo /> */}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Crypto Dropdown */}
        <div className='mb-4 relative'>
          <div
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className='cursor-pointer text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 text-start'
          >
            {formData.name || 'Select crypto'}
          </div>
          {isDropdownOpen && (
            <div className='absolute z-10 bg-dark border border-dark_border/60 mt-1 rounded-md w-full'>
              {cryptos.map((crypto, index) => (
                <div
                  key={`${crypto.name}-${index}`}
                  onClick={() => handleDropdownSelect(crypto)}
                  className='px-3 bg-dark_grey text-white hover:text-darkmode py-2 hover:bg-primary cursor-pointer'
                >
                  {crypto.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price (read-only) */}
        <div className='mb-4'>
          <input
            type='text'
            name='price'
            value={`$${formData.price.toLocaleString()}`}
            disabled
            required
            className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
          />
        </div>

        {/* Amount */}
        <div className='mb-4'>
          <input
            type='number'
            name='amount'
            placeholder='Amount'
            value={formData.amount}
            onChange={handleChange}
            min='0'
            required
            className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
          />
        </div>

        {/* Total Price */}
        <div className='flex justify-between mb-4 text-white'>
          <p>Total Price:</p>
          <p>${totalPrice}</p>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          disabled={loading}
          className='font-medium text-18 bg-transparent w-full border border-primary rounded-lg py-3 text-primary hover:bg-primary hover:text-darkmode'
        >
          {loading ? 'Processing...' : 'Sell'}
        </button>
      </form>
    </div>
  )
}

export default SellCrypto
