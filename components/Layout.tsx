import React from "react";
import Link from "next/link";

type Metadata = {
  data: { 
    title : string
    date : string
  }
  dangerousInnerHTML: string
}

const Layout: React.FunctionComponent<Metadata> = (props) => {
  const {title, date} = props.data

  return (
    <div
      style={{
        background: "whitesmoke",
        fontFamily: "Lato",
        padding: "2rem",
        margin: "2rem",
        border: "2px solid #151528",
        borderRadius: "8px",
      }}
    >
      <article>
        <h1>{title}</h1>
        <p>{date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: `${props.dangerousInnerHTML}` }}
        ></div>

        <Link href="/">Go back</Link>
      </article>
    </div>
  );
};

export default Layout;
