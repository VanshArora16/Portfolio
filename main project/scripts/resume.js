document.getElementById('download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = "/main project/resume.pdf"; // Replace with the actual path to your resume file
    link.download = 'Vansh Arora Resume.pdf'; // This is the name of the file that will be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
