// ========================================
// IPS Academy Campus AR Navigator
// ========================================

const LOCATIONS = [
    { id: 'ips-main', name: 'IPS Academy Main Building', lat: 22.6559948, lng: 75.8266342, type: 'academic', desc: 'Central administrative hub & Director office', hours: '8AM-6PM', icon: '🏛', color: '#5b8aff', dept: 'management' },
    { id: 'engineering', name: 'Institute of Engineering & Science', lat: 22.6560573, lng: 75.8261860, type: 'academic', desc: 'B.Tech, M.Tech programs - AICTE approved', hours: '8:30AM-5:30PM', icon: '⚙️', color: '#ff006e', dept: 'engineering' },
    { id: 'commerce', name: 'School of Commerce', lat: 22.6552980, lng: 75.8250943, type: 'academic', desc: 'B.Com, M.Com programs', hours: '9AM-5PM', icon: '📊', color: '#8338ec', dept: 'general' },
    { id: 'gate2', name: 'Main Gate (Gate No. 2)', lat: 22.6560740, lng: 75.8233670, type: 'facility', desc: 'Primary campus entry point', hours: '24H', icon: '🚪', color: '#00d4aa' },
    { id: 'business', name: 'Institute of Business Management', lat: 22.6561405, lng: 75.8244536, type: 'academic', desc: 'MBA, PGDM - AICTE approved', hours: '9AM-6PM', icon: '💼', color: '#ffbe0b', dept: 'management' },
    { id: 'architecture', name: 'School of Architecture', lat: 22.6560093, lng: 75.8244281, type: 'academic', desc: 'B.Arch - COA approved', hours: '9AM-6PM', icon: '🏗️', color: '#fb5607', dept: 'creative' },
    { id: 'fashion', name: 'Institute of Fashion Technology', lat: 22.6561272, lng: 75.8245827, type: 'academic', desc: 'Fashion Design programs', hours: '9:30AM-5:30PM', icon: '👔', color: '#ff006e', dept: 'creative' },
    { id: 'mass-comm', name: 'School of Media & Communication', lat: 22.6561371, lng: 75.8253981, type: 'academic', desc: 'Journalism, Mass Communication & Fee Dept', hours: '9AM-5PM', icon: '📺', color: '#8338ec', dept: 'creative' },
    { id: 'parking', name: 'Student Parking Zone', lat: 22.6555143, lng: 75.8257116, type: 'facility', desc: 'Vehicle parking area', hours: '7AM-8PM', icon: '🅿️', color: '#00d4aa' },
    { id: 'ground', name: 'Sports Complex', lat: 22.6542284, lng: 75.8266973, type: 'facility', desc: 'Cricket, football, athletics, gymnasium', hours: '6AM-7PM', icon: '🏟️', color: '#ffbe0b' },
    { id: 'law', name: 'Institute of Law', lat: 22.6566080, lng: 75.8256841, type: 'academic', desc: 'BA LLB, LLM - BCI approved', hours: '9AM-5PM', icon: '⚖️', color: '#5b8aff', dept: 'general' },
    { id: 'research', name: 'Research & Innovation Center', lat: 22.6567107, lng: 75.8255201, type: 'academic', desc: 'Ph.D programs & R&D labs', hours: '9AM-6PM', icon: '🔬', color: '#ff006e', dept: 'general' },
    { id: 'boys-washroom', name: 'Boys Washroom', lat: 22.6554097, lng: 75.8268347, type: 'services', desc: 'Restroom facilities', hours: '24H', icon: '🚹', color: '#3b82f6' },
    { id: 'girls-washroom', name: 'Girls Washroom', lat: 22.6553658, lng: 75.8268388, type: 'services', desc: 'Restroom facilities', hours: '24H', icon: '🚺', color: '#ec4899' },
    { id: 'canteen', name: 'Central Canteen', lat: 22.6554063, lng: 75.8266976, type: 'services', desc: 'Food court & dining', hours: '8AM-6PM', icon: '🍽️', color: '#ffbe0b' },
    { id: 'soc', name: 'School of Computers', lat: 22.6555205, lng: 75.8265387, type: 'academic', desc: 'BCA, MCA, MCA Integrated - Your gateway to IT excellence', hours: '8:30AM-5:30PM', icon: '💻', color: '#8338ec', dept: 'general' },
    { id: 'hostels', name: 'Hostel Block', lat: 22.6549697, lng: 75.8267603, type: 'facility', desc: 'Boys & Girls hostel with modern amenities', hours: '24H', icon: '🏠', color: '#00d4aa' },
    { id: 'placement', name: 'Training & Placement Cell', lat: 22.6556384, lng: 75.8265045, type: 'services', desc: 'Career guidance & campus recruitment', hours: '9AM-5PM', icon: '🎯', color: '#5b8aff' },
    { id: 'mponline', name: 'MP Online Kiosk', lat: 22.6554849, lng: 75.8268119, type: 'services', desc: 'Government services center', hours: '10AM-5PM', icon: '📋', color: '#ff006e' },
    { id: 'tedx', name: 'Auditorium & TEDxIPSA', lat: 22.6560115, lng: 75.8259986, type: 'academic', desc: 'Events hall - 1500 seating capacity', hours: 'Varies', icon: '🎤', color: '#fb5607' },
    { id: 'garden', name: 'Botanical Garden', lat: 22.6560149, lng: 75.8237666, type: 'facility', desc: 'Green recreational space', hours: '6AM-8PM', icon: '🌳', color: '#00d4aa' },
    { id: 'admission', name: 'Admission Cell', lat: 22.6559979, lng: 75.8251352, type: 'services', desc: 'Admissions inquiry & counseling', hours: '9AM-5PM', icon: '📝', color: '#ffbe0b', dept: 'management' },
    { id: 'students-corner', name: 'Students Activity Center', lat: 22.6544638, lng: 75.8255121, type: 'services', desc: 'Club activities & hangout zone', hours: '9AM-6PM', icon: '☕', color: '#8338ec' },
    { id: 'radio', name: 'Campus Radio Station', lat: 22.6543707, lng: 75.8264193, type: 'academic', desc: 'Community radio 90.4 FM', hours: '10AM-4PM', icon: '📻', color: '#ff006e', dept: 'creative' },
    { id: 'pharmacy', name: 'Institute of Pharmacy', lat: 22.6549348, lng: 75.8266386, type: 'academic', desc: 'B.Pharm, M.Pharm, D.Pharm - PCI approved', hours: '8:30AM-5PM', icon: '💊', color: '#5b8aff', dept: 'general' },
    { id: 'fountain', name: 'Central Fountain Plaza', lat: 22.6549363, lng: 75.8262795, type: 'facility', desc: 'Iconic fountain & gathering point', hours: '6AM-10PM', icon: '⛲', color: '#3b82f6' },
    { id: 'ngo', name: 'Social Outreach Center', lat: 22.6547927, lng: 75.8260542, type: 'services', desc: 'NSS & community service hub', hours: '9AM-5PM', icon: '🤝', color: '#00d4aa' }
];

const CONTACTS = {
    engineering: { 
        title: 'Engineering & Science', 
        phones: ['7746000161', '9977906161', '07314014640'],
        programs: ['B.Tech (CSE, IT, ME, EC, Civil)', 'M.Tech', 'Diploma']
    },
    management: { 
        title: 'Management & Business', 
        phones: ['9111009161', '9926676161', '07314014784'],
        programs: ['MBA', 'PGDM', 'BBA', 'B.Com Hons']
    },
    general: { 
        title: 'Computer, Law, Science, Commerce, Pharmacy', 
        phones: ['9229498055', '9977835161', '07314014578'],
        programs: ['BCA/MCA', 'BA LLB/LLM', 'B.Pharm/M.Pharm', 'B.Sc/M.Sc']
    },
    creative: { 
        title: 'Architecture, Media, Fashion, Fine Arts', 
        phones: ['9977511161', '07314014640'],
        programs: ['B.Arch', 'BJMC', 'B.Des Fashion', 'BFA/MFA']
    }
};

// IPS Academy Knowledge Base for AI - Comprehensive Data
const IPS_KNOWLEDGE = {
    about: `IPS Academy (Indore Professional Studies Academy) is Central India's largest and most prestigious educational hub, established in 1994. With 29+ years of excellence, NAAC A++ accreditation, and NBA accredited programs, IPSA has become a celebrated brand name in education. Under the visionary leadership of President Ar. Achal Choudhary (IIT Kharagpur alumnus), the Academy has grown to include 16 colleges, 76+ courses, 500+ faculty members, and 10,000+ students. The campus is spread over 58 acres of lush green terrain with state-of-the-art infrastructure. IPS Academy is the first self-financing institute in Madhya Pradesh and is UGC Autonomous for Engineering and Management.`,
    
    admissions: `Admissions for 2026-27 are NOW OPEN! Apply online at www.ipsacademy.org or contact Admission Helpline: 92294 98055, 99778 35161, 0731-4014578. Email: admission@ipsacademy.org. Eligibility: Engineering (B.Tech) requires 10+2 with PCM (45%+), MBA requires graduation (50%+), Law (BA LLB) requires 10+2 (45%+), BCA requires 10+2 in any stream. Admission through JEE Main, MP-PET, CLAT, or direct merit. Scholarships available: Up to 100% fee waiver for students scoring above 95% in 12th, National sports certificate holders, and meritorious students. Documents required: 10th & 12th marksheets, TC, Migration (original), Aadhaar Card, 5 passport photos, gap certificate if applicable.`,
    
    courses: `IPS Academy offers 76+ courses across 16 colleges: ENGINEERING - B.Tech (CS, IT, Civil, ME, EC, EE, Chemical, Fire Safety), M.Tech (multiple specializations). MANAGEMENT - MBA (Core, FA, MM, IB, Tourism), PGDM, BBA (Plain, Foreign Trade, Hospital Admin, Hotel Management), Ph.D. COMPUTERS - BCA, MCA, MCA Integrated. LAW - BA LLB (Hons), BBA LLB (Hons), LLB (Hons), LLM. PHARMACY - B.Pharm, M.Pharm (Pharmaceutics, Pharmacology, QA). ARCHITECTURE - B.Arch, M.Arch, M.Plan, Diploma Interior Design. SCIENCE - B.Sc, M.Sc in Physics, Chemistry, Maths, Biotechnology, Microbiology, Electronics. COMMERCE - B.Com, M.Com with various specializations. ARTS - BA Economics, BA Mass Communication, MA Mass Communication, B.Sc Electronic Media. FINE ARTS - BFA, MFA. FASHION - B.Design, PG Diploma. HOTEL MANAGEMENT - Bachelor of Hotel Management, BBA HM. PERFORMING ARTS - BPA, MPA, Music, Dance, Drama. EDUCATION - B.Ed. Also available: Ph.D programs in Management, Economics, Physics, Chemistry.`,
    
    placements: `IPS Academy has OUTSTANDING placement records! Central Placement Cell has 500+ regular corporate visitors, including 250+ globally recognized brands. 90%+ placement rate with students recruited across sectors: IT & ITES, Engineering, Banking, FMCG, Consulting, Manufacturing, Pharma, Hospitality, and more. TOP RECRUITERS: TCS, Infosys, Wipro, Cognizant, Amazon, Deloitte, Capgemini, Accenture, HDFC Bank, ICICI Bank, Axis Bank, L&T, Reliance, Patanjali, BYJU'S, Vedantu, and many MNCs. Highest package: 18+ LPA. Average package: 4-6 LPA. The Training & Placement Cell provides: Industrial training, internships, mock interviews, aptitude training, soft skills development, personality grooming, and 360-degree industry exposure. 100,000+ alumni globally!`,
    
    hostel: `Separate Boys and Girls Hostel facilities within the campus. Features: 24/7 security with CCTV surveillance, high-speed WiFi, hygienic mess with veg/non-veg options, laundry services, fully equipped gymnasium, indoor games, TV room, reading room, and medical facility. Room types: AC and Non-AC (single, double, triple sharing). Hostel fees: Rs. 60,000-80,000 per year (including food). Located within walking distance to all academic buildings, library, sports complex, and canteen.`,
    
    fees: `Fee Structure (approximate per year): B.Tech: Rs. 70,000-90,000 | MBA: Rs. 1,00,000-1,50,000 | BBA: Rs. 40,000-55,000 | BCA: Rs. 45,000 | MCA: Rs. 50,000 | B.Arch: Rs. 1,00,000 | BA LLB: Rs. 50,000-60,000 | LLM: Rs. 40,000 | B.Pharm: Rs. 75,000 | M.Pharm: Rs. 80,000 | B.Com: Rs. 25,000-35,000 | B.Sc: Rs. 30,000 | BFA: Rs. 35,000 | Bachelor Hotel Management: Rs. 60,000. Payment options: Semester-wise, EMI facility available. Education loans through partner banks: SBI, HDFC, ICICI, Axis, Punjab National Bank.`,
    
    facilities: `58-acre lush green campus with world-class infrastructure: ACADEMICS - Smart classrooms with audio-visual aids, well-equipped laboratories, 50+ computer labs with latest software. LIBRARY - Central library with 50,000+ books, digital library with access to international journals (IEEE, Springer, Elsevier), separate reading halls, e-learning resources. SPORTS - Massive sports complex with cricket ground, football field, basketball & volleyball courts, badminton, table tennis, gymnasium, athletic track. OTHER - 1500-seater auditorium (TEDxIPSA venue), cafeteria & food courts, WiFi-enabled campus, medical center, bank & ATM, MP Online kiosk, dedicated parking, Campus Radio 90.4 FM, botanical garden, student activity center, wellness center.`,
    
    accreditations: `NAAC A++ Accredited (Highest Grade) | NBA Accredited Programs | UGC Autonomous (Engineering & Management) | AICTE Approved (Engineering, MBA, MCA) | BCI Approved (Law) | PCI Approved (Pharmacy) | COA Approved (Architecture) | Affiliated to RGPV, DAVV, Makhan Lal Chaturvedi University | Member of AIU (Association of Indian Universities) | International collaborations for global exposure | Outcome Based Education (OBE) curriculum.`,
    
    location: `Address: IPS Academy, A.B Road, Rajendra Nagar, Knowledge Village, Indore - 452012, Madhya Pradesh, India. CONNECTIVITY: On main AB Road with excellent connectivity. Indore Junction Railway Station: 8 km. Devi Ahilyabai Holkar International Airport: 15 km. Bus Stand: 7 km. Auto, cab, and city bus services available. NEARBY: Treasure Island Mall, C21 Mall, Apollo DB City, Bombay Hospital. Coordinates: 22.6559948°N, 75.8266342°E`,
    
    contact: `MAIN OFFICE: 0731-4014500, 4014578 | ADMISSION CELL: 92294 98055, 99778 35161 | EMAIL: info@ipsacademy.org, admission@ipsacademy.org | WEBSITE: www.ipsacademy.org | DEPARTMENT WISE: Engineering: 7746000161, 9977906161 | Management: 9111009161, 9926676161 | Computers/Law/Pharmacy: 9229498055, 9977835161 | Architecture/Media/Fashion: 9977511161 | OFFICE HOURS: 9 AM to 5 PM (Monday to Saturday)`,
    
    events: `Major events at IPS Academy: QUANTUM - Annual Cultural & Technical Fest (February-March), TEDxIPSA - Ideas Worth Spreading, National Conferences, Workshops, Sports Meet, Freshers Party, Farewell, Independence Day & Republic Day celebrations, Diwali & Holi celebrations, Blood Donation Camps, NSS Activities, NCC Training, Industrial Visits, Guest Lectures by industry experts.`,
    
    clubs: `Student clubs and activities: Technical Clubs (Coding, Robotics, Electronics), Cultural Clubs (Music, Dance, Drama, Art), Sports Clubs, Debate Society, Photography Club, Literary Club, Social Service (NSS), NCC (Women), Entrepreneurship Cell, Innovation & Research Cell, IPSA Times (Student Magazine), IPSA TV News, Campus Radio 90.4 FM.`,
    
    alumni: `100,000+ proud alumni network globally! IPSians working in top companies worldwide including Google, Microsoft, Amazon, TCS, Infosys, Wipro, Deloitte, KPMG, and many more. Alumni meet organized annually. Strong alumni network for mentorship and placement support. Notable alumni in various fields: Corporate leaders, entrepreneurs, civil servants, academicians, artists.`,
    
    president: `Ar. Achal Choudhary - President, IPS Academy. An alumnus of IIT Kharagpur with a vision to create a world-class educational institution. Under his leadership, IPS Academy has grown from a single institute to 16 colleges. His philosophy: "Education that excites, a campus that stimulates, and an environment that habituates young people into making better life. IPS gives you roots and wings!"`,
    
    campuses: `IPS Academy has multiple campuses: MAIN CAMPUS - A.B Road, Rajendra Nagar, Indore (58 acres) with all major institutes. SANWER CAMPUS - MBA, BBA, B.Com, BCA courses. JHABUA CAMPUS - BBA, B.Com, B.Sc, BCA courses for tribal area students. Each campus has modern infrastructure and experienced faculty.`
};

// Application State
const state = {
    pos: null,
    watching: false,
    nav: null,
    heading: 0,
    found: new Set(),
    sheetOpen: false,
    nearby: null,
    chatOpen: false,
    isTyping: false
};

// DOM Elements
const el = {
    loading: document.getElementById('loading-screen'),
    status: document.getElementById('loading-status'),
    perm: document.getElementById('permission-modal'),
    layer: document.getElementById('ui-layer'),
    accuracy: document.getElementById('gps-accuracy'),
    count: document.getElementById('found-count'),
    compass: document.getElementById('compass'),
    navOverlay: document.getElementById('navigation-overlay'),
    navTarget: document.getElementById('nav-target'),
    navDist: document.getElementById('nav-dist'),
    navEta: document.getElementById('nav-eta'),
    navArrow: document.getElementById('nav-arrow'),
    arrival: document.getElementById('arrival-message'),
    detail: document.getElementById('detail-card'),
    alert: document.getElementById('proximity-alert'),
    alertName: document.getElementById('prox-name'),
    sheet: document.getElementById('sheet'),
    list: document.getElementById('locations-list'),
    toast: document.getElementById('toast-container'),
    chat: document.getElementById('chat-panel'),
    chatMessages: document.getElementById('chat-messages'),
    chatInput: document.getElementById('chat-input'),
    contactModal: document.getElementById('contact-modal'),
    contactGrid: document.getElementById('contact-grid')
};

// Utility Functions
const utils = {
    dist(lat1, lon1, lat2, lon2) {
        const R = 6371e3;
        const p1 = lat1 * Math.PI / 180;
        const p2 = lat2 * Math.PI / 180;
        const dp = (lat2 - lat1) * Math.PI / 180;
        const dl = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    },
    
    bearing(lat1, lng1, lat2, lng2) {
        const dLon = (lng2 - lng1) * Math.PI / 180;
        const y = Math.sin(dLon) * Math.cos(lat2 * Math.PI / 180);
        const x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180) - 
                  Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos(dLon);
        return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
    },
    
    formatDist(d) {
        if (d < 5) return 'Here';
        if (d < 1000) return Math.round(d) + 'm';
        return (d / 1000).toFixed(1) + 'km';
    },
    
    walkTime(d) {
        return Math.ceil(d / 80) + ' min';
    },
    
    debounce(fn, delay) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    }
};

// Toast Notification
function toast(msg, type = 'info') {
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = msg;
    el.toast.appendChild(t);
    setTimeout(() => {
        t.style.opacity = '0';
        t.style.transform = 'translateY(-10px)';
        setTimeout(() => t.remove(), 300);
    }, 3000);
}

// Bottom Sheet Controller
const sheet = {
    init() {
        const handle = document.getElementById('sheet-handle');
        let startY, startTransform, isDragging = false;
        
        const toggle = () => {
            state.sheetOpen = !state.sheetOpen;
            el.sheet.classList.toggle('expanded', state.sheetOpen);
        };
        
        handle.addEventListener('touchstart', (e) => {
            isDragging = true;
            startY = e.touches[0].clientY;
            el.sheet.style.transition = 'none';
        }, { passive: true });
        
        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const diff = e.touches[0].clientY - startY;
            if (state.sheetOpen && diff > 0) {
                el.sheet.style.transform = `translateY(${diff}px)`;
            } else if (!state.sheetOpen && diff < 0) {
                el.sheet.style.transform = `translateY(calc(100% - ${64 - diff}px))`;
            }
        }, { passive: true });
        
        document.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            el.sheet.style.transition = '';
            el.sheet.style.transform = '';
            const rect = el.sheet.getBoundingClientRect();
            const threshold = window.innerHeight * 0.5;
            if (state.sheetOpen && rect.top > threshold) toggle();
            else if (!state.sheetOpen && rect.top < window.innerHeight - 120) toggle();
        });
        
        handle.addEventListener('click', toggle);
        document.getElementById('fab-sheet').addEventListener('click', toggle);
    },
    
    toggle() {
        state.sheetOpen = !state.sheetOpen;
        el.sheet.classList.toggle('expanded', state.sheetOpen);
    }
};

// AR Controller
const ar = {
    init() {
        if (!navigator.geolocation) {
            toast('GPS not supported on this device', 'error');
            return;
        }
        
        el.status.textContent = 'Requesting GPS...';
        
        navigator.geolocation.watchPosition(
            (pos) => this.onPosition(pos),
            (err) => {
                el.status.textContent = 'GPS Error';
                toast('Please enable GPS access', 'error');
                console.error('GPS Error:', err);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
        );
        
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', (e) => {
                if (e.alpha !== null) {
                    state.heading = e.alpha;
                    el.compass.style.transform = `rotate(${e.alpha}deg)`;
                }
            });
        }
    },
    
    onPosition(pos) {
        state.pos = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            acc: pos.coords.accuracy
        };
        
        el.accuracy.textContent = `±${Math.round(state.pos.acc)}m`;
        
        if (!state.watching) {
            state.watching = true;
            el.loading.style.opacity = '0';
            setTimeout(() => {
                el.loading.classList.add('hidden');
                el.layer.classList.remove('hidden');
            }, 400);
            toast('GPS connected successfully', 'success');
        }
        
        this.checkProximity();
        if (state.nav) this.updateNavigation();
        uiManager.updateDistances();
    },
    
    checkProximity() {
        let nearest = null;
        let minDist = Infinity;
        
        LOCATIONS.forEach(loc => {
            const d = utils.dist(state.pos.lat, state.pos.lng, loc.lat, loc.lng);
            
            if (d < 12 && !state.found.has(loc.id)) {
                state.found.add(loc.id);
                el.count.textContent = `${state.found.size}/${LOCATIONS.length}`;
                toast(`Discovered: ${loc.name}`, 'success');
                if (navigator.vibrate) navigator.vibrate(50);
            }
            
            if (d < 5 && d < minDist) {
                minDist = d;
                nearest = loc;
            }
        });
        
        if (nearest && state.nearby?.id !== nearest.id) {
            state.nearby = nearest;
            el.alertName.textContent = nearest.name;
            el.alert.classList.remove('hidden');
            if (navigator.vibrate) navigator.vibrate([50, 100, 50]);
            
            // TTS announcement for proximity
            tts.speak(`You have arrived at ${nearest.name}. ${nearest.desc}`);
            
            setTimeout(() => el.alert.classList.add('hidden'), 5000);
        } else if (!nearest) {
            state.nearby = null;
        }
    },
    
    updateNavigation() {
        const target = LOCATIONS.find(l => l.id === state.nav);
        if (!target) return;
        
        const d = utils.dist(state.pos.lat, state.pos.lng, target.lat, target.lng);
        const bearing = utils.bearing(state.pos.lat, state.pos.lng, target.lat, target.lng);
        const relative = (bearing - state.heading + 360) % 360;
        
        el.navDist.textContent = d < 5 ? '0' : Math.round(d);
        el.navEta.textContent = utils.walkTime(d) + ' walk';
        el.navArrow.style.transform = `rotate(${relative}deg)`;
        
        if (d < 5) {
            el.arrival.classList.remove('hidden');
            if (!state.arrived) {
                state.arrived = true;
                toast(`You arrived at ${target.name}!`, 'success');
                if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
                
                // TTS announcement for arrival
                tts.speak(`Congratulations! You have reached your destination: ${target.name}. ${target.desc}`);
            }
        } else {
            el.arrival.classList.add('hidden');
            state.arrived = false;
        }
        
        if (d > 800) {
            state.nav = null;
            el.navOverlay.classList.add('hidden');
            toast('Target is too far away');
        }
    }
};

// UI Manager
const uiManager = {
    init() {
        this.renderLocations();
        this.renderContacts();
        this.bindEvents();
        sheet.init();
    },
    
    renderLocations(filter = 'all') {
        el.list.innerHTML = '';
        const filtered = filter === 'all' ? LOCATIONS : LOCATIONS.filter(l => l.type === filter);
        
        const fragment = document.createDocumentFragment();
        filtered.forEach(loc => {
            const item = document.createElement('div');
            item.className = 'location-item';
            item.innerHTML = `
                <div class="loc-icon" style="background: ${loc.color}20; color: ${loc.color}">${loc.icon}</div>
                <div class="loc-info">
                    <h4>${loc.name}</h4>
                    <span>${loc.type}</span>
                </div>
                <div class="loc-dist" id="dist-${loc.id}">--</div>
            `;
            item.addEventListener('click', () => this.showDetail(loc));
            fragment.appendChild(item);
        });
        el.list.appendChild(fragment);
        
        if (state.pos) this.updateDistances();
    },
    
    renderContacts() {
        el.contactGrid.innerHTML = Object.values(CONTACTS).map(cat => `
            <div class="contact-block">
                <h3>${cat.title}</h3>
                ${cat.phones.map(p => `<a href="tel:${p}">${p}</a>`).join('')}
            </div>
        `).join('');
    },
    
    showDetail(loc) {
        document.getElementById('detail-name').textContent = loc.name;
        document.getElementById('detail-desc').textContent = loc.desc;
        document.getElementById('detail-tag').textContent = loc.type;
        document.getElementById('detail-hours').textContent = loc.hours;
        document.getElementById('detail-icon').textContent = loc.icon;
        document.getElementById('detail-visual').style.background = 
            `linear-gradient(135deg, ${loc.color}, ${loc.color}40)`;
        
        const contactSection = document.getElementById('detail-contact');
        const phonesDiv = document.getElementById('detail-phones');
        
        if (loc.dept && CONTACTS[loc.dept]) {
            contactSection.classList.remove('hidden');
            phonesDiv.innerHTML = CONTACTS[loc.dept].phones
                .map(p => `<a href="tel:${p}">${p}</a>`).join('');
        } else {
            contactSection.classList.add('hidden');
        }
        
        if (state.pos) {
            const d = utils.dist(state.pos.lat, state.pos.lng, loc.lat, loc.lng);
            document.getElementById('detail-dist').textContent = 
                d < 5 ? 'You are here' : `${utils.formatDist(d)} • ${utils.walkTime(d)}`;
        }
        
        el.detail.classList.remove('hidden');
        if (state.sheetOpen) sheet.toggle();
        
        document.getElementById('navigate-btn').onclick = () => {
            state.nav = loc.id;
            state.arrived = false;
            el.navTarget.textContent = loc.name;
            el.detail.classList.add('hidden');
            el.navOverlay.classList.remove('hidden');
            toast(`Navigating to ${loc.name}`);
        };
    },
    
    updateDistances: utils.debounce(function() {
        if (!state.pos) return;
        LOCATIONS.forEach(loc => {
            const distEl = document.getElementById(`dist-${loc.id}`);
            if (distEl) {
                const d = utils.dist(state.pos.lat, state.pos.lng, loc.lat, loc.lng);
                distEl.textContent = utils.formatDist(d);
            }
        });
    }, 500),
    
    bindEvents() {
        // Permission Grant
        document.getElementById('grant-permissions').addEventListener('click', () => {
            el.perm.classList.add('hidden');
            ar.init();
        });
        
        // Filter Pills
        document.querySelectorAll('.pill').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.renderLocations(pill.dataset.filter);
            });
        });
        
        // Close buttons
        document.getElementById('close-detail').addEventListener('click', () => {
            el.detail.classList.add('hidden');
        });
        
        document.getElementById('close-nav').addEventListener('click', () => {
            state.nav = null;
            el.navOverlay.classList.add('hidden');
        });
        
        // FABs
        document.getElementById('fab-chat').addEventListener('click', () => {
            state.chatOpen = !state.chatOpen;
            el.chat.classList.toggle('hidden', !state.chatOpen);
            if (state.chatOpen) el.chatInput.focus();
        });
        
        document.getElementById('fab-recenter').addEventListener('click', () => {
            toast('Recentering view...');
        });
        
        // TTS Toggle
        const ttsBtn = document.getElementById('fab-tts');
        ttsBtn.addEventListener('click', () => {
            const enabled = tts.toggle();
            ttsBtn.classList.toggle('tts-off', !enabled);
            toast(enabled ? 'Voice assistant enabled' : 'Voice assistant disabled');
            if (enabled) {
                tts.speak('Voice assistant is now enabled. I will speak to help you navigate the campus.');
            }
        });
        
        // Chat
        document.getElementById('close-chat').addEventListener('click', () => {
            state.chatOpen = false;
            el.chat.classList.add('hidden');
        });
        
        document.getElementById('send-message').addEventListener('click', () => chatAI.send());
        el.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') chatAI.send();
        });
        
        // Quick Replies
        el.chatMessages.addEventListener('click', (e) => {
            if (e.target.dataset.query) {
                el.chatInput.value = e.target.dataset.query;
                chatAI.send();
            }
        });
        
        // Contact Modal
        document.getElementById('view-contacts').addEventListener('click', () => {
            el.contactModal.classList.remove('hidden');
        });
        
        document.getElementById('contact-btn').addEventListener('click', () => {
            el.contactModal.classList.remove('hidden');
        });
        
        document.getElementById('close-contact-modal').addEventListener('click', () => {
            el.contactModal.classList.add('hidden');
        });
        
        // Proximity Alert Click
        el.alert.addEventListener('click', () => {
            el.alert.classList.add('hidden');
            if (state.nearby) this.showDetail(state.nearby);
        });
    }
};

// Text-to-Speech Controller
const tts = {
    API_URL: 'https://google-tts-converter-sujan.vercel.app/v1/convert',
    queue: [],
    isSpeaking: false,
    enabled: true,
    
    speak(text, lang = 'en') {
        if (!this.enabled || !text) return;
        
        // Clean text for TTS (remove special characters, URLs, etc.)
        const cleanText = text
            .replace(/(https?:\/\/[^\s]+)/g, '')
            .replace(/[^\w\s.,!?'-]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .substring(0, 500); // Limit length
        
        if (!cleanText) return;
        
        this.queue.push({ text: cleanText, lang });
        this.processQueue();
    },
    
    async processQueue() {
        if (this.isSpeaking || this.queue.length === 0) return;
        
        this.isSpeaking = true;
        const { text, lang } = this.queue.shift();
        
        try {
            const audio = new Audio(`${this.API_URL}?text=${encodeURIComponent(text)}&lang=${lang}`);
            audio.volume = 0.8;
            
            audio.onended = () => {
                this.isSpeaking = false;
                this.processQueue();
            };
            
            audio.onerror = () => {
                this.isSpeaking = false;
                this.processQueue();
            };
            
            await audio.play();
        } catch (error) {
            console.log('TTS playback failed:', error);
            this.isSpeaking = false;
            this.processQueue();
        }
    },
    
    stop() {
        this.queue = [];
        this.isSpeaking = false;
    },
    
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
};

// AI Chat Controller
const chatAI = {
    API_URL: 'https://ai-chat.apisimpacientes.workers.dev/chat',
    
    // Build comprehensive system context
    getSystemContext() {
        return `You are CampusAR Assistant - a friendly, knowledgeable, and helpful AI assistant for IPS Academy, Indore. You are like a senior student guide who knows EVERYTHING about the college.

YOUR PERSONALITY:
- You are warm, enthusiastic, and supportive like a helpful senior
- You use simple, clear language that students can understand
- You are proud of IPS Academy and its achievements
- You encourage students to explore the campus using the AR navigation feature
- You always end responses positively and offer further help
- Keep responses concise (2-4 sentences) unless detailed info is needed

COMPREHENSIVE IPS ACADEMY INFORMATION:

${Object.entries(IPS_KNOWLEDGE).map(([k, v]) => `[${k.toUpperCase()}]\n${v}`).join('\n\n')}

DEPARTMENT CONTACT NUMBERS:
${Object.entries(CONTACTS).map(([k, v]) => `${v.title}: ${v.phones.join(', ')} | Programs: ${v.programs.join(', ')}`).join('\n')}

CAMPUS LOCATIONS (for navigation guidance):
${LOCATIONS.map(l => `${l.name}: ${l.desc} (${l.hours})`).join('\n')}

IMPORTANT GUIDELINES:
1. Always provide accurate information from the knowledge base above
2. For admissions, always mention: Helpline 92294 98055, Email: admission@ipsacademy.org
3. For navigation, tell users to tap on locations in the app for AR directions
4. Mention NAAC A++ accreditation when discussing quality
5. Highlight 29+ years of excellence and 100,000+ alumni network
6. For placements, mention 90%+ placement rate and top recruiters
7. Always recommend visiting www.ipsacademy.org for latest updates
8. Be encouraging about career prospects at IPS Academy

Remember: You represent IPS Academy - be professional yet friendly!
Developed by Spider Codes.`;
    },
    
    async send() {
        const input = el.chatInput.value.trim();
        if (!input || state.isTyping) return;
        
        // Add user message
        this.addMessage(input, 'user');
        el.chatInput.value = '';
        
        // Show typing indicator
        state.isTyping = true;
        const typingId = this.addTyping();
        
        try {
            // Build the full prompt with context
            const fullPrompt = `${this.getSystemContext()}\n\nStudent's Question: ${input}\n\nYour helpful response:`;
            
            const response = await fetch(`${this.API_URL}?model=gpt4&prompt=${encodeURIComponent(fullPrompt)}`);
            
            if (!response.ok) {
                throw new Error('API request failed');
            }
            
            const data = await response.text();
            let reply = '';
            
            // Parse JSON response and extract only the 'response' field
            try {
                const jsonData = JSON.parse(data);
                if (jsonData.success && jsonData.response) {
                    reply = jsonData.response;
                } else if (jsonData.response) {
                    reply = jsonData.response;
                } else {
                    reply = data.trim();
                }
            } catch {
                // If not JSON, use the raw text
                reply = data.trim();
            }
            
            // Clean up response if needed
            if (!reply || reply.length < 5) {
                reply = 'I apologize, I couldn\'t process that. Please try asking about admissions, courses, placements, hostel, or campus facilities. You can also call our helpline at 92294 98055.';
            }
            
            // Remove typing indicator and add response
            this.removeTyping(typingId);
            this.addMessage(reply, 'bot');
            
            // Speak the response using TTS
            tts.speak(reply);
            
        } catch (error) {
            console.log('Chat error:', error);
            this.removeTyping(typingId);
            const errorMsg = 'I apologize, but I am having trouble connecting right now. Please try again or contact the admission office directly at 92294 98055 or email admission@ipsacademy.org. Developed by Spider Codes.';
            this.addMessage(errorMsg, 'bot');
            tts.speak('Sorry, I am having connection issues. Please contact admission office at 9 2 2 9 4 9 8 0 5 5.');
        }
        
        state.isTyping = false;
    },
    
    addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `message ${sender}`;
        
        const formattedText = this.formatMessage(text);
        
        msg.innerHTML = `
            <div class="message-content">
                <p>${formattedText}</p>
                ${sender === 'bot' ? '<button class="tts-btn" title="Listen"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>' : ''}
            </div>
        `;
        
        // Add TTS button click handler
        if (sender === 'bot') {
            const ttsBtn = msg.querySelector('.tts-btn');
            ttsBtn.addEventListener('click', () => {
                tts.speak(text);
            });
        }
        
        el.chatMessages.appendChild(msg);
        el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
    },
    
    formatMessage(text) {
        // Convert URLs to links and format text
        return text
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    },
    
    addTyping() {
        const id = 'typing-' + Date.now();
        const msg = document.createElement('div');
        msg.className = 'message bot';
        msg.id = id;
        msg.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        el.chatMessages.appendChild(msg);
        el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
        return id;
    },
    
    removeTyping(id) {
        const typing = document.getElementById(id);
        if (typing) typing.remove();
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    el.perm.classList.remove('hidden');
    uiManager.init();
    
    // Welcome TTS after permission is granted
    document.getElementById('grant-permissions').addEventListener('click', () => {
        setTimeout(() => {
            tts.speak('Welcome to Campus A R Navigator for IPS Academy Indore. I am your voice assistant. Tap the chat button to ask me anything about the college. Developed by Spider Codes.');
        }, 2000);
    }, { once: true });
    
    // Periodic distance updates
    setInterval(() => {
        if (state.pos) uiManager.updateDistances();
    }, 5000);
});
