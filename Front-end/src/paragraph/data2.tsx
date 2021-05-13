export interface chiestionar {
    questions:intrebari[];
    raspunsuri: number[];
}

export interface intrebari {
    intrebare: string;
    variante: string[];
}

const intrebari2: intrebari[] = [
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

const ranspunsuri2 = [1, 3, 2, 3]

const chestionar2: chiestionar = {
    questions: intrebari2,
    raspunsuri: ranspunsuri2,
}

const intrebari3: intrebari[] = [
    {
        intrebare: "Practicile specifice HRM pot fi utilizate pentru:",
        variante: [
            "a sprijini activitățile de gestionare a cunoștințelor;",
            "creșterea abilităților tehnice;",
            "creșterea motivației angajaților;"

        ]
    },
    {
        intrebare: "Cu cât angajații se identifică mai mult cu organizația pentru care lucrează, cu atât vor avea mai multe șanse să",
        variante: [
            "dezvolta un puternic sentiment de identitate cu angajatorul și colegii de muncă;",
            "vea un nivel ridicat de stimă de sine;",
            "dezvolta abilități de comunicare și muncă în echipă;"

        ]
    },
    {
        intrebare: "Conform Yalabik et al. (2017), oferirea unei formări adecvate lucrătorilor din domeniul cunoştinţelor poate fi o modalitate cheie de a contribui la dezvoltarea:",
        variante: [
            "Loialităţii angajaţilor;",
            "Cunoştinţelor angajaţilor;",
            "Relaţiilor interpersonale între angajaţi;"

        ]
    },
    {
        intrebare: "Conform Kase et al. (2009), unul dintre beneficiile formării legate de cunoştinţe este că facilitează dezvoltarea:",
        variante: [
            "Cunoştinţelor angajaţilor;",
            "Loialităţii angajaţilor;",
            "Relaţiilor interpersonale între angajaţi;"

        ]
    },
    {
        intrebare: "Activitatea care este bine organizată şi structurată pe intervale de timp se numeşte",
        variante: [
            "Formarea;",
            "Coaching-ul;",
            "Mentoratul;"
        ]
    },
    {
        intrebare: "Studiul lui Karkoulian et al. (2008) a avut ca rezultat un impact pozitiv asupra comportamentelor de împărtăşire de cunoştinţe. Ce activitate a fost studiată şi descrisă în cadrul acestui studiu ?",
        variante: [
            "Mentoratul;",
            "Leadershipul;",
            "Coaching-ul;"

        ]
    },
    {
        intrebare: "Prin recrutarea de personal, ale căror valori și norme sunt compatibile cu cele care există într-o organizație, noii angajați ar putea:",
        variante: [
            "dezvolta un puternic sentiment de identitate cu angajatorul și colegii de muncă;",
            "avea un nivel ridicat de stimă de sine;",
            "dezvolta abilități de comunicare și muncă în echipă;"

        ]
    },
    {
        intrebare: "Recompensele financiare sunt:",
        variante: [
            "asociate pozitiv cu împărtășirea cunoștințelor;",
            "asociate negativ cu împărtășirea cunoștințelor;",
            "asociate pozitiv cu recunoașterea cunoștințelor;"
        ]
    },
    {
        intrebare: "Motivarea financiară este de tip:",
        variante: [
            "extrinsec;",
            "intrinsec;",
            "nici una dintre variante;"
        ]
    },
    {
        intrebare: "Participarea la activitățile de gestionare a cunoștințelor este efectuată dacă:",
        variante: [
            "Sistemele de recompensare sunt competitive;",
            "Sistemele de recompensare sunt orientate pe grup;",
            "Sistemele de recompensare sunt orientate pe individ;"
        ]
    },
    {
        intrebare: "Recrutarea persoanelor care se potrivesc cu cultura și valorile existente în organizație are vreun efect asupra schimbului de cunoștințe?:",
        variante: [
            "Are efect negativ, aceste persoane nu promovează schimbul de cunoștințe;",
            "Are efect pozitiv, aceste persoane promovează schimbul de cunoștințe;",
            "Recrutarea unor astfel de persoane nu are niciun efect asupra schimbului de cunoștințe;"
        ]
    },
    {
        intrebare: "Cum se pot utiliza testele de personalitate care au ca scop identificarea atitudini pozitive de schimb de cunoștințe?:",
        variante: [
            "Se pot folosi fără niciun fel de problemă în orice context, deoarece sunt mereu eficiente;",
            "Nu se pot folosi niciodată deoarece nu sunt eficiente;",
            "Se pot folosi cu prudență, deoarece rezultatele studiilor diferă;"
        ]
    },
    {
        intrebare: "Care sunt trei caracteristici cheie ale muncii, din perspectiva job design-ului?:",
        variante: [
            "Interesantă și captivantă; nivel ridicat de autonomie; colaborare intra-personală;",
            "Nivel scăzut de autonomie; colaborare intra-personală; interesantă și captivantă;",
            "Lipsa colaborării intra-personale; nivel ridicat de autonomie; interesantă și captivantă;"
        ]
    },
    {
        intrebare: "La ce se referă sensibilitățile lingvistice în recrutare?:",
        variante: [
            "Competența lingvistică a personalului de la sediul societății-mamă în limba filialelor;",
            "Competența lingvistică a limbii de bază utilizate la sediul central a personalului din filialele;",
            "Atât competența lingvistică a personalului de la sediul societății-mamă în limba filialelor, cât și competența lingvistică a limbii de bază utilizate la sediul central a personalului din filialele;"
        ]
    },
]

const ranspunsuri3 = [1, 1, 1, 3, 2, 3, 1, 1, 1, 3, 2, 3, 1, 3];

const chestionar3: chiestionar = {
    questions: intrebari3,
    raspunsuri: ranspunsuri3,
}

const intrebari4: intrebari[] = [
    {
        intrebare: "Trei dintre cei mai importanți factori care influențează angajamentul dintre angajați sunt:",
        variante: [
            "calitatea reputației organizației, existența justiției procedurale și oferirea suportului pentru cei care nu sunt atât de angajați în muncă;",
            "liderul autocrat, transformational și suportiv;",
            "stilul de comunicare din organizație, mediul de învățare și atitudinea colegilor;"
        ]
    },
    {
        intrebare: "Care este cea mai eficientă modalitate prin care putem construi loialitatea organizațională:",
        variante: [
            "Financiară;",
            "Instrumentală;",
            "Bazată pe identificare;"
        ]
    },
    {
        intrebare: "Care sunt strategiile de dezvoltare ale loialității bazate pe identificare?:",
        variante: [
            "Instituțională, comunitară, de integrare socială;",
            "Instituțională, financiară, bazată pe recompensare, comunitară;",
            "Instituțională, financiară, comunitară, bazată pe recompensare, de integrare socială;"
        ]
    },
    {
        intrebare: "Loialitatea bazată pe identificare poate fi înțeleasă prin:",
        variante: [
            "faptul că angajatul are un puternic sentiment de identitate ca membru al organizației și se identifică cu scopurile și obiectivele instituției din care face parte;",
            "faptul că angajatul primește recompense și beneficii materiale prin care își dezvoltă un puternic sentiment de apartenență;",
            "combinare a strategiilor financiare cu cele bazate pe integrarea socială;"
        ]
    },
];

const raspunsuri4 = [1, 3, 1, 1];

const chestionar4: chiestionar = {
    questions: intrebari4,
    raspunsuri: raspunsuri4,
}

const chestionar1: chiestionar = {
    questions: [],
    raspunsuri: [],
}

const chestionar5: chiestionar = {
    questions: [],
    raspunsuri: [],
}

export default [chestionar1, chestionar2, chestionar3, chestionar4, chestionar5];
