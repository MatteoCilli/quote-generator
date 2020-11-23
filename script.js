$(document).ready(function() {
    var quoteList = [
        { source: "Ronald Reagan", citation: "POTUS", year: "1981", quote: "Here\'s my strategy on the Cold War: we win, they lose." },
        { source: "George Marshall", citation: "CIA", year: "1947", quote: "Although the shooting war is over, we are in the midst of a cold war which is getting warmer." },
        { source: "Winston Churchill", citation: "Former Prime Minister of the UK", year: "1946", quote: "A shadow has fallen upon the scenes so lately lighted by the Allied victory…. From Stettin in the Baltic to Trieste in the Adriatic an iron curtain has descended across the Continent." },
        { source: "Unknown", citation: "Foreign Affairs", year: "1947", quote: "We may be likened to two scorpions in a bottle, each capable of killing the other, but only at the risk of his own life." },
        { source: "Lindon B. Johnson", citation: "Washington Post", year: "1965", quote: "These are the stakes! To make a world in which all of God\'s children can live, or to go into the dark. We must either love each other, or we must die." },
        { source: "X [George Kennan]", citation: "Foreign Affairs", year: "1946", quote: "The main element of any United States policy toward the Soviet Union must be that of a long-term, patient but firm and vigilant containment of Russian expansive tendencies." },
        { source: "Nikita Krushchev", citation: "NYT", year: "1959", quote: "If you don’t like us, don’t accept our invitations and don’t invite us to come to see you. Whether you like it or not, history is on our side. We will bury you." },
        { source: "Dean Rusk", citation: "SecState", year: "1962", quote: "We’re eyeball to eyeball… and I think the other fellow just blinked." },
        { source: "Jack Ryan", citation: "The Hunt for the Red October", year: "1984", quote: "You Russians like to think you\'re poets but perhaps you\'re just touchy." },
        { source: "Ronald Reagan", citation: "Few minutes before speaking on National TV", year: "1987", quote: "My fellow Americans, I am pleased to tell you today that I’ve signed legislation that will outlaw Russia forever. We begin bombing in five minutes." },
        { source: "Nikita Krushchev", citation: "The Man himself", year: "1957", quote: "When all the world is socialist, Switzerland will have to remain capitalist, so that it can tell us the price of everything." }
    ];


    function quoteGenerate() {
        var quoteRandomize = Math.floor(Math.random() * quoteList.length);
        var quoteMain = quoteList[quoteRandomize].quote;
        var quoteSource = quoteList[quoteRandomize].source;
        var quoteCitation = quoteList[quoteRandomize].citation;
        var quoteYear = quoteList[quoteRandomize].year;

        $("#quote").text(quoteMain);
        $("#quote-source").text(quoteSource);
        $("#citation").text(quoteCitation);
        $("#year").text(quoteYear);
    };

    $("#reagan-btn").on("click", function() {
        quoteGenerate();
    });

    $("#coldestwar")[0].volume = 0.025;
    quoteGenerate();
});