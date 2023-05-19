import "./App.css";
import { Button, Space } from "antd";

function App() {
  return (
    <div className="main-container">
      <div className="image-header">
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png</p>
      </div>
      <div className="image-uploader-container">
        <h4>Drag & drop your image here</h4>
      </div>
      <Space>
        <Button type="primary" block className={"file-button"}>
          Choose a file
        </Button>
      </Space>
    </div>
  );
}

export default App;
