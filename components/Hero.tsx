import Header from './Header';
import Spacer from './Spacer';

export default function Hero() {
  return (
    <div className="Hero__Wrapper">
      <Spacer />
      <Header>
        <p>Logo</p>
        <a href="mailto:andrea.tota6@gmail.com" rel="noopener noreferrer" target="_blank">
          Say Hi
        </a>
      </Header>
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
