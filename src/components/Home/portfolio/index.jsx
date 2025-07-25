import { portfolioData } from '../../../api/data' // Update if alias is not supported
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <section className='md:pt-48 sm:pt-28 pt-12' id='portfolio'>
      <div className='container px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 items-center gap-20'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='lg:-ml-32'>
            <img
              src='/images/portfolio/img-portfolio.png'
              alt='Crypto Portfolio'
              width={780}
              height={700}
              className='object-contain'
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <p className='port-p sm:text-28 text-18 text-muted mb-4'>
              Build Your Cryptocurrency <span className='text-primary'>Portfolio</span>
            </p>
            <h2 className=' port-p text-white sm:text-40 text-30 mb-4 font-medium'>
              Start investing with Cryp<span className='text-primary'>tous</span> a trusted platform for growing your digital wealth.
             
            </h2>
            <p className='port-p text-muted/60 text-18'>
              Cryptous has a variety of features that make it the best
              <br className='md:block hidden' /> place to start trading.
            </p>

            <table className='w-full sm:w-[80%]'>
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr key={index} className='border-b border-dark_border/10'>
                    <td className=' rounded-full flex align-center justify-center '>
                      <div className=' worllod rounded-full w-fit'>
                        <img
                          src={item.image}
                          alt={item.title}
                          width={35}
                          height={35}
                          className='object-contain'
                        />
                      </div>
                    </td>
                    <td className='py-5'>
                      <h4 className='text-muted sm:text-28 text-22 ml-5'>
                        {item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
