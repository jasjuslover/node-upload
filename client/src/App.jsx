import { instance } from "./utils/axios";

export default function App() {
  return (
    <div>
      <h2>Upload</h2>
      <input
        type="file"
        onChange={(e) => {
          const singleFile = e.target.files?.[0];

          if (singleFile) {
            const formData = new FormData();
            formData.append("file", singleFile);
            instance
              .post("/upload", formData)
              .then((d) => {
                console.log({ data: d.data });
              })
              .catch((e) => {
                console.error(e);
              });
          }
        }}
      />
    </div>
  );
}
