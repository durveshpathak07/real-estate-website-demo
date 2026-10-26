import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProperties, getUniqueCountries } from './filterProperties';
import { Property } from '../types/property';

const mockProperties: Property[] = [
  {
    id: 'prop-1',
    name: 'Villa Sol',
    country: 'USA',
    region: 'California',
    city: 'Los Angeles',
    locationFormatted: 'USA / California / Los Angeles',
    price: 3400000,
    priceFormatted: '$3,400,000',
    category: 'buy',
    propertyType: 'villa',
    propertyTypeLabel: 'Modern Villa',
    areaSqM: 300,
    areaSqFt: 3229,
    floors: 1,
    bedrooms: 4,
    bathrooms: 2,
    yearBuilt: 2024,
    parkingSpaces: 3,
    furnished: true,
    amenities: ['Pool', 'View'],
    image: '/test.jpg',
    gallery: ['/test.jpg'],
    description: 'Stunning hillside modern villa with city views',
    architecturalHighlights: ['Glass facade'],
    projectedRentalYield: 11.2,
    annualAppreciation: 8.4,
    coordinates: { lat: 34.05, lng: -118.25 },
    floorPlanRooms: []
  },
  {
    id: 'prop-2',
    name: 'Alpine Haven',
    country: 'USA',
    region: 'Colorado',
    city: 'Aspen',
    locationFormatted: 'USA / Colorado / Aspen',
    price: 5000000,
    priceFormatted: '$5,000,000',
    category: 'buy',
    propertyType: 'chalet',
    propertyTypeLabel: 'Alpine Chalet',
    areaSqM: 400,
    areaSqFt: 4305,
    floors: 2,
    bedrooms: 5,
    bathrooms: 3,
    yearBuilt: 2025,
    parkingSpaces: 4,
    furnished: false,
    amenities: ['Fireplace', 'Ski Access'],
    image: '/test2.jpg',
    gallery: ['/test2.jpg'],
    description: 'Timber and glass luxury mountain home in Aspen',
    architecturalHighlights: ['Timber frames'],
    projectedRentalYield: 12.8,
    annualAppreciation: 10.2,
    coordinates: { lat: 39.19, lng: -106.81 },
    floorPlanRooms: []
  },
  {
    id: 'prop-3',
    name: 'Comporta Dune',
    country: 'Portugal',
    region: 'Lisbon Coast',
    city: 'Comporta',
    locationFormatted: 'Portugal / Lisbon Coast / Comporta',
    price: 2960000,
    priceFormatted: '$2,960,000',
    category: 'buy',
    propertyType: 'villa',
    propertyTypeLabel: 'Coastal Sanctuary',
    areaSqM: 220,
    areaSqFt: 2368,
    floors: 1,
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2024,
    parkingSpaces: 2,
    furnished: true,
    amenities: ['Plunge Pool', 'Dune Path'],
    image: '/test3.jpg',
    gallery: ['/test3.jpg'],
    description: 'Minimalist coastal sanctuary near ocean dunes',
    architecturalHighlights: ['Microcement floors'],
    projectedRentalYield: 10.5,
    annualAppreciation: 8.8,
    coordinates: { lat: 38.37, lng: -8.78 },
    floorPlanRooms: []
  }
];

test('filters properties by country', () => {
  const result = filterProperties(mockProperties, { country: 'Portugal' });
  assert.equal(result.length, 1);
  assert.equal(result[0].name, 'Comporta Dune');
});

test('filters properties by min bedrooms', () => {
  const result = filterProperties(mockProperties, { minBedrooms: 4 });
  assert.equal(result.length, 2);
});

test('filters properties by price range', () => {
  const result = filterProperties(mockProperties, { minPrice: 3000000, maxPrice: 4000000 });
  assert.equal(result.length, 1);
  assert.equal(result[0].name, 'Villa Sol');
});

test('filters properties by furnished status', () => {
  const result = filterProperties(mockProperties, { furnishedOnly: true });
  assert.equal(result.length, 2);
});

test('filters properties by keyword search', () => {
  const result = filterProperties(mockProperties, { searchQuery: 'aspen' });
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'prop-2');
});

test('extracts unique countries correctly', () => {
  const countries = getUniqueCountries(mockProperties);
  assert.deepEqual(countries, ['Portugal', 'USA']);
});
