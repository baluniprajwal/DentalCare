'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const detailedServices = [
  { title: 'Dental Fillings', desc: 'Replace damaged tooth substance with composite or ceramic materials.' },
  { title: 'Root Canal Treatment (RCT)', desc: 'Remove infected pulp, clean and seal the tooth to save it.' },
  { title: 'Wisdom Teeth Removal', desc: 'Surgical removal of problematic wisdom teeth.' },
  { title: 'Orthodontic Braces & Aligners', desc: 'Straighten teeth and correct bite alignment.' },
  { title: 'Dental Implants', desc: 'Permanent solution for missing teeth with artificial crowns.' },
  { title: 'Scaling and Polishing', desc: 'Professional cleaning to remove plaque, tartar, and stains.' },
  { title: 'Dentures', desc: 'Removable appliances to replace missing teeth for better oral function.' },
  { title: 'Bridges, Crowns, and Veneers', desc: 'Restore, protect, and improve the appearance of teeth.' },
  { title: 'Kids Dentistry', desc: 'Specialized dental care and preventive treatments for children.' },
  { title: 'Smile Makeover & Teeth Whitening', desc: 'Lighten stained or discolored teeth for a brighter smile.' },
  { title: 'Extractions', desc: 'Remove damaged or impacted teeth to improve oral health.' },
  { title: 'Preventive Dentistry', desc: 'Regular care to avoid cavities, gum disease, and tooth loss.' }
];

const extraInfo: Record<string, React.ReactNode> = {
  'Dental Fillings': (
    <div className="space-y-4">
      <p className="text-gray-600">Tooth fillings describe the replacement of hard tooth substance that has been lost due to various reasons. The primary causes include:</p>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li><strong>Caries (Tooth Decay):</strong> Most common reason for tooth substance loss</li>
        <li><strong>Tooth Fracture:</strong> Structural damage to the tooth</li>
      </ul>
      <h4 className="font-semibold text-gray-900 mt-4">Filling Materials</h4>
      <p className="text-gray-600">The lost tooth substance can be replaced using various materials:</p>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Composites</li>
        <li>Glass Ionomer Cements</li>
        <li>Inlay or Onlay Fillings</li>
        <li>Gold Fillings</li>
        <li>Ceramic Fillings</li>
      </ul>
    </div>
  ),
  'Root Canal Treatment (RCT)': (
    <div className="space-y-4">
      <p className="text-gray-600">A root canal treatment is a specialized dental procedure designed to save and repair a badly damaged or infected tooth.</p>
      <h4 className="font-semibold text-gray-900 mt-4">Procedure Steps</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Remove inflamed or infected pulp from inside the tooth</li>
        <li>Carefully clean and disinfect the root canal</li>
        <li>Fill and seal the tooth</li>
      </ul>
      <h4 className="font-semibold text-gray-900 mt-4">Primary Objectives</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Eliminate bacteria from the infected root canal</li>
        <li>Prevent reinfection of the tooth</li>
        <li>Save the natural tooth</li>
      </ul>
    </div>
  ),
  'Wisdom Teeth Removal': (
    <div className="space-y-4">
      <p className="text-gray-600">Wisdom tooth extraction is a surgical procedure to remove one or more wisdom teeth, which are the four permanent adult teeth located at the back corners of your mouth.</p>
      <h4 className="font-semibold text-gray-900 mt-4">When Removal is Recommended</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Impacted wisdom teeth causing pain</li>
        <li>Potential infection risks</li>
        <li>Limited growth space</li>
        <li>Difficulty in cleaning back teeth</li>
        <li>Risk of decay in adjacent teeth</li>
      </ul>
      <h4 className="font-semibold text-gray-900 mt-4">Potential Issues</h4>
      <p className="text-gray-600">If a wisdom tooth doesn't have room to grow properly, it can become impacted, leading to various dental problems.</p>
    </div>
  ),
  'Orthodontic Braces & Aligners': (
    <div className="space-y-4">
      <p className="text-gray-600">Orthodontic treatment is a method of straightening or moving teeth to improve their appearance, functionality, and long-term health.</p>
      <h4 className="font-semibold text-gray-900 mt-4">Treatment Benefits</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Improve teeth appearance</li>
        <li>Correct bite alignment</li>
        <li>Make teeth easier to clean</li>
        <li>Reduce strain on jaw muscles</li>
        <li>Prevent potential jaw and joint problems</li>
      </ul>
      <h4 className="font-semibold text-gray-900 mt-4">Conditions Treated</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Crowded or crooked teeth</li>
        <li>Prominent front teeth</li>
        <li>Incorrect jaw alignment</li>
        <li>Uneven bite pressure</li>
      </ul>
    </div>
  ),
  'Dental Implants': (
    <div className="space-y-4">
      <p className="text-gray-600">A dental implant is a sophisticated structure that replaces a missing tooth by surgically inserting a screw-like device into the jawbone.</p>
      <h4 className="font-semibold text-gray-900 mt-4">Implant Components</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li><strong>Implant:</strong> Screw inserted into jawbone</li>
        <li><strong>Abutment:</strong> Connects implant to artificial tooth</li>
        <li><strong>Crown:</strong> Custom-made artificial tooth</li>
      </ul>
      <h4 className="font-semibold text-gray-900 mt-4">Advantages</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>More natural and comfortable</li>
        <li>Better bite force</li>
        <li>Higher success rate</li>
        <li>Improved chewing function</li>
        <li>Lower risk of nearby cavities</li>
        <li>Better bone maintenance</li>
      </ul>
    </div>
  ),
  'Scaling and Polishing': (
    <div className="space-y-4">
      <p className="text-gray-600">Scaling and Polishing is a comprehensive cleaning process that reaches areas your toothbrush cannot, ensuring thorough oral hygiene.</p>
      <h4 className="font-semibold text-gray-900 mt-4">What is Scaling?</h4>
      <p className="text-gray-600">Scaling is the removal of plaque and calculus (hard deposits) that accumulate on teeth and cannot be removed by routine brushing.</p>
      <h4 className="font-semibold text-gray-900 mt-4">What is Polishing?</h4>
      <p className="text-gray-600">Polishing involves removing stains and tiny particles of calculus to smooth the tooth surface.</p>
      <h4 className="font-semibold text-gray-900 mt-4">Key Benefits</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Prevent tooth decay</li>
        <li>Minimize gum disease</li>
        <li>Remove hard-to-reach plaque and calculus</li>
        <li>Improve overall oral health</li>
      </ul>
    </div>
  ),
  'Dentures': (
    <div className="space-y-4">
      <p className="text-gray-600">Dentures are removable oral appliances designed to replace missing teeth in your upper or lower jaw.</p>
      <h4 className="font-semibold text-gray-900 mt-4">Types of Dentures</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li><strong>Full Dentures:</strong> Replace an entire arch of missing teeth</li>
        <li><strong>Partial Dentures:</strong> Replace several missing teeth</li>
        <li><strong>Immediate Dentures:</strong> Worn right after tooth extractions</li>
        <li><strong>Implant-Retained Dentures:</strong> Attach to dental implants</li>
        <li><strong>Implant-Supported Dentures:</strong> Non-removable, permanent option</li>
      </ul>
      <h4 className="font-semibold text-gray-900 mt-4">Materials</h4>
      <p className="text-gray-600">Crafted from high-quality materials including:</p>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Acrylic</li>
        <li>Resin</li>
        <li>Nylon</li>
        <li>Metal</li>
        <li>Porcelain</li>
      </ul>
    </div>
  ),
  'Bridges, Crowns, and Veneers': (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-900">Why Do Teeth Need Crowns?</h4>
      <p className="text-gray-600">A tooth needs a crown when it no longer is strong enough to withstand normal chewing function on its own. There are multiple reasons a tooth could require a crown to function properly:</p>
      <ul className="list-disc pl-5 text-gray-600 space-y-2">
        <li><strong>Large Decay:</strong> If a tooth has a large cavity that has destroyed its enamel and dentin, it will be too weak to hold a filling and chew properly. A crown can restore the tooth's functionality.</li>
        <li><strong>Large Fillings:</strong> When a filling covers more than half of the tooth, the remaining structure is too weak. A crown provides long-term protection.</li>
        <li><strong>Cracks:</strong> For tooth cracks that don't extend into the nerve, a crown prevents the crack from worsening by replacing the protective enamel layer.</li>
        <li><strong>Root Canal Treatment:</strong> After a root canal, teeth become brittle due to lack of nourishment. A crown prevents cracking and protects the expensive root canal treatment.</li>
      </ul>
    </div>
  ),
  'Kids Dentistry': (
    <div className="space-y-4">
      <p className="text-gray-600">Pediatric dentistry focuses on promoting dental health for children and providing educational resources for parents.</p>
      <h4 className="font-semibold text-gray-900 mt-4">Recommended First Visit</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>After first tooth appears</li>
        <li>By child's first birthday</li>
      </ul>
      <h4 className="font-semibold text-gray-900 mt-4">Key Objectives</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Early detection of tooth decay</li>
        <li>Modify aberrant oral habits</li>
        <li>Provide preventive home care guidance</li>
        <li>Assess caries risk</li>
        <li>Offer injury prevention advice</li>
        <li>Provide diet counseling</li>
      </ul>
    </div>
  ),
  'Smile Makeover & Teeth Whitening': (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-900">Smile Makeover</h4>
      <p className="text-gray-600">A smile makeover aims to improve your smile by considering various aesthetic factors to create an appealing dentition.</p>
      <h5 className="font-medium text-gray-800 mt-2">Considerations:</h5>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Facial appearance</li>
        <li>Hair color</li>
        <li>Skin tone</li>
        <li>Teeth condition</li>
        <li>Gum tissue</li>
        <li>Lips</li>
      </ul>
      <h5 className="font-medium text-gray-800 mt-2">Correctable Issues:</h5>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Tooth decay</li>
        <li>Tooth stains and discoloration</li>
        <li>Slight tooth crookedness</li>
      </ul>

      <h4 className="font-semibold text-gray-900 mt-6">Teeth Whitening</h4>
      <p className="text-gray-600">Tooth bleaching is a conservative and cost-effective method to enhance your smile by lightening tooth discoloration.</p>
      <h5 className="font-medium text-gray-800 mt-2">Whitening Agents:</h5>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Hydrogen Peroxide</li>
        <li>Carbamide Peroxide</li>
      </ul>
      <h5 className="font-medium text-gray-800 mt-2">Effectiveness:</h5>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Best for yellowish teeth</li>
        <li>Less effective on brownish, gray, or purple stains</li>
        <li>May require prolonged treatment for difficult stains</li>
      </ul>
      <h5 className="font-medium text-gray-800 mt-2">Factors Affecting Tooth Discoloration:</h5>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Age</li>
        <li>Smoking</li>
        <li>Coffee and tea consumption</li>
        <li>Certain foods</li>
        <li>Antibiotics</li>
      </ul>
    </div>
  ),
  'Extractions': (
    <div className="space-y-4">
      <p className="text-gray-600">A dental extraction is a procedure to remove a tooth from its socket in the jawbone, typically performed by a dentist or oral surgeon.</p>
      <h4 className="font-semibold text-gray-900 mt-4">Reasons for Extraction</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Severe tooth decay</li>
        <li>Fractured tooth</li>
        <li>Impacted tooth</li>
        <li>Crowded teeth</li>
        <li>Severe gum disease</li>
        <li>Dental injury</li>
      </ul>
      <h4 className="font-semibold text-gray-900 mt-4">Types of Extractions</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li><strong>Simple Extraction:</strong> Performed under local anesthesia</li>
        <li><strong>Surgical Extraction:</strong> More invasive, performed under general anesthesia</li>
      </ul>
      <h4 className="font-semibold text-gray-900 mt-4">Post-Extraction Expectations</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Pain and discomfort</li>
        <li>Swelling</li>
        <li>Bleeding</li>
      </ul>
    </div>
  ),
  'Preventive Dentistry': (
    <div className="space-y-4">
      <p className="text-gray-600">Preventive dentistry is the practice of maintaining oral health to avoid cavities, gum disease, and enamel wear.</p>
      <h4 className="font-semibold text-gray-900 mt-4">Best Practices</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Brush teeth daily with fluoride toothpaste</li>
        <li>Floss daily</li>
        <li>Visit dentist regularly</li>
        <li>Eat a balanced diet</li>
        <li>Limit sugar intake</li>
      </ul>
      <h4 className="font-semibold text-gray-900 mt-4">Benefits</h4>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Prevent cavities</li>
        <li>Avoid gingivitis</li>
        <li>Minimize enamel loss</li>
        <li>Prevent periodontitis</li>
        <li>Maintain overall oral health</li>
      </ul>
    </div>
  )
};

export default function DetailedServices() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    if (selectedService) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [selectedService]);

  return (
    <>
      <section className="px-6 md:px-16 py-8 md:py-16 max-w-[1400px] mx-auto border-t border-gray-100 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-display font-medium text-gray-900 leading-[1.2] tracking-tight text-left">
            Our Detailed <br/><span className="text-[#48b5c4]">Services</span>
          </h2>
          
          <div className="flex-1 hidden md:block px-8 pb-3">
             <div className="w-full border-t border-gray-100"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailedServices.map((service, index) => {
            const hasExtraInfo = !!extraInfo[service.title];
            return (
              <div 
                key={index} 
                onClick={() => hasExtraInfo && setSelectedService(service.title)}
                className={`bg-[#f9fafa] border border-transparent rounded-[2rem] p-8 transition-all ${
                  hasExtraInfo 
                    ? 'cursor-pointer hover:bg-white hover:border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group'
                    : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-50 group-hover:bg-[#48b5c4]/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#48b5c4] group-hover:scale-150 transition-transform"></div>
                </div>
                <h3 className="text-[17px] font-display font-medium text-gray-900 mb-3">{service.title}</h3>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                  {service.desc}
                </p>
                {hasExtraInfo && (
                  <div className="mt-4 text-[#48b5c4] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more &rarr;
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal - rendered outside the transformed <section> */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ margin: 0 }}>
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-10">
            <div className="shrink-0 border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-xl font-display font-medium text-gray-900">{selectedService}</h3>
              <button 
                onClick={() => setSelectedService(null)}
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 md:p-8 text-sm md:text-base overflow-y-auto">
              {extraInfo[selectedService]}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
