import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebCamo = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const videoConstraints = {
    facingMode: "user" // select the user-facing camera
  };

  const capturePhoto = React.useCallback(async () => {
   // const imageSrc = webcamRef.current.getScreenshot();
   const canvas = webcamRef.current.getCanvas();
const imageSrc = canvas.toDataURL("image/jpeg", 0.1);
    setUrl(imageSrc);

    if (imageSrc) {
      try {
        const response = await fetch(imageSrc);
        const blob = await response.blob();
        const file = new File([blob], "face_1.png", { type: "image/png" });

        var myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("api-key", "f759262ce4f3efd5333b263a90b77b92");

        var formdata = new FormData();
        formdata.append("threshold", "50");
        formdata.append("image", file, "liveness check success.jpg");

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow"
        };

        await fetch(
          "https://api.idcentral.io/idc/onboarding/check_liveness",
          requestOptions
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            if (
              data.success === true ||
              data.message === "Face is too close to one or more borders"
            ) {
              setError(false);
              alert("Face Detected");
            } else {
              setError(true);
              setErrorMsg(data.message);
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };
  
  return (
    <div className="web_wrap">
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        className="my_cam"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <button style={{ marginRight: 10 }} onClick={capturePhoto}>
          Capture
        </button>
        <button
          onClick={() => {
            setUrl(null);
            setError(false);
          }}
        >
          Refresh
        </button>
      </div>

      {error ? <p>{errorMsg}</p> : null}
      {/*url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )*/}
    </div>
  );
};

export default WebCamo;
