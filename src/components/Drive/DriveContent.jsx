import React from "react";
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./DriveContent.css";

function DriveContent() {
  const folders = ["PRJ301", "Classroom", "DBI", "SSG"];
  const files = [
    { name: "Tài liệu không có tiêu đề", modified: "Jan 16, 2025", owner: "Me", location: "My Drive" },
    { name: "bd0b...mov", modified: "Dec 31, 2024", owner: "John", location: "Shared with me" },
    { name: "IMG_9951.JPG", modified: "Dec 31, 2024", owner: "John", location: "Shared with me" },
  ];

  return (
    <div className="driveContent">
      <Typography variant="h5" className="driveContent__welcome">
        Welcome to Drive
      </Typography>

       {/* Folder Section */}
       <div className="driveContent__folders">
        {folders.map((folder, index) => (
          <Paper key={index} className="driveContent__folder">
            {folder}
          </Paper>
        ))}
      </div>


      {/* Files Table */}
      <TableContainer component={Paper} className="driveContent__table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Last Modified</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{file.name}</TableCell>
                <TableCell>{file.modified}</TableCell>
                <TableCell>{file.owner}</TableCell>
                <TableCell>{file.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DriveContent;
