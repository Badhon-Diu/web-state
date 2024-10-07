const LatestPost = ({ imageUrl, title, link }) => {
  return (
    <a href={link} className="group flex items-center gap-[22px]">
      <div className="overflow-hidden rounded">
        <img src={imageUrl} alt="blog" />
      </div>
      <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
        {title}
      </span>
    </a>
  );
};

export default LatestPost;
