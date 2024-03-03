interface Props {
  btnName: string;
  btnColor?: "primary" | "secondary" | "danger"; // Value from this values only
  onAlertPost: () => void;
}

const Button = ({ btnName, btnColor = "primary", onAlertPost }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-" + btnColor}
        onClick={onAlertPost}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
