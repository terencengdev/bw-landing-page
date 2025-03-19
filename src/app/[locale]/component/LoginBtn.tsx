"use client";
import Button from "./Button";
import { useState } from "react";
import Login from "./Login";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginBtn() {
  const [openModal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!openModal);
  };

  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="modal-overlay w-full flex flex-col justify-center items-center"
          >
            <motion.div
              className="modal-container"
              initial={{
                y: "100vh",
              }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Login onClose={() => setModal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <a onClick={handleClick}>Login</a>
    </>
  );
}
