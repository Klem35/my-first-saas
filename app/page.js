import Link from "next/link";
import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import productDemo from "./productDemo.jpeg";
import Image from "next/image";

export default function Home() {
  const isLoggedIn = true;
  const name = "Clem";
  const pricingFeaturesList = ["A", "B", "C"];
  return (
    <main>
      {/* HEADER */}
      <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      {/* HERO */}
      <section className="mx-auto px-8 text-center lg:text-left py-32 max-w-5xl flex flex-col lg:flex-row gap-14 items-center lg:items-start">
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <Image src={productDemo} alt="productDemo" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">
            My first saas
          </h1>
          <div className="opacity-90 mb-10"></div>

          <ButtonLogin isLoggedIn={isLoggedIn} name={name}>
            This is a children
          </ButtonLogin>
        </div>
      </section>
      {/* PRICING */}
      <section className="bg-base-200">
        <div className="mx-auto px-8 py-32 max-w-3xl">
          <p className="text-sm uppercase text-center font-medium text-primary">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>
          <div className="card bg-base-100 w-96 shadow-xl mx-auto">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <div className="flex gap-2 items-baseline">
                <div className="text-4xl font-black">19$</div>
                <div className="uppercase text-sm font-medium opacity-60">
                  /month
                </div>
              </div>
              <ul className="space-y-2">
                {pricingFeaturesList.map((priceItem) => {
                  return (
                    <li className="flex gap-2" key={priceItem}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {priceItem}
                    </li>
                  );
                })}
              </ul>
              <div className="card-actions justify-center">
                <ButtonLogin
                  isLoggedIn={isLoggedIn}
                  name={name}
                  extraStyle="w-full"
                >
                  This is a children
                </ButtonLogin>

                <button className="btn btn-primary btn-wide">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-base-200" id="faq">
        <div className="mx-auto px-8 py-32 max-w-3xl">
          <p className="text-sm uppercase text-center font-medium text-primary">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently asked questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              { question: "Q", answer: "A" },
              { question: "Q", answer: "A" },
              { question: "Q", answer: "A" },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
