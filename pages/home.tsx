import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Card from "@/components/Card";
import FAQ from "@/components/Faq";
import Transition from "@/components/Transition";
import {
  ExchangeIcon,
  EarthIcon,
  CoinsIcon,
  SwapBoxIcon,
  WalletIcon,
  SecurePaymentIcon,
  CheckCircleIcon,
} from "@/components/icons";

import HomeWomenImg from "public/images/home-women.png";
import HomeWomenMobileImg from "public/images/home-women-mobile.jpg";
import HomeCardImg from "public/images/home-card.png";
import CardsImg from "public/images/cards-header-home.png";

export default function HomePage() {
  return (
    <>
      <Header />
      <Transition>
        <div className="relative h-[770px]">
          <div className="bg-purple-primary bg-[url('/images/background-header-home.png')] bg-no-repeat bg-cover absolute top-[-90px] left-0 right-0 pt-32 sm:pt-64">
            <Container className="flex p-9 sm:p-2">
              <div className="flex-1">
                <h1 className="text-white font-bold text-3xl sm:text-5xl leading-tight text-center sm:text-left">
                  Somos la unión entre vos, tus billeteras virtuales y tus
                  bancos tradicionales
                </h1>
                <div className="sm:hidden mt-10">
                  <Image src={CardsImg} quality={100} priority alt="cards" />
                </div>
                <p className="text-lg text-white mt-14">
                  Peimento es el puente de conexión en transferencias con bancos
                  tradicionales y bancas de inversión. Con tu cuenta IBAN podrás
                  elegir tus monedas, eficientizar transacciones y disminuir
                  costos.
                </p>
                <Link href="/register">
                  <a>
                    <button className="text-gray-dark bg-green-lighter hover:bg-green-lighter/60 transition-colors text-base sm:text-lg font-bold px-11 py-4 rounded-large mt-5 sm:mt-16 sm:mb-40">
                      Abrir cuenta
                    </button>
                  </a>
                </Link>
              </div>
              <div className="flex-1 hidden sm:block">
                <Image src={CardsImg} quality={100} priority alt="cards" />
              </div>
            </Container>
          </div>
        </div>
        <div className="bg-gray-light pt-48 sm:pt-60 pb-20">
          <Container className="p-9 sm:p-2">
            <h2 className="text-xl sm:text-3xl text-gray-dark text-center font-bold mb-8 sm:mb-20">
              Peimento proporciona cuentas en distintas monedas conectadas a las
              principales redes de pago
            </h2>
            <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 mb-28 sm:mb-60">
              <Card
                icon={<ExchangeIcon />}
                title="Pagos SEPA"
                text="Con tu cuenta basada en España puedes transferir fondos dentro de la unión Europea a bajos costos y de forma inmediata."
              />
              <Card
                icon={<EarthIcon />}
                title="Pagos Swift"
                text="Peimento te permite realizar pagos internacionales a más de 150 países."
              />
              <Card
                icon={<CoinsIcon />}
                title="Divisa local en las principales monedas"
                text="Recibe pagos en tu divisa local con tu propio IBAN sin comisiones por cambio de divisa."
              />
              <Card
                icon={<SwapBoxIcon />}
                title="Conversión FX"
                text="Cambia de moneda en tiempo real con tarifas totalmente transparentes. Peimento ofrece cotizaciones instantáneas en línea, sin cargos ocultos para diversificar ahorros en diferentes divisas y enviar pagos directos sin necesidad de pagar comisiones a bancos intermediarios."
              />
            </div>
            <div className="block sm:flex pb-20 sm:pb-0">
              <div className="sm:basis-2/5 pt-14">
                <h3 className="text-3xl sm:text-4xl text-gray-dark font-bold mb-7">
                  Las 24 horas del día, los 7 días de la semana. Fácil de
                  enviar, fácil de recibir.
                </h3>
                <p className="text-lg text-gray-dark-2">
                  Administra tu cuenta desde cualquier lugar del mundo, a través
                  del móvil y web.
                </p>
              </div>
              <div className="relative flex-1 hidden sm:block">
                <Image src={HomeWomenImg} alt="women" />
              </div>
            </div>
          </Container>
          <div className="relative sm:hidden min-h-[580px]">
            <Image
              src={HomeWomenMobileImg}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              alt="women"
            />
          </div>
        </div>
        <div className="bg-white">
          <Container className="sm:pt-24 pb-28 sm:pb-56 px-9 sm:px-2">
            <div className="flex mb-28">
              <div className="flex-1 pt-20 pr-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-dark">
                  Elige tu tarjeta vinculada a la moneda que prefieras
                </h2>
                <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p className="flex items-center text-lg font-bold text-green-primary">
                    <div className="mr-3">
                      <CheckCircleIcon />
                    </div>
                    Segura
                  </p>
                  <p className="flex items-center text-lg font-bold text-green-primary">
                    <div className="mr-3">
                      <CheckCircleIcon />
                    </div>
                    Internacional
                  </p>
                  <p className="flex items-center text-lg font-bold text-green-primary">
                    <div className="mr-3">
                      <CheckCircleIcon />
                    </div>
                    Bajo costo
                  </p>
                  <p className="flex items-center text-lg font-bold text-green-primary">
                    <div className="mr-3">
                      <CheckCircleIcon />
                    </div>
                    Virtual
                  </p>
                </div>
              </div>
              <div className="hidden sm:block">
                <Image src={HomeCardImg} alt="cards" />
              </div>
            </div>
            <div className="flex flex-col gap-24 sm:flex-row sm:gap-0 justify-around">
              <div className="flex flex-col items-center max-w-md">
                <WalletIcon />
                <h2 className="mt-5 sm:mt-14 mb-6 sm:mb-12 text-3xl sm:text-4xl font-bold text-gray-dark">
                  Enlaces
                </h2>
                <p className="text-lg text-gray-dark-2 text-center">
                  Tu cuenta IBAN como en cualquier otro banco Europeo. Enlaza
                  tus billeteras de Paypal, Square, Payoneer, Skrill,
                  Transferwise, Paxum y Airtm.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <SecurePaymentIcon />
                <h2 className="mt-5 sm:mt-14 mb-6 sm:mb-12 text-3xl sm:text-4xl font-bold text-gray-dark">
                  Seguridad
                </h2>
                <p className="text-lg text-gray-dark-2 text-center max-w-md">
                  Tu dinero esta protegido por nuestros socios bancarios
                  globales y tu IBAN respaldado por el Banco de España. Esto
                  proporciona una seguridad total de los fondos bajo cualquier
                  circunstancia.
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-gray-light pt-28 sm:pt-56 pb-[450px]">
          <Container className="p-9 sm:p-2">
            <FAQ />
          </Container>
        </div>
      </Transition>
      <Footer />
    </>
  );
}
