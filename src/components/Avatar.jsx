const Avatar = ({ firstname, lastname, image }) => (
  <div>
    <figure>
      <img src={image} alt={`${firstname} ${lastname}`} />
      <figcaption>
        {firstname} {lastname}
      </figcaption>
    </figure>
    <div>Toto</div>
  </div>
);

export default Avatar;
