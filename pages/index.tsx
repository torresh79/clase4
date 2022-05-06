import Image from "next/image";
import {
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
} from "@/components/icons";
import PeimentoLogo from "@/components/PeimentoLogoSmall";
import CardsImg from "public/images/cards-header-home.png";

export default function ComingSoonPage() {
  return (
    <main className="h-screen bg-purple-primary bg-[url('/images/background-coming-soon.png')] bg-no-repeat bg-cover bg-center pt-16 p-7">
      <div className="h-full flex flex-col items-center">
        <div className="max-w-3xl flex-1 flex flex-col items-center">
          <div className="w-11 sm:w-14">
            <PeimentoLogo fill />
          </div>
          <h1 className="text-white text-3xl sm:text-5xl mt-20">COMING SOON</h1>
          <h3 className="text-white sm:text-3xl font-bold text-center mt-3 sm:mt-6">
            Somos la unión entre vos, tus billeteras virtuales y tus bancos
            tradicionales
          </h3>
          <div className="mt-9 mb-20">
            <Image src={CardsImg} quality={100} priority alt="cards" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-7">
            <a href="">
              <LinkedinIcon />
            </a>
            <a
              href="https://www.facebook.com/peimento"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://twitter.com/peimento"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.instagram.com/peimento"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a href="">
              <DiscordIcon />
            </a>
          </div>
          <p className="text-white text-xs sm:text-sm p-4 text-center">
            Peimento © 2021 - Términos y Condiciones - Políticas de Privacidad
          </p>
        </div>
      </div>
    </main>
  );
}
