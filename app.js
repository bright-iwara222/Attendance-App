document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let studentName = document.getElementById('studentName').value;
    markAttendance(studentName);
    document.getElementById('studentName').value = '';
});

function markAttendance(studentName) {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let attendanceRecord = `${date} ${time}: ${studentName}`;
    let recordElement = document.createElement('p');
    recordElement.textContent = attendanceRecord;
    document.getElementById('attendanceRecords').appendChild(recordElement);
}
