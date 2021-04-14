export interface chiestionar {
    questions:intrebari[];
    raspunsuri: number[];
}

export interface intrebari {
    intrebare: string;
    variante: string[];
}

const intrebari1: intrebari[] = [
    {
        intrebare: "Politicile HRM au potențialul de a juca un rol crucial care influențează modul în care angajații:",
        variante: [
            "aleg să își împărtășească cunoștințele",
            "își manifestă interesele și valorile în cadrul echipei",
            "obțin recompense în cadrul organizației.,"

        ]
    },
    {
        intrebare: "Cu cât angajații se identifică mai mult cu organizația pentru care lucrează, cu atât vor avea mai multe șanse să",
        variante: [
            " promoveze la locul de muncă;",
            "primească bonusuri salariale;",
            "participe la activități de management al cunoștințelor organizaționale"

        ]
    },
    {
        intrebare: "Conform Robertson și O'Malley Hammersley (2000) nivelurile de angajament organizațional au afectat:",
        variante: [
            " interesele și valorile angajaților;",
            "memoria și atitudinea angajaților;",
            "starea de bine și performanța la locul de muncă a angajaților."

        ]
    },
    {
        intrebare: "Flinchbaugh et al (2016) susțin faptul că utilizarea practicilor de muncă cu implicare ridicată reprezintă o modalitate potențial utilă de a spori:",
        variante: [
            "coeziunea și schimbul de cunoștințe în cadrul echipei;",
            "încrederea și starea de bine în cadrul echipei;",
            "nivelurile de schimb de cunoștințe și performanța echipei."

        ]
    },
]

const ranspunsuri1 = [1, 3, 2, 3]

const chestionar1: chiestionar = {
    questions: intrebari1,
    raspunsuri: ranspunsuri1,
}

export default [chestionar1];