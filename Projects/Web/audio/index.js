class AudioTest {
	mediaRecorder;
	isMediaRecording = false;
	gravar = document.getElementById("gravar");
	parar = document.getElementById("parar");

	constructor() {
		this.gravar.addEventListener("click", this.start);
		this.parar.addEventListener("click", this.stop);
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

	start = () => {
		navigator.mediaDevices.getUserMedia({ audio: true }).then(
			(stream) => {
				this.mediaRecorder = new MediaRecorder(stream);
				let chunks = [];
				this.isMediaRecording = true;
				this.mediaRecorder.ondataavailable = (data) => {
					console.log(data);
					chunks.push(data.data);
				};
				this.mediaRecorder.start();
				// setTimeout(() => mediaRecorder.stop(), 15000);
			},
			(err) => {
				console.log("erros :" + err);
			}
		);
	};

	stop = () => {
		navigator.mediaDevices.getUserMedia({ audio: true }).then(
			() => {
				console.log(this);
				this.mediaRecorder.onstop = () => {
					const blob = new Blob(chunks, { type: "audio/mp3; code=opus" });
					const reader = new window.FileReader();
					reader.readAsDataURL(blob);
					reader.onloadend = () => {
						console.log(reader.result);
					};
					console.log("stop");
				};
			},
			(err) => {
				console.log("erros :" + err);
			}
		);
	};
}

class MyMediaRecorder {
	buttonStart = document.querySelector("#gravar");
	buttonStop = document.querySelector("#parar");

	mediaRecorder;
	audioChunks;

	constructor() {
		this.buttonStart.addEventListener("click", this.start);
		this.buttonStop.addEventListener("click", this.stop);
		navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
			this.mediaRecorder = new MediaRecorder(stream);
			this.audioChunks = [];

			this.mediaRecorder.addEventListener("dataavailable", (event) => {
				this.audioChunks.push(event.data);
			});
		});
	}

	start = () => {
		this.mediaRecorder.start();
	};

	stop = () => {
		this.mediaRecorder.addEventListener("stop", () => {
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
		});

		this.mediaRecorder.stop();
	};
}

new MyMediaRecorder();
// new AudioTest();
