let sampleListings = [
  {
    "title": "Modern Apartment",
    "description": "A beautiful modern apartment in the city center.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=7f3d935795b6894c887d5582ab51414b8f1ff306-12630875-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 1200,
    "location": "New York, NY",
    "country": "USA",
    "category": "Trending",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Cozy Cottage",
    "description": "A cozy cottage in the countryside.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=9921b3a348f577b7d61d5e36bfca3d8b28ccdefe-10137006-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 800,
    "location": "Lake District",
    "country": "UK",
    "category": "Rooms",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Luxury Villa",
    "description": "A luxurious villa with a private pool.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=011be3fc58dcc6d5d73638710bb9da9af3b62f11-9863899-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 2500,
    "location": "Malibu, CA",
    "country": "USA",
    "category": "Amazing pools",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Downtown Loft",
    "description": "A stylish loft in the heart of downtown.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=8c9d041a79f574699d25b0d14ef848b7-4892849-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 1500,
    "location": "San Francisco, CA",
    "country": "USA",
    "category": "Trending",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Beachfront House",
    "description": "A beautiful house right on the beach.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=4ee27d67ecdc09c0b4129afc6cb6e10365bcdc38-8496972-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 2000,
    "location": "Miami, FL",
    "country": "USA",
    "category": "Beachfront",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Mountain Cabin",
    "description": "A rustic cabin in the mountains.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=750518373e9b6cf5c5b3fc252706281e9748d227-12851522-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 900,
    "location": "Aspen, CO",
    "country": "USA",
    "category": "Cabins",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "City Studio",
    "description": "A compact studio apartment in the city.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=fe4d78a5bc303d2895e74fc0e871437dc9397bc9-8316909-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 700,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Trending",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Suburban Home",
    "description": "A spacious home in a quiet suburb.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=e83680a5d4838afd9cb75e1ebd30e697df6d49cb-8497822-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 1300,
    "location": "Chicago, IL",
    "country": "USA",
    "category": "Rooms",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Historic Townhouse",
    "description": "A charming historic townhouse.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=3db270f058ded443ece4346b3495a53467b148ae-12496607-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 1400,
    "location": "Boston, MA",
    "country": "USA",
    "category": "Rooms",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Penthouse Suite",
    "description": "A luxurious penthouse with stunning views.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=92e128f1bbf98c13ae6393a25072eeffbca26800-7554713-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 3000,
    "location": "Dubai",
    "country": "UAE",
    "category": "Amazing views",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Rural Farmhouse",
    "description": "A traditional farmhouse in a rural area.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=ea9aac7913f7bc9ff1bcca0eb71c0e0808419579-10703717-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 850,
    "location": "Tuscany",
    "country": "Italy",
    "category": "Farms",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Seaside Cottage",
    "description": "A quaint cottage by the sea.",
    "image": {
      "url": "https://1.bp.blogspot.com/-rrdnub7otL0/W0q8iuz2PeI/AAAAAAAAeqE/i7WGoHa-aj4jKDoixiPwYBpZxAAkkRRFwCLcBGAs/s1600/Small%2Bcott.jpg",
      "filename": "lisitngimage"
    },
    "price": 950,
    "location": "Cornwall",
    "country": "UK",
    "category": "Lakefronts",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Urban Flat",
    "description": "A modern flat in an urban area.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=2b4777dd15ef862ffcf5ede62cd71094f9ea22be-4078450-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 1100,
    "location": "Berlin",
    "country": "Germany",
    "category": "Trending",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Country Manor",
    "description": "A grand manor house in the countryside.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=1451f533c1fcf915ee1a19a32aa77a8bcddcd717-11467820-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 2200,
    "location": "Cotswolds",
    "country": "UK",
    "category": "Rooms",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Tropical Bungalow",
    "description": "A serene bungalow in a tropical setting.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=4ee5cedb792132b91f2de60001c49240-5660190-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 1800,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Tropical",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "City Penthouse",
    "description": "A luxurious penthouse in the city.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=491d0294c6f511027ea2c3f2c30f4e652d985a90-13020977-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 3200,
    "location": "New York, NY",
    "country": "USA",
    "category": "Trending",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Desert Villa",
    "description": "A stunning villa in the desert.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=be4ea9310fc50b2d79fc3bb2663159e08895d936-12469033-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 2400,
    "location": "Scottsdale, AZ",
    "country": "USA",
    "category": "Trending",
    "owner": "674870c7a88d27f0a24f35fa"
  },
  {
    "title": "Island Retreat",
    "description": "A peaceful retreat on a private island.",
    "image": {
      "url": "https://avatars.mds.yandex.net/i?id=750518373e9b6cf5c5b3fc252706281e9748d227-12851522-images-thumbs&n=13",
      "filename": "lisitngimage"
    },
    "price": 5000,
    "location": "Fiji",
    "country": "Fiji",
    "category": "Tropical",
    "owner": "674870c7a88d27f0a24f35fa"
  }
];

module.exports = sampleListings;
