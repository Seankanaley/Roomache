import colors from '../styles/colors';

const listing1Photo = require('./photos/harold1.png');
const listing2Photo = require('./photos/harold4.png');
const listing3Photo = require('./photos/harold3.png');
const listing4Photo = require('./photos/harold2.png');
const listing5Photo = require('./photos/harold5.png');
const listing6Photo = require('./photos/harold6.png');
const listing7Photo = require('./photos/listing7.png');
const listing8Photo = require('./photos/listing8.png');
const listing9Photo = require('./photos/listing9.png');
const listing10Photo = require('./photos/listing10.png');
const listing11Photo = require('./photos/listing11.png');

const listings = [
  {
    title: 'Potential Roomates',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: listing1Photo,
        name: 'JOHNNY LINDEN, M, 27',
        personality: "Relaxed, avid reader who enjoys a hot cup of tea.",
        location: 'Portland, OR',
        color: colors.darkOrange,
      },
      {
        id: 2,
        photo: listing2Photo,
        name: 'FRANK CHUBOTSKY, M, 32',
        personality: "Friendly upbeat guy who loves hang out and watch netflix.",
        location: 'Portland, OR',
        color: colors.darkOrange,
      },
      {
        id: 3,
        photo: listing3Photo,
        name: 'JAKE MCULLEN, M, 23',
        personality: "Computer programmer at Nike, big foodie.",
        location: 'Portland, OR',
        color: colors.darkOrange,
      },
      {
        id: 4,
        photo: listing4Photo,
        name: 'CALEB RINEHARDT, M, 26',
        personality: "Musician 14/7 the other hours I'm sleeping or drinking .",
        location: 'Portland, OR',
        color: colors.darkOrange,
      },
      {
        id: 5,
        photo: listing5Photo,
        name: 'HAROLD DOBSON, M, 55',
        personality: "Trend setter, when I'm not traveling abroad or at festivals I'm writing my biography.",
        location: 'Portland, OR',
        color: colors.darkOrange,
      },
      {
        id: 6,
        photo: listing6Photo,
        name: 'FINNEAS JOHNSON, M, 42',
        personality: "Hair stylist, and part owner of a taco truck. I'm always busy!",
        location: 'Portland, OR',
        color: colors.darkOrange,
      },
    ],
  },
  {
    title: 'Rentals',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 7,
        photo: listing7Photo,
        name: '$1000',
        personality: '1BR Gorgeous Units in Luxury Building. Washer/Dryer in Units.',
        location: 'Portland, OR',
        price: 1000,
        stars: 3.5,
        color: colors.blue01,
      },
      {
        id: 8,
        photo: listing8Photo,
        name: '$1400',
        personality: 'Spacious, updated 2 bedroom, 1 bathroom apartment in Lakeview, available May 1st.',
        location: 'Portland, OR',
        price: 1200,
        stars: 4,
        color: colors.blue01,
      },
      {
        id: 9,
        photo: listing9Photo,
        name: '$4500',
        personality: 'Spacious Condo Just a 5 Minute Walk to the Metro',
        location: 'Portland, OR',
        price: 4500,
        stars: 5,
        color: colors.blue01,
      },
      {
        id: 10,
        photo: listing10Photo,
        name: '$2000',
        personality: 'Charming 2 BR on Lovely Tree-Lined Street',
        location: 'Portland, OR',
        price: 2000,
        stars: 5,
        color: colors.blue01,
      },
      {
        id: 11,
        photo: listing11Photo,
        name: '$1400',
        personality: 'Tiny home located near portland',
        location: 'Portland, OR',
        price: 1400,
        stars: 4,
        color: colors.blue01,
      },
    ],
  }
];

export default listings;
