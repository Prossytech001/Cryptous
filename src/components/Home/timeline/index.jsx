// 'use client'
// import Image from 'next/image'
// import { timelineData } from '@/app/api/data'
// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'

// const TimeLine = () => {
//   const ref = useRef(null)
//   const inView = useInView(ref)

//   const TopAnimation = {
//     initial: { y: '-100%', opacity: 0 },
//     animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
//     transition: { duration: 0.6, delay: 0.4 },
//   }
//   return (
//     <section className='md:pt-40 pt-9' id='development'>
//       <div className='container lg:px-16 px-4'>
//         <div className='text-center'>
//           <motion.div
//             whileInView={{ y: 0, opacity: 1 }}
//             initial={{ y: '-100%', opacity: 0 }}
//             transition={{ duration: 0.6 }}>
//             <p className='text-muted sm:text-28 text-18 mb-9'>
//               Development <span className='text-primary'>timeline</span>
//             </p>
//             <h2 className='text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20'>
//               We can enter at any point or help you all the way through the
//               development cycle.
//             </h2>
//           </motion.div>
//           <motion.div
//             whileInView={{ scale: 1, opacity: 1 }}
//             initial={{ scale: 0.8, opacity: 0 }}
//             transition={{ duration: 0.6 }}>
//             <div className='md:block hidden relative'>
//               <div>
//                 <Image
//                   src='/images/timeline/img-timeline.png'
//                   alt='image'
//                   width={1220}
//                   height={1000}
//                   className='w-80% mx-auto'
//                 />
//               </div>
//               <div className='absolute lg::top-40 top-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
//                 <div className='text-right'>
//                   <h5 className='text-muted text-28 mb-3'>Planning</h5>
//                   <p className='text-18 text-muted/60'>
//                     Map the project&apos;s scope and architecture
//                   </p>
//                 </div>
//                 <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
//                   <Image
//                     src='/images/timeline/icon-planning.svg'
//                     alt='Planning'
//                     width={44}
//                     height={44}
//                     className='w-16 h-16 '
//                   />
//                 </div>
//               </div>
//               <div className='absolute lg:top-40 top-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
//                 <div className='bg-light_grey/45 backdrop-blur-xs p-6 h-fit rounded-full'>
//                   <Image
//                     src='/images/timeline/icon-refinement.svg'
//                     alt='Refinement'
//                     width={44}
//                     height={44}
//                   />
//                 </div>
//                 <div className='text-left'>
//                   <h5 className='text-muted text-28 mb-3'>Refinement</h5>
//                   <p className='text-18 text-muted/60'>
//                     Refine and improve your solution
//                   </p>
//                 </div>
//               </div>
//               <div className='absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
//                 <div className='text-right'>
//                   <h5 className='text-muted text-28 mb-3'>Prototype</h5>
//                   <p className='text-18 text-muted/60'>
//                     Build a working prototype to test your product
//                   </p>
//                 </div>
//                 <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
//                   <Image
//                     src='/images/timeline/icon-prototype.svg'
//                     alt='Prototype'
//                     width={44}
//                     height={44}
//                     className='w-16 h-16 '
//                   />
//                 </div>
//               </div>
//               <div className='absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
//                 <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
//                   <Image
//                     src='/images/timeline/icon-support.svg'
//                     alt='Scale and support'
//                     width={44}
//                     height={44}
//                     className='w-16 h-16'
//                   />
//                 </div>
//                 <div className='text-left'>
//                   <h5 className='text-muted text-nowrap text-28 mb-3'>
//                     Support
//                   </h5>
//                   <p className='text-18 text-muted/60'>
//                     Deploy the product and ensure full support by us
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='grid sm:grid-cols-2 gap-8 md:hidden'>
//               {timelineData.map((item, index) => (
//                 <div key={index} className='flex items-center gap-6'>
//                   <div className='bg-light_grey/45 p-6 rounded-full'>
//                     <Image
//                       src={item.icon}
//                       alt={item.title}
//                       width={44}
//                       height={44}
//                     />
//                   </div>
//                   <div className='text-start'>
//                     <h4 className='text-28 text-muted mb-2'>{item.title}</h4>
//                     <p className='text-muted/60 text-18'>{item.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default TimeLine
// 'use client'

// import Image from 'next/image'
// import { timelineData } from '@/app/api/data'
// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'

// const TimeLine = () => {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true })

//   const topAnimation = {
//     initial: { y: '-100%', opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     transition: { duration: 0.6, delay: 0.4 },
//   }

//   return (
//     <section className='md:pt-40 pt-9' id='development'>
//       <div className='container lg:px-16 px-4'>
//         <div className='text-center' ref={ref}>
//           <motion.div
//             initial='initial'
//             animate={inView ? 'animate' : 'initial'}
//             variants={topAnimation}>
//             <p className='text-muted sm:text-28 text-18 mb-9'>
//               Development <span className='text-primary'>timeline</span>
//             </p>
//             <h2 className='text-white sm:text-40 text-30 font-medium lg:w-4/5 mx-auto mb-20'>
//               We can enter at any point or help you all the way through the
//               development cycle.
//             </h2>
//           </motion.div>

//           {/* Desktop Timeline */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={inView ? { scale: 1, opacity: 1 } : {}}
//             transition={{ duration: 0.6 }}>
//             <div className='md:block hidden relative'>
//               <Image
//                 src='/images/timeline/img-timeline.png'
//                 alt='Timeline overview'
//                 width={1220}
//                 height={1000}
//                 className='w-4/5 mx-auto'
//               />

//               {/* Top Left: Planning */}
//               <div className='absolute top-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
//                 <div className='text-right'>
//                   <h5 className='text-muted text-28 mb-3'>Planning</h5>
//                   <p className='text-18 text-muted/60'>
//                     Map the project&apos;s scope and architecture
//                   </p>
//                 </div>
//                 <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
//                   <Image
//                     src='/images/timeline/icon-planning.svg'
//                     alt='Planning'
//                     width={44}
//                     height={44}
//                   />
//                 </div>
//               </div>

//               {/* Top Right: Refinement */}
//               <div className='absolute top-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
//                 <div className='bg-light_grey/45 backdrop-blur-xs p-6 h-fit rounded-full'>
//                   <Image
//                     src='/images/timeline/icon-refinement.svg'
//                     alt='Refinement'
//                     width={44}
//                     height={44}
//                   />
//                 </div>
//                 <div className='text-left'>
//                   <h5 className='text-muted text-28 mb-3'>Refinement</h5>
//                   <p className='text-18 text-muted/60'>
//                     Refine and improve your solution
//                   </p>
//                 </div>
//               </div>

//               {/* Bottom Left: Prototype */}
//               <div className='absolute bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
//                 <div className='text-right'>
//                   <h5 className='text-muted text-28 mb-3'>Prototype</h5>
//                   <p className='text-18 text-muted/60'>
//                     Build a working prototype to test your product
//                   </p>
//                 </div>
//                 <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
//                   <Image
//                     src='/images/timeline/icon-prototype.svg'
//                     alt='Prototype'
//                     width={44}
//                     height={44}
//                   />
//                 </div>
//               </div>

//               {/* Bottom Right: Support */}
//               <div className='absolute bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
//                 <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
//                   <Image
//                     src='/images/timeline/icon-support.svg'
//                     alt='Support'
//                     width={44}
//                     height={44}
//                   />
//                 </div>
//                 <div className='text-left'>
//                   <h5 className='text-muted text-nowrap text-28 mb-3'>
//                     Support
//                   </h5>
//                   <p className='text-18 text-muted/60'>
//                     Deploy the product and ensure full support by us
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Timeline */}
//             <div className='grid sm:grid-cols-2 gap-8 md:hidden'>
//               {timelineData.map((item, index) => (
//                 <div key={index} className='flex items-center gap-6'>
//                   <div className='bg-light_grey/45 p-6 rounded-full'>
//                     <Image
//                       src={item.icon}
//                       alt={item.title}
//                       width={44}
//                       height={44}
//                     />
//                   </div>
//                   <div className='text-start'>
//                     <h4 className='text-28 text-muted mb-2'>{item.title}</h4>
//                     <p className='text-muted/60 text-18'>{item.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default TimeLine
import { useRef } from 'react'
import { timelineData } from '../../../api/data' // Adjust if alias is unsupported
import { motion, useInView } from 'framer-motion'

const TimeLine = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const topAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  return (
    <section className='md:pt-40 pt-9' id='development'>
      <div className='container lg:px-16 px-4'>
        <div className='text-center' ref={ref}>
          <motion.div
            initial='initial'
            animate={inView ? 'animate' : 'initial'}
            variants={topAnimation}
            className='timeline-head '>
            <p className='text-muted sm:text-28 text-18 mb-9'>
             How It <span className='text-primary'>Works</span>
            </p>
            <h2 className='text-white  sm:text-40 text-20 font-medium  mb-20'>
             Turn Crypto Into Passive Profit in Minutes
            </h2>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}>
            
            {/* Desktop View */}
            <div className='md:block hidden relative'>
              <img
                src='/images/timeline/icon-refinement.png'
                alt='Timeline overview'
                width={1220}
                height={1000}
                // className='w-4/5 mx-auto'
              />

              {/* Planning */}
              <div className='absolute top-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
                <div className='text-right'>
                  <h5 className='text-muted text-28 mb-3'>Create an Account</h5>
                  <p className='text-18 text-muted/60'>
                    Sign up in seconds using your email and start your journey
                  </p>
                </div>
                <div className='timeline-img backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                  <img
                    src='/images/timeline/icon-planning.svg'
                    alt='Planning'
                    width={44}
                    height={44}
                  />
                </div>
              </div>

              {/* Refinement */}
              <div className='absolute top-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
                <div className='timeline-img backdrop-blur-xs p-6 h-fit rounded-full'>
                  <img
                    src='/images/timeline/icon-refinement.svg'
                    alt='Refinement'
                    width={44}
                    height={44}
                  />
                </div>
                <div className='text-left'>
                  <h5 className='text-muted text-28 mb-3'>Choose a Plan</h5>
                  <p className='text-18 text-muted/60'>
                    Browse our flexible investment plans designed for all levels.
                  </p>
                </div>
              </div>

              {/* Prototype */}
              <div className='absolute bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
                <div className='text-right'>
                  <h5 className='text-muted text-28 mb-3'>Prototype</h5>
                  <p className='text-18 text-muted/60'>
                    Build a working prototype to test your product
                  </p>
                </div>
                <div className='timeline-img backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                  <img
                    src='/images/timeline/icon-prototype.svg'
                    alt='Prototype'
                    width={44}
                    height={44}
                  />
                </div>
              </div>

              {/* Support */}
              <div className='absolute bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
                <div className='timeline-img backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                  <img
                    src='/images/timeline/icon-support.svg'
                    alt='Support'
                    width={44}
                    height={44}
                  />
                </div>
                <div className='text-left'>
                  <h5 className='text-muted text-nowrap text-28 mb-3'>
                    Support
                  </h5>
                  <p className='text-18 text-muted/60'>
                    Deploy the product and ensure full support by us
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className='grid sm:grid-cols-2 gap-8 md:hidden'>
              {timelineData.map((item, index) => (
                <div key={index} className='flex items-center gap-6'>
                  <div className='timeline-img p-6 rounded-full'>
                    <img
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className='text-start'>
                    <h4 className='text-28 text-muted mb-2'>{item.title}</h4>
                    <p className='text-muted/60 text-18'>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine
