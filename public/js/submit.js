const jobForm = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#job-title').value.trim();
    const description = document.querySelector('#job-description').value.trim();
    const requirements = document.querySelector('#job-requirements').value.trim();
    const salary = document.querySelector('#job-salary').value.trim();
    const website = document.querySelector('#job-website').value.trim();
    const created = document.querySelector('#job-created').value.trim();
  
    if (title && description && requirements && salary && website && created) {
      const response = await fetch('/job', {
        method: 'POST',
        body: JSON.stringify({ title, description, requirements, salary, website, created }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/jobs');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.job-form').addEventListener('submit', jobForm);
  