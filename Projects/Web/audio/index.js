class MyMediaRecorder {
	buttonStart = document.querySelector("#gravar");
	buttonStop = document.querySelector("#parar");
	buttonCancel = document.querySelector("#cancelar");

	mediaRecorder;
	audioChunks;
	isMediaRecording = false;
	isCancel = false;

	constructor() {
		this.buttonStart.addEventListener("click", this.start);
		this.buttonStop.addEventListener("click", this.stop);
		this.buttonCancel.addEventListener("click", () => {
			this.isCancel = true;
			this.stop();
		});

		navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
			this.mediaRecorder = new MediaRecorder(stream);
			this.mediaRecorder.addEventListener("dataavailable", (event) => {
				this.audioChunks = [];
				this.audioChunks.push(event.data);
			});
			this.mediaRecorder.addEventListener("stop", (e) => {
				if (this.isCancel) {
					this.audioChunks = [];
					return;
				}

				const audioBlob = new Blob(this.audioChunks, {
					type: "audio/mp3; code=opus",
				});
				const reader = new window.FileReader();
				reader.readAsDataURL(audioBlob);

				reader.addEventListener("loadend", (res) => {
					console.log(res.target.result);
				});
				const audioUrl = URL.createObjectURL(audioBlob);
				const audio = new Audio(audioUrl);
				audio.play();
				this.audioChunks = [];
			});
		});
	}

	start = () => {
		if (this.isMediaRecording) return;
		this.audioChunks = [];
		this.isCancel = false;
		this.isMediaRecording = true;
		this.mediaRecorder.start();
	};

	stop = () => {
		if (this.mediaRecorder.state === "inactive") return;
		this.isMediaRecording = false;
		this.mediaRecorder.stop();
	};
}

new MyMediaRecorder();
