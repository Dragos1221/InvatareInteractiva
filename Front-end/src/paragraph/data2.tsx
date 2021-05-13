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

const intrebari2: intrebari[] =[
    {
    intrebare:"Practicile specifice HRM pot fi utilizate pentru",
    variante:["a sprijini activitățile de gestionare a cunoștințelor","creșterea abilităților tehnice"," creșterea motivației angajaților"]
    },
    {

        intrebare:"Prin recrutarea de personal, ale căror valori și norme sunt compatibile cu cele care există într-o organizație, noii angajați ar putea",
        variante:["dezvolta un puternic sentiment de identitate cu angajatorul și colegii de muncă;"," avea un nivel ridicat de stimă de sine","dezvolta abilități de comunicare și muncă în echipă"],
    },  
    {
        intrebare:"Conform Yalabik et al. (2017), oferirea unei formări adecvate lucrătorilor din domeniul cunoştinţelor poate fi o modalitate cheie de a contribui la dezvoltarea :",
        variante:["Loialităţii angajaţilor","Cunoştinţelor angajaţilor","Relaţiilor interpersonale între angajaţi"]

    },
    {
        intrebare:"Conform Kase et al. (2009), unul dintre beneficiile formării legate de cunoştinţe este că facilitează dezvoltarea :",
        variante:["Cunoştinţelor angajaţilor","Loialităţii angajaţilor"," Relaţiilor interpersonale între angajaţi"]
    }]
    const ranspunsuri2=[1,1,1,3];
    const chestionar2: chiestionar = {
        questions: intrebari2,
        raspunsuri: ranspunsuri2,
    }

export default [{questions:[],raspunsuri:[]},chestionar1,chestionar2];