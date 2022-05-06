import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Transition from "@/components/Transition";
import {
  CoinsIcon,
  BankCardIcon,
  HandIcon,
  EarthIcon,
} from "@/components/icons";

import RetailPhoneImg from "public/images/retail-phone.png";

export default function RetailPage() {
  return (
    <>
      <Header dark />
      <Transition className="bg-gray-light">
        <Container big>
          <div className="bg-[url('/images/retail-header.png')] bg-no-repeat bg-center bg-cover">
            <Container className="sm:pt-40 pb-24 sm:pb-72 px-9 sm:px-2">
              <h1 className="text-white font-bold text-3xl sm:text-5xl leading-tight pt-72 sm:pt-0">
                Tu nuevo banco <br className="hidden sm:inline" /> digital
                favorito
              </h1>
              <p className="sm:text-lg text-white mt-10">
                Administra tu dinero de forma transparente,
                <br className="hidden sm:inline" />
                eficiente y sin fronteras.
              </p>
              <Link href="/register">
                <a>
                  <button className="text-gray-dark bg-green-lighter hover:bg-green-lighter/60 transition-colors text-lg font-bold px-11 py-4 rounded-large mt-10">
                    Abrir cuenta
                  </button>
                </a>
              </Link>
            </Container>
          </div>
        </Container>
        <Container className="pt-24 pb-20 sm:pb-40 px-9 sm:px-2">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-dark text-center">
            Conoce nuestros servicios
          </h2>
          <p className="text-lg text-gray-dark-2 text-center mt-5 sm:mt-10 mb-20 sm:mb-32">
            Nuestra misión es ofrecerte acceso a una súper aplicación
            <br className="hidden sm:inline" />
            financiera verdaderamente global.
          </p>
          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2">
            <Card
              icon={<CoinsIcon />}
              title="Cuentas IBAN"
              text="Las cuentas de Peimento permiten que las operaciones de compra y venta de monedas distintas del euro se liquiden en su divisa correspondiente, sin escalas ni comisiones."
            />
            <Card
              icon={<BankCardIcon />}
              title="Tarjetas de Débito y Prepagas"
              text="Paga con tus tarjetas de forma cómoda y segura donde quiera que estés. Conecta tus tarjetas a Apple o Google pay para pagar de la forma mas rapida que existe."
            />
            <Card
              icon={<HandIcon />}
              title="Pagos en línea para empresas"
              text="Acepta pagos y envía dinero en línea, de forma fácil y global."
            />
            <Card
              icon={<EarthIcon />}
              title="Transferencias Internacionales"
              text="Realiza tus pagos internacionales sin complicaciones, sin fronteras y de forma programable."
            />
          </div>
        </Container>
        <div className="bg-green-lighter/20 sm:h-[700px]">
          <Container className="pt-12 sm:pt-20 pb-12 sm:pb-24 px-9 sm:px-2">
            <div className="sm:flex justify-center items-center">
              <div className="max-w-sm sm:mr-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-green-primary text-center sm:text-left">
                  Siempre contigo, estés donde estés
                </h2>
                <p className="text-lg text-gray-dark-2 mt-4 sm:mt-10 text-center sm:text-left">
                  Realiza todas tus operaciones de forma simple y rápida desde
                  tu celular.
                </p>
                <div className="flex justify-center sm:block">
                  <Link href="/register">
                    <a>
                      <button className="text-gray-dark bg-green-lighter hover:bg-green-lighter/60 transition-colors text-lg font-bold px-11 py-4 rounded-large mt-6 sm:mt-10">
                        Abrir cuenta
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center sm:block mt-8 sm:mt-0">
                <Image src={RetailPhoneImg} alt="phone" />
              </div>
            </div>
          </Container>
        </div>
        <Container className="pt-16 sm:pt-52 pb-16 sm:pb-[415px] px-9 sm:px-2">
          <Contact />
        </Container>
      </Transition>
      <Footer />
    </>
  );
}
