import React from "react";

export default function Features2Section() {
  return (
    <section
      id="features2"
      className="section features"
      data-stellar-background-ratio="0.2"
    >
      <div className="container">
        <div className="section-header">
          <h2
            className="section-title wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Besoin de soumettre un <span>Projet?</span>
          </h2>
          <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
          <p
            className="section-subtitle wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            OHOLIAB SARL est fermement engagé dans sa mission de rendre les
            structures plus solides et plus durables.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-5 col-xs-12">
            <div
              className="content-left text-right wow fadeInLeft animated"
              data-wow-offset="10"
            >
              <div className="box-item left">
                <span className="icon">
                  <i className="lnr lnr-sun" />
                </span>
                <div className="text">
                  <h4>Pourquoi Choisir Zenith?</h4>
                  <p>
                    Le personnel d'ingénieurs, de support technique et de
                    spécialistes de l'installation sur le terrain de OHOLIAB
                    SARL s'intègre aux ingénieurs, architectes, concepteurs et
                    entrepreneurs pour fournir une gamme diversifiée de services
                    d'assistance à la conception de nos produits et
                    technologies. En termes simples, notre système de location
                    est le meilleur, car nous vous apportons une valeur
                    imbattable et une tranquillité d'esprit tout au long de
                    votre voyage en voiture de location. Nous utilisons toute
                    notre expérience et les expériences de milliers de nos
                    clients pour vous apporter la voiture dont vous avez besoin
                    et la qualité de service que vous désirez. Toujours au
                    meilleur prix. Mais ne nous croyez pas sur parole. Jetez un
                    œil sur ce que les gens réels pensent de Zenithressort.com.
                  </p>
                </div>
              </div>
              <div className="box-item left">
                <span className="icon">
                  <i className="lnr lnr-sun" />
                </span>
                <div className="text">
                  <h4>Nous Faisons Bouger le Commerce National</h4>
                  <p>
                    L'expertise de OHOLIAB SARL en matière de politique
                    commerciale nationale et internationale, des questions
                    douanières et du contrôle des exportations est largement
                    reconnue à Kinshasa et au-délà de ses frontières. OHOLIAB
                    est l'une des meilleures associations nationales dédiées
                    exclusivement à représenter les intérêts des exportateurs et
                    importateurs congolais. Nous sommes reconnus comme experts
                    techniques en ce qui concerne l'importation et l'exportation
                    quotidiennes de marchandises, y compris la facilitation du
                    commerce national.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-2 col-xs-1">
            {/*  <div
              className="show-box wow fadeInDown animated"
              data-wow-offset="10"
            >
              <img src="img/features/feature.jpg" alt="" />
            </div> */}
          </div>

          <div className="col-sm-5 col-xs-12">
            <div
              className="content-right text-left wow fadeInRight animated"
              data-wow-offset="10"
            >
              <div className="box-item right">
                <span className="icon">
                  <i className="lnr lnr-sun" />
                </span>
                <div className="text">
                  <h4>Ce que nous sommes!</h4>
                  <p>
                    Nous voulons rendre la location d'une voiture aussi simple
                    et personnelle que la vôtre. Louer une voiture vous apporte
                    la liberté, et nous vous aiderons à trouver la bonne voiture
                    pour vous à un prix avantageux. Mais nous avons bien plus
                    que cela. Nous sommes là pour rendre la location d'une
                    voiture beaucoup moins compliquée.
                  </p>
                </div>
              </div>
              <div className="box-item right">
                <span className="icon">
                  <i className="lnr lnr-sun" />
                </span>
                <div className="text">
                  <h4>Nous avons un personnel accueillant au comptoir!</h4>
                  <p>
                    Sympathique, serviable, professionnel ... la plupart de nos
                    clients ont quelque chose à dire sur l'attitude du personnel
                    de guichet! Toutes les critiques que nous publions sont
                    écrites par des clients réels, ce qui en fait un excellent
                    moyen de savoir à quoi vous attendre au comptoir.
                  </p>
                </div>
              </div>

              <div className="box-item right">
                <span className="icon">
                  <i className="lnr lnr-sun" />
                </span>
                <div className="text">
                  <h4>
                    Nous alimentons les voyages congolais depuis plusieurs
                    années déjà
                  </h4>
                  <p>
                    Depuis plusieurs années déjà, OHOLIAB développe des produits
                    de carburant de qualité pour amener les gens là où ils
                    doivent aller. Nous sommes heureux d'avoir joué un rôle
                    prépondérant dans certains des voyages les plus mémorables
                    du Congo et espérons continuer à faire partie de votre
                    voyage pour les décennies à venir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}