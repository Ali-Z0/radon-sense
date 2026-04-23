export default function RadonSenseLanding() {
  const stats = [
    { label: 'Danger invisible', value: '24h/24' },
    { label: 'Lecture simple', value: '1 interface' },
    { label: 'Action concrète', value: 'alertes + conseils' },
  ];

  const sections = [
    {
      title: 'Le problème',
      text: 'Le radon est un gaz radioactif naturel, invisible et inodore, qui peut s’accumuler dans les bâtiments pendant des années sans être perçu.',
    },
    {
      title: 'Pourquoi c’est difficile',
      text: 'Le risque est mal compris, les variations dans le temps sont peu visibles, et les personnes concernées ne savent pas toujours quand agir ni comment interpréter une mesure.',
    },
    {
      title: 'La promesse',
      text: 'Radon Sense transforme une menace abstraite en informations lisibles, alertes simples et recommandations concrètes pour mieux prévenir.',
    },
    {
      title: 'Pour qui ?',
      text: 'Particuliers, propriétaires, locataires, régies, écoles, bureaux et petites structures qui veulent mieux surveiller la qualité de l’air intérieur.',
    },
  ];

  const features = [
    'Mesure continue du radon',
    'Historique visuel simple à lire',
    'Alertes en cas de dépassement',
    'Conseils d’aération et d’action',
    'Suivi des pièces ou zones critiques',
    'Interface compréhensible par des non-spécialistes',
    'Vue synthétique pour prise de décision rapide',
    'Suivi personnalisé des niveaux de radon',
  ];

  const benefits = [
    {
      title: 'Comprendre',
      text: 'Visualiser l’évolution du radon dans le temps au lieu d’une mesure ponctuelle difficile à interpréter.',
    },
    {
      title: 'Prévenir',
      text: 'Recevoir des alertes et des pistes d’action avant que le risque ne soit ignoré trop longtemps.',
    },
    {
      title: 'Décider',
      text: 'Aider les occupants et propriétaires à savoir quand ventiler, approfondir la mesure ou demander un diagnostic.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Mesurer',
      text: 'Le capteur suit l’évolution du radon dans l’espace intérieur.',
    },
    {
      step: '02',
      title: 'Visualiser',
      text: 'L’interface rend les niveaux et tendances immédiatement compréhensibles.',
    },
    {
      step: '03',
      title: 'Agir',
      text: 'Des recommandations simples aident à choisir la prochaine action utile.',
    },
  ];

  const faq = [
    {
      q: 'Pourquoi mesurer le radon en continu ?',
      a: 'Parce que les niveaux de radon varient selon les conditions comme l’aération, la météo ou l’usage des pièces. Une mesure continue permet de comprendre ces variations et d’agir au bon moment.',
    },
    {
      q: 'À partir de quel niveau faut-il agir ?',
      a: 'En Suisse, une valeur de référence est fixée à 300 Bq/m³. Cependant, des actions simples peuvent déjà être mises en place à des niveaux plus faibles pour limiter l’exposition.',
    },
    {
      q: 'Où placer un capteur de radon ?',
      a: 'Dans les pièces les plus exposées comme le sous-sol, la cave, le rez-de-chaussée ou les zones peu ventilées.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1b120d] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.25),transparent_30%),radial-gradient(circle_at_left,rgba(245,158,11,0.18),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-orange-300/25 bg-orange-400/10 px-4 py-1.5 text-sm text-orange-200 shadow-lg shadow-orange-950/20">
                Radon Sense · capteur et prévention du radon
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]">
                Rendez le risque radon <span className="text-orange-300">visible</span>,{' '}
                <span className="text-amber-200">compréhensible</span> et{' '}
                <span className="text-orange-400">actionnable</span>.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 lg:text-xl">
                Radon Sense est une solution de surveillance du radon pensée pour les espaces
                intérieurs. Elle transforme une menace invisible en données lisibles, alertes
                utiles et recommandations concrètes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-gradient-to-r from-orange-400 to-amber-300 px-6 py-3.5 text-sm font-semibold text-stone-950 shadow-xl shadow-orange-900/30 transition hover:scale-[1.02]"
                >
                  Rejoindre la liste d’intérêt
                </a>
                <a
                  href="#probleme"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Comprendre le problème
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                  >
                    <p className="text-2xl font-semibold text-orange-200">{item.value}</p>
                    <p className="mt-1 text-sm text-stone-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative rounded-[32px] border border-orange-300/15 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="absolute -right-3 -top-3 rounded-2xl border border-orange-200/20 bg-orange-400/15 px-4 py-2 text-sm font-medium text-orange-100 backdrop-blur">
                  Intérieur · surveillance active
                </div>

                <div className="rounded-[28px] border border-orange-300/15 bg-[#140d09] p-5">
                  <div className="grid gap-4 sm:grid-cols-[1.2fr,0.8fr]">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-400/10 to-amber-300/5 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm text-stone-400">Niveau radon</p>
                          <p className="mt-1 text-4xl font-semibold text-white">
                            146 <span className="text-xl text-stone-400">Bq/m³</span>
                          </p>
                        </div>
                        <div className="rounded-full bg-orange-400/15 px-3 py-1 text-sm font-medium text-orange-200">
                          Zone à surveiller
                        </div>
                      </div>

                      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="mb-3 flex items-end justify-between">
                          <p className="text-sm text-stone-400">Tendance 7 jours</p>
                          <p className="text-xs text-stone-500">Visualisation simplifiée</p>
                        </div>
                        <div className="flex h-40 items-end gap-2">
                          {[18, 24, 32, 28, 42, 55, 47, 66, 52, 60, 49, 72].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t-xl bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 shadow-lg shadow-orange-900/20"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-sm text-stone-400">Alerte</p>
                        <p className="mt-2 text-lg font-medium text-white">
                          Aérer davantage le sous-sol aujourd’hui.
                        </p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-sm text-stone-400">Action suggérée</p>
                        <p className="mt-2 text-lg font-medium text-white">
                          Comparer le niveau avant et après ventilation.
                        </p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-sm text-stone-400">Pièce la plus sensible</p>
                        <p className="mt-2 text-lg font-medium text-white">Sous-sol / cave</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm text-stone-400">Niveau moyen</p>
                      <p className="mt-1 text-xl font-semibold text-orange-200">128 Bq/m³</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm text-stone-400">Variation</p>
                      <p className="mt-1 text-xl font-semibold text-amber-200">+12%</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm text-stone-400">Statut</p>
                      <p className="mt-1 text-xl font-semibold text-orange-100">À suivre</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="probleme" className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-sm text-orange-200">
            Comprendre le risque radon
          </div>
          <h2 className="text-3xl font-semibold text-white lg:text-5xl">
            Le radon est invisible, mais ses effets sont réels.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-300">
            Présent naturellement dans le sol, il peut s’accumuler dans les bâtiments sans être
            détecté. Sans mesure adaptée, il est difficile de savoir quand le risque augmente et
            quelles actions entreprendre.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 shadow-xl shadow-black/10"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-400/30 to-amber-200/20" />
              <h3 className="text-xl font-semibold text-white">{section.title}</h3>
              <p className="mt-3 leading-7 text-stone-300">{section.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-sm text-orange-200">
              Fonctionnalités
            </div>
            <h2 className="text-3xl font-semibold text-white lg:text-4xl">
              Suivre, comprendre et agir
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              Une vue claire du niveau de radon, des tendances dans le temps et des actions simples
              à réaliser pour réduire le risque.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-[#130d09] px-4 py-4 text-left text-stone-200"
                >
                  <div className="mb-2 h-2 w-10 rounded-full bg-gradient-to-r from-orange-400 to-amber-200" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 inline-flex rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-sm text-orange-200">
              Valeur utilisateur
            </div>
            <h2 className="text-3xl font-semibold text-white lg:text-4xl">Pourquoi c’est utile</h2>
            <div className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-orange-300/10 bg-gradient-to-br from-orange-400/10 to-amber-200/5 p-6"
                >
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-stone-300">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8">
            <div className="mb-3 inline-flex rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-sm text-orange-200">
              Comment ça fonctionne
            </div>
            <h2 className="text-3xl font-semibold text-white">Un parcours simple en trois étapes</h2>
            <div className="mt-8 space-y-5">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-4 rounded-3xl border border-white/10 bg-[#130d09] p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-200 font-semibold text-stone-950">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-stone-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-orange-300/15 bg-gradient-to-b from-orange-400/10 to-amber-200/5 p-8">
            <div className="mb-3 inline-flex rounded-full border border-orange-200/20 bg-black/10 px-3 py-1 text-sm text-orange-100">
              Réassurance
            </div>
            <h2 className="text-3xl font-semibold text-white">Preuves et éléments de confiance</h2>
            <p className="mt-4 text-lg leading-8 text-stone-200/90">
              Radon Sense s’appuie sur une compréhension claire du risque et une approche orientée
              prévention, avec des informations accessibles et des actions concrètes.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Gaz radioactif naturel, invisible et inodore',
                'Mesure pensée pour les bâtiments et espaces occupés',
                'Interface lisible par des non-spécialistes',
                'Premières recommandations compréhensibles immédiatement',
                'Utilisation adaptée à une logique de prévention et de suivi',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4 text-stone-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-y border-white/10 bg-[#22160f]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-18 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-sm text-orange-200">
              Rester informé
            </div>

            <h2 className="text-3xl font-semibold text-white lg:text-5xl">
              Recevoir les prochaines informations
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
              Laissez vos coordonnées si vous souhaitez suivre l’évolution de Radon Sense, partager
              votre situation ou être contacté lorsque les premières versions seront disponibles.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-stone-400">Pour vous</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Mieux comprendre le risque
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-stone-400">Pour la suite</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Être recontacté au bon moment
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-orange-300/20 bg-gradient-to-b from-orange-400/10 to-amber-200/5 p-8 shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Formulaire de contact</h3>

            <p className="mt-3 text-stone-300">
              Laissez vos coordonnées pour suivre le projet ou partager vos besoins.
            </p>

            <form className="mt-6 space-y-4">
              <input
                className="w-full rounded-2xl border border-white/10 bg-[#120c09] px-4 py-3 text-white outline-none placeholder:text-stone-500"
                placeholder="Nom"
              />

              <input
                className="w-full rounded-2xl border border-white/10 bg-[#120c09] px-4 py-3 text-white outline-none placeholder:text-stone-500"
                placeholder="Email"
              />

              <select className="w-full rounded-2xl border border-white/10 bg-[#120c09] px-4 py-3 text-stone-300 outline-none">
                <option>Je suis un particulier</option>
                <option>Je suis propriétaire / régie</option>
                <option>Je représente une école / organisation</option>
              </select>

              <textarea
                className="min-h-32 w-full rounded-2xl border border-white/10 bg-[#120c09] px-4 py-3 text-white outline-none placeholder:text-stone-500"
                placeholder="Qu’attendriez-vous d’un outil comme Radon Sense ?"
              />

              <button
                type="button"
                className="w-full rounded-2xl bg-gradient-to-r from-orange-400 to-amber-300 px-5 py-3.5 font-semibold text-stone-950 shadow-lg shadow-orange-900/30"
              >
                Être informé du projet
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <div className="mb-3 inline-flex rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-sm text-orange-200">
            Questions fréquentes
          </div>
          <h2 className="text-3xl font-semibold text-white lg:text-4xl">Quelques réponses utiles</h2>
        </div>
        <div className="grid gap-4">
          {faq.map((item) => (
            <div key={item.q} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-white">{item.q}</h3>
              <p className="mt-3 leading-7 text-stone-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">Radon Sense</p>
              <p className="text-sm text-stone-400">
                Surveillance et prévention du radon dans les espaces intérieurs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}