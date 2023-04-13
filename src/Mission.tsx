import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  height: 70vh;
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  &:first-child {
    transform-origin: bottom right;
  }
  &:last-child {
    transform-origin: top left;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const Btn = styled(motion.button)`
  margin-top: 40px;
  background-color: white;
  border: none;
  padding: 5px 12px;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  color: rgba(71, 73, 255, 1);
`;

const btnVariants = {
  click: { color: "rgba(255, 149, 0,1)", scale: 1.3 },
};

const Circle = styled(motion.div)`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: white;
  position: absolute;
`;

export default function Mission() {
  const [id, setId] = useState<null | string>(null);
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const onMouseDown = () => {
    setIsBottom(true);
  };

  const onMouseUp = () => {
    setIsBottom(false);
  };

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box
            variants={n === "1" || n === "4" ? boxVariants : undefined}
            whileHover="hover"
            onClick={() => setId(n)}
            key={n}
            layoutId={n}
          >
            {(n === "2" && !isBottom) || (n === "3" && isBottom) ? (
              <Circle layoutId={"move"} />
            ) : null}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{
                width: " 30vw",
                height: "40vh",
                backgroundColor: "white",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Btn
        variants={btnVariants}
        whileTap="click"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        Switch
      </Btn>
    </Wrapper>
  );
}
