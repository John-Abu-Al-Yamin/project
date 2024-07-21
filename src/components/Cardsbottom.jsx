const Cardsbottom = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="p-6 h-64 rounded-lg bg-orange-500 text-center">
          <h3 className="mb-3">DIDATTICA</h3>
          <p className="text-white">
            Lauree e lauree magistrali Scuola superiore di studi avanzati Corsi
            singoli Corsi di dottorato Corsi di specializzazione Scuola di
            ingegneria aerospaziale Master Corsi di alta formazione Corsi di
            formazione Summer and winter school Altre opportunità formative
          </p>
        </div>
        <div className="p-6 h-64 rounded-lg bg-teal-500 text-center">
          <h3 className="mb-3">INTERNAZIONALE</h3>
          <p className="text-white">
            Andare all'estero Finanziamenti di Ateneo Scegliere Sapienza
            Cooperazione Internazionale
          </p>
        </div>
        <div className="p-6 h-64 rounded-lg bg-green-400 text-center">
          <h3 className="mb-3">RICECA SCIENTNIFICA</h3>
          <p className="text-white">
            Governance Ricerca Opportunità e finanziamenti PNRR Grant office
            Valutazione della ricerca Cooperazione scientifica e Reti
            Informazioni e supporto
          </p>
        </div>
        <div className="p-6 h-64 rounded-lg bg-blue-500 text-center">
          <h3 className="mb-3">ATENEO</h3>
          <p className="text-white">
            Chi siamo Strutture Governo Amministrazione Bandi di gara Concorsi
            Amministrazione Trasparente Bilanci Fondazione Atti di notifica
          </p>
        </div>
      </div>

      <nav
        class="flex px-5 py-3 my-2 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Contatti
            </a>
          </li>
          <li>
            <div class="flex items-center">
              
              <a
                href="#"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                URP
              </a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Media
              </a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Accessibilta
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Cardsbottom;
