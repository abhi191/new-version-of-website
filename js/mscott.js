$(document).ready(function() {

    var quoteSource = [{
      quote: "I'm not superstitious, but... I'm a little-stitious.",
      name: "Michael Scott"
    }, {
      quote: "I. DECLARE. BANKRUPTCY!",
      name: "Michael Scott"
    }, {
      quote: "Dwight, you ignorant slut!",
      name: "Michael Scott"
    }, {
      quote: "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.",
      name: "Michael Scott"
    }, {
      quote: "Holly, you and I are soup snakes.",
      name: "Michael Scott"
    }, {
      quote: "The worst thing about prison was--was the Dementors.",
      name: "Michael Scott"
    }, {
      quote: "I am Beyonce, always.",
      name: "Michael Scott"
    }, {
      quote: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
      name: "Michael Scott"
    }, {
      quote: "I want people to be afraid of how much they love me.",
      name: "Michael Scott"
    }, {
      quote: "I am running away from my responsibilities... and it feels good.",
      name: "Michael Scott"
    }, {
      quote: "I have flaws. What are they? I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car.",
      name: "Michael Scott"
    },{
      quote: "Saw Inception. Or at least I dreamt I did ¯\\_(ツ)_/¯",
      name: "Michael Scott"
    }, {
      quote: "Do you think that smoking drugs is cool? Do you think that doing alcohol is cool?",
      name: "Michael Scott"
    }, {
      quote: "I tried to talk to Toby and be his friend, but that's like trying to be friends with an evil snail.",
      name: "Michael Scott"
    }, {
      quote: "I wouldn't miss it for the world. But if something else came up, I would definitely not go.",
      name: "Michael Scott"
    }, {
      quote: "I don't hate it. I just don't like it at all and it's terrible.",
      name: "Michael Scott"
    }, {
      quote: "NO! GOD! NO! GOD PLEASE NO! NO! NO! NOOOOOOOOOOOOOO!",
      name: "Michael Scott"
    }, {
      quote: "You know what they say. \"Fool me once, strike one. But fool me twice... strike three.\"",
      name: "Michael Scott"
    }, {
      quote: "Is it the same grill you grilled your foot on? Yes, but I got all the foot off of it.",
      name: "Michael Scott"
    }, {
      quote: "I need a username. And I have a great one. \"Little Kid Lover\"",
      name: "Michael Scott"
    }, {
      quote: "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
      name: "Michael Scott"
    }, {
      quote: "I hate so much about the things that you choose to be.",
      name: "Michael Scott"
    }, {
      quote: "I feel like all my kids grew up and then they married each other. It's every parent's dream.",
      name: "Michael Scott"
    }, {
      quote: "That's what she said!",
      name: "Michael Scott"
    },{
        quote: "\"You miss 100% of the shots you don’t take.\" - Wayne Gretzky",
        name: "Michael Scott"
    },{
        quote: "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject so you know you are getting the best possible information.",
        name: "Michael Scott"
    },{
        quote: "I’m an early bird and I’m a night owl so I’m wise and I have worms.",
        name: "Michael Scott"
    },{
        quote: "The worst thing about prison was the Dementors. They were flying all over the place and they were scary and they'd come down and they'd suck the soul out of your body and it hurt!",
        name: "Michael Scott"
    },{
        quote: "I feel like all my kids grew up and then they married each other. It’s every parent’s dream.",
        name: "Michael Scott"
    },{
        quote: "I love inside jokes. I hope to be a part of one someday.",
        name: "Michael Scott"
    },{
        quote: "I have cause. It is beCAUSE I hate him.",
        name: "Michael Scott"
    },{
        quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
        name: "Michael Scott"
    },{
        quote: "When the son of the deposed king of Nigeria emails you directly, asking for help, you help! His father ran the freaking country! Okay?",
        name: "Michael Scott"
    },{
        quote: "Well, well, well, how the turntables.",
        name: "Michael Scott"
    },{
        quote: "I understand nothing.",
        name: "Michael Scott"
    },{
        quote: "I am running away from my responsibilities. And it feels good.",
        name: "Michael Scott"
    },{
        quote: "I live by one rule: No office romances, no way. Very messy, inappropriate…no. But, I live by another rule: Just do it…Nike.",
        name: "Michael Scott"
    },{
        quote: "They always say that it’s a mistake to hire your friends. And they are right. So, I hired my best friends. And this is what I get!?",
        name: "Michael Scott"
    },{
        quote: "This is a dream that I’ve had…since lunch…and I’m not giving it up now.",
        name: "Michael Scott"
    }
];


    var imgSource = new Array(
    "/images/about/mscott/m-1.gif",
    "/images/about/mscott/m-2.gif",
    "/images/about/mscott/m-3.gif",
    "/images/about/mscott/m-4.gif",
    "/images/about/mscott/m-5.gif",
    "/images/about/mscott/m-6.gif",
    "/images/about/mscott/m-7.gif",
    "/images/about/mscott/m-8.gif",
    "/images/about/mscott/m-9.gif",
    "/images/about/mscott/m-10.gif",
    "/images/about/mscott/m-11.gif",
    "/images/about/mscott/m-12.gif",
    "/images/about/mscott/m-13.gif",
    "/images/about/mscott/m-14.gif",
    "/images/about/mscott/m-15.gif",
    "/images/about/mscott/m-16.gif",
    "/images/about/mscott/m-17.gif"
    );
  
    $('#quoteButton').click(function(e) {
  
      var quote = $('#quoteContainer p').text();
      var quoteGenius = $('#quoteGenius').text();
  
      e.preventDefault();
  
      var sourceLength = quoteSource.length;
      var randomNumber = Math.floor(Math.random() * sourceLength);

      var imgLength = imgSource.length;
      var randomNumber1 = Math.floor(Math.random() * imgLength);
  
      // Set a new quote
        var newQuoteText = quoteSource[randomNumber].quote;
        var newQuoteGenius = quoteSource[randomNumber].name;
        //console.log(newQuoteText,newQuoteGenius);
        var timeAnimation = 500;
        var quoteContainer = $('#quoteContainer');
        var mscottImage = $('#mscottImage');
        //fade out animation with callback
        quoteContainer.fadeOut(timeAnimation, function() {
          quoteContainer.html('');
          quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteGenius">' + '-								' + newQuoteGenius + '</p>');
          document.getElementById("mscottImage").src = imgSource[randomNumber1];
          
          //fadein animation.
          quoteContainer.fadeIn(timeAnimation);
        });
    });
  });