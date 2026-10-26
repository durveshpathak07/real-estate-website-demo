import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PropertySearch } from './components/PropertySearch';
import { FeaturedProperties } from './components/FeaturedProperties';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PropertyShowcase } from './components/PropertyShowcase';
import { AboutCompany } from './components/AboutCompany';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';

import { PropertyDetailModal } from './components/PropertyDetailModal';
import { MortgageCalculatorModal } from './components/MortgageCalculatorModal';
import { PostPropertyModal } from './components/PostPropertyModal';
import { BookCallModal } from './components/BookCallModal';
import { SavedPropertiesModal } from './components/SavedPropertiesModal';

import { PROPERTIES } from './data/properties';
import { Property, PropertyFilterState } from './types/property';
import { filterProperties, getUniqueCountries, DEFAULT_FILTER_STATE } from './utils/filterProperties';

export default function App() {
  const [filters, setFilters] = useState<PropertyFilterState>(DEFAULT_FILTER_STATE);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>(['serenity-tower']);

  // Modals
  const [isMortgageOpen, setIsMortgageOpen] = useState(false);
  const [isPostPropertyOpen, setIsPostPropertyOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [activePropertyInterest, setActivePropertyInterest] = useState<string>('General Luxury Advisory');

  // Filter properties
  const filteredProperties = useMemo(() => {
    return filterProperties(PROPERTIES, filters);
  }, [filters]);

  const uniqueCountries = useMemo(() => {
    return getUniqueCountries(PROPERTIES);
  }, []);

  const savedProperties = useMemo(() => {
    return PROPERTIES.filter((p) => savedPropertyIds.includes(p.id));
  }, [savedPropertyIds]);

  // Handle deep link / hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('property/')) {
        const propId = hash.replace('property/', '');
        const found = PROPERTIES.find((p) => p.id === propId);
        if (found) setSelectedProperty(found);
      } else if (hash === 'mortgage') {
        setIsMortgageOpen(true);
      } else if (hash === 'post-property') {
        setIsPostPropertyOpen(true);
      } else if (hash === 'book-call') {
        setIsBookCallOpen(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleToggleSaveProperty = (propertyId: string) => {
    setSavedPropertyIds((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    );
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterChange = (newFilters: Partial<PropertyFilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTER_STATE);
  };

  const handleOpenBookViewing = (propertyName: string) => {
    setActivePropertyInterest(propertyName);
    setIsBookCallOpen(true);
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    setActivePropertyInterest(serviceTitle ? `Service: ${serviceTitle}` : 'General Luxury Advisory');
    handleNavigateSection('enquiry-section');
  };

  // Similar properties calculation for modal
  const similarProperties = useMemo(() => {
    if (!selectedProperty) return [];
    return PROPERTIES.filter((p) => p.id !== selectedProperty.id).slice(0, 2);
  }, [selectedProperty]);

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#151515] flex flex-col font-['Inter'] selection:bg-[#E0D7C3] selection:text-[#151515]">
      {/* SECTION 1: Top Navigation */}
      <Navbar
        onOpenMortgage={() => setIsMortgageOpen(true)}
        onOpenPostProperty={() => setIsPostPropertyOpen(true)}
        onOpenBookCall={() => setIsBookCallOpen(true)}
        onNavigateSection={handleNavigateSection}
        savedPropertyCount={savedPropertyIds.length}
        onOpenSavedModal={() => setIsSavedOpen(true)}
      />

      <main className="flex-1">
        {/* SECTION 2: Hero Section */}
        <HeroSection
          onExploreProperties={() => handleNavigateSection('properties-section')}
          onBookCall={() => setIsBookCallOpen(true)}
        />

        {/* SECTION 3: Property Search Interface */}
        <PropertySearch
          filters={filters}
          onChangeFilters={handleFilterChange}
          onResetFilters={handleResetFilters}
          totalMatches={filteredProperties.length}
          countries={uniqueCountries}
        />

        {/* SECTION 4: Featured Properties Grid (3-column matching reference) */}
        <FeaturedProperties
          properties={filteredProperties}
          onSelectProperty={(property) => {
            setSelectedProperty(property);
            window.location.hash = `property/${property.id}`;
          }}
          savedPropertyIds={savedPropertyIds}
          onToggleSaveProperty={handleToggleSaveProperty}
        />

        {/* SECTION 5: Services & How It Works (Editorial 2-column) */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* SECTION 6: Why Choose Us (Credibility Pillars) */}
        <WhyChooseUs />

        {/* SECTION 7: Full-Width Property Showcase */}
        <PropertyShowcase
          property={PROPERTIES[0]}
          onExplore={(prop) => {
            setSelectedProperty(prop);
            window.location.hash = `property/${prop.id}`;
          }}
          onBookViewing={() => handleOpenBookViewing(PROPERTIES[0].name)}
        />

        {/* SECTION 8: About The Company, Advisory Team & Investment Yields */}
        <AboutCompany
          onContactAdvisor={() => setIsBookCallOpen(true)}
          onOpenStory={() => handleNavigateSection('why-us-section')}
        />

        {/* SECTION 9: Client Testimonials */}
        <TestimonialsSection />

        {/* SECTION 10: Property Enquiry Form */}
        <EnquirySection initialPropertyInterest={activePropertyInterest} />
      </main>

      {/* SECTION 11: Dark Luxury Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenMortgage={() => setIsMortgageOpen(true)}
      />

      {/* MODALS */}
      {/* 1. Property Detail Page / View Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => {
          setSelectedProperty(null);
          if (window.location.hash.startsWith('#property/')) {
            window.history.pushState(null, '', window.location.pathname);
          }
        }}
        onSelectProperty={(prop) => {
          setSelectedProperty(prop);
          window.location.hash = `property/${prop.id}`;
        }}
        similarProperties={similarProperties}
        isSaved={selectedProperty ? savedPropertyIds.includes(selectedProperty.id) : false}
        onToggleSave={handleToggleSaveProperty}
        onOpenBookViewing={handleOpenBookViewing}
      />

      {/* 2. Standalone Mortgage Calculator Modal */}
      <MortgageCalculatorModal
        isOpen={isMortgageOpen}
        onClose={() => {
          setIsMortgageOpen(false);
          if (window.location.hash === '#mortgage') {
            window.history.pushState(null, '', window.location.pathname);
          }
        }}
        defaultPrice={selectedProperty ? selectedProperty.price : 3400000}
      />

      {/* 3. Post a Property Intake Modal */}
      <PostPropertyModal
        isOpen={isPostPropertyOpen}
        onClose={() => {
          setIsPostPropertyOpen(false);
          if (window.location.hash === '#post-property') {
            window.history.pushState(null, '', window.location.pathname);
          }
        }}
      />

      {/* 4. Book a Call / Appointment Modal */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => {
          setIsBookCallOpen(false);
          if (window.location.hash === '#book-call') {
            window.history.pushState(null, '', window.location.pathname);
          }
        }}
        propertyName={activePropertyInterest}
      />

      {/* 5. Saved Properties Drawer */}
      <SavedPropertiesModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedProperties={savedProperties}
        onSelectProperty={(prop) => {
          setSelectedProperty(prop);
          window.location.hash = `property/${prop.id}`;
        }}
        onRemoveSaved={handleToggleSaveProperty}
        onClearAll={() => setSavedPropertyIds([])}
      />
    </div>
  );
}
