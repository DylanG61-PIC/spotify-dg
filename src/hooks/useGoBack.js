import { useNavigate } from "react-router-dom";

export default function useGoBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return goBack;
}