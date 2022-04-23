import Spacer from './Spacer';

export default function Hero() {
  return (
    <div className="Hero__Wrapper">
      <Spacer />
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          //   fill="hsl(210deg, 30%, 8%)"
          fill="red"
          fillOpacity="1"
          d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,218.7C672,235,768,213,864,218.7C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#0e141b"
          fillOpacity="1"
          d="M0,224L60,234.7C120,245,240,267,360,266.7C480,267,600,245,720,245.3C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
