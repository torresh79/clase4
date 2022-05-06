import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Contact from "@/components/Contact";
import Transition from "@/components/Transition";
import AboutUsImg from "public/images/aboutus.png";

export default function AbousUsPage() {
  return (
    <>
      <Header dark />
      <Transition className="bg-gray-light">
        <Container className="pt-20 pb-24 sm:pb-48 px-9 sm:px-2">
          <div className="sm:flex mb-48">
            <div className="sm:max-w-2xl sm:mr-12">
              <h1 className="text-4xl sm:text-5xl leading-tight font-bold text-gray-dark mb-5">
                Nos caracteriza la transparencia, rapidez y confiabilidad.
              </h1>
              <div className="sm:hidden mt-5 mb-9">
                <Image src={AboutUsImg} alt="background" priority />
              </div>
              <p className="text-base sm:text-lg text-gray-dark">
                Somos un grupo con más de 15 años de experiencia en
                corresponsalía bancaria, transferencias internacionales, pagos y
                servicios financieros institucionales.
                <br />
                <br />
                Queremos traspasar fronteras territoriales financieras, para que
                nuestros clientes realicen sus transacciones monetarias desde
                cualquier lugar.
              </p>
            </div>
            <div className="hidden sm:block">
              <Image src={AboutUsImg} alt="background" priority />
            </div>
          </div>
          <Contact />
        </Container>
      </Transition>
      <Footer />
    </>
  );
}
