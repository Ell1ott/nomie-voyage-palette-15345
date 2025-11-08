import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const FloatingChat = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate('/assistant')}
      className="fixed bottom-20 right-4 h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg z-40 md:bottom-4 overflow-hidden border-2 border-primary/20"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <img 
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGJrZ3NlejZ4ZXlvaDRnbTR1b2VmcG1waGM1Y3hvNGU4aGE0aHcweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BkNnO2qmCWTQuac/giphy.gif"
        alt="Nomie assistant"
        className="h-full w-full object-cover"
      />
    </motion.button>
  );
};
