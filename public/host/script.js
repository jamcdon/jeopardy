var app = new Vue({
	el: "#app",
	data: {
		question: {
			category: "Indy 500",
			index: 0
		},
		board1data: {
    "Indy 500": [
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
	}
})
