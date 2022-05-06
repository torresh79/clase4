import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Contact from "@/components/Contact";
import Transition from "@/components/Transition";

import PhoneImg from "public/images/enterprise-phone.png";
import WorldImg from "public/images/enterprise-world.png";
import CardsImg from "public/images/enterprise-cards.png";

export default function EnterprisePage() {
  return (
    <>
      <Header dark />
      <Transition>
        <Container big>
          <div className="bg-[url('/images/enterprise-header.png')] bg-no-repeat bg-center pt-80 pb-44">
            <Container className="px-9 sm:px-2">
              <h1 className="text-white font-bold text-4xl sm:text-5xl leading-tight">
                Institucionales <br /> & BAAS
              </h1>
              <p className="sm:text-lg text-white mt-6">
                Todo lo que necesitas para tu negocio global,
                <br />
                en un solo lugar.
              </p>
              <Link href="/register">
                <a>
                  <button className="text-white bg-purple-primary hover:bg-purple-primary/80 px-9 py-3 font-bold rounded-large mt-9 transition-colors">
                    Abrir cuenta
                  </button>
                </a>
              </Link>
            </Container>
          </div>
        </Container>
        <div className="bg-grey-light">
          <Container className="mt-20 sm:mt-44 mb-24 sm:mb-80 px-9 sm:px-2">
            <div className="flex flex-col sm:flex-row sm:gap-16">
              <div className="flex-1 order-2 sm:order-1">
                <h3 className="text-purple-primary text-3xl sm:text-4xl font-bold">
                  Billeteras Electrónicas Multimonedas de Etiqueta Blanca
                </h3>
                <p className="text-gray-dark-2 text-lg mt-4 sm:mt-7">
                  Podrás ofrecer cuentas multividisas a tus clientes con tu
                  propia marca.
                </p>
              </div>
              <div className="flex-1 order-1 sm:order-2 mb-4 sm:mb-0">
                <Image src={PhoneImg} alt="phone" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-16 mt-16 sm:mt-36">
              <div className="flex-1 mb-4 sm:mb-0">
                <Image src={WorldImg} alt="world" />
              </div>
              <div className="flex-1">
                <h3 className="text-purple-primary text-3xl sm:text-4xl font-bold">
                  Servicios de Corresponsalía Bancaria Multimonedas para otras
                  entidades financieras
                </h3>
                <p className="text-gray-dark-2 text-lg mt-4 sm:mt-7">
                  Las alianzas de Peimento te ofrecen alcance global en tus
                  inversiones y transacciones internacionales para tus clientes.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-16 mt-16 sm:mt-36">
              <div className="flex-1 order-2 sm:order-1">
                <h3 className="text-purple-primary text-3xl sm:text-4xl font-bold">
                  Programa de tarjetas de Etiqueta Blanca
                </h3>
                <p className="text-gray-dark-2 text-lg mt-4 sm:mt-7">
                  Puedes emitir tarjetas con tus propios diseños y en diferentes
                  monedas.
                </p>
              </div>
              <div className="flex-1 order-1 sm:order-2 mb-4 sm:mb-0">
                <Image src={CardsImg} alt="cards" />
              </div>
            </div>
          </Container>
          <Container className="pb-40 px-9 sm:px-2">
            <Contact />
          </Container>
        </div>
      </Transition>
      <Footer />
    </>
  );
}
