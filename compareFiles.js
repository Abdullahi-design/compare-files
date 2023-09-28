const fs = require('fs');

function compareAndExtractDifferences(file1Path, file2Path, outputPath) {
  // Read the content of both input files
  const file1Content = fs.readFileSync(file1Path, 'utf8');
  const file2Content = fs.readFileSync(file2Path, 'utf8');

  // Split the content of both files into arrays of lines
  const file1Lines = file1Content.split('\n');
  const file2Lines = file2Content.split('\n');

  // Find differences between the two files
  const differences = [];

  for (const line of file1Lines) {
    if (!file2Lines.includes(line)) {
      differences.push(line);
    }
  }

  for (const line of file2Lines) {
    if (!file1Lines.includes(line)) {
      differences.push(line);
    }
  }

  // Sort the differences
  differences.sort();

  // Create a new file with the differences
  fs.writeFileSync(outputPath, differences.join('\n'));
}

// Example usage
const file1Path = 'file1.txt'; // Replace with the path to your first text file
const file2Path = 'file2.txt'; // Replace with the path to your second text file
const outputPath = 'differences.txt'; // Replace with the desired output file name

compareAndExtractDifferences(file1Path, file2Path, outputPath);
