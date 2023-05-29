// import React, { useRef, useState, useEffect } from "react";
// import { Octokit } from "@octokit/rest";

// const ContentPage: React.FunctionComponent<any> = (props) => {
//   const octokit = useRef(
//     new Octokit({
//       auth: "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",
//     }).rest.markdown
//   );
//   const [text, setText] = useState("");
//   const [htmlDoc, setHtmlDoc] = useState(null);

//   useEffect(() => {
//     if (htmlDoc !== null) {
//       return;
//     }

//     fetch(
//       "https://raw.githubusercontent.com/prakharporwal/bank-server/master/README.md"
//     )
//       .then((res) => res.text())
//       .then((data) => {
//         console.log(data);
//         setText(data);

//         octokit.current
//           .render({ text: data })
//           .then((val) => val.data)
//           .then((htmlDoc) => {
//             setHtmlDoc(htmlDoc);
//             console.log(htmlDoc);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div
//       style={{
//         background: "#9f9f9f",
//         fontFamily: "Lato",
//         padding: "2rem",
//         border: "50px solid #151528",
//         borderRadius: "8px",
//       }}
//       dangerouslySetInnerHTML={{ __html: htmlDoc }}
//     ></div>
//   );
// };
// export default ContentPage;
