export type PropertyCategory = 'buy' | 'rent' | 'development' | 'commercial';

export type PropertyType = 'villa' | 'penthouse' | 'retreat' | 'chalet' | 'estate';

export interface Property {
  id: string;
  name: string;
  country: string;
  region: string;
  city: string;
  locationFormatted: string;
  price: number;
  priceFormatted: string;
  category: PropertyCategory;
  propertyType: PropertyType;
  propertyTypeLabel: string;
  areaSqM: number;
  areaSqFt: number;
  floors: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  parkingSpaces: number;
  furnished: boolean;
  amenities: string[];
  image: string;
  gallery: string[];
  description: string;
  architecturalHighlights: string[];
  projectedRentalYield: number; // percentage, e.g. 12.4
  annualAppreciation: number; // percentage, e.g. 7.8
  coordinates: {
    lat: number;
    lng: number;
  };
  floorPlanRooms: {
    name: string;
    dimension: string;
    level: string;
  }[];
  isFeatured?: boolean;
}

export interface PropertyFilterState {
  category: PropertyCategory;
  country: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  minBedrooms: number;
  minAreaSqM: number;
  furnishedOnly: boolean;
  parkingRequired: boolean;
  searchQuery: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyInterest: string;
  preferredLocation: string;
  budget: string;
  message: string;
  tourType?: 'in-person' | 'virtual' | 'consultation';
  preferredDate?: string;
}
