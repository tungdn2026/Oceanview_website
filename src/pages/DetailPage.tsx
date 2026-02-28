import { Link } from 'react-router-dom';
import { useToast } from '../components/Toast';

const DetailsHeader = () => {
    const { showToast } = useToast();
    return (
        <header className="absolute top-0 w-full z-50 bg-gradient-to-b from-black/60 to-transparent py-6 font-newsreader">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src="/logo.png" alt="Ocean View Group Logo" className="h-12 w-auto object-contain bg-white/90 p-1.5 rounded-sm" />
                </Link>
                <nav className="hidden md:flex gap-8 text-white/90 font-medium">
                    <Link to="/" className="hover:text-details-primary transition-colors">Properties</Link>
                    <a className="hover:text-details-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Agents</a>
                    <a className="hover:text-details-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Concierge</a>
                    <a className="hover:text-details-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>About</a>
                </nav>
                <button onClick={() => showToast('Menu opened', 'info')} className="text-white hover:text-details-primary transition-colors md:hidden">
                    <span className="material-icons-outlined text-3xl">menu</span>
                </button>
            </div>
        </header>
    )
};

const DetailsHero = () => {
    const { showToast } = useToast();
    return (
        <section className="relative h-[85vh] w-full grid grid-cols-4 grid-rows-2 gap-1 overflow-hidden font-newsreader">
            <div className="col-span-4 md:col-span-2 row-span-2 relative group cursor-pointer overflow-hidden">
                <img alt="Luxurious modern waterfront villa exterior with pool at sunset" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnf2sSFXCij9fDjNzMrenROdwHbspRxbOYQ8lZu9g_It5y1luXxl3LQgs5YmtYJYsPHL3WJRhhxz0_wNUoJCRqEk0W6tbScBfiDsmb_8hGol5Q25NHtoa5M6ewiKUDPUZ1ex3yDuF3qXnRrEGBA7RSzdf7_ypdVgPGXaMKFmmyJWvJMGR26ug6YmYQM2RXw3HyhUxtSXR0MSAZqGW1F1Y34--Chx3obf9jCaoWREWx-RYylWCdUoJkY45W5mlVnxS2JNEiVRTk3pEO" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
                <img alt="Modern bright living room with ocean view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSEyPMk4-eIVP5ABFQK1Kc1ipW-KqM3A54Zko3vvOm3rypZ9WdvnmliTG8Xb3gdRaYC6UNigXYQSbvSH4dcWNtvy-qbTJ89kghtnSUIh_m3pjcHVGJbtXHH4xF9euiZOchEgeAyNmpeCpzjTBLVBaF25Ye8y35WyYTV5gRJHMYSde9ihroKU06N7SYICBNZOeREDDF-KtLIOl8nu6y1oCRHzrSI-Dzpc3EgwtUFf58rwOxTy5Yw7UlS3HEiZeqgsWll0gjOZLw8ehY" />
            </div>
            <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
                <img alt="High-end kitchen with marble island and gold fixtures" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD65YfOSfdtTgO72a1PfIf1odDDUOj7hTdQSkl13BAhtPs3LyI2bfekLKAxIufXokshn1x3jDvyg85SS9TFkqHCWuUQFYjstXfuPLDF_kjsAVad8_3iQvr-KcAVILixYii_RqRVf_UCGazhSklC-LSRqEO7dt86NPbXY4q5QWbWJr7NjpsxWRXeUPV8QSHdt83lLhlaJRQ2NnlqVCJQk4nMk-XoVe6_tzhCyJshZPvrgsRD75RJ5JFWacdv_orenImxHRWdzbAaIfSp" />
            </div>
            <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
                <img alt="Luxurious master bathroom with freestanding tub" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2NpwXdn-ISZqJmFEn5cG0aWuoUNY1hO2o-AVWZpbEmXP6pSOXsIoY639BN7Rwcx5UXaRmLXCVdbxvf00ukjqpRXIB3re0k1UXLlCgBXQKoO00X6g9EVilUR0V3nYMUZRvxMMB9pRAgbKYMPra4zcjU5P0czHPsgexkvHHm6IeoMjV_usLA9g3ndFm9iTzrlMaEbpYCvUdvDMZFEjBhQ5EG13MQCawo-WnKubmHINT-J_4--_iVwNmIIE4NZeewyfAu_Ybswq-TETy" />
            </div>
            <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
                <img alt="Private terrace with lounge chairs overlooking the sea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZkmGPhsZu8L4igSpMq_SKEYLDUoe__xAe8w-OUWw69jmSrMQ4QSzCq9Zq4s1a7IrXES5jgVZ7iIxkRG5TDOSun-0P0izoxgEVVUfMMPTW8TjN_-oMe_D_NInB32AGVrCg1yCV8QEZRMBRXydhT2jMs75WyZ_DS28Iv4geg4arbw4H-kJPxdCfY4osTxUvUgec_rvuoKIuItttXTGSG34_vrAQ3dQS2hdgdwwhqdo9KazTMdIqPfsAhnwar-7HPHkbjiAKQdRecGa0" />
                <button onClick={() => showToast('Opening Gallery...', 'info')} className="absolute bottom-6 right-6 bg-white/90 hover:bg-white text-details-navy px-6 py-3 rounded-lg font-medium shadow-lg backdrop-blur-sm transition-all flex items-center gap-2">
                    <span className="material-icons-outlined text-lg">grid_view</span>
                    View All Photos
                </button>
            </div>
        </section>
    )
};

const SubNav = () => (
    <div className="sticky top-0 z-40 bg-details-navy/95 backdrop-blur shadow-md border-b border-white/10 dark:bg-details-navy/95 text-white font-newsreader">
        <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
                <div className="flex gap-8 text-sm font-medium tracking-wide">
                    <a className="hover:text-details-primary border-b-2 border-transparent hover:border-details-primary py-5 transition-all" href="#overview">Overview</a>
                    <a className="hover:text-details-primary border-b-2 border-transparent hover:border-details-primary py-5 transition-all" href="#amenities">Amenities</a>
                    <a className="hover:text-details-primary border-b-2 border-transparent hover:border-details-primary py-5 transition-all" href="#location">Location</a>
                </div>
                <div className="hidden lg:block text-details-primary font-serif italic text-lg">
                    $12,500,000
                </div>
            </div>
        </div>
    </div>
);

const DetailContent = () => {
    const { showToast } = useToast();
    return (
        <div className="container mx-auto px-6 py-12 lg:py-16 font-newsreader">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-16">
                    <section className="scroll-mt-24" id="overview">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                            <div>
                                <span className="inline-block px-3 py-1 bg-details-primary/20 text-details-navy dark:text-details-primary text-xs font-bold tracking-widest uppercase rounded mb-3">Exclusive Listing</span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-details-navy dark:text-white leading-tight mb-2">The Azure Penthouse</h1>
                                <p className="text-xl text-gray-500 dark:text-gray-400 font-light flex items-center gap-2">
                                    <span className="material-icons-outlined text-details-primary text-lg">location_on</span>
                                    123 Ocean Drive, Malibu, CA 90265
                                </p>
                            </div>
                            <div className="lg:hidden">
                                <p className="text-3xl text-details-primary font-medium">$12,500,000</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-gray-200 dark:border-gray-800">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-details-primary/10 rounded-full">
                                    <span className="material-icons-outlined text-details-primary text-2xl">square_foot</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Interior</p>
                                    <p className="text-lg font-medium text-details-navy dark:text-white">4,500 Sq Ft</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-details-primary/10 rounded-full">
                                    <span className="material-icons-outlined text-details-primary text-2xl">bed</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Bedrooms</p>
                                    <p className="text-lg font-medium text-details-navy dark:text-white">5 Beds</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-details-primary/10 rounded-full">
                                    <span className="material-icons-outlined text-details-primary text-2xl">shower</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Bathrooms</p>
                                    <p className="text-lg font-medium text-details-navy dark:text-white">5.5 Baths</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-details-primary/10 rounded-full">
                                    <span className="material-icons-outlined text-details-primary text-2xl">garage</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Parking</p>
                                    <p className="text-lg font-medium text-details-navy dark:text-white">3 Cars</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 space-y-6 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-light">
                            <p>
                                Experience the pinnacle of coastal luxury in The Azure Penthouse, a masterpiece of contemporary design perched above the Pacific. This sprawling residence seamlessly blends indoor and outdoor living, featuring floor-to-ceiling glass walls that vanish to reveal panoramic ocean vistas.
                            </p>
                            <p>
                                The grand salon boasts 12-foot ceilings and European oak chevron flooring, flowing into a chef-caliber kitchen equipped with custom Italian cabinetry and a monolithic marble island. The primary suite is a private sanctuary, offering a fireplace, dual dressing rooms, and a spa-inspired bath with a soaking tub overlooking the coastline.
                            </p>
                            <p>
                                Designed for the consummate entertainer, the property includes a temperature-controlled wine cellar, a private cinema, and an expansive 2,000 sq ft terrace complete with an infinity-edge plunge pool and outdoor kitchen. Welcome to a life of uncompromising elegance.
                            </p>
                        </div>
                    </section>
                    <section className="scroll-mt-24 pt-8 border-t border-gray-200 dark:border-gray-800" id="amenities">
                        <h2 className="text-3xl font-medium text-details-navy dark:text-white mb-8">Features & Amenities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-details-primary mb-2">Interior Details</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-outlined text-details-primary text-sm">check_circle</span>
                                        Smart Home Automation (Crestron)
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-outlined text-details-primary text-sm">check_circle</span>
                                        Private Elevator Access
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-outlined text-details-primary text-sm">check_circle</span>
                                        Temperature Controlled Wine Cellar
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-outlined text-details-primary text-sm">check_circle</span>
                                        Home Theater
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-outlined text-details-primary text-sm">check_circle</span>
                                        Chef's Kitchen with Wolf Appliances
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-details-primary mb-2">Exterior & Community</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-outlined text-details-primary text-sm">check_circle</span>
                                        Infinity Plunge Pool
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-outlined text-details-primary text-sm">check_circle</span>
                                        24/7 Concierge & Security
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-outlined text-details-primary text-sm">check_circle</span>
                                        Private Beach Access
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-outlined text-details-primary text-sm">check_circle</span>
                                        4-Car Garage with EV Charging
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="material-icons-outlined text-details-primary text-sm">check_circle</span>
                                        Rooftop Lounge
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="scroll-mt-24 pt-8 border-t border-gray-200 dark:border-gray-800" id="location">
                        <h2 className="text-3xl font-medium text-details-navy dark:text-white mb-6">Location</h2>
                        <div className="h-[400px] w-full bg-gray-200 rounded-xl overflow-hidden relative group">
                            <div className="absolute inset-0 bg-details-navy/20 pointer-events-none z-10"></div>
                            <img alt="Map view of Malibu coastline" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPGvuPq5JYkKUw5iPuNgErkoBmYLg7TLM615m8jPwdGhIwNwryR5UaxyzxAcQ_KPlnYFyyUQ0vQTy-Zsub3tLR3TjPapFJerMuEyl0yQtgr2f-GAPbvQBZXTMPGOOvVGj9UjJZcxSgFChXxMfxqaqPBnwntb-AaEHVJME_BSs93qYHU1S66D1Rn3rlJkVEdfKDhFWJR4IunEspbXYTA2IKXGe6YVwgHH-XzP-J2VzMUVd7NurbzVMyTSSiPDoPOmlDVl_nD3xTGNV1" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                                <div className="bg-details-primary text-details-navy px-4 py-2 rounded-lg font-bold shadow-xl mb-2 text-sm whitespace-nowrap">
                                    The Azure Penthouse
                                </div>
                                <span className="material-icons-outlined text-details-primary text-5xl drop-shadow-lg">location_on</span>
                            </div>
                            <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
                                <button onClick={() => showToast('Zoomed in', 'info')} className="bg-white text-details-navy p-2 rounded shadow hover:bg-gray-100"><span className="material-icons-outlined text-xl">add</span></button>
                                <button onClick={() => showToast('Zoomed out', 'info')} className="bg-white text-details-navy p-2 rounded shadow hover:bg-gray-100"><span className="material-icons-outlined text-xl">remove</span></button>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <span className="material-icons-outlined text-gray-400 mb-1">school</span>
                                <p className="text-sm font-semibold text-details-navy dark:text-white">Malibu High</p>
                                <p className="text-xs text-gray-500">1.2 Miles</p>
                            </div>
                            <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <span className="material-icons-outlined text-gray-400 mb-1">restaurant</span>
                                <p className="text-sm font-semibold text-details-navy dark:text-white">Nobu Malibu</p>
                                <p className="text-xs text-gray-500">0.5 Miles</p>
                            </div>
                            <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <span className="material-icons-outlined text-gray-400 mb-1">local_airport</span>
                                <p className="text-sm font-semibold text-details-navy dark:text-white">LAX Airport</p>
                                <p className="text-xs text-gray-500">25 Miles</p>
                            </div>
                            <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <span className="material-icons-outlined text-gray-400 mb-1">shopping_bag</span>
                                <p className="text-sm font-semibold text-details-navy dark:text-white">Cross Creek</p>
                                <p className="text-xs text-gray-500">0.8 Miles</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="lg:col-span-4 relative">
                    <div className="sticky top-24 space-y-6">
                        <div className="bg-white dark:bg-details-navy-light p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-gray-700 pb-6">
                                <img alt="Professional real estate agent headshot" className="w-16 h-16 rounded-full object-cover ring-2 ring-details-primary ring-offset-2 ring-offset-white dark:ring-offset-details-navy-light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcqfEx1-Nw9NJYnMsXbzrIpDUrOrRDQ3sLRjDoFypF8YsJfAPNg7IHomLWimOf1tpQcsOF0vzNuJDok6FaA2WjioRKtKvVDR_OIe9oyYH8Rg7qhzbK2zNemL6kTF2DoA3AeQu5sS40Ogs5zIRzVHyBKPRdrrjdhgIYR1uNjYpOTqQVpIK4W45wkY3lJhJuPUt8Nq2VgaCiD-JAthkm2r3FSsezZXYv9WjnESt2eNouHQciajTVEXuMxjAb1NBIiCLdkxk_dofAyi3i" />
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Listing Agent</p>
                                    <h3 className="text-xl font-medium text-details-navy dark:text-white">James Sterling</h3>
                                    <div className="flex gap-1 mt-1 text-details-primary">
                                        <span className="material-icons-outlined text-xs">star</span>
                                        <span className="material-icons-outlined text-xs">star</span>
                                        <span className="material-icons-outlined text-xs">star</span>
                                        <span className="material-icons-outlined text-xs">star</span>
                                        <span className="material-icons-outlined text-xs">star</span>
                                    </div>
                                </div>
                            </div>
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); showToast('Private viewing requested!', 'success'); }}>
                                <div>
                                    <label className="block text-sm font-medium text-details-navy dark:text-gray-300 mb-1">Full Name</label>
                                    <input className="w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-details-primary focus:border-details-primary placeholder-gray-400 text-sm" placeholder="John Doe" type="text" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-details-navy dark:text-gray-300 mb-1">Email Address</label>
                                    <input className="w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-details-primary focus:border-details-primary placeholder-gray-400 text-sm" placeholder="john@example.com" type="email" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-details-navy dark:text-gray-300 mb-1">Phone Number</label>
                                    <input className="w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-details-primary focus:border-details-primary placeholder-gray-400 text-sm" placeholder="+1 (555) 000-0000" type="tel" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-details-navy dark:text-gray-300 mb-1">Message</label>
                                    <textarea className="w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-details-primary focus:border-details-primary placeholder-gray-400 text-sm h-24" placeholder="I am interested in scheduling a viewing..."></textarea>
                                </div>
                                <button className="w-full bg-details-primary hover:bg-yellow-500 text-details-navy font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 mt-2 flex justify-center items-center gap-2" type="submit">
                                    Request Private Viewing
                                    <span className="material-icons-outlined text-lg">arrow_forward</span>
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    By submitting this form, you agree to our Terms of Use and Privacy Policy.
                                </p>
                            </form>
                        </div>
                        <a className="block bg-details-navy text-white p-4 rounded-lg text-center hover:bg-details-navy-light transition-colors border border-gray-700" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>
                            <div className="flex items-center justify-center gap-2">
                                <span className="material-icons-outlined">download</span>
                                <span className="font-medium">Download Property Brochure</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

const SimilarProperties = () => {
    const { showToast } = useToast();
    return (
        <section className="bg-gray-100 dark:bg-[#1a180e] py-16 lg:py-24 mt-12 border-t border-gray-200 dark:border-gray-800 font-newsreader">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-medium text-details-navy dark:text-white mb-2">Similar Properties</h2>
                        <p className="text-gray-500 dark:text-gray-400 font-light">Explore other exclusive listings in Malibu</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => showToast('Previous properties', 'info')} className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-details-primary hover:border-details-primary hover:text-details-navy transition-colors text-gray-500 dark:text-gray-400">
                            <span className="material-icons-outlined">arrow_back</span>
                        </button>
                        <button onClick={() => showToast('Next properties', 'info')} className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-details-primary hover:border-details-primary hover:text-details-navy transition-colors text-gray-500 dark:text-gray-400">
                            <span className="material-icons-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group cursor-pointer">
                        <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                            <div className="absolute top-4 left-4 z-10 bg-details-navy/80 text-white text-xs px-2 py-1 rounded">For Sale</div>
                            <img alt="Modern minimalist home exterior with glass walls" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXwl4X_ilSQ5zOgWpWDfEP2DGHGO2TLZBrRjETvsWXZXJY6IiFNcegOFEA6WIzG3Pmg_oRP0cnBS8KdeHWBvUNiFfZ47d0-BMixxPrkv4EpeaumvNki0bflxJrSM3VqR6BGolHDQIO9NLh3j8bpDf81LnbxWXp8rH1ShlF_EYhHNf6mg9uGCgKnJdknbF2dZEEla1XPmDV4qoURU4nweu6VDMmo1WwoU-Au0hMB4N4LNYVgchs91mVHbeoxg2tL5ASIoxZ4bZlczqD" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                                <span className="text-white font-medium">View Details</span>
                                <span className="material-icons-outlined text-white">arrow_forward</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-medium text-details-navy dark:text-white mb-1 group-hover:text-details-primary transition-colors">The Cliffside Retreat</h3>
                        <p className="text-details-primary font-serif italic text-lg mb-2">$9,850,000</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">bed</span> 4 Beds</span>
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">shower</span> 4 Baths</span>
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">square_foot</span> 3,200 sqft</span>
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                            <div className="absolute top-4 left-4 z-10 bg-details-navy/80 text-white text-xs px-2 py-1 rounded">For Sale</div>
                            <img alt="Apartment complex with large balconies" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW8w_rZap0P0igtshCeuwWoxHLjwUZDOCXMnfj5p7kU8QlPppEKdQWA7_iaD_UqJzOJYDElqvL6vXMwlgCnqpQ6Vg0Z3-mYJqgGMOAcMBxFw2uAb-npQEpc6zWFy12WpZHRf_zdWAe9ffCISWGIDQ01XOAJ7AUciBhtMS5e6bFGzG1LM9UAlIA8PXICaA8Y8uqfo2wBbZFctEQsUPXnGD_ZqB9Xha1v7Zgi8Kjyu8KbbWMm2hjsV0MgSfNSCTLaGxNXhXTgF6RWTnf" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                                <span className="text-white font-medium">View Details</span>
                                <span className="material-icons-outlined text-white">arrow_forward</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-medium text-details-navy dark:text-white mb-1 group-hover:text-details-primary transition-colors">Ocean Avenue Residence</h3>
                        <p className="text-details-primary font-serif italic text-lg mb-2">$7,200,000</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">bed</span> 3 Beds</span>
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">shower</span> 3.5 Baths</span>
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">square_foot</span> 2,800 sqft</span>
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                            <div className="absolute top-4 left-4 z-10 bg-details-navy/80 text-white text-xs px-2 py-1 rounded">For Sale</div>
                            <img alt="Contemporary home with dark wood siding and garden" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVd_V1nmOcyySQrLjGIVxCMViKyYv6uBRPzznfy_oxEG-9YhugVpjD1k8C7HHfo55AKDANVADVLFK9AJ0klOZ4kmCkx_RQ4525h0nnrP1MAOc1wtTv3V7iqvUeFyQfdU6l2McCGzgkYrkU8hWhX87dOY-p2DVrF-SFOSguY5gqOKkBeas1r0nlBADYJc5vm5rPdGiI2Hf1FL32rogecHh_ANARbyWUjOriRRwTxeG2l5J158H3nHfARqQs8SzHJ7jR8G5WAG12p_vC" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                                <span className="text-white font-medium">View Details</span>
                                <span className="material-icons-outlined text-white">arrow_forward</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-medium text-details-navy dark:text-white mb-1 group-hover:text-details-primary transition-colors">Pacific Coast Modern</h3>
                        <p className="text-details-primary font-serif italic text-lg mb-2">$14,000,000</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">bed</span> 6 Beds</span>
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">shower</span> 7 Baths</span>
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-xs">square_foot</span> 6,100 sqft</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

const DetailFooter = () => {
    const { showToast } = useToast();
    return (
        <footer className="bg-details-navy text-white pt-20 pb-10 font-newsreader">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-6">
                            <img src="/logo.png" alt="Ocean View Group Logo" className="h-12 w-auto object-contain bg-white/90 p-1.5 rounded-sm" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Representing the most exquisite waterfront properties worldwide. We connect exceptional people with exceptional homes.
                        </p>
                        <div className="flex gap-4">
                            <a className="text-gray-400 hover:text-details-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Social Link", "info"); }}><span className="text-xl">FB</span></a>
                            <a className="text-gray-400 hover:text-details-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Social Link", "info"); }}><span className="text-xl">IG</span></a>
                            <a className="text-gray-400 hover:text-details-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Social Link", "info"); }}><span className="text-xl">TW</span></a>
                            <a className="text-gray-400 hover:text-details-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Social Link", "info"); }}><span className="text-xl">LI</span></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium mb-6 text-details-primary">Discover</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>New Listings</a></li>
                            <li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Sold Properties</a></li>
                            <li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Our Agents</a></li>
                            <li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Market Reports</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium mb-6 text-details-primary">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>About Us</a></li>
                            <li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Careers</a></li>
                            <li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Press Room</a></li>
                            <li><a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium mb-6 text-details-primary">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-4">Subscribe for exclusive updates on new premium listings.</p>
                        <div className="flex">
                            <input className="bg-white/5 border border-white/10 text-white rounded-l px-4 py-2 w-full focus:outline-none focus:border-details-primary text-sm" placeholder="Email Address" type="email" />
                            <button onClick={() => showToast('Subscribed to newsletter!', 'success')} className="bg-details-primary hover:bg-yellow-500 text-details-navy px-4 py-2 rounded-r font-medium text-sm transition-colors">Join</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2023 Ocean View Group. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Privacy Policy</a>
                        <a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Terms of Service</a>
                        <a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default function DetailPage() {
    return (
        <div>
            <DetailsHeader />
            <DetailsHero />
            <SubNav />
            <DetailContent />
            <SimilarProperties />
            <DetailFooter />
        </div>
    );
}
