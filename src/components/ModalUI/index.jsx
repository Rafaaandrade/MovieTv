import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import React, { useEffect, useState } from "react";
import { useAPIContext } from "../Context/APIContext";
import ModalContent from "../ModalContent";
import useStyles from "./styles";

const ModalUI = ({ children, type, id }) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const { fetchDetails, fetchVideos, fetchCredits, setLoading, content } =
    useAPIContext();
  const { loading } = content;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ModalDetails = () => {
    setLoading();
    fetchDetails(type, id);
    fetchVideos(type, id);
    fetchCredits(type, id);
    setLoading();
  };

  //Quando abrir a modal, será realizado a pesquisa dos filme/série escolhido
  useEffect(() => {
    open && ModalDetails(type, id);
  }, [open, loading]);

  return (
    <>
      <div
        className={styles.container}
        type="button"
        value={id}
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalContent />
        </Fade>
      </Modal>
    </>
  );
};

export default ModalUI;
