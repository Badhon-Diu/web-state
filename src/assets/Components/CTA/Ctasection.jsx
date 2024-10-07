import PreCTA from "./PreCTA";

const Ctasection = () => {
  const handleButtonClick = () => {
    alert("Let's have a meeting!");
  };

  return (
    <div>
      <PreCTA
        title="What Are You Looking For?"
        subtitle="Get Started Now"
        description="There are many variations of passages of Lorem Ipsum but the majority have suffered in some form."
        buttonText="Let's have a meeting"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default Ctasection;
