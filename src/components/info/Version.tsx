// import { useEffect, useState } from "react";

// const MyComponent = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return <div>{isMobile ? <MobileComponent /> : <DesktopComponent />}</div>;
// };

// // ***************

// import { useRouter } from "next/router";

// const MyComponent = () => {
//   const router = useRouter();
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleClick = () => {
//     if (isMobile) {
//       router.push("/mobile-page");
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Go to Mobile Page</button>
//       {!isMobile && <DesktopComponent />}
//     </div>
//   );
// };
