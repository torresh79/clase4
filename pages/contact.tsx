import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Contact from "@/components/Contact";
import Transition from "@/components/Transition";
import FAQ from "@/components/Faq";

export default function ContactPage() {
  return (
    <>
      <Header dark />
      <Transition>
        <Container big className="pb-40">
          <div className="sm:flex">
            <iframe
              className="flex-1 basis-1/2 w-full h-[490px] sm:w-auto sm:h-auto"
              loading="lazy"
              src="https://maps.google.com/maps?q=Calle%20Serrano%2045,%203%C2%BA%20A,%2028001,%20Madrid&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen
            />
            <div className="flex-1 basis-1/2 bg-purple-primary px-9 py-12 sm:px-20 sm:py-16">
              <Contact vertical />
            </div>
          </div>
          <Container className="px-9 sm:px-2">
            <div className="sm:flex items-baseline mt-28 mb-48">
              <h3 className="text-5xl text-black/40 font-bold mr-20">Email</h3>
              <a
                href="mailto:info@peimento.com"
                className="text-3xl text-purple-primary"
              >
                info@peimento.com
              </a>
            </div>
            <FAQ />
          </Container>
        </Container>
      </Transition>
      <Footer />
    </>
  );
}
