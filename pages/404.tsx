import Link from "next/link";

import Header from "@/components/Header";
import Transition from "@/components/Transition";

export default function Error404Page() {
  return (
    <>
      <Header dark />
      <Transition>
        <div className="bg-gray-light px-12 py-10">
          <h3 className="text-3xl text-purple-primary text-center">
            404 ERROR PAGE
          </h3>
        </div>
        <div className="mx-auto max-w-sm mt-40">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl text-gray-dark-2 font-bold mb-4">Oops!</h1>
            <p className="text-xl text-gray-dark-2 mb-14">
              Sorry, that page can&apos;t be found.
            </p>
            <Link href="/">
              <a>
                <button className="w-full border-2 border-purple-primary rounded-large text-purple-primary text-lg text-center font-bold px-6 py-4 hover:ring-1 ring-purple-primary transition-shadow">
                  Go to homepage
                </button>
              </a>
            </Link>
          </div>
        </div>
      </Transition>
    </>
  );
}
