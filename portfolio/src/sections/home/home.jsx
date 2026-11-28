import "./home.css";
import DepthCarousel from './DepthCarousel';
import image1 from "../../assets/img1.jpg";

const items = [
  { image: image1, alt: 'One' },
  { image: image1, alt: 'two' },
  { image: image1, alt: 'tree' },
  { image: image1, alt: 'for' },
  { image: image1, alt: 'five' },
];

function Home(){
    return(
        <section className="home">
            <div className="left">
                <p>
                    <span className="desktop-text">// INDEPENDENT WEB DEVELOPER . ITALY - WORLDWIDE</span>
                    <span className="mobile-text">// INDEPENDENT WEB DEVELOPER . ITALY</span>
                </p>
                <h1>
                    <span className="desktop-text">I turn Ideas into digital experiences.<br /> Built with purpose.</span>
                    <span className="mobile-text">I turn Ideas into digital experiences.</span>
                    
                </h1>
                <p>
                    <span className="desktop-text">I design and develop digital experiences focused on usability, simplicity and purpose.</span>
                    <span className="mobile-text">usability, simplicity and purpose.</span>                 
                </p>
                <button>Explore my work</button>
            </div>
            <div className="right">
                <div className="carrousel" style={{ height: '100%', position: 'relative' }}>
                <DepthCarousel
                    items={items}
                    depth={220}
                    spread={140}
                    tilt={22}
                    tiltDirection="right"
                    perspective={1000}
                    visibleCards={2}
                    falloff={0.2}
                    blur={16}
                    autoplay
                    loop
                    cardWidth={370}
                    cardHeight={370}
                    radius={2}
                    tint="#05060a"
                    duration={700}
                    ease="power3.out"
                    autoplayDelay={3200}
                    showControls={false}
                    showIndicators={false}
                />
                </div>                
            </div>
        </section>
    );
}
export default Home;