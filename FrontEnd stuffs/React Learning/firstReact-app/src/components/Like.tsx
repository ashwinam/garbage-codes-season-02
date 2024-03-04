import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setLike] = useState(false);

  const toggle = () => {
    setLike(!isLiked);
    onClick();
  };

  return (
    <>
      {isLiked ? (
        <FcLike onClick={toggle} size={20} />
      ) : (
        <CiHeart onClick={toggle} size={20} />
      )}
    </>
  );
};

export default Like;
