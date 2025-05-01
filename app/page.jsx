import Image from "next/image";
import burn from "@/public/burn.jpeg";
import herobg from "@/public/herobg.JPG";
import plane from "@/public/atp-plane.JPG";
import bat from "@/public/atp-bat.JPG";
import shark from "@/public/atp-shark.JPG";
import atp from "@/public/atp.svg";
import wallet from "@/public/wallet.png";
import deposit from "@/public/deposit.png";
import link from "@/public/link.png";
import swap from "@/public/swap.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className=" fixed top-12 w-[90%] md:w-[600px] z-50 border-2 border-black bg-white left-0 right-0 mx-auto rounded-full px-5 py-3">
        <div className=" flex items-center justify-between">
          <Image src={atp} alt="penguin image" className=" w-16" />
          <div className=" flex items-center gap-2">
            <Link href={"/"}>
              <Image
                src={"x.svg"}
                alt="x image"
                width={50}
                height={50}
                className=" w-6"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"telegram.svg"}
                alt="x image"
                width={50}
                height={50}
                className=" w-6"
              />
            </Link>
            <Link href={"/"}>
              <button className=" btn w-[100px] py-[8px] rounded-full uppercase text-sm font-medium text-white">
                buy
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <section className=" relative h-screen flex justify-center items-center px-5 md:py-36">
        <div className=" absolute w-full h-full top-0 left-0">
          <div className=" absolute top-0 left-0 w-full h-full bg-black opacity-50" />
          <Image
            src={herobg}
            alt="hero background"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" relative text-white h-fit w-fit m-auto md:flex md:flex-col md:items-center ">
          <h1 className=" text-5xl md:text-7xl font-bold mb-3 md:text-center">
            The Chaos Coin <br className=" hidden md:block" /> Is Here
          </h1>
          <p className=" text-sm md:max-w-[450px] md:mx-auto md:text-center lg:text-base lg:max-w-[600px]">
            The $ATP token and associated artworks are for entertainment
            purposes only and do not constitute investment, security, or
            financial advice. The token supports the lore of the Abstruck
            Penguin universe, created by Abstract, and is not affiliated with
            P.U.D.G.Y. LLC or Boneca Ambalabu Holdings.
          </p>
          <Link href={"/"}>
            <button className=" md:mx-auto btn w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
              buy $atp
            </button>
          </Link>
        </div>
      </section>
      <section>
        <div className="">
          <div className=" md:flex md:max-h-[550px]">
            <div className=" px-5 py-7 bg-primary md:w-1/2 md:flex md:flex-col justify-center">
              <p className=" text-oren font-bold text-sm mb-2">ABOUT $ATP</p>
              <h2 className=" text-white text-3xl font-medium capitalize mb-3">
                ABSTRUCK PENGUIN | $ATP
              </h2>
              <p className=" text-gray-400">
                In the fractured silence between timelines, there prowled
                P3N-GU1N a penguin who defied the ancient code of the P.U.D.G.Y.{" "}
                <br /> <br />
                Where his kin guarded balance, he hungered for chaos. Visions
                tormented him: roads spiraling into oblivion, a cosmic truck
                idling in the void, its engine growling like a star gone rogue.
              </p>
              <div className=" flex items-center gap-x-3 mt-4">
                <Link href={"/"}>
                  <button className=" bg-oren w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join X
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className=" bg-purp w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join Telegram
                  </button>
                </Link>
              </div>
            </div>
            <div className=" md:w-1/2">
              <Image
                src={plane}
                alt="atp and plane"
                className=" md:w-full md:h-full h-[300px] object-cover"
              />
            </div>
          </div>
          <div className=" md:flex md:max-h-[550px]">
            <div className=" order-2 px-5 py-7 bg-primary md:w-1/2 md:flex md:flex-col justify-center">
              <p className=" text-oren font-bold text-sm mb-2">ABOUT $ATP</p>
              <h2 className=" text-white text-3xl font-medium capitalize mb-3">
                $ATP wasn’t just a coin. It was a key.
              </h2>
              <p className=" text-gray-400">
                Enter Luca Nutz a human interloper, unremarkable but for a Thai
                alley and a stolen book. A tourist turned tyrant, he craved what
                the P.U.D.G.Y. hid. "They don’t deserve it,&quot; he hissed,
                clutching a USB etched with alien truths. Not tech. Not data. A
                spiritual cartridge demanding flesh over wires. The cost?
                Memory. Sanity. A deal struck with Boneca ambalabu a tire legged
                frog lord of Bangkok’s underlayer. When Luca plugged the drive
                into the Interface(a ladyboy updated for eternity), the universe
                shuddered.
              </p>
              <div className=" flex items-center gap-x-3 mt-4">
                <Link href={"/"}>
                  <button className=" bg-oren w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join X
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className=" bg-purp w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join Telegram
                  </button>
                </Link>
              </div>
            </div>
            <div className=" md:w-1/2 order-1">
              <Image
                src={bat}
                alt="atp and plane"
                className=" md:w-full md:h-full h-[300px]  object-top object-cover"
              />
            </div>
          </div>
          <div className=" md:flex md:max-h-[550px]">
            <div className=" px-5 py-7 bg-primary md:w-1/2 md:flex md:flex-col justify-center">
              <p className=" text-oren font-bold text-sm mb-2">ABOUT $ATP</p>
              <h2 className=" text-white text-3xl font-medium capitalize mb-3">
              &quot;WELCOME, LUCA. THE COST HAS BEEN REGISTERED.&quot;
              </h2>
              <p className=" text-gray-400">
                The download began. <br /> <br /> Now, the $SATP token revs at
                the edge of reality. A chaos engine. A bridge to timelines where
                penguins ride trucks through black holes and humans bleed
                crypto.
              </p>
              <div className=" flex items-center gap-x-3 mt-4">
                <Link href={"/"}>
                  <button className=" bg-oren w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join X
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className=" bg-purp w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white mt-3">
                    Join Telegram
                  </button>
                </Link>
              </div>
            </div>
            <div className=" md:w-1/2">
              <Image
                src={shark}
                alt="atp and plane"
                className="  md:w-full md:h-full h-[300px]  object-top object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-oren px-5 py-24">
        <div>
          <h2 className=" text-white text-4xl font-semibold text-center md:text-6xl">
            How To Buy
          </h2>
          <div className=" flex flex-col justify-center md:justify-between md:flex-wrap md:flex-row md:items-stretch  items-center mt-8 gap-y-10 ">
            <div className=" bg-white max-w-[300px] md:max-w-[23%] px-5 py-8 rounded-lg text-center">
              <Image src={wallet} alt="wallet image" className=" mx-auto" />
              <h3 className=" text-primary font-bold text-xl mt-5">
                Create Wallet
              </h3>
              <p className=" mt-3 text-gray-700 leading-7">
                Sign up directly at abs.xyz and create your wallet, or import
                abstract network into MetaMask/wallet of your choice
              </p>
            </div>
            <div className=" bg-white max-w-[300px] md:max-w-[23%] px-5 py-8 rounded-lg text-center">
              <Image src={deposit} alt="deposit image" className=" mx-auto" />
              <h3 className=" text-primary font-bold text-xl mt-5">
                Deposit ETH
              </h3>
              <p className=" mt-3 text-gray-700 leading-7">
                Using a centralised exchange purchase your desired amount of ETH
                and send it to your new wallet
              </p>
            </div>
            <div className=" bg-white max-w-[300px] md:max-w-[23%] px-5 py-8 rounded-lg text-center">
              <Image alt="bridge image" src={link} className=" mx-auto" />
              <h3 className=" text-primary font-bold text-xl mt-5">
                Bridge To Abstract
              </h3>
              <p className=" mt-3 text-gray-700 leading-7">
                Bridge your mainnet ETH to Abstract ETH . This is important as
                you will need it to swap for $ATP
              </p>
            </div>
            <div className=" bg-white max-w-[300px] md:max-w-[23%] px-5 py-8 rounded-lg text-center">
              <Image src={swap} alt="swap image" className=" mx-auto" />
              <h3 className=" text-primary font-bold text-xl mt-5">
                Swap To $ATP
              </h3>
              <p className=" mt-3 text-gray-700 leading-7">
              Using the abstract trade function at abs.xyz, You can now swap your abstract ETH for $ATP on the abstract dashboard
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
          <div className=" flex justify-between mt-10 flex-wrap gap-y-8">
            <div className=" text-center w-1/2">
              <p className=" text-orange-400 font-semibold">3% Burned</p>
              <h3 className=" text-white text-4xl font-bold">100K</h3>
              <p className=" text-gray-400">
                Market <br /> Cap
              </p>
            </div>
            <div className=" text-center w-1/2">
              <p className=" text-orange-400 font-semibold">3% Burned</p>
              <h3 className=" text-white text-4xl font-bold">200K</h3>
              <p className=" text-gray-400">
                Market
                <br /> Cap
              </p>
            </div>
            <div className=" text-center w-1/2">
              <p className=" text-orange-400 font-semibold">3% Burned</p>
              <h3 className=" text-white text-4xl font-bold">500K</h3>
              <p className=" text-gray-400">
                Market
                <br /> Cap
              </p>
            </div>
            <div className=" text-center w-1/2">
              <p className=" text-orange-400 font-semibold">3% Burned</p>
              <h3 className=" text-white text-4xl font-bold">600K</h3>
              <p className=" text-gray-400">
                Market
                <br /> Cap
              </p>
            </div>
            <div className=" text-center w-1/2">
              <p className=" text-orange-400 font-semibold">3% Burned</p>
              <h3 className=" text-white text-4xl font-bold">700K</h3>
              <p className=" text-gray-400">
                Market
                <br /> Cap
              </p>
            </div>
            <div className=" text-center w-1/2">
              <p className=" text-orange-400 font-semibold">5% Burned</p>
              <h3 className=" text-white text-4xl font-bold">1M</h3>
              <p className=" text-gray-400">
                Market
                <br /> Cap
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className=" bg-gray-950 py-24 text-white">
        <div className=" flex flex-col justify-center items-center">
          <Image src={atp} />
          <Link href={"/"}>
            <button className=" mt-8 btn w-[150px] py-[10px] rounded-full uppercase text-sm font-medium text-white">
              buy $atp
            </button>
          </Link>
          <div className=" flex items-center gap-2 mt-12">
            <Link href={"/"}>
              <Image
                src={"/x-light.png"}
                alt="x image"
                width={100}
                height={100}
                className=" w-14"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/tel-light.png"}
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
  );
}
