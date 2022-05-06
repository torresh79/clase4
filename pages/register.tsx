import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "@formspree/react";

import PeimentoLogo from "@/components/PeimentoLogo";
import Container from "@/components/Container";
import Transition from "@/components/Transition";

import { useAlert } from "providers/alert";

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  lastname: HTMLInputElement;
  phone: HTMLInputElement;
  company: HTMLInputElement;
  email: HTMLInputElement;
  emailConfirm: HTMLInputElement;
}

export default function RegisterPage() {
  const ref = useRef<HTMLFormElement>(null);
  const [valid, setValid] = useState(false);
  const router = useRouter();
  const [state, handleSubmit] = useForm("mknyvwqn");
  const { open } = useAlert();

  useEffect(() => {
    if (ref?.current && state.succeeded) {
      ref.current.reset();
      open("Gracias por su registro.");
    }
  }, [state.succeeded, open]);

  const handleChange = () => {
    if (ref?.current) {
      const { name, lastname, company, email, emailConfirm } = ref.current
        .elements as FormElements;
      setValid(
        name.checkValidity() &&
          lastname.checkValidity() &&
          company.checkValidity() &&
          email.checkValidity() &&
          emailConfirm.checkValidity()
      );
    } else {
      setValid(false);
    }
  };

  return (
    <Transition>
      <Container big className="p-7 sm:p-14">
        <div className="flex">
          <div className="hidden sm:block">
            <button
              onClick={router.back}
              className="border border-gray-dark text-lg font-bold text-gray-dark px-14 py-4 rounded-large transition-shadow hover:ring-1 ring-gray-dark"
            >
              Volver
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="mb-24">
              <PeimentoLogo />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl text-center font-bold mb-4 text-gray-dark-2">
                ¡Ya falta poco!
              </h1>
              <p className="sm:text-xl text-center text-gray-dark-2 mb-14">
                Dejanos tu información y nos contactaremos contigo a la
                brevedad.
              </p>
              <form ref={ref} onSubmit={handleSubmit} onChange={handleChange}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-16">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg text-gray-dark-2"
                    >
                      <span className="text-red">*</span> Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-gray-light w-full h-14 rounded-large p-3"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-lg text-gray-dark-2"
                    >
                      <span className="text-red">*</span> Apellido
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="bg-gray-light w-full h-14 rounded-large p-3"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg text-gray-dark-2"
                    >
                      <span className="text-red">*</span> Número de teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-gray-light w-full h-14 rounded-large p-3"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-lg text-gray-dark-2"
                    >
                      <span className="text-red">*</span> Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="bg-gray-light w-full h-14 rounded-large p-3"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg text-gray-dark-2"
                    >
                      <span className="text-red">*</span> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-gray-light w-full h-14 rounded-large p-3"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="emailConfirm"
                      className="block text-lg text-gray-dark-2"
                    >
                      <span className="text-red">*</span> Confirmar email
                    </label>
                    <input
                      type="email"
                      id="emailConfirm"
                      name="emailConfirm"
                      className="bg-gray-light w-full h-14 rounded-large p-3"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-10">
                  <button
                    type="submit"
                    disabled={!valid || state.submitting}
                    className="bg-purple-primary hover:bg-purple-primary/80 transition-colors rounded-large text-white text-lg font-bold px-8 py-4 disabled:opacity-30"
                  >
                    Contáctenme
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Transition>
  );
}
