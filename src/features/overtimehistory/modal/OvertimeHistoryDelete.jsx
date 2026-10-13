import Button from "@/components/Button";
import Modal from "@/components/Modal";

const OvertimeHistoryDelete = ({ onCloce = () => {}, onDelete = () => {} }) => {
  return (
    <div>
      <Modal>
        Apakah data ini mau dihapus
        <div className="flex gap-3">
          <Button onClick={onCloce} variant="primary">
            Batal
          </Button>
          <Button onClick={onDelete} variant="secondary">
            Hapus
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default OvertimeHistoryDelete;
