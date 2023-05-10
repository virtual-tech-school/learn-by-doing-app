import Link from 'next/link';

const CourseItem: React.FunctionComponent<any> = (props) => {
  return (
    <Link href={props.route}>
    <div
      style={{
        background: "whitesmoke",
        border: "2px solid grey",
        padding: "4px",
        margin: "2px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        width: "70vw",
      }}
    >
      <h2 style={{ textTransform: "capitalize" }}>{props.course_name}</h2>
      <div style={{display:"flex", gap:"1rem"}}>
      {props.tags.split(",").map((tag) => {
        return <span
            style={{
                background:"yellow",
                border:"2px solid grey",
                borderRadius:"10px",
                padding:"2px 8px"
            }}
        >{tag}</span>;
      })}
      </div>
    </div>
    </Link>
  );
};

export default CourseItem;
