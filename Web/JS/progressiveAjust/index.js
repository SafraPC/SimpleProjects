//Will adjust daily limit +10 with the limit in 250

let ObjArray = [
  {
    _id: "5f514486f3573f8399635d6c",
    number: "554192615586",
    dailyLimit: 50,
  },
  {
    _id: "5f43234b5e5c1e9ca3a637de",
    number: "554192028275",
    dailyLimit: 50,
  },
  {
    _id: "5f74b87d9393677d0b705662",
    number: "553191765432",
    dailyLimit: 50,
  },
  {
    _id: "5f74bfb09393677d0b711ae8",
    number: "5521992516439",
    dailyLimit: 50,
  },
  {
    _id: "5f74d96c9393677d0b73edf1",
    number: "557998605771",
    dailyLimit: 50,
  },
  {
    _id: "5f75028d9393677d0b78564c",
    number: "553399780895",
    dailyLimit: 50,
  },
  {
    _id: "5f778b4a9393677d0bbe9fd4",
    number: "556298110333",
    dailyLimit: 50,
  },
  {
    _id: "5f7ca8009393677d0b4afcfe",
    number: "553182054677",
    dailyLimit: 50,
  },
  {
    _id: "5fd78cb9984ccc9e32c1e48d",
    dailyLimit: 50,
    number: "5511970535968",
  },
  {
    _id: "5fd78d13984ccc9e32c1eedd",
    dailyLimit: 50,
    number: "5511970569971",
  },
  {
    _id: "5fd78d34984ccc9e32c1f20d",
    dailyLimit: 50,
    number: "5511970541963",
  },
  {
    _id: "5fd78d61984ccc9e32c1f6cd",
    dailyLimit: 50,
    number: "5511970544276",
  },
  {
    _id: "5fd78d82984ccc9e32c1fb8e",
    dailyLimit: 50,
    number: "5511970539439",
  },
  {
    _id: "5fd78d9c984ccc9e32c1fe5d",
    dailyLimit: 50,
    number: "5511966125637",
  },
  {
    _id: "6042a8cd93a301f053cba9d7",
    dailyLimit: 0,
    number: "5511944418209",
  },
  {
    _id: "607dbf2ec0945d23f38acf63",
    dailyLimit: 0,
    number: "5511968790106",
  },
  {
    _id: "6088089fa4350da681778248",
    dailyLimit: 0,
    number: "556296313044",
  },
  {
    _id: "60880aeaa4350da681795e24",
    dailyLimit: 0,
    number: "556196264382",
  },
  {
    _id: "6088e7ab6d295e1adf2ff42e",
    dailyLimit: 0,
    number: "5519991632231",
  },
  {
    _id: "608c760907aa0323c7502db5",
    dailyLimit: 0,
    number: "551121516748",
  },
  {
    _id: "608d84dd07aa0323c750ec45",
    dailyLimit: 150,
    number: "551121516170",
  },
  {
    _id: "608d852a07aa0323c750ec46",
    dailyLimit: 150,
    number: "551121516198",
  },
  {
    _id: "608d857907aa0323c750ec49",
    dailyLimit: 150,
    number: "551121516224",
  },
  {
    _id: "608d85d007aa0323c750ec4d",
    dailyLimit: 150,
    number: "551121516433",
  },
  {
    _id: "608d886507aa0323c750ec52",
    dailyLimit: 150,
    number: "551121516776",
  },
  {
    _id: "608d88b307aa0323c750ec53",
    dailyLimit: 150,
    number: "551121516976",
  },
  {
    _id: "608d88e807aa0323c750ec56",
    dailyLimit: 150,
    number: "551121516780",
  },
  {
    _id: "609597a807aa0323c756a110",
    dailyLimit: 150,
    number: "5511962748801",
  },
  {
    _id: "6095984907aa0323c756a11a",
    dailyLimit: 150,
    number: "5511957107488",
  },
  {
    _id: "60a575ad940aa084f1e550c7",
    dailyLimit: 0,
    number: "558381054502",
  },
  {
    _id: "60a948b5110274c3907afc55",
    dailyLimit: 0,
    number: "5511996177529",
  },
  {
    _id: "60b01c51e115b92482a1d3fe",
    dailyLimit: 200,
    number: "5511969531497",
  },
  {
    _id: "60b0f48b2d4e506249740ffb",
    dailyLimit: 200,
    number: "559884599508",
  },
  {
    _id: "60b677b4934c67c30d091496",
    dailyLimit: 150,
    number: "559892327268",
  },
  {
    _id: "60b678c9934c67c30d0914b5",
    dailyLimit: 150,
    number: "559891007408",
  },
  {
    _id: "60ccbc5e266f0500121190e3",
    dailyLimit: 150,
    number: "554791666937",
  },
  {
    _id: "60d1015b68ea09eedd5a574e",
    dailyLimit: 50,
    number: "554799003585",
  },
  {
    _id: "60d3a92fb871b400194cb8be",
    dailyLimit: 50,
    number: "5511965147386",
  },
  {
    _id: "60d3ad19ff192700192dcf6d",
    dailyLimit: 150,
    number: "5511980645511",
  },
  {
    _id: "60d3ad4bff192700192dd048",
    dailyLimit: 150,
    number: "5511957307111",
  },
  {
    _id: "60d3ad65ff192700192dd09f",
    dailyLimit: 150,
    number: "5511962890275",
  },
  {
    _id: "60d3ad7cfd4792001970e546",
    dailyLimit: 150,
    number: "5511965075811",
  },
  {
    _id: "60d3ad94ff192700192dd106",
    dailyLimit: 150,
    number: "5511967927119",
  },
  {
    _id: "60d3ada9fd4792001970e59c",
    dailyLimit: 150,
    number: "5511969791072",
  },
  {
    _id: "60d476c856f4ab0012d7effa",
    dailyLimit: 150,
    number: "5511980647064",
  },
  {
    _id: "60e60ae426497f2336a0d7fc",
    number: "5521994550371",
    dailyLimit: 100,
  },
  {
    _id: "60e8714e26497f2336fbafca",
    number: "5521968301993",
    dailyLimit: 100,
  },
  {
    _id: "60f82862217e150012c51821",
    dailyLimit: 0,
    number: "5511966830551",
  },
  {
    _id: "60f832df217e150012c542c5",
    dailyLimit: 50,
    number: "5511965390424",
  },
  {
    _id: "60f836a30e245a001279c7af",
    dailyLimit: 50,
    number: "5511979915562",
  },
  {
    _id: "60f8537b24c13a001213dd12",
    dailyLimit: 50,
    number: "5511962910494",
  },
  {
    _id: "60f86bd205415a001201ff3e",
    dailyLimit: 50,
    number: "5511957300419",
  },
  {
    _id: "6102e21d49abd2003eeb38bd",
    dailyLimit: 0,
    number: "5511979790502",
  },
  {
    _id: "6102e27b49abd2003eeb38be",
    dailyLimit: 0,
    number: "5511965130413",
  },
  {
    _id: "6103fa7d64acaf00121ed6ae",
    dailyLimit: 20,
    number: "5511969522341",
  },
  {
    _id: "6103fc9b6aff6a0012a91f08",
    dailyLimit: 20,
    number: "5511957120230",
  },
  {
    _id: "61080d103dd2b2001253fdec",
    dailyLimit: 50,
    number: "554196319635",
  },
  {
    _id: "610ac303eb83a90012788999",
    dailyLimit: 20,
    number: "554591567924",
  },
  {
    _id: "610ac633fce7ea001233301b",
    dailyLimit: 20,
    number: "554591130692",
  },
  {
    _id: "610ac813fce7ea0012333cf7",
    dailyLimit: 20,
    number: "554591396600",
  },
  {
    _id: "610ad842fce7ea0012339ebc",
    dailyLimit: 20,
    number: "554591044428",
  },
  {
    _id: "610ada7afce7ea001233a9ab",
    dailyLimit: 20,
    number: "554591131853",
  },
  {
    _id: "610ae0d6a0af800019475b45",
    dailyLimit: 20,
    number: "554591488924",
  },
  {
    _id: "610bec779f1a700186f5725b",
    dailyLimit: 20,
    number: "554591327394",
  },
  {
    _id: "610d378ddf8c3f00120fe8dc",
    dailyLimit: 20,
    number: "554591287784",
  },
  {
    _id: "610d3a03df8c3f00120ff11d",
    dailyLimit: 20,
    number: "554591152518",
  },
  {
    _id: "610d3b5bdf8c3f00120ff7cc",
    dailyLimit: 20,
    number: "554591392540",
  },
  {
    _id: "610d3df46a3cc300122b27d5",
    dailyLimit: 20,
    number: "554591254862",
  },
  {
    _id: "610d408ddf8c3f0012100e4b",
    dailyLimit: 20,
    number: "554591428290",
  },
  {
    _id: "610d441aae7b8f001202c785",
    dailyLimit: 20,
    number: "554591010711",
  },
  {
    _id: "610d4865ae7b8f001202daac",
    dailyLimit: 20,
    number: "554591080623",
  },
  {
    _id: "610d4af56a3cc300122b64ff",
    dailyLimit: 0,
    number: "554591359439",
  },
  {
    _id: "610d4ea8df8c3f0012105839",
    dailyLimit: 20,
    number: "554591168268",
  },
  {
    _id: "610d787a0129290012f22915",
    dailyLimit: 20,
    number: "5511968050526",
  },
];
console.log("Before =>", ObjArray);
for (let i = 0; i < ObjArray.length; ) {
  console.log(i);
  if (ObjArray[i].dailyLimit < 250) {
    if (ObjArray[i].dailyLimit > 240) {
      ObjArray[i].dailyLimit = 250;
      i++;
    }
    if (ObjArray[i].dailyLimit < 240) {
      ObjArray[i].dailyLimit += 10;
      i++;
    }
  } else {
    i++;
  }
}

console.log("After =>", ObjArray);
