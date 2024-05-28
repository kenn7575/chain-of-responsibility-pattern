import React from "react";
import { ChatRenderer } from "./chatRenderer";

// Main App component to render the ClientComponent
const App: React.FC = () => {
  return (
    <div className="mx-2">
      <h2>
        Chain: Image {">"} Gif {">"} Text {">"} Emoji
      </h2>
      <ChatRenderer
        data={[
          { type: "Text", content: { text: "Text message" } },
          { type: "this type dons't exist", content: { text: "hello world" } },
          {
            type: "Image",
            content: {
              image:
                "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=600",
              alt: "Funny cat",
            },
          },
          {
            type: "Gif",
            content: {
              image: "https://i.giphy.com/nNxT5qXR02FOM.webp",
              alt: "Funny cat",
            },
          },
          { type: "Emoji", content: { text: "😂" } },
        ]}
      />
    </div>
  );
};

export default App;
