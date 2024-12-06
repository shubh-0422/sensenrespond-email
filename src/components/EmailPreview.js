import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ImageIphone from "./../assets/a-removebg-preview.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmailCard from "./EmailCard";

const dummyData = [
  {
    id: 1,
    initial: "B",
    title: "Brevo Academy",
    subTitle: "Free email marketing course",
    previewText: "Learn how to create an email marketing strategy.",
    time: "Sep 6",
  },
  {
    id: 2,
    initial: "Z",
    title: "Brevo Editor",
    subTitle: "Try the new drag & drop editor",
    previewText: "Learn how to save time & build beautiful emails in a flash.",
    time: "Sep 5",
  },
];

const EmailPreview = () => {
  const { subjectA, subjectB, previewText } = useSelector((state) => state.email);
  const headerIconStyles = { fontSize: "large" };
  const wrapperStyles = { display: "flex", justifyContent: "space-between", px: 2, mb: 1 };

  return (
    <Box flex={1} sx={{ position: "relative" }}>
      {/* Image overlapping on email details */}
      <img
        src={ImageIphone}
        alt="Custom Icon"
        style={{
          minWidth: "29rem", // Ensure image is confined within its parent
          height: "auto",    // Maintain aspect ratio
          // margin: "10px 0",  // Adjust margins as needed
          objectFit: "contain",  // Ensure image fits within its parent container
          position: "absolute", // Align it relative to its parent container
          top: "0", // Adjust if needed to align vertically within the parent
          right: "0", // Adjust if needed to align horizontally within the parent
          zIndex: 1, // Ensure image is behind the text content
        }}
      />
      <Box
        id="email-details"
        sx={{
          px: 4,
          mx: 2,
          paddingTop: 4,
          position: "relative", // Keep email details in flow
          zIndex: 2, // Ensure the email details are above the image
          top: "3rem", // Adjust the spacing between image and content
        }}
      >
        <Box sx={wrapperStyles}>
          <KeyboardBackspaceIcon sx={headerIconStyles} />
          <Typography variant="h6" fontWeight={700}>
            Index
          </Typography>
          <MoreVertIcon sx={headerIconStyles} />
        </Box>
        <EmailCard
          initial="A"
          title="The Green Yoga"
          subTitle={subjectA}
          previewText={previewText}
          time="05:45 PM"
        />
        <EmailCard
          initial="B"
          isblue
          title="The Green Yoga"
          subTitle={subjectB}
          previewText={previewText}
          time="05:45 PM"
        />
        <Box sx={{ zIndex: 100 }}>
          {dummyData.map((item) => (
            <EmailCard
              key={item.id}
              isblue={item.id % 2 === 0}
              noInitial
              initial={item.initial}
              title={item.title}
              subTitle={item.subTitle}
              previewText={item.previewText}
              time={item.time}
            />
          ))}
        </Box>
        <Box sx={{ paddingY: 5 }}>
          <Typography variant="body2" color="gray">
            Actual email preview may vary depending on the email client.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailPreview;
