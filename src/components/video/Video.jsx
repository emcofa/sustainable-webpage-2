import React from "react";
import "./video.css";
import LakeVideo from "../../assets/pexels-video.mp4";

function Video() {
    return (
        <div>
            <div className="large-img__container">
                <h1 className="video-title">Webpage 2</h1>
                <p className="video-text">
                    This webpage is an implementation of sustainable design principles.
                </p>
                <div className="video-container">
                    <video
                        src={LakeVideo}
                        controls
                        muted
                        width="100%"
                        height="auto"
                        loading="lazy"
                    >
                        <source
                            src={LakeVideo}
                            type="video/mp4"
                            media="(min-width: 1024px)"
                        />
                        <source
                            src={`${LakeVideo}?sd`}
                            type="video/mp4"
                            media="(max-width: 1023px)"
                        />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Video;
