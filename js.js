let BirthdayWish = document.querySelector(".wish")


let Wishes = ["Whether your heart is full of happiness or weighed down with sorrow, i will be there to your darest moments.",
"Your the only one who i wouldn't mind losing sleep for, the only one who i can never get tired of talking to and the only one who crosses my mind  constantly throught the day.",
"You are the only one who an make me smile without any intention and affect my emotions with every action of yours. I can't explain in words how much you mean to me but you're the one i'm afriad of losing and the i want to keepin in my life",
"I won't be able to fix all of your problems, but you'll never have to face them alone. I may not have all the answers or solutions, but i do have all the time in the world for you.",
" You are the person who brings me the most comfort.",
"I'm actually just here for the cake.",
"Happy birthday! I hope you’re not looking for a present because my presence is my gift to you.",
"Remember to smile awkwardly as everyone sings you, Happy Birthday today!.",
"Happy birthday to someone who loves me even though I Irritate him so much.",
"Sometimes being with you is all the therapy. I need.",
"Best friends are those who share your problems so you don’t have to go through them alone.",
"Forever grateful for the laughs and adventures with you my boy.",
"Forever thankful for all the love and care you showed on me.",
"Cheers to the one who knows me better than anyone else.",
"Your smile brightens up my world.",
"No distance can ever break the bond I have with you Azmeera.",
"With you, every day is an adventure.",
"Simply irreplaceable.",
"Big laughs, small words.",
"Sending bromance vibes.",
"No one roasts me better than You waste fellow.",
"You are my personal stand-up comedian."
   
];

const a = Math.floor(Math.random() * Wishes.length)
console.log(a);

function Click() {
    const a = Math.floor(Math.random() * Wishes.length)
    console.log(a);
    BirthdayWish.textContent = Wishes[a]

}

