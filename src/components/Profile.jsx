import TiltedCard from "./TiltedCard";
const Profile = () => {
  return (
    <div>
      <TiltedCard
        imageSrc="./assets/pro.jpg"
        altText="Fitzjaymar Jude Martin"
        captionText="nitramsss"
        containerHeight="450px"
        containerWidth="450px"
        imageHeight="400px"
        imageWidth="400px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text px-15 border m-5 py-3 object-cover bg-black/90 rounded-full">Fitz Martin</p>
        }
      />
    </div>
  );
};

export default Profile;
