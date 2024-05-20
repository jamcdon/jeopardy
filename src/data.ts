
type finalJeopardyQuestion = {
    question: string,
    answer: string
}

export const finalJeopardyData: finalJeopardyQuestion = {
    question: "test",
    answer: "also a test"
}

type question = {
    question: string,
    answer: string,
    picture: string | null,
    doubleJeopardy: boolean,
    price: number
}

type board = {
    [key: string]: Array<question>
}

export const board1data: board = {
    "Indy 500":
    [
        {
            question: "While named after the amount of miles in the race, this is how many laps Indycar drivers complete",
            answer: "200",
            picture: null,
            doubleJeopardy: false,
            price: 200
        },
        {
            question: "On the Indiana state quarter, this phrase was printed along a picture of an indycar",
            answer: "Crossroads of America",
            picture: "quarter.png",
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This day is named after an older car part that mixes fuel and oxygen",
            answer: "Carb Day",
            picture: null,
            doubleJeopardy: false,
            price: 600
        },
        {
            question: "This game was played at last year's Indy 500 party",
            answer: "Family Feud",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "Going by his stage name, DJ Diesel, this artist performed at last year's snake pit",
            answer: "Shaq",
            picture: null,
            doubleJeopardy: false,
            price: 1000
        }
    ],
    "Flashback: Nintendo": [
        {
            question: "Nintendo's popular mascot, Mario, first appeared in this game",
            answer: "Donkey Kong (1981)",
            picture: null,
            doubleJeopardy: false,
            price: 200
        },
        {
            question: "This is the name of the map in the hit Wii Game, Wii Sports Resort",
            answer: "Wuhu Island",
            picture: "wuhu.png",
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This smash bros game was the first to introduce Ice Climbers",
            answer: "Super Smash Bros. Melee",
            picture: null,
            doubleJeopardy: false,
            price: 600
        },
        {
            question: "This was Nintendo's first portable gaming device, named after its two features",
            answer: "Game & Watch",
            picture: "gameandwatch",
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "This add-on was released for the N64 to play games via disc rather than cartridge",
            answer: "64DD",
            picture: null,
            doubleJeopardy: false,
            price: 1000
        }
    ],
    "Generational Slang": [
        {
            question: "This term originated from a game in which 6 players try to complete tasks while being hunted by two imposters",
            answer: "sus",
            picture: null,
            doubleJeopardy: true,
            price: 200
        },
        {
            question: "Taking off in the late 2010s, this slang term is used for a marijuana vaporizer",
            answer: "Penjamin",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "Made famous in a song of the same name, this term means you support someone or something",
            answer: "Stan",
            picture: null,
            doubleJeopardy: false,
            price: 600
        },
        {
            question: "While this phrase gained popularity in RuPaul's Drag Race, it's origins come from the 1995 film Friday",
            answer: "Bye Felecia",
            picture: "friday.png",
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "While younger generations may call them “12” or “opps”, the baby boomer generation used this term to describe police, best known for its use in the 2007 buddy-cop movie title hot ____",
            answer: "Fuzz",
            picture: "hotfuzz.png",
            doubleJeopardy: false,
            price: 1000
        }
    ],
    "2000s Pop": [
        {
            question: "This duo was famously sampled in the kanye west song “stronger”",
            answer: "Daft Punk",
            picture: null,
            doubleJeopardy: false,
            price: 200
        },
        {
            question: "It was never this group's intention to brag when they released Misery Business ",
            answer: "Paramore",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This group wanted to let you know that you were so 2000-late",
            answer: "The Black Eyed Peas",
            picture: null,
            doubleJeopardy: false,
            price: 600
        },
        {
            question: "This group magically appeared on your ipod in 2014",
            answer: "U2",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "This radio hit, “Crazy” was made by Danger Mouse and former Goodie mob member, CeeLo Green, under this name",
            answer: "Gnarls Barkley",
            picture: null,
            doubleJeopardy: false,
            price: 1000
        }
    ],
    "RIP IUPUI": [
        {
            question: "This sex position is also the year that IUPUI was founded",
            answer: "69",
            picture: null,
            doubleJeopardy: false,
            price: 200
        },
        {
            question: "Built in 1928, this dorm hall was originally opened as a residence for nurses",
            answer: "Ball Hall",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "These are the three jaguar mascots of IUPUI",
            answer: "Jawz, Jazzy, Jinx",
            picture: "jags.jpg",
            doubleJeopardy: false,
            price: 600
        },
        {
            question: "Notable Herron Alumni, Norman Bridwell, is known as the author and illustrator of this childrens book series",
            answer: "Clifford the Big Red Dog",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "This is the first school of its kind, created in 2012 under the Lily Family name",
            answer: "School of Philanthropy",
            picture: null,
            doubleJeopardy: false,
            price: 1000
        }
    ]
}
export const board2data: board = {
    "Rap Beef of 2024": 
    [
        {
            question: "After releasing this track, J. Cole apologized two day laters and removed himself from the beef",
            answer: "7 Minute Drill",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This artist jumped on Metro Boomin's BBL Drizzy after famous projects “Pirates on a Boat” and “4 Wheeler”",
            answer: "Yuno Miles",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "Attacking him for his nose job, this rapper dissed drake by calling him a white boy on Champagne Moments",
            answer: "Rick Ross",
            picture: null,
            doubleJeopardy: false,
            price: 1200
        },
        {
            question: "Referenced in the rap beef, Pusha T wrote “The Story of Adidon” on top of this famous songs beat",
            answer: "The Story of O.J.",
            picture: null,
            doubleJeopardy: false,
            price: 1600
        },
        {
            question: "Written in letters, Kendrick Lamar writes to these three named members of the family on Meet the Grahams",
            answer: "Aubrey, Adonis, Sandra",
            picture: null,
            doubleJeopardy: false,
            price: 2000
        }
    ],
    "Horror Films":
    [
        {
            question: "This franchise follows the investigations of Ed and Lorraine Warren",
            answer: "The Conjuring",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This is the latest entry in the Evil Dead franchise",
            answer: "Evil Dead Rise",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "Originally taking place in Woodsboro, CA - the most recent addition to the franchise takes place in New York City",
            answer: "Scream",
            picture: null,
            doubleJeopardy: false,
            price: 1200
        },
        {
            question: "Originally given an X rating due to its sexual and gory nature, many cuts had to be made from this 1987 horror film",
            answer: "Hellraiser",
            picture: null,
            doubleJeopardy: false,
            price: 1600
        },
        {
            question: "This movie about a dancer was famously shot on 16mm",
            answer: "Black Swan",
            picture: null,
            doubleJeopardy: false,
            price: 2000
        }
    ],
    "Indiana Alcohol":
    [
        {
            question: "This is the official beer of the indianapolis colts",
            answer: "Bud Light",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This is the official beer of the Indy 500 Carb Day",
            answer: "Miller Light",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "This Indiana-brewed American Pale Ale seems as though it was made for the undead ",
            answer: "Zombie Dust",
            picture: null,
            doubleJeopardy: false,
            price: 1200
        },
        {
            question: "This local distillery uses the NATO alphabet and is owned by a Marine Corp Veteran",
            answer: "Hotel Tango",
            picture: null,
            doubleJeopardy: false,
            price: 1600
        },
        {
            question: "This is the year that indiana passed the law for sunday alcohol sales",
            answer: "2018",
            picture: null,
            doubleJeopardy: true,
            price: 2000
        }
    ],
    "Counter-Strike":
    [
        {
            question: "This was the first Counter-Strike to use the Source Engine",
            answer: "Counter-Strike: Source",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This gun is widely renowned as the best in the game, costing only $1700",
            answer: "Negev",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "Counter-Strike was first developed as a mod of this game",
            answer: "Half-Life",
            picture: null,
            doubleJeopardy: false,
            price: 1200
        },
        {
            question: "This is the sole achievement of Counter-Strike 2",
            answer: "A New Beginning / This is Counter-Strike, too",
            picture: null,
            doubleJeopardy: false,
            price: 1600
        },
        {
            question: "This Dust 2 smoke from ct spawn covers this location",
            answer: "mid doors",
            picture: "smoke.png",
            doubleJeopardy: false,
            price: 2000
        }
    ],
    "Hoosier Sports":
    [
        {
            question: "This famous new addition was a first round draft pick in Indianapolis",
            answer: "Caitlin Clark",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This Indianapolis team started in Baltimore, MD",
            answer: "Indianapolis Colts",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "This Indianapolis team hosts pucks and paws so that you can bring your furry friend to the game",
            answer: "Indy Fuel",
            picture: null,
            doubleJeopardy: false,
            price: 1200
        },
        {
            question: "This Pacer left the team in 2005 after his 18 year career in Indianapolis",
            answer: "Reggie Miller",
            picture: null,
            doubleJeopardy: false,
            price: 1600
        },
        {
            question: "While a new stadium is being developed in Indianapolis, this team currently shares a stadium with IUPUI's team of the same sport",
            answer: "Indy Eleven",
            picture: null,
            doubleJeopardy: false,
            price: 2000
        }
    ]
}