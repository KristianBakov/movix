import { Modal } from "@mui/material";

import { ModalBox } from "./VideoModal.styles";

const VideoModal = ({ open, handleClose, videoId }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalBox>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        ;
      </ModalBox>
    </Modal>
  );
};

export default VideoModal;
