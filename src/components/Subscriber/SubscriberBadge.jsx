import React, { useState } from "react";

const badgesData = [
  {
    id: 1,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 2,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 3,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 4,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 5,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 6,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 7,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 8,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 9,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 10,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 11,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
  {
    id: 12,
    url: "https://yt3.ggpht.com/ytc/AGIKgqOTuwiukfCtfTL4W2mn28cIowlryUV0gTHt7wuA=s48-c-k-c0x00ffffff-no-rj",
    gif: "https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif",
  },
];

const SubscriberBadge = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className="mt-5">
      <h2 className="ml-5 text-white text-xl">
        12 Custom Emotes for comments and chat
      </h2>
      <div className="flex items-center flex-wrap max-w-md">
        {badgesData.map((item) => (
          <img
            key={item.id}
            src={hoveredId === item.id ? item.gif : item.url}
            alt={item.url}
            className="ml-5 mt-5 rounded-full w-12 h-12"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriberBadge;
