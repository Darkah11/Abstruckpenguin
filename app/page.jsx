import Image from 'next/image'
import herobg from '@/public/herobg.jpg'
import plane from '@/public/atp-plane.jpg'
import bat from '@/public/atp-bat.jpg'
import shark from '@/public/atp-shark.jpg'
import atp from '@/public/atp.svg'
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
      <section className=" relative flex justify-center items-center px-5 py-24">
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
            <div className=' flex items-center gap-x-3 mt-4'>
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
      </section>
    </>
  )
}
