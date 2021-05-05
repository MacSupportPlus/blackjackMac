// function buildDeck() {
//   let values = [1,2,3,4,5,6,7,8,9,10,10,12,10];
//   let suits = ["hearts", "diamonds", "clubs", "spades"];
//   let cardGrab = [""];
//   for (value=0; value < values.length; value++) {
//     for (suit=0; suits < 5; suit++) {
//       cardGrab.push(suit + value);
//       return cardGrab
//     }

//     }
//   }
// console.log(buildDeck())



let cards = [ 
  {
  cardSuit: "hearts",
  cardValue : 2,
  cardName: "2hearts",
  img: "images/2_of_hearts.png",
  },
  {
  cardSuit: "hearts",
  cardValue : 3,
  cardName: '3hearts',
  img: "images/3_of_hearts.png",
  },
  {
  cardNmumber: 4,
  cardSuit: "hearts",
  cardValue : 4,
  cardName: '4hearts',
  img: "images/4_of_hearts.png",
  },
  {
  cardValue: 5,
  cardSuit: "hearts",
  cardValue : 5,
  cardName: "5hearts",
  img: "images/5_of_hearts.png",
  },
  {
  cardValue: 6,
  cardSuit: "hearts",
  cardValue : 6,
  cardName: "6hearts",
  img: "images/6_of_hearts.png",
  },
  {
  cardValue: 7,
  cardSuit: "hearts",
  cardValue : 7,
  cardName: "7hearts",
  img: "images/7_of_hearts.png",
  },
  {
  cardSuit: "hearts",
  cardValue : 8,
  cardName: "8hearts",
  img: "images/8_of_hearts.png",
  },
  {
  cardSuit: "hearts",
  cardValue : 9,
  cardName: "9hearts",
  img: "images/9_of_hearts.png",
  },
  {
  cardSuit: "hearts",
  cardValue : 10,
  cardName: "10hearts",
  img: "images/10_of_hearts.png",
  },
  {
  cardSuit: "hearts",
  cardValue : 10,
  cardName: "jackhearts",
  img: "images/jack_of_hearts.png",
  },
  {
  cardSuit: "hearts",
  cardValue : 10,
  cardName: "queenhearts",
  img: "images/queen_of_hearts.png",
  },
  {
  cardSuit: "hearts",
  cardValue : 10,
  cardName: "kinghearts",
  img: "images/king_of_hearts.png",
  },
  {
  cardSuit: "hearts",
  cardValue : 11,
  cardName: "acehearts",
  img: "images/ace_of_hearts.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 2,
  cardName: "2diamonds",
  img: "images/2_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 3,
  cardName: "3diamonds",
  img: "images/3_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 4,
  cardName: "4diamonds",
  img: "images/4_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 5,
  cardName: "5diamonds",
  img: "images/5_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 6,
  cardName: "6diamonds",
  img: "images/6_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 7,
  cardName: "7diamonds",
  img: "images/7_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 8,
  cardName: "8diamonds",
  img: "images/8_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 9,
  cardName: "9diamonds",
  img: "images/9_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 10,
  cardName: "10diamonds",
  img: "images/10_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 10,
  cardName: "jackdiamonds",
  img: "images/jack_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 10,
  cardName: "queendiamonds",
  img: "images/queen_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 10,
  cardName: "kingdiamonds",
  img: "images/king_of_diamonds.png",
  },
  {
  cardSuit: "diamonds",
  cardValue : 11,
  cardName: "acediamonds",
  img: "images/ace_of_diamonds.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 2,
    cardName: "2clubs",
    img: "images/2_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 3,
    cardName: "3clubs",
    img: "images/3_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 4,
    cardName: "4clubs",
    img: "images/4_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 5,
    cardName: "5clubs",
    img: "images/5_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 6,
    cardName: "6clubs",
    img: "images/6_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 7,
    cardName: "7clubs",
    img: "images/7_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 8,
    cardName: "8clubs",
    img: "images/8_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 9,
    cardName: "9clubs",
    img: "images/9_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 10,
    cardName: "10clubs",
    img: "images/10_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 10,
    cardName: "jackclubs",
    img: "images/jack_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 10,
    cardName: "queenclubs",
    img: "images/queen_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 10,
    cardName: "kingclubs",
    img: "images/king_of_clubs.png",
  },
  {
    cardSuit: "clubs",
    cardValue : 11,
    cardName: "aceclubs",
    img: "images/ace_of_clubs.png",
  },
  {
    cardSuit: "spades",
    cardValue : 2,
    cardName: "2spades",
    img: "images/4_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 3,
    cardName: "3spades",
    img: "images/3_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 4,
    cardName: "4spades",
    img: "images/4_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 5,
    cardName: "5spades",
    img: "images/5_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 6,
    cardName: "6spades",
    img: "images/6_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 7,
    cardName: "7spades",
    img: "images/7_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 8,
    cardName: "8spades",
    img: "images/8_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 9,
    cardName: "9spades",
    img: "images/9_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 10,
    cardName: "10spades",
    img: "images/10_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 10,
    cardName: "jackspades",
    img: "images/jack_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 10,
    cardName: "queenspades",
    img: "images/queen_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 10,
    cardName: "kingspades",
    img: "images/king_of_spades.png",
  },
  {
    cardSuit: "spades",
    cardValue : 11,
    cardName: "acespades",
    img: "images/ace_of_spades.png",
  },
  // {
  //   cardSuit: "back",
  //   cardValue: 0,
  //   cardName:"backofcard",
  //   img: "images/back-of-card.png",
  // }
]

// function shuffle(sourceArray) {
//   for (var i = 0; i < sourceArray.length - 1; i++) {
//       var j = i + Math.floor(Math.random() * (sourceArray.length - i));

//       var temp = sourceArray[j];
//       sourceArray[j] = sourceArray[i];
//       sourceArray[i] = temp;
//   }
//   return sourceArray;
// }





window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
  let dealerHand = document.querySelector('.dealer-cards');
  let playerHand = document.querySelector('.player-cards');
  let deal = document.querySelector('#deal-button');
  let hit = document.querySelector('#hit-button');
  let stand = document.querySelector('#stand-button');
  let dealer = document.querySelector('.dealerHandHolder');
  let player = document.querySelector('.playerHandHolder');
  dealerHand = [];
  playerHand = [];
  playerCount = 0;
  dealerCount = 0;
  function shuffle(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }

    return cards;
  }


  
  
  //console.log(dealerPreHand2);
  //var player = ["playerCardPlacement1", "playerCardPlacement2"]
  
  //let tableCards = document.createElement('ul')

  function createImg(src1, src2, src3, person1, person2, css){

    let img = document.createElement('img');
    img2 = document.createElement('img');
    img3 = document.createElement('img');
    // img4 = document.createElement('img');
    img.setAttribute('src', src1);
    img.setAttribute('style', css);
    img2.setAttribute('src', src2);
    img2.setAttribute('style', css);
    img3.setAttribute('src', src3);
    img3.setAttribute('style', css);
    // img4.setAttribute('src', src4);
    // img4.setAttribute('style', css);
    console.log(img);
    // newCard = document.createElement('li')
    // newCard.textContent = img;


    // person.shift(dealerPreHand1);
    // person.append(newCard);
    //person.append(img2);
    person1.append(img);
    person1.append(img2);
    person2.append(img3);
    //person2.append(img4)
    //playerHand.append(img);
  

  
  }
  function createNewImage(src, person, css){
    let newImg = document.createElement('img');
    newImg.setAttribute('src', src); 
    newImg.setAttribute('style', css);
    person.append(newImg);
  }

  // 
  //let dealerPreHand1 = document.querySelector('.dealerHandHolder')
  // let playerPreHand2 = document.querySelector('.playerHandHolder')
  
  deal.addEventListener('click', (e) => {
      dealing(cards);
      
      //console.log('cards have been delt')
  })
    function dealing() {
      
      shuffle(cards);
      newCard1 = cards.pop();
      dealerHand.push(newCard1);
      // newCard2 = cards.pop();
      // dealerHand.push(newCard2);
      newCard3 = cards.pop();
      playerHand.push(newCard3);
      newCard4 = cards.pop();
      playerHand.push(newCard4);
      console.log(playerHand);
      console.log(dealerHand);
      cardDeck = createImg(playerHand[0].img, playerHand[1].img, dealerHand[0].img, player, dealer,  "height: 150px");
      console.log(dealerHand);
      playercounter(playerHand, playerCount);
    ///}
      
  // function dealing(cards) {
  //     shuffleCards = shuffle(cards);
  //     // document.body.removeChild('.dealer');
  //     // shuffled = random.shuffle(cards);
  //     cardDeck = createImg(shuffleCards[0].img, shuffleCards[1].img, shuffleCards[2].img, dealer,  "height: 150px");
    
    //console.log(cards[0].img);
    //console.log('You have your cards now')
  }

  function hitting(cards, player){
    newCard = cards.pop();
    playerHand.push(newCard);
    NewcardDeck = createNewImage(playerHand[playerHand.length-1].img, player, "height:150px");
    playercounter(playerHand, playerCount);
  }
  function standing(cards, player){
    newCard = cards.pop();
    dealerHand.push(newCard);
    NewcardDeck = createNewImage(dealerHand[dealerHand.length-1].img, player, "height:150px");
    dealercounter(dealerHand, dealerCount);
    
  }

  function playercounter(Hand){
      console.log(Hand)
      let points = 0
      for (var card=0; card < Hand.length; card++){
        console.log(card)
        cardWorth = Hand[card].cardValue 
        points += cardWorth
        console.log(points)
        while (Hand = playerHand){
          if (points <21 ) {
            console.log("hit me? , or stand.... ")
            
            break
            
          }

          if (points > 21) {
            console.log('game over, hit the shower')
            //alert("Its time ")
            break
          }
          if (points == 21) {
            console.log('you are a winner!! ')
            //alert("MONEY IN DA BANK 🤘🏽 ")
            break
          }
          // points += cardWorth;
          // card ++
        }
      }
  }
      function dealercounter(Hand){
        console.log(Hand)
        let points = 0
        for (var card=0; card < Hand.length; card++){
          console.log(card)
          cardWorth = Hand[card].cardValue 
          points += cardWorth
        while (Hand = dealerHand){
          if (points < 17 ) {
            console.log("hit me? , or stand.... ")
            break
          }

          if (points >= 17 && points < 21) {
            console.log('match or take hike!!')
            break
          }
          if (points > 21)
            console.log ('You win!!!!')
            break
          

          // points += cardWorth;
          // card ++
        }
      

      
      // console.log(card)
      console.log(points)
    
      
    
  }
}

    

  hit.addEventListener('click', (e) => {
    hitting(cards, player);
    //alert("Pick an Option, stand or take a hit ");
    
  
  //console.log('cards have been delt')
  })
  stand.addEventListener('click', (e) => {
    standing(cards, dealer);

  })
      })
