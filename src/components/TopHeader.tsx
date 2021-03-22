import { CgPhone } from "react-icons/cg";
import { IoLocationOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { HiHeart } from "react-icons/hi";

const TopHeader = () => {
  return (
    <div className="top-header-wrapper">
      <span>
        <CgPhone size={10} /> Call us! +44 778 98i8
      </span>
      <span>
        <IoLocationOutline size={10} /> Corso Italia AA Naples, AZ. 85003
      </span>
      <span>
        <HiHeart size={10} /> Loyality card
      </span>
      <span>
        <IoLocationOutline size={10} /> Locations
      </span>
      <span>
        <IoPaperPlaneOutline size={10} /> Careers
      </span>
    </div>
  );
};

export default TopHeader;
