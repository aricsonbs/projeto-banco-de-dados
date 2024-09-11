document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        rating: formData.get('rating'),
        comments: formData.get('comments')
    };
    
    fetch('/submit-feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            document.getElementById('success-message').classList.remove('hidden');
            document.getElementById('error-message').classList.add('hidden');
            document.getElementById('feedback-form').reset();
        } else {
            document.getElementById('error-message').classList.remove('hidden');
            document.getElementById('success-message').classList.add('hidden');
        }
    })
    .catch(error => {
        document.getElementById('error-message').classList.remove('hidden');
        document.getElementById('success-message').classList.add('hidden');
    });
});
