import React, { useState, useEffect } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./YoutubeVideos.css";

let URL ='https://www.googleapis.com/youtube/v3/search?key=AIzaSyBl6uOOoIYWATia_dFvWcK0HpuBbat0MIQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8'

let URL2 = "youTubeVideos.json"

function YoutubeVideos() {
  const [YoutubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    fetch(URL2)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setYoutubeVideos(data.items);
      });
  }, []);
  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {YoutubeVideos.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6 col-lg-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>

                      <div className="publishedAt">
                        {DateFormatter(singleVideo.snippet.publishedAt)}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default YoutubeVideos


function DateFormatter(dateTimeString) {
  let date = new Date(dateTimeString);
  let Year = date.getFullYear();
  let Month = date.getMonth();
  let Day = date.getDate();
  let formattedDate =
    Year +
    "-" +
    (Month + 1).toString().padStart(2, "0") +
    "-" +
    Day.toString().padStart(2, "0");
  return formattedDate;
}