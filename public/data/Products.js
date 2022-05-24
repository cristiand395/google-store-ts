const PRODUCTS_DATA = [
  {
    id: "1",
    name : "Pixel 6 Pro",
    type : "Smartphone",
    price : 899,
    currency : "USD",
    imgUrl : "https://lh3.googleusercontent.com/7xDKqr2GZurzh__CoEG82FmIUtqzRfK15aN9SFTOc1mv2u77s9owuPB4t83z0kLUzeg9X97n62AZKZnCRYy055piFLSEsCIMqUQ=rw-e365-w240",
    specs : {
      cpu : "Google Tensor",
      ram : "12gb",
      storage : "128gb / 256gb / 512gb",
      battery : "5003 mAh",
      frontalCamera : "11.1 MP",
      rearCamera : "50 MP",
      display : "Gorilla® Glass Victus™ de Corning®",
      os : "Android 12"
    }
  },
  {
    id: "2",
    name : "Pixel 6",
    type : "Smartphone",
    price : 649,
    currency : "USD",
    imgUrl : "https://lh3.googleusercontent.com/UOmuiQoCacXIgDdME4KnhEWeqrgssIqq_Bp11sgL4n3qymmUXV0JeZhvyHcH0lXzIlGe_5WVX2vw8jWxJXVL32PaEiFFVNtWg10=rw-e365-w240",
    specs : {
      cpu : "Google Tensor",
      ram : "8gb",
      storage : "128gb / 256gb / 512gb",
      battery : "4610 mAh",
      frontalCamera : "8 MP",
      rearCamera : "50 MP",
      display : "Gorilla® Glass Victus™ de Corning®",
      os : "Android 12"
    }
  },
  {
    id: "3",
    name : "Pixel 6a",
    type : "Snartphone",
    price : 459,
    currency : "USD",
    imgUrl : "https://lh3.googleusercontent.com/kSFXt0Lpr7QoGnLvzrrfxfvvPnunSYzK8z4RcWgd6-CAym1fd8KQExAb54_7s_aECFbBf17B6eLfTP9pNmtlJIBMBBZZ8TjyFNw=s0",
    specs : {
      cpu : "Google Tensor",
      ram : "6gb",
      storage : "128gb",
      battery : "4110 mAh",
      frontalCamera : "8 MP",
      rearCamera : "12,2 MP",
      display : "Gorilla® Glass 3 de Corning®",
      os : "Android 12"
    }
  },
  {
    id: "4",
    name : "Pixel 5",
    type : "Smartphone",
    price : 799,
    currency : "USD",
    imgUrl : "https://lh3.googleusercontent.com/G4BkyQG7GLmevpSeZ5ZWr1Y0zqPSUgY0wH1etyXHFTIp20owmeqjWRiM10w7WDt0Evf5rqL2Oq2Ev2rgTzNzybPeyLnqMR2rQ3c=rw-e365-w1024",
    specs : {
      cpu : "Qualcomm Snapdragon 765",
      ram : "8gb",
      storage : "128gb",
      battery : "4080 mAh",
      frontalCamera : "8 MP",
      rearCamera : "12,2 MP",
      display : "Gorilla® Glass 6 de Corning®",
      os : "Android 11"
    }
  },
  {
    id: "5",
    name : "Pixel",
    type : "Smartphone",
    price : 799,
    currency : "USD",
    imgUrl : "https://lh3.googleusercontent.com/noM4v4mZ5FOn6MQZ6M1o4Nfw-PTFe3XqwY58MGDPndT-zrGmx8bPwTOd7bxlx7k3vJhKHo3ZUnZPac6u2Yim8UUOhtgN1vM2zY0=rw-e365-w1024",
    specs : {
      cpu : "Qualcomm® Snapdragon™ 821",
      ram : "4gb",
      storage : "128gb",
      battery : "2770 mAh",
      frontalCamera : "8 MP",
      rearCamera : "12,3 MP",
      display : "AMOLED FHD",
      os : "Android 7 Nougat"
    }
  },
  {
    id: "6",
    name : "Pixel 2",
    type : "Smartphone",
    price : 799,
    currency : "USD",
    imgUrl : "https://lh3.googleusercontent.com/vBSZowxuZYDD4179qHrGcu69IpO5tnS_0UkeJmbEY35UXNmaCcGwFmPuLsBtjg5pywF7hhmcZgFbXwetZZnDflj3secd0lT0uVI=rw-e365-w1024",
    specs : {
      cpu : "Qualcomm® Snapdragon™ 835",
      ram : "4gb",
      storage : "128gb",
      battery : "2770 mAh",
      frontalCamera : "8 MP",
      rearCamera : "12,2 MP",
      display : "OLED FHD",
      os : "Android 8 Oreo"
    }
  },
  {
    id: "7",
    name : "Pixel 3",
    type : "Smartphone",
    price : 799,
    currency : "USD",
    imgUrl : "https://lh3.googleusercontent.com/HgTlGTugcJU44OCp_hD-u0f78xAl3JK6fR6GVQOTD1j61aerp9wcUth4qahx9x9a55_Qht8pOP8vU7XYzFN71YVC4dyWJwCu-nA=rw-e365-w1024",
    specs : {
      cpu : "Qualcomm® Snapdragon™ 845",
      ram : "4gb",
      storage : "128gb",
      battery : "4080 mAh",
      frontalCamera : "8 MP",
      rearCamera : "12,2 MP",
      display : "OLED flexible FHD+",
      os : "Android 9 Pie"
    }
  },
  {
    id: "8",
    name : "Pixel 4",
    type : "Smartphone",
    price : 799,
    currency : "USD",
    imgUrl : "https://lh3.googleusercontent.com/n9x67i7ynhz2Lr5YRSXwKUuaWDS4UwfUhUmYHry29HLsqhHx_J8iPTCwfS29PQO3_He0ywuQxAma-MgZreRo09PAfcDZOQRziVE=rw-e365-w1024",
    specs : {
      cpu : "Qualcomm® Snapdragon™ 855",
      ram : "6gb",
      storage : "128gb",
      battery : "4080 mAh",
      frontalCamera : "8 MP",
      rearCamera : "12,2 MP",
      display : "OLED flexible FHD+",
      os : "Android 10"
    }
  }
]

export default PRODUCTS_DATA