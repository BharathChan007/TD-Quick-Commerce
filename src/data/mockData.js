// Mock data for car listings and reviews

export const carBrands = [
  'Toyota',
  'Honda',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Hyundai',
  'Maruti Suzuki',
  'Tata',
  'Mahindra',
  'Kia'
];

export const cars = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Fortuner',
    year: 2023,
    price: 3500000,
    bookingAmount: 50000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    mileage: '10 kmpl',
    seatingCapacity: 7,
    color: 'Pearl White',
    location: 'Mumbai',
    description: 'The Toyota Fortuner is a premium SUV that combines powerful performance with luxurious comfort. Perfect for families and adventure enthusiasts alike.',
    features: [
      '4WD Drive System',
      'Premium Leather Seats',
      'Sunroof',
      'Advanced Safety Features',
      'Touchscreen Infotainment',
      'Climate Control',
      'Cruise Control',
      'Parking Sensors'
    ],
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/fortuner-exterior-right-front-three-quarter-71.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/fortuner-exterior-right-side-view.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/fortuner-interior-dashboard.jpeg'
    ],
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'City',
    year: 2024,
    price: 1200000,
    bookingAmount: 25000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    mileage: '18 kmpl',
    seatingCapacity: 5,
    color: 'Radiant Red',
    location: 'Delhi',
    description: 'Honda City is a stylish and feature-packed sedan that offers excellent fuel efficiency and a comfortable ride for daily commutes.',
    features: [
      'Lane Watch Camera',
      'Cruise Control',
      'Sunroof',
      'Premium Audio System',
      'Automatic Climate Control',
      'Keyless Entry',
      'Push Button Start',
      'Rear AC Vents'
    ],
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter-76.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-side-view.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-interior-dashboard.jpeg'
    ],
    rating: 4.6,
    reviews: 289
  },
  {
    id: 3,
    brand: 'BMW',
    model: '3 Series',
    year: 2023,
    price: 5500000,
    bookingAmount: 100000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    mileage: '14 kmpl',
    seatingCapacity: 5,
    color: 'Mineral White',
    location: 'Bangalore',
    description: 'The BMW 3 Series is the epitome of luxury and performance. Experience the perfect blend of sportiness and elegance.',
    features: [
      'Adaptive LED Headlights',
      'Premium Sound System',
      'Leather Upholstery',
      'iDrive Infotainment',
      'Parking Assistant',
      'Ambient Lighting',
      'Wireless Charging',
      'Head-Up Display'
    ],
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/3-series-exterior-right-front-three-quarter-4.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/3-series-exterior-right-side-view.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/3-series-interior-dashboard.jpeg'
    ],
    rating: 4.9,
    reviews: 178
  },
  {
    id: 4,
    brand: 'Hyundai',
    model: 'Creta',
    year: 2024,
    price: 1800000,
    bookingAmount: 30000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    mileage: '17 kmpl',
    seatingCapacity: 5,
    color: 'Phantom Black',
    location: 'Chennai',
    description: 'Hyundai Creta is one of India\'s most popular compact SUVs, offering modern design, advanced features, and great value.',
    features: [
      'Panoramic Sunroof',
      'Ventilated Seats',
      'Digital Cluster',
      '360-Degree Camera',
      'Wireless Phone Charger',
      'Air Purifier',
      'BOSE Premium Sound',
      'Smart Connectivity'
    ],
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-side-view.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-interior-dashboard.jpeg'
    ],
    rating: 4.7,
    reviews: 412
  },
  {
    id: 5,
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2023,
    price: 7500000,
    bookingAmount: 150000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    mileage: '13 kmpl',
    seatingCapacity: 5,
    color: 'Obsidian Black',
    location: 'Mumbai',
    description: 'The Mercedes-Benz E-Class delivers unparalleled luxury, cutting-edge technology, and a supremely comfortable ride.',
    features: [
      'MBUX Infotainment',
      'Burmester Sound System',
      'Multibeam LED Headlights',
      'Active Parking Assist',
      'Memory Seats',
      'Air Balance Package',
      'Massage Function',
      'Augmented Reality Navigation'
    ],
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/e-class-exterior-right-front-three-quarter.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/e-class-exterior-right-side-view.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/e-class-interior-dashboard.jpeg'
    ],
    rating: 4.9,
    reviews: 95
  },
  {
    id: 6,
    brand: 'Maruti Suzuki',
    model: 'Swift',
    year: 2024,
    price: 800000,
    bookingAmount: 15000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    mileage: '22 kmpl',
    seatingCapacity: 5,
    color: 'Lucent Orange',
    location: 'Pune',
    description: 'The Maruti Suzuki Swift is India\'s favorite hatchback, known for its sporty design, peppy performance, and excellent fuel economy.',
    features: [
      'SmartPlay Infotainment',
      'Auto AC',
      'Reverse Parking Camera',
      'Steering Mounted Controls',
      'Central Locking',
      'Power Windows',
      'Dual Airbags',
      'ABS with EBD'
    ],
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-side-view.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-interior-dashboard.jpeg'
    ],
    rating: 4.5,
    reviews: 523
  },
  {
    id: 7,
    brand: 'Audi',
    model: 'Q7',
    year: 2023,
    price: 8500000,
    bookingAmount: 200000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    mileage: '12 kmpl',
    seatingCapacity: 7,
    color: 'Navarra Blue',
    location: 'Delhi',
    description: 'The Audi Q7 is a full-size luxury SUV that offers spacious interiors, advanced technology, and exceptional comfort for the entire family.',
    features: [
      'Virtual Cockpit Plus',
      'MMI Navigation',
      'Bang & Olufsen Sound',
      'Adaptive Air Suspension',
      'Matrix LED Headlights',
      '4-Zone Climate Control',
      'Panoramic Sunroof',
      'Advanced Driver Assistance'
    ],
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/47336/q7-exterior-right-front-three-quarter-3.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/47336/q7-exterior-right-side-view.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/47336/q7-interior-dashboard.jpeg'
    ],
    rating: 4.8,
    reviews: 142
  },
  {
    id: 8,
    brand: 'Tata',
    model: 'Nexon EV',
    year: 2024,
    price: 1600000,
    bookingAmount: 25000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    mileage: '312 km range',
    seatingCapacity: 5,
    color: 'Intensi-Teal',
    location: 'Bangalore',
    description: 'The Tata Nexon EV is India\'s best-selling electric SUV, offering zero emissions, low running costs, and impressive performance.',
    features: [
      'Fast Charging Support',
      'Regenerative Braking',
      'Connected Car Tech',
      'Digital Instrument Cluster',
      'Automatic Climate Control',
      'Drive Modes',
      'Top Safety Ratings',
      'Premium Interior'
    ],
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-ev-exterior-right-front-three-quarter.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-ev-exterior-right-side-view.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-ev-interior-dashboard.jpeg'
    ],
    rating: 4.6,
    reviews: 267
  },
  {
    id: 9,
    brand: 'Mahindra',
    model: 'Scorpio-N',
    year: 2024,
    price: 2000000,
    bookingAmount: 35000,
    fuelType: 'Diesel',
    transmission: 'Manual',
    mileage: '15 kmpl',
    seatingCapacity: 7,
    color: 'Dazzling Silver',
    location: 'Hyderabad',
    description: 'The Mahindra Scorpio-N is a rugged and powerful SUV built for Indian roads, offering commanding presence and off-road capability.',
    features: [
      '4x4 Capability',
      'Terrain Modes',
      'Dual-Zone AC',
      'Largest-in-Segment Sunroof',
      'Sony 3D Sound System',
      'Wireless Charging',
      '6 Airbags',
      'Hill Hold & Descent Control'
    ],
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/scorpio-n-exterior-right-front-three-quarter-109.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/scorpio-n-exterior-right-side-view.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/scorpio-n-interior-dashboard.jpeg'
    ],
    rating: 4.7,
    reviews: 198
  },
  {
    id: 10,
    brand: 'Kia',
    model: 'Seltos',
    year: 2024,
    price: 1900000,
    bookingAmount: 30000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    mileage: '16 kmpl',
    seatingCapacity: 5,
    color: 'Aurora Black Pearl',
    location: 'Kolkata',
    description: 'The Kia Seltos is a feature-rich compact SUV that combines bold design with cutting-edge technology and comfortable interiors.',
    features: [
      'UVO Connect',
      '10.25-inch Touchscreen',
      'Air Purifier',
      'Ambient Lighting',
      'Ventilated Front Seats',
      'BOSE Premium Audio',
      'Smart Pure Air Filter',
      '360 Camera with Blind View'
    ],
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/seltos-exterior-right-front-three-quarter.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/seltos-exterior-right-side-view.jpeg',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/seltos-interior-dashboard.jpeg'
    ],
    rating: 4.7,
    reviews: 331
  }
];

export const customerReviews = {
  1: [
    {
      id: 1,
      customerName: 'Rajesh Kumar',
      rating: 5,
      date: '2024-11-15',
      comment: 'Excellent SUV! The build quality is outstanding and the drive is very smooth. Perfect for long trips with family.'
    },
    {
      id: 2,
      customerName: 'Priya Sharma',
      rating: 5,
      date: '2024-10-28',
      comment: 'Love the Fortuner! It\'s powerful, comfortable, and has all the features I needed. Test drive experience was great too.'
    },
    {
      id: 3,
      customerName: 'Amit Patel',
      rating: 4,
      date: '2024-09-12',
      comment: 'Great car overall. Slightly expensive but worth it for the quality and prestige. Service is also very good.'
    }
  ],
  2: [
    {
      id: 4,
      customerName: 'Sneha Reddy',
      rating: 5,
      date: '2024-11-20',
      comment: 'Perfect sedan for city driving. Fuel efficiency is excellent and the cabin is very comfortable.'
    },
    {
      id: 5,
      customerName: 'Vikram Singh',
      rating: 4,
      date: '2024-10-05',
      comment: 'Good value for money. The features are impressive and maintenance cost is reasonable.'
    }
  ],
  3: [
    {
      id: 6,
      customerName: 'Arjun Mehta',
      rating: 5,
      date: '2024-11-10',
      comment: 'Pure luxury! The BMW 3 Series is a dream to drive. Performance and comfort are top-notch.'
    },
    {
      id: 7,
      customerName: 'Kavita Desai',
      rating: 5,
      date: '2024-09-25',
      comment: 'Absolutely love this car. The technology and driving experience are unmatched.'
    }
  ],
  4: [
    {
      id: 8,
      customerName: 'Rahul Verma',
      rating: 5,
      date: '2024-11-18',
      comment: 'Best compact SUV in its segment. Feature-loaded and very practical for daily use.'
    },
    {
      id: 9,
      customerName: 'Deepa Iyer',
      rating: 4,
      date: '2024-10-15',
      comment: 'Great car with amazing features. The panoramic sunroof is a highlight!'
    }
  ],
  5: [
    {
      id: 10,
      customerName: 'Sanjay Gupta',
      rating: 5,
      date: '2024-11-05',
      comment: 'Ultimate luxury sedan. Every detail is perfect. Worth every penny!'
    }
  ],
  6: [
    {
      id: 11,
      customerName: 'Anita Roy',
      rating: 5,
      date: '2024-11-22',
      comment: 'Love my Swift! It\'s zippy, fun to drive, and very fuel efficient. Perfect for city.'
    },
    {
      id: 12,
      customerName: 'Manish Joshi',
      rating: 4,
      date: '2024-10-30',
      comment: 'Reliable and affordable. Great first car. Would recommend to anyone.'
    }
  ],
  7: [
    {
      id: 13,
      customerName: 'Ravi Kapoor',
      rating: 5,
      date: '2024-11-08',
      comment: 'Audi Q7 is a fantastic family SUV. Spacious, luxurious, and packed with tech.'
    }
  ],
  8: [
    {
      id: 14,
      customerName: 'Pooja Nair',
      rating: 5,
      date: '2024-11-12',
      comment: 'Loving the EV experience! No more petrol stations, and it\'s so quiet and smooth.'
    },
    {
      id: 15,
      customerName: 'Karthik Raman',
      rating: 4,
      date: '2024-10-20',
      comment: 'Great electric SUV. Charging infrastructure is improving. Very satisfied!'
    }
  ],
  9: [
    {
      id: 16,
      customerName: 'Suresh Yadav',
      rating: 5,
      date: '2024-11-16',
      comment: 'Scorpio-N is a beast! Perfect for Indian roads. Very comfortable for long drives.'
    }
  ],
  10: [
    {
      id: 17,
      customerName: 'Meera Shah',
      rating: 5,
      date: '2024-11-14',
      comment: 'Kia Seltos exceeded my expectations. The features are amazing for the price.'
    },
    {
      id: 18,
      customerName: 'Arun Kumar',
      rating: 4,
      date: '2024-10-08',
      comment: 'Solid SUV with great looks and features. Very happy with my purchase!'
    }
  ]
};
