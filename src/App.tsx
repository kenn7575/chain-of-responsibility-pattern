import React from "react";
import { ChatRenderer } from "./chatRenderer";

// Main App component to render the ClientComponent
const App: React.FC = () => {
  return (
    <div>
      <h2>
        Chain: Image {">"} Gif {">"} Text {">"} Emoji
      </h2>
      <ChatRenderer
        data={[
          { type: "Text", content: { text: "hello world" } },
          { type: "unknown", content: { text: "hello world" } },
          {
            type: "Image",
            content: {
              image:
                "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=600",
              alt: "Sample Image",
            },
          },
        ]}
      />
    </div>
  );
};

export default App;
