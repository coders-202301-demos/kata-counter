interface DisplayProps {
  text: string;
}

const Display = ({ text }: DisplayProps): JSX.Element => {
  return <input type="text" value={text} readOnly />;
};

export default Display;
