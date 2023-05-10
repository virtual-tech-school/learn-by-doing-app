import CourseItem from "../../../components/CourseItem";

const CoursePage = () => {
  const trackCourses = [
    {
      course_name: "event loop",
      tags: "js, basics, important",
      route:"/track/javascript/eventloop"
    },
    {
      course_name: "Web API and Promises",
      tags: "js, basics, important, confusing",
      route:"/track/javascript/webapi"
    },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          width: "100vw",
          height: "30vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          background: "teal",
        }}
      >
        <h1 style={{ textTransform: "uppercase", color: "whitesmoke" }}>
          course heading
        </h1>
        <h3 style={{ textTransform: "captialise", color: "whitesmoke" }}>
          The Only Course on Javascript from the basics
        </h3>
      </div>
      {trackCourses.map((item, key) => (
        <CourseItem
          key={key}
          course_name={item.course_name}
          tags={item.tags}
          route={item.route}
        ></CourseItem>
      ))}
    </div>
  );
};

export default CoursePage;
