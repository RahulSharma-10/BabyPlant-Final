import { useNavigate } from "react-router-dom";
import Link from 'next/link';
import { motion } from "framer-motion"

const products = [
    {
      id: 1,
      name: 'Grow system - 18 Plants NFT System',
      href: '#',
      price: '₹8,500.00',
      images: [
        {
        imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/1/8/18-plants-system_1.jpeg',
        imageAlt: 'Grow system - 18 Plants NFT System'
        },
        {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/a/c/acessories.png',
          imageAlt: 'Grow system - 18 Plants NFT System'
        },
      ],
      description: 'The NFT system is quite popular with commercial and home hydroponic growers as well. Because of the fairly simple design, NFT systems are suitable for growing various plants.',
      details: ['Size: 3.28 ft X 2 ft X 2 ft','NFT Channels of 124mm wide and 1 meter length','Number of holes per NFT – 6 holes','Water pump, fittings, and accessories are included.','Nutrients suitable for growing leafy greens & herbs are provided with the kit.'],
      category:'Hydroponics'
    },
    {
      id: 2,
      name: 'Grow System - 26 plants NFT System',
      href: '#',
      price: '₹10,500.00',
      images: [
        {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/i/m/img_9046.jpg',
            imageAlt: 'Grow System - 26 plants NFT System',
        },
        {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/a/c/acessories.png',
          imageAlt: 'Grow System - 26 plants NFT System',
        },
      ],
      description: 'The NFT system is quite popular with commercial and home hydroponic growers as well. Because of the fairly simple design, NFT systems are suitable for growing various plants.',
      details: ['Size: 6.7 ft X 2 ft X 2 ft','NFT Channels of 124mm wide and 2 meter length','Number of holes per NFT – 13 holes','Water pump, fittings, and accessories are included.','Nutrients suitable for growing leafy greens & herbs are provided with the kit.'],
      category:'Hydroponics'
    },
    {
      id: 3,
      name: 'Grow System - 36 plants Vertical NFT System',
      href: '#',
      price: '₹16,500.00',
      images: [
        {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/a/half-pyramid-52-plants-system_1.jpg',
            imageAlt: 'Grow System - 36 plants Vertical NFT System',
        },
        {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/a/c/acessories.png',
          imageAlt: 'Grow System - 36 plants Vertical NFT System',
        },
      ],
      description: 'Our hydroponic gardens are built with quality material and are designed for a seamless and user-friendly system adapted for all. Compact, customizable and flexibly designed gardens to fit in any space in any home',
      details: ['Size: 5 ft X 2 ft X 5 ft','NFT Channels of 124mm wide and 1.5 meter length','Number of holes per NFT – 9 holes','Water pump, fittings, and accessories are included.','Nutrients suitable for growing leafy greens & herbs are provided with the kit.'],
      category:'Hydroponics'
    },
    {
      id: 4,
      name: 'Grow System - 52 plants Vertical NFT System',
      href: '#',
      price: '₹19,500.00',
      images: [
        {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/a/half-pyramid-52-plants-system_1.jpg',
          imageAlt: 'Grow System - 36 plants Vertical NFT System',
      },
      {
        imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/a/c/acessories.png',
        imageAlt: 'Grow System - 36 plants Vertical NFT System',
      },
      ],
      description: 'Our hydroponic gardens are built with quality material and are designed for a seamless and user-friendly system adapted for all. Compact, customizable and flexibly designed gardens to fit in any space in any home',
      details: ['Size: 6.7 ft X 2 ft X 5 ft','NFT Channels of 124mm wide and 2 meter length','Number of holes per NFT – 13 holes','Water pump, fittings, and accessories are included.','Nutrients suitable for growing leafy greens & herbs are provided with the kit.'],
      category:'Hydroponics'
    },
      {
        id: 5,
        name: 'Grow System - 18 Plants Indoor NFT System',
        href: '#',
        price: '₹12,500.00',
        images: [
          {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/i/n/indoor-system.jpeg',
          imageAlt: 'Grow System - 18 Plants Indoor NFT System'
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/a/c/acessories.png',
            imageAlt: 'Grow System - 18 Plants Indoor NFT System'
            },
        ],
        description: 'Space is not a limitation. Furnish your home with a modern indoor hydroponic garden system that&apos;s sleek, sustainable and gives the gift of fresh food all year round.',
      details: ['Size: 3.28 ft X 2 ft X 4 ft','3 LED lights of each 17 watts','NFT Channels of 124mm wide and 1 meter length','Number of holes per NFT – 6 holes','Water pump, fittings, and accessories are included.','Nutrients suitable for growing leafy greens & herbs are provided with the kit.'],
      category:'Hydroponics'
      },
      //rahul-starting here (6-10)
      {
        id: 6,
        name: 'General Bloom Nutrients - 500 Litres',
        href: '#',
        price: 'Rs. 460',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/b/l/bloom_1.jpg',
              imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/y/hydroponic_nutrients.png',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
          },
        ],
        description: 'Suitable for most flowering and fruiting plants (bloom phase). Contains all macro and micro nutrients. Available in two packets of water soluble nutrients.',
        details: [
            'To make 1 litre of nutrient solution, take 10ml stock solution from Can A and mix it into 1 litre of water.',
            'Take 10ml of solution from Can B and add it too. Use the measuring cup for correct measurement.',
            'Now stir the solution well so that it mixes uniformly. You can use this to water the plants or to fill up the reservoir.',
            'Nutrients once mixed in water have to be consumed within 3 to 4 weeks else they will lose their potency. So, make Stock solutions as and when needed and use them within 3 to 4 weeks after preparation.'
        ],
        category:'Nutrients'
      },
      {
        id: 7,
        name: 'Capsicum Special Mix - 500 Liters',
        href: '#',
        price: 'Rs. 455',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/y/e/yellow-bell-peppers_2.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/y/hydroponic_nutrients_1_3.png',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Special Formulation for growing hydroponics capsicum and Peppers',
        details: [
            'To make 1 litre of nutrient solution, take 10ml stock solution from Can A and mix it into 1 litre of water.',
            'Take 10ml of solution from Can B and add it too. Use the measuring cup for correct measurement.',
            'Now stir the solution well so that it mixes uniformly. You can use this to water the plants or to fill up the reservoir.',
            'Nutrients once mixed in water have to be consumed within 3 to 4 weeks else they will lose their potency. So, make Stock solutions as and when needed and use them within 3 to 4 weeks after preparation.'
        ],
        category:'Nutrients'
      },
      {
        id: 8,
        name: 'Chillies Special Mix - 500 Liters',
        href: '#',
        price: 'Rs. 460',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/c/h/chillis.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://images.unsplash.com/photo-1489841060824-0f3119e26686?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Special Formulation for growing hydroponic chillies.',
        details: [
            'To make 1 litre of nutrient solution, take 10ml stock solution from Can A and mix it into 1 litre of water.',
            'Take 10ml of solution from Can B and add it too. Use the measuring cup for correct measurement.',
            'Now stir the solution well so that it mixes uniformly. You can use this to water the plants or to fill up the reservoir.',
            'Nutrients once mixed in water have to be consumed within 3 to 4 weeks else they will lose their potency. So, make Stock solutions as and when needed and use them within 3 to 4 weeks after preparation.'
        ],
        category:'Nutrients'
      },
      {
        id: 9,
        name: 'Cucumber Special Mix - 500 Liters',
        href: '#',
        price: 'Rs. 460',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/e/n/english-cucumbers_1.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/y/hydroponic_nutrients_1_2.png',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Special Formulation for growing hydroponic cucumber.',
        details: [
            'To make 1 litre of nutrient solution, take 10ml stock solution from Can A and mix it into 1 litre of water.',
            'Take 10ml of solution from Can B and add it too. Use the measuring cup for correct measurement.',
            'Now stir the solution well so that it mixes uniformly. You can use this to water the plants or to fill up the reservoir.',
            'Nutrients once mixed in water have to be consumed within 3 to 4 weeks else they will lose their potency. So, make Stock solutions as and when needed and use them within 3 to 4 weeks after preparation.'
        ],
        category:'Nutrients'
      },
      {
        id: 10,
        name: 'General Grow Nutrients - 500 Liters',
        href: '#',
        price: 'Rs. 460',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/g/e/general-grow-nutrients_1.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/y/hydroponic_nutrients_1_2.png',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Suitable for most leafy vegetables and fruiting plants (initial growth phase). Contains all macro and micro nutrients. For 500 liters of final solution. Available in two packets of water soluble nutrients.',
        details: [
            'To make 1 litre of nutrient solution, take 10ml stock solution from Can A and mix it into 1 litre of water.',
            'Take 10ml of solution from Can B and add it too. Use the measuring cup for correct measurement.',
            'Now stir the solution well so that it mixes uniformly. You can use this to water the plants or to fill up the reservoir.',
            'Nutrients once mixed in water have to be consumed within 3 to 4 weeks else they will lose their potency. So, make Stock solutions as and when needed and use them within 3 to 4 weeks after preparation.'
        ],
        category:'Nutrients'
      },
      {
        id: 11,
        name: 'Lettuce Special Mix - 500 liters',
        href: '#',
        price: 'Rs. 450',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/l/e/lettuce_1.png',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/y/hydroponic_nutrients_1_4.png',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Suitable for all kind of Lettuce Plants and it contains all macro and micro nutrients. For 500 liters of final solution. Available in two packets of water soluble nutrients.',
        details: [
            'To make 1 litre of nutrient solution, take 10ml stock solution from Can A and mix it into 1 litre of water.',
            'Take 10ml of solution from Can B and add it too. Use the measuring cup for correct measurement.',
            'Now stir the solution well so that it mixes uniformly. You can use this to water the plants or to fill up the reservoir.',
            'Nutrients once mixed in water have to be consumed within 3 to 4 weeks else they will lose their potency. So, make Stock solutions as and when needed and use them within 3 to 4 weeks after preparation.'
        ],
        category:'Nutrients'
      },
      {
        id: 12,
        name: 'Oregano Special Mix - 500 liters',
        href: '#',
        price: 'Rs. 450',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/o/r/oregano_2.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/y/hydroponic_nutrients_1_4.png',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Special Formulation for growing hydroponic oregano.',
        details: [
            'To make 1 litre of nutrient solution, take 10ml stock solution from Can A and mix it into 1 litre of water.',
            'Take 10ml of solution from Can B and add it too. Use the measuring cup for correct measurement.',
            'Now stir the solution well so that it mixes uniformly. You can use this to water the plants or to fill up the reservoir.',
            'Nutrients once mixed in water have to be consumed within 3 to 4 weeks else they will lose their potency. So, make Stock solutions as and when needed and use them within 3 to 4 weeks after preparation.'
        ],
        category:'Nutrients'
      },
      {
        id: 13,
        name: 'Strawberry Special Mix - 500 L',
        href: '#',
        price: 'Rs. 455',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/s/t/strawberries.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Special Formulation for growing hydroponic strawberries. Contains both Grow and Bloom formulas. Fortified with Micronutrients',
        details: [
            'To make 1 litre of nutrient solution, take 10ml stock solution from Can A and mix it into 1 litre of water.',
            'Take 10ml of solution from Can B and add it too. Use the measuring cup for correct measurement.',
            'Now stir the solution well so that it mixes uniformly. You can use this to water the plants or to fill up the reservoir.',
            'Nutrients once mixed in water have to be consumed within 3 to 4 weeks else they will lose their potency. So, make Stock solutions as and when needed and use them within 3 to 4 weeks after preparation.'
        ],
        category:'Nutrients'
      },
      {
        id: 14,
        name: 'Tomato Special Mix - 500 L',
        href: '#',
        price: 'Rs. 460',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/c/h/cherry-tomato_grande.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Special Formulation for growing hydroponic cherry tomatoes. Contains Grow formulas. Fortified with Micronutrients',
        details: [
            'To make 1 litre of nutrient solution, take 10ml stock solution from Can A and mix it into 1 litre of water.',
            'Take 10ml of solution from Can B and add it too. Use the measuring cup for correct measurement.',
            'Now stir the solution well so that it mixes uniformly. You can use this to water the plants or to fill up the reservoir.',
            'Nutrients once mixed in water have to be consumed within 3 to 4 weeks else they will lose their potency. So, make Stock solutions as and when needed and use them within 3 to 4 weeks after preparation.'
        ],
        category:'Nutrients'
      },
      {
        id: 15,
        name: 'Coco Peat BLOCK - (650 grams)',
        href: '#',
        price: 'Rs. 85',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/6/5/650grams.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://media.istockphoto.com/id/1386492963/photo/close-up-of-a-young-plant-sprouting-from-the-ground-with-green-bokeh-background.jpg?b=1&s=170667a&w=0&k=20&c=Fo_jatUuWyJ4WUmF3pEdAw6pmaVb4--_0RtRsc38dXM=',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Made from Coconut Husks and retains moisture up to 70%. Ideal growing media for plants',
        details: [
            'Coco pith is a 100% natural growing medium, this makes an excellent growing container for plant growing. It makes it resistant to bacterial and fungal growth. It can use with soil has great oxygenation properties which are important for healthy root development.',
            'Coco Peat can be the ability to store and release nutrient to plants for extended periods of a long time. Sow the seeds in the pot around 1 inch deep, Do not put it too deeply. Water the pots gently and keep the pot moist for next 15 days till the seeds germinate, time varies from 3 days to 30 days based on a variety of vegetables.The coco peat block has average weight of 650 gms each and it will expands to 4 kg powder when water added.',
        ],
        category:'Grow Media'
      },
      {
        id: 16,
        name: 'Expanded Clay Pellets (1 kg, 8-16 mm)',
        href: '#',
        price: 'Rs. 175',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/e/x/expanded-clay-balls.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://images.unsplash.com/photo-1568374769301-2358f564f4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Hydroton is a premium porous clay pebbles that hold water and nutrients. It is a planting medium popular with gardeners looking to grow plants in a hydroponic system without the use of soil.',
        details: [
            'It is substrate for hydroponics growing',
            'It is reusable and eco friendly',
            'Serves as good surface area for bacterial growth in Aquaponic systems'
        ],
        category:'Grow Media'
      },
      {
        id: 17,
        name: 'Cherry Tomato Seeds',
        href: '#',
        price: 'Rs. 80',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/c/h/cherry-tomato-seeds.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Each pack contain 30 seeds.',
        details: [
            'pH: 5.5–6.5',
            'Germination time and temperature: 4–6 days; 20–30 °C',
            'Growth time: 50–70 days till first harvest; fruiting 90–120 days up to 8–10 months (indeterminate varieties)',
            'Recommended aquaponic method: media beds and DWC'
        ],
        category:'Seeds'
      },
      {
        id: 18,
        name: 'Methi (Kasturi Fenugreek) Seeds (20 grams)',
        href: '#',
        price: 'Rs. 55',
        images: [
          {
              imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/m/e/methi.jpg',
              imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            imageSrc: 'https://images.unsplash.com/photo-1640671511581-0cc93ea3ebf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
        ],        
        description: 'Methi (fenugreek) is a widely used condiment for adding flavour to dishes. It is abundant in vitamins (Vitamin C, A, and B6) and minerals (potassium, phosphorus, magnesium, and calcium), and is well known to cure constipation and indigestion.',
        details: [
            'In ideal conditions, the seeds germinate within 1-3 days',
            'The plant will be ready for harvesting between 25 to 30 days.',
            'It is recommended to provide water soon after sowing, and at regular intervals so that the watering is just adequate',
        ],
        category:'Seeds'
      },
      {
        id: 19,
        name: 'Dutch Bucket-Grow System - 10 Plants',
        href: '#',
        price: '₹7,500.00',
        images: [
          {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/i/n/indoor-system.jpeg',
          imageAlt: 'DB Grow System - 10 Plants '
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/a/c/acessories.png',
            imageAlt: 'DB Grow System - 10 Plants '
            },
        ],
        description: 'Thе Dutсh Buсkеt іѕ bаѕісаllу a 10 liters capacity with a special drаіn fіttіng thаt mаіntаіnѕ a small rеѕеrvе оf nutrіеnt at the bоttоm. Thіѕ mеthоd іѕ bеѕt ѕuіtеd fоr large, long-term сrорѕ ѕuсh аѕ vine Tоmаtоеѕ, Cuсumbеrѕ аnd roses. Eасh buсkеt is fеd nutrіеnt ѕоlutіоn іndереndеntlу by a single dripper аnd it drаіnѕ thrоugh the bucket іntо a соmmоn drain pipe.',
      details: ['Two drain siphon elbows (included) maintain approximately 2 inches of nutrient water in the bottom of the bucket to prevent the roots from drying out between watering.','Black Dutch Bucket with Siphon elbows','Perfect for hydroponics, tomatoes, eggplant, peppers, and larger plants'],
      category:'Hydroponics'
      },
      {
        id: 20,
        name: 'Dutch Bucket-Grow System - 5 Plants',
        href: '#',
        price: '₹4,500.00',
        images: [
          {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/d/u/dutch-bucket-system.png',
          imageAlt: 'Grow System - 5 Plants Indoor NFT System'
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/a/c/acessories.png',
            imageAlt: 'Grow System - 5 Plants Indoor NFT System'
            },
        ],
        description: 'Thе Dutсh Buсkеt іѕ bаѕісаllу a 10 liters capacity with a special drаіn fіttіng thаt mаіntаіnѕ a small rеѕеrvе оf nutrіеnt at the bоttоm. Thіѕ mеthоd іѕ bеѕt ѕuіtеd fоr large, long-term сrорѕ ѕuсh аѕ vine Tоmаtоеѕ, Cuсumbеrѕ аnd roses. Eасh buсkеt is fеd nutrіеnt ѕоlutіоn іndереndеntlу by a single dripper аnd it drаіnѕ thrоugh the bucket іntо a соmmоn drain pipe.',
      details: ['Two drain siphon elbows (included) maintain approximately 2 inches of nutrient water in the bottom of the bucket to prevent the roots from drying out between watering.','Black Dutch Bucket with Siphon elbows','Perfect for hydroponics, tomatoes, eggplant, peppers, and larger plants'],
      category:'Hydroponics'
      },
      {
        id: 21,
        name: '12 Plants Growing Kit DWC(Deep Water Culture)',
        href: '#',
        price: '₹1,800.00',
        images: [
          {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/k/r/kratky-method-dwc.png',
          imageAlt: 'DWC-12'
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/a/c/acessories.png',
            imageAlt: 'DWC-12'
            },
        ],
        description: 'Our hydroponic gardens are built with quality material and are designed for a seamless and user-friendly system adapted for all. Compact, customizable and flexibly designed gardens to fit in any space in any home. The plants are suspended from the lid of the container. The container acts as a reservoir. It is easy to assemble and is very compact. It comes with 12 plant spaces.',
      details: [],
      category:'Hydroponics'
      },
      {
        id: 22,
        name: 'DWC(Deep Water Culture) - 32sqft',
        href: '#',
        price: '₹16,000.00',
        images: [
          {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/d/w/dwc_2.jpg',
          imageAlt: 'DWC-32'
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/a/c/acessories.png',
            imageAlt: 'DWC-32'
            },
        ],
        description: 'DWCs made of high quality GI sheet and Aluminium profiles of excellent strength. 450 GSM Tarpaulin used for DWC pond liner',
      details: ['You can grow up to128 plants','8ft X 4ft X 9 inch(Length X Width X Depth)','This DWC system should be place on leveled surface'],
      category:'Hydroponics'
      },
      {
        id: 23,
        name: 'Microgreens Growing kit',
        href: '#',
        price: '₹16,000.00',
        images: [
          {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/g/r/growing-pea-shoots-sprouts-microgreens-3903-640x427.jpg',
          imageAlt: 'MGK'
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/m/i/microgreens-tray.jpg',
            imageAlt: 'MGK'
            },
        ],
        description: 'Microgreens are the first true leaves produced from a seedling of vegetables and herbs that are about 2-3 inch tall. The tiny leaves of most of the microgreens get ready for harvest in 12 to 14 days and are packed with nutrition and intense flavours imitating their mature counterparts. Microgreens contain considerably higher levels of vitamins and carotenoids - about five times on an average - than their mature counterparts. Such soaring levels of nutrients help lower the risk of cancer, Alzheimer&apos;s, osteoporosis and boost heart health.',
      details: ['You can grow up to128 plants','8ft X 4ft X 9 inch(Length X Width X Depth)','This DWC system should be place on leveled surface'],
      category:'Hydroponics'
      },
      {
        id: 24,
        name: 'Openable NFT Channels (124X68mm) With End Caps - 30 meters',
        href: '#',
        price: '₹12,000.00',
        images: [
          {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/n/f/nft-pipes.jpeg',
          imageAlt: 'NFT pipes'
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/o/p/openable-nft-channels.png',
            imageAlt: 'NFT pipes'
            },
        ],
        description: 'The NFT system is quite popular with commercial and home hydroponic growers as well. Because of the fairly simple design, NFT systems are suitable for growing various plants.',
      details: ['NFT channel 124*68 mm(Width & Height) and 3 meter and 6 meter length of pipes with 3 inch holes are available.','₹ 355/- per meter','₹1065/- per 3 meter channel','₹ 70/- per End Cap'],
      category:'Accessories'
      },
      {
        id: 25,
        name: '3 inch net pots for Hydroponics, Aquaponics, Aeroponics & Nursery, 50 Pieces',
        href: '#',
        price: '₹350.00',
        images: [
          {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/n/hnp3.jpg',
          imageAlt: 'pots'
          },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/2/-/2-inch.jpg',
            imageAlt: 'pots'
            },
        ],
        description: 'Net Pots promote more efficient plant growth providing abundant aeration. They produce healthy roots with even drainage, which let the roots grow their own way, right down through the pot and out of the sides, allow for bigger, healthier roots. Made of UV-resistant plastics so that net pot can be reused without crumbling. With wide lip along the top of containers, Hydrilla net pots are easy to grab, lift and transport. These net pots work with many types of media, such as hydroponics or soil-based, expanded clay pebbles, coco peat, vermiculite, rock wool, etc.',
      details: ['Premium Quality Net pots made from 100% virgin plastic. These net pots can be used in all kinds of hydroponic systems like NFT, DWC and Aeroponic systems.','pack of 50 pieces','3-inch top diameter'],
      category:'Accessories'
      },
      {
        id: 26,
        name: '2 inch net pots for Hydroponics, Aquaponics, Aeroponics & Nursery, 50 Pieces',
        href: '#',
        price: '₹265.00',
        images: [
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/2/-/2-inch.jpg',
            imageAlt: 'pots'
            },
          {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/n/hnp3.jpg',
          imageAlt: 'pots'
          },
          
        ],
        description: 'Net Pots promote more efficient plant growth providing abundant aeration. They produce healthy roots with even drainage, which let the roots grow their own way, right down through the pot and out of the sides, allow for bigger, healthier roots. Made of UV-resistant plastics so that net pot can be reused without crumbling. With wide lip along the top of containers, Hydrilla net pots are easy to grab, lift and transport. These net pots work with many types of media, such as hydroponics or soil-based, expanded clay pebbles, coco peat, vermiculite, rock wool, etc.',
      details: ['Premium Quality Net pots made from 100% virgin plastic. These net pots can be used in all kinds of hydroponic systems like NFT, DWC and Aeroponic systems.','pack of 50 pieces','2-inch top diameter'],
      category:'Accessories'
      },
      {
        id: 27,
        name: 'Sunsun DY 30 Electrical Magnetic Air Pump',
        href: '#',
        price: '₹2,050.00',
        images: [
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/s/u/sunsun-dy-50-air-pump.jpg',
            imageAlt: 'pump'
            },
          {
          imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/q/hqb3000.jpg',
          imageAlt: 'pump'
          },
          
        ],
        description: '',
      details: [],
      category:'Accessories'
      },
      {
        id: 28,
        name: 'Sun Sun HQB 3000 Multi Function Submersible Pump',
        href: '#',
        price: '₹1,800.00',
        images: [
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/q/hqb3000.jpg',
            imageAlt: 'pump'
            },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/s/u/sunsun-dy-50-air-pump.jpg',
            imageAlt: 'pump'
            },
        ],
        description: '',
      details: [],
      category:'Accessories'
      },
      {
        id: 28,
        name: 'Sun Sun HQB 3000 Multi Function Submersible Pump',
        href: '#',
        price: '₹1,800.00',
        images: [
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/h/q/hqb3000.jpg',
            imageAlt: 'pump'
            },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/s/u/sunsun-dy-50-air-pump.jpg',
            imageAlt: 'pump'
            },
        ],
        description: '',
      details: [],
      category:'Accessories'
      },
      {
        id: 29,
        name: 'Aquaponics Fish Tank - 1000 liters capacity',
        href: '#',
        price: '₹9,500.00',
        images: [
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/f/i/fish_tanks.png',
            imageAlt: 'Fish Tank'
            },
          {
            imageSrc: 'https://hydrilla.in/store/media/catalog/product/cache/2/image/600x600/958f60a396114865c6863491507366d5/s/u/sunsun-dy-50-air-pump.jpg',
            imageAlt: 'Fish Tank'
            },
        ],
        description: 'Fish tanks are a crucial component in every unit. As such, fish tanks can account for up to 20_percent of the entire cost of an aquaponic unit. Fish require certain conditions in order to survive and thrive, and therefore the fish tank should be chosen wisely. There are several important aspects to consider, including the shape, material and colour.',
      details: ['diameter- 3&apos;6" and Height- 3&apos;6"','1000 liter fish tank','Rigid support structure','Portable and easy to install'],
      category:'Accessories'
      },

    // More products...
  ]
  
  
  
  export default function Example() {
    return (
      <div className="bg-gray-900">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link href={{ pathname: '/ProductOverview', query: { object: JSON.stringify(product)} }}>
              <motion.div 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.8 }}
                key={product.id}  
                className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.images[0].imageSrc}
                    alt={product.images[0].imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-white">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-white">{product.price}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  