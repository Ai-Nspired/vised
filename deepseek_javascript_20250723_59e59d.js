document.getElementById('compute').addEventListener('click', async () => {
    const response = await fetch('/api/compute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [1, 2, 3] })
    });
    
    const result = await response.json();
    alert(`Worker result: ${result.total}`);
});