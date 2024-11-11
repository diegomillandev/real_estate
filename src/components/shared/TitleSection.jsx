import PropTypes from "prop-types";

export const TitleSection = ({
  as: Tag = "h2",
  title,
  highlight,
  subtitle,
}) => {
  return (
    <>
      <Tag className="text-2xl sm:text-4xl font-bold mb-2">
        {title}
        <span className="ml-2 underline underline-offset-4 decoration-1 font-light">
          {highlight}
        </span>
      </Tag>
      <p className="w-80 text-center text-slate-600">{subtitle}</p>
    </>
  );
};

TitleSection.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  title: PropTypes.string,
  highlight: PropTypes.string,
  subtitle: PropTypes.string,
};
