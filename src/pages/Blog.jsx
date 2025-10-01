import SectionHeading from "../components/SectionHeading";

function Blog() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <SectionHeading title="Blog & Insights" />
      <p className="text-gray-700 dark:text-gray-300">
        Check out my articles on <a href="https://www.linkedin.com/in/iddy-k-chesire-55009b264/" target="_blank" rel="noreferrer" className="text-orange-500 underline">LinkedIn</a>.
      </p>
    </section>
  );
}

export default Blog;
