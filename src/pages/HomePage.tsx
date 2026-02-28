import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/Toast';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { showToast } = useToast();

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
                        <img src="/logo.png" alt="Ocean View Group Logo" className="h-12 w-auto object-contain" />
                    </Link>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a className="text-sm font-light tracking-wide text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Featured Listings</a>
                            <a className="text-sm font-light tracking-wide text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Global Expertise</a>
                            <a className="text-sm font-light tracking-wide text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Awards</a>
                            <a className="text-sm font-light tracking-wide text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Insights</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <a className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded text-sm font-medium tracking-wide transition-colors duration-300" href="#contact">
                            Inquire Now
                        </a>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            className="bg-transparent p-2 text-gray-800 dark:text-white hover:text-primary"
                            type="button"
                        >
                            <span className="sr-only">Open main menu</span>
                            <span className="material-icons">menu</span>
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 p-4">
                    <div className="flex flex-col space-y-4">
                        <a className="text-sm font-light tracking-wide text-gray-800 dark:text-gray-200" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Featured Listings</a>
                        <a className="text-sm font-light tracking-wide text-gray-800 dark:text-gray-200" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Global Expertise</a>
                        <a className="text-sm font-light tracking-wide text-gray-800 dark:text-gray-200" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Awards</a>
                        <a className="text-sm font-light tracking-wide text-gray-800 dark:text-gray-200" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Insights</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const HeroSection = () => {
    const { showToast } = useToast();
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img alt="Luxury coastal villa with infinity pool overlooking ocean" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1vsAzSJBG0WCyr3ZfouTN2faZEGrLGL4qJ9L9ID3S9pORt1_GXlogbUAg6IQEUMsIJZ3aWZyCc4ZSnPArTv3geOqAlG2xn5t8NiAeOjPzweUd5p789i6xnqKvOnZYNVdW7lgNw5iQfNtMbPYNP9klawWMb2xnoNAfGQsQgz58B9xmVeXRESZhZkZN_5ZqXlUKrIZj9EaZT8oBR9IaWmOq5tfvgWIVmQHbuLD2_2N9XoOzsd694txWmNLJGMAl0MZUoJTpGkXnrznP" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium tracking-widest text-white uppercase mb-6">
                    International Luxury Real Estate
                </span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
                    Living Beyond <br /><i className="font-serif italic text-gold-light">Borders</i>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-10 tracking-wide">
                    From the opulence of Dubai to the serenity of Vietnam’s coast. Curating the world’s most exceptional properties.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => showToast('Viewing Portfolio', 'info')} className="bg-white text-primary hover:bg-gray-100 px-8 py-3.5 rounded text-sm font-medium tracking-wide transition-colors duration-300 min-w-[180px]">
                        View Portfolio
                    </button>
                    <button onClick={() => showToast('Our Story', 'info')} className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3.5 rounded text-sm font-medium tracking-wide transition-colors duration-300 min-w-[180px]">
                        Our Story
                    </button>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-8 flex justify-center text-white/70">
                <span className="material-icons text-3xl animate-bounce">keyboard_arrow_down</span>
            </div>
        </section>
    )
};

const LeadershipSection = () => {
    return (
        <section className="bg-background-dark py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-20">
                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <div className="relative">
                            <div className="absolute inset-0 border border-gold transform translate-x-4 translate-y-4 rounded-sm hidden md:block"></div>
                            <div className="relative overflow-hidden rounded-sm aspect-[3/4] shadow-2xl">
                                <img alt="Tim Boswell CEO Portrait" tabIndex={0} className="w-full h-full object-cover filter grayscale active:grayscale-0 focus:grayscale-0 md:hover:grayscale-0 transition-all duration-700 cursor-pointer" src="/tim-boswell.jpg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                                    <span className="block text-white font-serif text-2xl">Tim Boswell</span>
                                    <span className="block text-gold text-xs tracking-[0.2em] uppercase mt-1">Founder & CEO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-7/12 text-center md:text-left">
                        <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Leadership & Legacy</span>
                        <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 leading-tight">
                            The Visionary Behind <br />
                            <span className="text-gold-light">Ocean View</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed max-w-2xl">
                            <p>
                                With over two decades shaping the skyline of the Emirates, Tim Boswell has become synonymous with integrity in the ultra-luxury real estate sector. His expertise lies not just in transactions, but in understanding the art of living well.
                            </p>
                            <p>
                                From record-breaking penthouse sales in Dubai Marina to curating private island retreats, Tim's philosophy is simple: true luxury is personal. Now, he brings this same meticulous attention to detail to the emerging coastal markets of Southeast Asia.
                            </p>
                        </div>
                        <div className="mt-8">
                            <img alt="Signature" className="h-12 w-auto filter invert opacity-60 mx-auto md:mx-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuCGDFwCGe6BSQB82CYdK0mHHwsqKi4lCcPBYG3faJKQy5S6vWFRT-KNg8TLtLfhpNlN_DiNCD0TxJXaBlJu2X3PSHXWe-D2Oh5ggVSkQtCL2lqGAjzzZv0BSgckRoKkxLtUerICuNMIWEiRUtigNx02tW9EJZ2shc8vnET1c-077C7QLIGG7V9vGacHs3flCoNsqHBCVxdNGHS-7pSlKGM5_cfaWlHrRhKM8CkXHJ8GFuDCralr5hVFYYTmkeIwsEl9BWglz8U6mM" />
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-16">
                    <div className="text-center mb-12">
                        <h3 className="font-serif text-2xl text-gold-light mb-2">A Legacy of Excellence in Dubai & Beyond</h3>
                        <p className="text-gray-400 text-sm tracking-wide uppercase font-light">International Residential Property Awards</p>
                    </div>
                    <div className="relative px-8 lg:px-12 group">
                        <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-background-dark transition-all z-20">
                            <span className="material-icons">chevron_left</span>
                        </button>
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-background-dark transition-all z-20">
                            <span className="material-icons">chevron_right</span>
                        </button>
                        <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x snap-mandatory justify-start md:justify-center">
                            <div className="flex-none w-48 snap-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <div className="bg-[#990000] p-1 shadow-lg rounded-sm aspect-[3/4] relative">
                                    <div className="h-full w-full border border-[#d4af37]/40 flex flex-col items-center justify-center p-2 text-center bg-gradient-to-br from-[#990000] to-[#660000]">
                                        <span className="material-icons text-[#d4af37] text-3xl mb-2">emoji_events</span>
                                        <p className="text-[10px] text-white/90 uppercase tracking-widest mb-1">Best International</p>
                                        <p className="text-xs font-serif text-white font-bold leading-tight mb-2">Real Estate Agency</p>
                                        <div className="w-8 h-[1px] bg-[#d4af37] mb-2"></div>
                                        <p className="text-[8px] text-white/70">Ocean View Abu Dhabi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none w-48 snap-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <div className="bg-[#8b9bb4] p-1 shadow-lg rounded-sm aspect-[3/4]">
                                    <div className="h-full w-full border border-white/20 flex flex-col items-center justify-center p-2 text-center bg-gradient-to-br from-[#8b9bb4] to-[#6a7a93]">
                                        <span className="material-icons text-white text-3xl mb-2">workspace_premium</span>
                                        <p className="text-[10px] text-white/90 uppercase tracking-widest mb-1">Arabian Awards</p>
                                        <p className="text-xs font-serif text-white font-bold leading-tight mb-2">Best Real Estate Agency</p>
                                        <div className="w-8 h-[1px] bg-white mb-2"></div>
                                        <p className="text-[8px] text-white/70">Arabia Region</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none w-48 snap-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <div className="bg-[#f3f1e6] p-1 shadow-lg rounded-sm aspect-[3/4]">
                                    <div className="h-full w-full border border-[#d4af37]/30 flex flex-col items-center justify-center p-2 text-center bg-[#fcfbf7]">
                                        <span className="material-icons text-[#d4af37] text-3xl mb-2">star</span>
                                        <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Highly Commended</p>
                                        <p className="text-xs font-serif text-gray-900 font-bold leading-tight mb-2">Real Estate Agency</p>
                                        <div className="w-8 h-[1px] bg-[#d4af37] mb-2"></div>
                                        <p className="text-[8px] text-gray-500">Dubai</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none w-48 snap-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <div className="bg-[#dccfae] p-1 shadow-lg rounded-sm aspect-[3/4]">
                                    <div className="h-full w-full border border-[#7a6b49]/30 flex flex-col items-center justify-center p-2 text-center bg-gradient-to-br from-[#dccfae] to-[#cbbba0]">
                                        <span className="material-icons text-[#5c4d2e] text-3xl mb-2">verified</span>
                                        <p className="text-[10px] text-[#5c4d2e] uppercase tracking-widest mb-1">International</p>
                                        <p className="text-xs font-serif text-[#3d331e] font-bold leading-tight mb-2">5 Star Agency</p>
                                        <div className="w-8 h-[1px] bg-[#5c4d2e] mb-2"></div>
                                        <p className="text-[8px] text-[#5c4d2e]">Ocean View Group</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

const FeaturedResidences = () => {
    const { showToast } = useToast();
    return (
        <section className="py-24 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">Curated Portfolio</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-white">Featured Residences</h2>
                    </div>
                    <a className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium tracking-wide group" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>
                        View All Properties
                        <span className="material-icons text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link to="/details" className="group cursor-pointer block">
                        <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                            <img alt="Modern villa interior living room with ocean view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5QButgNAN4wxJSSH6Q97HiwWdeGC7RhIddIJ68D2XQR3uw9moLcqOmBL8djRJW4SPQDgPHWlHTtmsylGPCO9p57DCQh6E1Dw20fJbnxwwYiaZzK36QZuKLXQSv-9UnjBVIWznBrUap2C2IxrScpbUffgVXsEFZRzjcV8Sgsj38ARUoO28PnmzjAvmkzduuYy3kBvewaHPGysesxEqShXr1yrYJlM8QZ-jTPT5GqENLIFn-6rbER6UBxlX5QieSMkdC2MsdQ8oLgOQ" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-sm">
                                Exclusive
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div className="bg-white/20 hover:bg-white/40 text-center backdrop-blur-md text-white border border-white/50 px-4 py-2 rounded text-xs uppercase tracking-wider w-full transition-colors">View Details</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-serif text-xl text-gray-900 dark:text-white group-hover:text-primary transition-colors">The Azure Penthouse</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-light mt-1">Malibu, California</p>
                            </div>
                            <span className="text-primary font-medium text-lg">$12,500,000</span>
                        </div>
                        <div className="flex gap-4 mt-3 text-gray-400 text-xs tracking-wider uppercase">
                            <span className="flex items-center gap-1"><i className="material-icons text-sm">bed</i> 5 Beds</span>
                            <span className="flex items-center gap-1"><i className="material-icons text-sm">shower</i> 5.5 Baths</span>
                            <span className="flex items-center gap-1"><i className="material-icons text-sm">square_foot</i> 4,500 sqft</span>
                        </div>
                    </Link>
                    <a href="#" onClick={(e) => { e.preventDefault(); showToast("Property details coming soon", "info"); }} className="group cursor-pointer block">
                        <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                            <img alt="Exterior of modern tropical mansion with pool at dusk" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVhDMTIRDTUzeztcx6LIEhIfducEHMG4KAS9Af4f8OGwzCuxLjgZsXoDexvp89MUmnMfs_go8H3PR-NtMiCodUuEbh4_I1ul2gspNmL4XFU2m_NNJfyjzVn7ll8Uefpf7RZ8XMJIbE4Kr5g0rtig_hPGWsG92WmEi1BZRwWvNtgWIwxTpp5Yp1fPyo9ek-6DmfhPpcike3KJ98neW45R5SfjJDJUhg4_W1nUMd2Ig4leyOqR4s8gztMWgoppH6W0wLLF7zlOm1zwCI" />
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div className="bg-white/20 hover:bg-white/40 text-center backdrop-blur-md text-white border border-white/50 px-4 py-2 rounded text-xs uppercase tracking-wider w-full transition-colors">View Details</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-serif text-xl text-gray-900 dark:text-white group-hover:text-primary transition-colors">Coastal Sanctuary</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-light mt-1">Da Nang Coast, Vietnam</p>
                            </div>
                            <span className="text-primary font-medium text-lg">$4,200,000</span>
                        </div>
                        <div className="flex gap-4 mt-3 text-gray-400 text-xs tracking-wider uppercase">
                            <span className="flex items-center gap-1"><i className="material-icons text-sm">bed</i> 5 Beds</span>
                            <span className="flex items-center gap-1"><i className="material-icons text-sm">shower</i> 6 Baths</span>
                            <span className="flex items-center gap-1"><i className="material-icons text-sm">square_foot</i> 7,500 sqft</span>
                        </div>
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); showToast("Property details coming soon", "info"); }} className="group cursor-pointer block">
                        <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                            <img alt="Penthouse view through large windows overlooking city skyline" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB91RdN0kICL0R9B1NLFec0-yfMa7oBmwkbEChO4KPDiY7ErZsjqx_NVVPzCvAmebXdNXmaS_Yz54tBT-5TvRzuCp9Ibmi4oa22CTzxzJe3MqU7X9R6TtEDTpw8y3rJtQHNVxaPR3YT_LCQX9rXn_SxgHQwuFBRmMGkFdVrVEQXNFHs9NuL3eckOSAmzcGNoPRYLd8XC6Du76HWgAlrq4mmg6SkM-wAUFjHY4SDcpmrmvMAxl9-7caGrhtdH-JrefBO8oUvAli-3R0a" />
                            <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur text-white px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-sm">
                                New Listing
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div className="bg-white/20 hover:bg-white/40 text-center backdrop-blur-md text-white border border-white/50 px-4 py-2 rounded text-xs uppercase tracking-wider w-full transition-colors">View Details</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-serif text-xl text-gray-900 dark:text-white group-hover:text-primary transition-colors">Marina Penthouse</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-light mt-1">Dubai Marina, Dubai</p>
                            </div>
                            <span className="text-primary font-medium text-lg">$8,900,000</span>
                        </div>
                        <div className="flex gap-4 mt-3 text-gray-400 text-xs tracking-wider uppercase">
                            <span className="flex items-center gap-1"><i className="material-icons text-sm">bed</i> 3 Beds</span>
                            <span className="flex items-center gap-1"><i className="material-icons text-sm">shower</i> 3.5 Baths</span>
                            <span className="flex items-center gap-1"><i className="material-icons text-sm">square_foot</i> 3,100 sqft</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
};

const HeritageSection = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Our Heritage</span>
                        <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8 leading-tight">
                            Bridging Markets.<br />
                            <span className="text-primary">Defining Luxury.</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-300 font-light text-lg leading-relaxed">
                            <p>
                                Founded in the vibrant heart of Dubai, Ocean View Group established itself as a titan of Middle Eastern luxury real estate. Our journey is built on a foundation of integrity, discretion, and an unwavering commitment to excellence.
                            </p>
                            <p>
                                Today, we bring that same level of sophisticated service to the emerging luxury markets of Vietnam. We seamlessly connect international investors with exclusive coastal properties, creating a bridge between the arid opulence of the Gulf and the tropical serenity of Southeast Asia.
                            </p>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-200 dark:border-gray-800 pt-8">
                            <div>
                                <span className="block text-3xl font-serif text-primary mb-1">$500M+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Property Sold</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif text-primary mb-1">12+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif text-primary mb-1">2</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Global Hubs</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif text-primary mb-1">500+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Private Clients</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
                            <img alt="Abstract map visualization connecting Dubai and Vietnam with golden lines" className="w-full h-full object-cover filter brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA83MljkSnNeaN4NTgcxop55XA20JYFvB_CZ4aETdM8jljFFpEhoWynJBIbTVQwX43gqpPlrMnsBfag5X7NAJ9HTr_RN4FpbCXvg8Ba2K3mGWOm5b-28GOUCIP5OyX5Mi_gY5fNSdLjtUqVzp2LEkJ70O3r6izGGIOvCxUiPz7o2G1UQotkc8IpvNZ_5kvTnzjfEtXOdDC0wJl7uCdz_mjl74OCElKwJGqwYJtvpRXnZ0Ewue_6UgW2uI99EB8NgJskMxgQOuysrwQA" />
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur p-6 rounded-lg shadow-lg border-l-4 border-gold">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <span className="material-icons text-primary">flight_takeoff</span>
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-gray-900 dark:text-white">Cross-Border Investment</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Specialized legal and financial guidance for international acquisitions in both UAE and Vietnam jurisdictions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
};

const ContactSection = () => {
    const { showToast } = useToast();
    return (
        <section className="py-24 bg-white dark:bg-background-dark relative overflow-hidden" id="contact">
            <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Private Consultation</span>
                <h2 className="font-serif text-4xl text-gray-900 dark:text-white mb-4">Begin Your Journey</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-10">Connect with our senior advisors for a personalized portfolio review.</p>
                <form className="space-y-6 text-left bg-background-light dark:bg-slate-900 p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800" onSubmit={(e) => { e.preventDefault(); showToast('Consultation request sent!', 'success'); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2" htmlFor="name">Full Name</label>
                            <input className="block w-full bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 rounded text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-3 px-4" id="name" type="text" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2" htmlFor="email">Email Address</label>
                            <input className="block w-full bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 rounded text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-3 px-4" id="email" type="email" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2" htmlFor="interest">Investment Interest</label>
                        <select className="block w-full bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 rounded text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-3 px-4" id="interest">
                            <option>Dubai Residential</option>
                            <option>Vietnam Coastal Property</option>
                            <option>Commercial Investment</option>
                            <option>General Inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2" htmlFor="message">Message</label>
                        <textarea className="block w-full bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 rounded text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-3 px-4" id="message" rows={4}></textarea>
                    </div>
                    <div className="pt-4">
                        <button className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors uppercase tracking-widest" type="submit">
                            Request Consultation
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
};

const Footer = () => {
    const { showToast } = useToast();
    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <img src="/logo.png" alt="Ocean View Group Logo" className="h-12 w-auto object-contain bg-white/90 p-1.5 rounded-sm" />
                        </div>
                        <p className="text-white/60 text-sm font-light leading-relaxed">
                            Redefining luxury real estate experiences across international borders.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 text-gold">Discover</h4>
                        <ul className="space-y-4">
                            <li><a className="text-white/70 hover:text-white text-sm transition-colors font-light" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Featured Listings</a></li>
                            <li><a className="text-white/70 hover:text-white text-sm transition-colors font-light" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>New Developments</a></li>
                            <li><a className="text-white/70 hover:text-white text-sm transition-colors font-light" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Sold Portfolio</a></li>
                            <li><a className="text-white/70 hover:text-white text-sm transition-colors font-light" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Market Reports</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 text-gold">Offices</h4>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="text-white text-sm font-medium">Dubai HQ</span>
                                <span className="text-white/60 text-xs mt-1 font-light">Emaar Square, Downtown Dubai<br />UAE</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-white text-sm font-medium">Vietnam Office</span>
                                <span className="text-white/60 text-xs mt-1 font-light">Indochina Riverside, Da Nang<br />Vietnam</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 text-gold">The Collection</h4>
                        <p className="text-white/60 text-xs mb-4 font-light">Subscribe for exclusive off-market listings.</p>
                        <form className="flex flex-col gap-2" onSubmit={(e) => { e.preventDefault(); showToast('Subscribed to collection!', 'success'); }}>
                            <input className="bg-white/10 border border-white/20 rounded px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50" placeholder="Email Address" type="email" />
                            <button className="bg-white text-primary px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors uppercase tracking-wide">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
                    <p>© 2024 Ocean View Group. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Privacy Policy</a>
                        <a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Terms of Service</a>
                        <a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); showToast("Feature coming soon", "info"); }}>Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default function HomePage() {
    return (
        <div className="font-display">
            <Header />
            <HeroSection />
            <LeadershipSection />
            <FeaturedResidences />
            <HeritageSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
