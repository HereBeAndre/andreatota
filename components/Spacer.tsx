// USAGE ~ Spacer avoids flickering on page reload which occurs when margin is applied to a div

interface ISpacerProps {
  width?: string;
  height?: string;
}

// ! FIXME refactor inline style and '48px'
const Spacer: React.FC<ISpacerProps> = ({ width = '48px', height = '48px' }) => {
  return <div style={{ width, height }} />;
};

export default Spacer;
