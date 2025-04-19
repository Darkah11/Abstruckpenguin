import Image from 'next/image'
import burn from '@/public/burn.jpeg'
import herobg from '@/public/herobg.JPG'
import plane from '@/public/atp-plane.JPG'
import bat from '@/public/atp-bat.JPG'
import shark from '@/public/atp-shark.JPG'
import atp from '@/public/atp.svg'
import wallet from '@/public/wallet.png'
import deposit from '@/public/deposit.png'
import link from '@/public/link.png'
import swap from '@/public/swap.png'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <nav className=" fixed top-12 w-[90%] z-50 border-2 border-black bg-white left-0 right-0 mx-auto rounded-full px-5 py-3">
        <div className=" flex items-center justify-between">
          <Image src={atp} alt="penguin image" className=" w-16" />
          <div className=" flex items-center gap-2">
            <Link href={'/'}>
              <Image
                src={'x.svg'}
                alt="x image"
                width={50}
                height={50}
                className=" w-6"
              />
            </Link>
            <Link href={'/'}>
              <Image
                src={'telegram.svg'}
                alt="x image"
                width={50}
                height={50}
                className=" w-6"
              />
            </Link>
            <Link href={'/'}>
              <button className=" btn w-[100px] py-[8px] rounded-full uppercase text-sm font-medium text-white">
                buy
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <section className=" relative h-screen flex justify-center items-center px-5">
        <div className=" absolute w-full h-full top-0 left-0">
          <div className=" absolute top-0 left-0 w-full h-full bg-black opacity-50" />
          <Image
            src={herobg}
            alt="hero background"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" relative text-white h-fit w-fit m-auto">
          <h1 className=" text-5xl font-bold mb-3">The Chaos Coin Is Here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            voluptatibus alias quis, voluptate placeat voluptas numquam eaque
            vitae autem animi.
          </p>
          <Link href={'/'}>
            <button className=" btn w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
              buy $atp
            </button>
          </Link>
        </div>
      </section>
      {/* <section className=" relative flex justify-center items-center px-5 py-24">
        <div>
          <div>
            <p className=" text-oren font-bold text-sm mb-2">ABOUT $ATP</p>
            <h2 className=" text-purp text-3xl font-medium capitalize mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium labore blanditiis officia nam culpa, quas delectus sed
              fugit neque voluptate quia illum veritatis ullam repellendus dolor
              molestias ratione dolorem nobis accusamus tenetur, aliquam quidem.
              Id, exercitationem? Nihil dolore quas quia cumque recusandae,
              laudantium aliquam quod provident esse! Magnam, cum autem.
            </p>
            <div className=" flex items-center gap-x-3 mt-4">
              <Link href={'/'}>
                <button className=" bg-oren w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                  Join X
                </button>
              </Link>
              <Link href={'/'}>
                <button className=" bg-purp w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                  Join Telegram
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex gap-5 mt-16 justify-center">
            <div>
              <Image
                src={herobg}
                alt=" atp poster"
                className=" w-[150px] h-[100px] rounded-r-full"
              />
              <Image
                src={plane}
                alt=" atp poster"
                className=" w-[150px] h-[250px] rounded-t-full mt-3 object-cover"
              />
            </div>
            <div>
              <Image
                src={bat}
                alt=" atp poster"
                className=" w-[150px] h-[250px] object-cover rounded-b-full mb-3"
              />
              <Image
                src={shark}
                alt=" atp poster"
                className=" w-[150px] h-[100px] object-cover rounded-l-full"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="">
          <div>
            <div className=" px-5 py-7 bg-primary">
              <p className=" text-oren font-bold text-sm mb-2">ABOUT $ATP</p>
              <h2 className=" text-white text-3xl font-medium capitalize mb-3">
                Lorem ipsum dolor.
              </h2>
              <p className=" text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium labore blanditiis officia nam culpa, quas delectus
                sed fugit neque voluptate quia illum veritatis ullam repellendus
                dolor molestias ratione dolorem nobis accusamus tenetur, aliquam
                quidem. Id
              </p>
              <div className=" flex items-center gap-x-3 mt-4">
                <Link href={'/'}>
                  <button className=" bg-oren w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join X
                  </button>
                </Link>
                <Link href={'/'}>
                  <button className=" bg-purp w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join Telegram
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={plane}
                alt="atp and plane"
                className=" h-[300px] object-cover"
              />
            </div>
          </div>
          <div>
            <div className=" px-5 py-7 bg-primary">
              <p className=" text-oren font-bold text-sm mb-2">ABOUT $ATP</p>
              <h2 className=" text-white text-3xl font-medium capitalize mb-3">
                Lorem ipsum dolor.
              </h2>
              <p className=" text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium labore blanditiis officia nam culpa, quas delectus
                sed fugit neque voluptate quia illum veritatis ullam repellendus
                dolor molestias ratione dolorem nobis accusamus tenetur, aliquam
                quidem. Id
              </p>
              <div className=" flex items-center gap-x-3 mt-4">
                <Link href={'/'}>
                  <button className=" bg-oren w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join X
                  </button>
                </Link>
                <Link href={'/'}>
                  <button className=" bg-purp w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join Telegram
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={bat}
                alt="atp and plane"
                className=" h-[300px]  object-top object-cover"
              />
            </div>
          </div>
          <div>
            <div className=" px-5 py-7 bg-primary">
              <p className=" text-oren font-bold text-sm mb-2">ABOUT $ATP</p>
              <h2 className=" text-white text-3xl font-medium capitalize mb-3">
                Lorem ipsum dolor.
              </h2>
              <p className=" text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium labore blanditiis officia nam culpa, quas delectus
                sed fugit neque voluptate quia illum veritatis ullam repellendus
                dolor molestias ratione dolorem nobis accusamus tenetur, aliquam
                quidem. Id
              </p>
              <div className=" flex items-center gap-x-3 mt-4">
                <Link href={'/'}>
                  <button className=" bg-oren w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join X
                  </button>
                </Link>
                <Link href={'/'}>
                  <button className=" bg-purp w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join Telegram
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={shark}
                alt="atp and plane"
                className=" h-[300px]  object-top object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-oren px-5 py-24">
        <div>
          <h2 className=" text-white text-4xl font-semibold text-center">
            How To Buy
          </h2>
          <div className=" flex flex-col justify-center items-center mt-8 gap-y-10 ">
            <div className=" bg-white max-w-[300px] px-5 py-8 rounded-lg text-center">
              <Image src={wallet} className=" mx-auto" />
              <h3 className=" text-primary font-bold text-xl mt-5">
                Create Wallet
              </h3>
              <p className=" mt-3 text-gray-700 leading-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam, voluptatibus.
              </p>
            </div>
            <div className=" bg-white max-w-[300px] px-5 py-8 rounded-lg text-center">
              <Image src={deposit} className=" mx-auto" />
              <h3 className=" text-primary font-bold text-xl mt-5">
                Deposit ETH
              </h3>
              <p className=" mt-3 text-gray-700 leading-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam, voluptatibus.
              </p>
            </div>
            <div className=" bg-white max-w-[300px] px-5 py-8 rounded-lg text-center">
              <Image src={link} className=" mx-auto" />
              <h3 className=" text-primary font-bold text-xl mt-5">
                Bridge To Abstract
              </h3>
              <p className=" mt-3 text-gray-700 leading-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam, voluptatibus.
              </p>
            </div>
            <div className=" bg-white max-w-[300px] px-5 py-8 rounded-lg text-center">
              <Image src={swap} className=" mx-auto" />
              <h3 className=" text-primary font-bold text-xl mt-5">
                Swap To $ATP
              </h3>
              <p className=" mt-3 text-gray-700 leading-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam, voluptatibus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-purp px-5 py-24">
        <div>
          <div>
            <div className=" text-center max-w-[380px] mx-auto mb-10">
              <h2 className=" text-white text-4xl font-semibold mb-3 ">
                Tokenomics
              </h2>
              <p className=" text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis, alias voluptatem vero ipsam harum qui neque ipsum
                ducimus aut dolor velit fugit, cum eum aspernatur!
              </p>
            </div>
            <div>
              <Image
                src={burn}
                alt=" tokenomics image"
                className=" max-w-[300px] mx-auto "
              />
            </div>
          </div>
          <div className=' flex justify-between mt-10 flex-wrap gap-y-8'>
            <div className=' text-center w-1/2'>
              <p className=' text-orange-400 font-semibold'>3% Burned</p>
              <h3 className=' text-white text-4xl font-bold'>100K</h3>
              <p className=' text-gray-400'>Market <br /> Cap</p>
            </div>
            <div className=' text-center w-1/2'>
              <p className=' text-orange-400 font-semibold'>3% Burned</p>
              <h3 className=' text-white text-4xl font-bold'>200K</h3>
              <p className=' text-gray-400'>Market<br /> Cap</p>
            </div>
            <div className=' text-center w-1/2'>
              <p className=' text-orange-400 font-semibold'>3% Burned</p>
              <h3 className=' text-white text-4xl font-bold'>500K</h3>
              <p className=' text-gray-400'>Market<br /> Cap</p>
            </div>
            <div className=' text-center w-1/2'>
              <p className=' text-orange-400 font-semibold'>3% Burned</p>
              <h3 className=' text-white text-4xl font-bold'>600K</h3>
              <p className=' text-gray-400'>Market<br /> Cap</p>
            </div>
            <div className=' text-center w-1/2'>
              <p className=' text-orange-400 font-semibold'>3% Burned</p>
              <h3 className=' text-white text-4xl font-bold'>700K</h3>
              <p className=' text-gray-400'>Market<br /> Cap</p>
            </div>
            <div className=' text-center w-1/2'>
              <p className=' text-orange-400 font-semibold'>5% Burned</p>
              <h3 className=' text-white text-4xl font-bold'>1M</h3>
              <p className=' text-gray-400'>Market<br /> Cap</p>
            </div>
          </div>
        </div>
      </section>
      <footer className=" bg-gray-950 py-24 text-white">
        <div className=" flex flex-col justify-center items-center">
          <Image src={atp} />
          <Link href={'/'}>
            <button className=" mt-8 btn w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white">
              buy $atp
            </button>
          </Link>
          <div className=" flex items-center gap-2 mt-12">
            <Link href={'/'}>
              <Image
                src={'/x-light.png'}
                alt="x image"
                width={100}
                height={100}
                className=" w-14"
              />
            </Link>
            <Link href={'/'}>
              <Image
                src={'/tel-light.png'}
                alt="x image"
                width={100}
                height={100}
                className=" w-14"
              />
            </Link>
          </div>
          <p className=" text-center mt-10">
            © 2025 AbsTruckPenguin. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
