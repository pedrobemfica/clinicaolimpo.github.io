export function openFilesView() {

    document.getElementById('uploadForm').addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
    
        if (!file) {
            alert('Please select a file.');
            return;
        }
    
        const formData = new FormData();
        formData.append('file', file);
    
        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                alert('File uploaded successfully.');
            } else {
                alert('Failed to upload file.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error uploading file.');
        }
    });
}

