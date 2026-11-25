import "./home.css";
import DepthCarousel from './DepthCarousel';
import image1 from "../../assets/img1.jpg"

const items = [
  { image: image1, alt: 'One' },
  { image: image1, alt: 'two' },
  { image: image1, alt: 'tree' },
  { image: image1, alt: 'for' },
  { image: image1, alt: 'five' },
];

function Home(){
    return(
        <section>
            <div className="left">
                <p>// INDEPENDENT WEB DEVELOPER . ITALY - WORLDWIDE</p>
                <h1>I turn Ideas into digital experiences.<br /> Built with purpose.</h1>
                <p>I design and develop digital experiences focused on usability, simplicity and purpose.</p>
                <button>Explore my work</button>
            </div>
            <div className="right">
                <div style={{ height: '100%', position: 'relative' }}>
                <DepthCarousel
                    items={items}
                    depth={220}
                    spread={140}
                    tilt={22}
                    tiltDirection="right"
                    perspective={2000}
                    visibleCards={4}
                    falloff={0.2}
                    blur={16}
                    autoplay
                    loop
                    cardWidth={350}
                    cardHeight={350}
                    radius={18}
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