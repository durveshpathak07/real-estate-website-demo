import { Property, PropertyFilterState } from '../types/property';

export const DEFAULT_FILTER_STATE: PropertyFilterState = {
  category: 'buy',
  country: 'all',
  propertyType: 'all',
  minPrice: 0,
  maxPrice: 10000000,
  minBedrooms: 0,
  minAreaSqM: 0,
  furnishedOnly: false,
  parkingRequired: false,
  searchQuery: ''
};

export function filterProperties(
  properties: Property[],
  filters: Partial<PropertyFilterState>
): Property[] {
  const activeFilters = { ...DEFAULT_FILTER_STATE, ...filters };

  return properties.filter((property) => {
    // Category check
    if (activeFilters.category && property.category !== activeFilters.category) {
      return false;
    }

    // Country check
    if (activeFilters.country && activeFilters.country !== 'all') {
      const matchCountry =
        property.country.toLowerCase() === activeFilters.country.toLowerCase() ||
        property.locationFormatted.toLowerCase().includes(activeFilters.country.toLowerCase());
      if (!matchCountry) return false;
    }

    // Property Type check
    if (activeFilters.propertyType && activeFilters.propertyType !== 'all') {
      if (property.propertyType !== activeFilters.propertyType) {
        return false;
      }
    }

    // Price range check
    if (property.price < activeFilters.minPrice || property.price > activeFilters.maxPrice) {
      return false;
    }

    // Bedrooms check
    if (property.bedrooms < activeFilters.minBedrooms) {
      return false;
    }

    // Area check
    if (property.areaSqM < activeFilters.minAreaSqM) {
      return false;
    }

    // Furnished check
    if (activeFilters.furnishedOnly && !property.furnished) {
      return false;
    }

    // Parking check
    if (activeFilters.parkingRequired && property.parkingSpaces <= 0) {
      return false;
    }

    // Search query keyword check
    if (activeFilters.searchQuery && activeFilters.searchQuery.trim() !== '') {
      const query = activeFilters.searchQuery.toLowerCase().trim();
      const searchableText = `${property.name} ${property.locationFormatted} ${property.city} ${property.country} ${property.description} ${property.amenities.join(' ')}`.toLowerCase();
      if (!searchableText.includes(query)) {
        return false;
      }
    }

    return true;
  });
}

export function getUniqueCountries(properties: Property[]): string[] {
  const set = new Set(properties.map((p) => p.country));
  return Array.from(set).sort();
}

export function getUniquePropertyTypes(properties: Property[]): { type: string; label: string }[] {
  const map = new Map<string, string>();
  properties.forEach((p) => {
    map.set(p.propertyType, p.propertyTypeLabel);
  });
  return Array.from(map.entries()).map(([type, label]) => ({ type, label }));
}
