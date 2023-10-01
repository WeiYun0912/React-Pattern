import withLoader from "./withLoader";

const DogImages = (props) => {
  console.log("DogImages", props);
  return props.data.message.map((dog, index) => (
    <img src={dog} alt="dog" key={index} />
  ));
};

const DogImagesWithLoader = withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6",
);

export default DogImagesWithLoader;
