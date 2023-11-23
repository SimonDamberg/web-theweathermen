import Image from "next/image";
const ProgressData = () => {
  return (
    <>
      <div className="mx-auto max-w-3xl p-6 bg-gray-200 text-center mb-20">
        <h2 className="text-2xl font-bold mb-4">Week 46</h2>
        <p>
          For the first two weeks, the work has mainly consisted of project
          setup and planning. This included the project plan and presentation,
          as well as setting up the team website and creating the boilerplate
          for the front and backend. We also started to break down the work into
          different subtasks in order to get started with the actual development
          next week.
        </p>
      </div>
      <div className="mx-auto max-w-3xl p-6 bg-gray-200 text-center mt-20 mb-20">
        <h2 className="text-2xl font-bold mb-4">Week 47</h2>
        <p>
          We have focused on the frontend, implementing the data visualisations
          we want to have. We now have a dashboard that shows current weather
          and forecasts graphs for any field the user wants. On a location
          basis, the user can select which API provider they want to use data
          for. Below is a screenshot that shows some of the data that is
          visualized.
        </p>
        <Image
          src="/images/blog/week47.png"
          width={800}
          height={500}
          alt="Weathermen"
          className="rounded-lg mt-8"
        />
      </div>
      <div className="mx-auto max-w-3xl p-6 bg-gray-200 text-center mt-20 mb-20">
        <h2 className="text-2xl font-bold mb-4">Week 48</h2>
        <p></p>
      </div>
    </>
  );
};

export default ProgressData;
