const news = [
  {
    id: "1",
    title: "qwerty",
    body: "hello my friend",
    slug: "qwerty",
  },
  {
    id: "2",
    title: "qwerty2",
    body: "hello my friend2",
    slug: "qwerty2",
  },
  {
    id: "3",
    title: "qwerty3",
    body: "hello my friend3",
    slug: "qwerty3",
  },
  {
    id: "4",
    title: "qwerty4",
    body: "hello my friend4",
    slug: "qwerty4",
  },
];

const SingleNewsPage = async ({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) => {
  const singleNews = news.find((item) => item.slug === slug);
  return (
    <>
      <div>{singleNews?.id}</div>
      <div>{singleNews?.title}</div>
      <div>{singleNews?.body}</div>
      <div>{singleNews?.slug}</div>
    </>
  );
};

export default SingleNewsPage;
