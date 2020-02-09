import colors from '../styles/colors';

const listing1Photo = require('./photos/harold1.png');
const listing2Photo = require('./photos/listing2.png');
const listing3Photo = require('./photos/listing3.png');
const listing4Photo = require('./photos/listing4.png');
const listing5Photo = require('./photos/listing5.png');
const listing6Photo = require('./photos/listing6.png');
const listing7Photo = require('./photos/listing7.png');
const listing8Photo = require('./photos/listing8.png');
const listing9Photo = require('./photos/listing9.png');
const listing10Photo = require('./photos/listing10.png');
const listing11Photo = require('./photos/listing11.png');
const listing12Photo = require('./photos/listing12.png');
const listing13Photo = require('./photos/listing13.png');
const listing14Photo = require('./photos/listing14.png');
const listing15Photo = require('./photos/listing15.png');
const listing16Photo = require('./photos/listing16.png');

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
        location: 'Spokane, WA',
        color: colors.darkOrange,
      },
      {
        id: 2,
        photo: listing1Photo,
        name: 'JOHNNY LINDEN, M, 27',
        personality: "Relaxed, avid reader who enjoys a hot cup of tea.",
        location: 'Spokane, WA',
        color: colors.darkOrange,
      },
      {
        id: 3,
        photo: listing1Photo,
        name: 'JOHNNY LINDEN, M, 27',
        personality: "Relaxed, avid reader who enjoys a hot cup of tea.",
        location: 'Spokane, WA',
        color: colors.darkOrange,
      },
      {
        id: 4,
        photo: listing1Photo,
        name: 'JOHNNY LINDEN, M, 27',
        personality: "Relaxed, avid reader who enjoys a hot cup of tea.",
        location: 'Spokane, WA',
        color: colors.darkOrange,
      },
      {
        id: 5,
        photo: listing1Photo,
        name: 'JOHNNY LINDEN, M, 27',
        personality: "Relaxed, avid reader who enjoys a hot cup of tea.",
        location: 'Spokane, WA',
        color: colors.darkOrange,
      },
      {
        id: 6,
        photo: listing1Photo,
        name: 'JOHNNY LINDEN, M, 27',
        personality: "Relaxed, avid reader who enjoys a hot cup of tea.",
        location: 'Spokane, WA',
        color: colors.darkOrange,
      },
    ],
  },
  {
    title: 'Homes',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 7,
        photo: listing7Photo,
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'BALIAN TREEHOUSE with beautiful pool',
        location: 'Bali, Indonesia',
        price: 72,
        priceType: 'per night',
        stars: 101,
        color: colors.blue01,
      },
      {
        id: 8,
        photo: listing8Photo,
        type: 'ENTIRE VILLA - 3 BEDS',
        title: 'Casa de Rio - Beach and Mountains',
        location: 'Secarias, Portugal',
        price: 69,
        priceType: 'per night',
        stars: 119,
        color: colors.brown01,
      },
      {
        id: 9,
        photo: listing9Photo,
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'Cozy A-Frame Cabin in the Redwoods',
        location: 'Cazadero, United States',
        price: 152,
        priceType: 'per night',
        stars: 320,
        color: colors.darkOrange,
      },
      {
        id: 10,
        photo: listing10Photo,
        type: 'ENTIRE GUESTHOUSE - 1 BED',
        title: '1880s Carriage House in Curtis Park',
        location: 'Denver, United States',
        price: 116,
        priceType: 'per night',
        stars: 300,
        color: colors.gray04,
      },
      {
        id: 11,
        photo: listing11Photo,
        type: 'ENTIRE BOAT - 2 BEDS',
        title: 'A Pirate\'s Life for Me Houseboar!',
        location: 'Charleston, United States',
        price: 182,
        priceType: 'per night',
        stars: 132,
        color: colors.blue01,
      },
    ],
  }
];

export default listings;
