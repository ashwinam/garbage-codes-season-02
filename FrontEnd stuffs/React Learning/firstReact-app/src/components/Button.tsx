import style from "./Button.module.css";

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
        className={[style.btn, style["btn-" + btnColor]].join(" ")}
        onClick={onAlertPost}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
