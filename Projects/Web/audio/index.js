class AudioTest {
  mediaRecorder;
  isMediaRecording = false;
  gravar = document.getElementById("gravar");
  parar = document.getElementById("parar");

  constructor() {
    this.gravar.addEventListener("click", this.start);
    this.parar.addEventListener("click", this.stop.bind(this));
    if (
      !this.isMediaRecording &&
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia
    ) {
      console.log("getUserMedia supported");
    } else {
      console.log("getUserMedia is not supportapped on your browser!");
    }
  }

  start() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(
      (stream) => {
        this.mediaRecorder = new MediaRecorder(stream);
        let chunks = [];
        this.isMediaRecording = true;
        this.mediaRecorder.ondataavailable = (data) => {
          console.log(data);
          chunks.push(data.data);
        };
        console.log(this.mediaRecorder);
        // this.mediaRecorder.start();
        // setTimeout(() => mediaRecorder.stop(), 15000);
      },
      (err) => {
        console.log("erros :" + err);
      }
    );
  }

  stop() {
    // navigator.mediaDevices.getUserMedia({ audio: true }).then(
    //   () => {
    console.log("stop", this.mediaRecorder);
    this.mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/mp3; code=opus" });
      const reader = new window.FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        console.log(reader.result);
      };
      console.log("stop");
    };
    //   },
    //   (err) => {
    //     console.log("erros :" + err);
    //   }
    // );
  }
}

new AudioTest();
