import image1 from "./image.png";
import image2 from "./image copy.png";
import image3 from "./image copy 2.png";

const BlogPost = () => {
  const blogPosts = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: image1,
      link: "#",
    },
    {
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: image2,
      link: "#",
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image: image3,
      link: "#",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Caring is the new marketing
        </h2>
        <p className="mb-12 max-w-xl mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&apos;s more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="relative rounded-lg shadow-lg mb-16">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 mb-14 left-1/2 transform -translate-x-1/2 translate-y-3/4 w-11/12 md:w-3/4 bg-secondary bg-opacity-90 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <a
                  href={post.link}
                  className="text-green-500 hover:text-green-600"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
