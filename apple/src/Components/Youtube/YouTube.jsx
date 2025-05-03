import React, { useState, useEffect } from "react";
import "./YouTube.css";

const Youtube = () => {
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const [sortOption, setsortOption] = useState(["date"]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=${sortOption}&key=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setYouTubeVideos(data.items))
      .catch((err) => console.error("Failed to fetch videos:", err));
  }, [sortOption]);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>

          <div className="d-flex justify-content-start mb-4">
            <select
              className="form-select w-zero"
              value={sortOption}
              onChange={(e) => setsortOption(e.target.value)}
            >
              <option value="date">Latest</option>
              <option value="rating">Most Popular</option>
              <option value="relevance">Most Relevant</option>
              <option value="viewcount">Most Viewed</option>
            </select>
          </div>
          {youTubeVideos.map((video, i) => {
            const vidId = video?.id?.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            const snippet = video?.snippet;

            if (!vidId || !snippet) return null;

            return (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={snippet.thumbnails.high.url}
                        alt={snippet.title}
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">{snippet.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Youtube;




























// import React, { useState, useEffect } from "react";
// import "./YouTube.css";

// const Youtube = () => {
//   const [youTubeVideos, setYouTubeVideos] = useState([]);
//   const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
//   const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=${apiKey}`;

//   fetch(url);

//   useEffect(() => {
//     fetch(url
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setYouTubeVideos(data.items);
//       });
//   }, []);

//   return (
//     <div className="allVideosWrapper">
//       <div className="container">
//         <div className="row h-100 align-items-center justify-content-center text-center">
//           <div className="col-12">
//             <div className="title-wraper bold video-title-wrapper">
//               Latest Videos
//             </div>
//           </div>
//           {youTubeVideos.map((singleVideo, i) => {
//             const vidId = singleVideo.id.videoId;
//             const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

//             return (
//               <div key={i} className="col-sm-12 col-md-4">
//                 <div className="singleVideoWrapper">
//                   <div className="videoThumbnail">
//                     <a href={vidLink} target="_blank" rel="noopener noreferrer">
//                       <img
//                         src={singleVideo.snippet.thumbnails.high.url}
//                         alt={singleVideo.snippet.title}
//                       />
//                     </a>
//                   </div>
//                   <div className="videoInfoWrapper">
//                     <div className="videoTitle">
//                       <a
//                         href={vidLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {singleVideo.snippet.title}
//                       </a>
//                     </div>
//                     <div className="videoDesc">
//                       {singleVideo.snippet.description}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Youtube;

//!class components
// import React, { Component } from "react";



// class Youtube extends Component {
//   constructor() {
//     super();
//     this.state = {
//       youTubeVideos: [],
//     };
//   }

//   componentDidMount() {
//     fetch(
//       
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const youTubeVideos = data.items;
//         this.setState({ youTubeVideos });
//       });
//   }

//   render() {
//     return (
//       <div className="allVideosWrapper">
//         <div className="container">
//           <div className="row h-100 align-items-center justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold video-title-wrapper">
//                 Latest Videos
//               </div>
//             </div>
//             {this.state.youTubeVideos.map((singleVideo, i) => {
//               let vidId = singleVideo.id.videoId;
//               let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//               let videoWrapper = (
//                 <div key={i} className="col-sm-12 col-md-4">
//                   <div className="singleVideoWrapper">
//                     <div className="videoThumbnail">
//                       <a href={vidLink} target="_blank">
//                         <img src={singleVideo.snippet.thumbnails.high.url} />
//                       </a>
//                     </div>
//                     <div className="videoInfoWrapper">
//                       <div className="videoTitle">
//                         <a href={vidLink} target="_blank">
//                           {singleVideo.snippet.title}
//                         </a>
//                       </div>
//                       <div className="videoDesc">
//                         {singleVideo.snippet.description}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//               return videoWrapper;
//             })}

//             {this.videoWrapper}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Youtube;

//in async /await
// import React, { useState, useEffect } from "react";
// import "./YouTube.css";

// const Youtube = () => {
//   const [youTubeVideos, setYouTubeVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch(url
//         );
//         const data = await response.json();
//         setYouTubeVideos(data.items || []);
//       } catch (error) {
//         console.error("Failed to fetch videos:", error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <div className="allVideosWrapper">
//       <div className="container">
//         <div className="row h-100 align-items-center justify-content-center text-center">
//           <div className="col-12">
//             <div className="title-wraper bold video-title-wrapper">
//               Latest Videos
//             </div>
//           </div>

//           {youTubeVideos.map((video, i) => {
//             const vidId = video?.id?.videoId;
//             const snippet = video?.snippet;

//             if (!vidId || !snippet) return null;

//             const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

//             return (
//               <div key={i} className="col-sm-12 col-md-4">
//                 <div className="singleVideoWrapper">
//                   <div className="videoThumbnail">
//                     <a href={vidLink} target="_blank" rel="noopener noreferrer">
//                       <img
//                         src={snippet.thumbnails.high.url}
//                         alt={snippet.title}
//                       />
//                     </a>
//                   </div>
//                   <div className="videoInfoWrapper">
//                     <div className="videoTitle">
//                       <a
//                         href={vidLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {snippet.title}
//                       </a>
//                     </div>
//                     <div className="videoDesc">{snippet.description}</div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Youtube;
