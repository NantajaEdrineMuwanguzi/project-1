// Sample Job Data
const jobs = [
    {
        title: "Software Engineer",
        company: "TechVision",
        location: "Remote",
        category: "Technology",
        description: "Develop and improve advanced web applications."
    },
    {
        title: "Marketing Specialist",
        company: "NSSF",
        location: "Mbarara",
        category: "Marketing",
        description: "Plan and execute marketing campaigns."
    },
    {
        title: "Financial Analyst",
        company: "Mukono",
        location: "Kampala",
        category: "Finance",
        description: "Analyze market trends and provide financial insights."
    },
    {
        title: "Frontend Developer",
        company: "CodeWorks",
        location: "Mukono",
        category: "Technology",
        description: "Build modern UI components using JavaScript."
    }
];

// Render Jobs
function renderJobs(filter = {}) {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(filter.search || "") &&
        (filter.location ? job.location === filter.location : true) &&
        (filter.category ? job.category === filter.category : true)
    );

    filteredJobs.forEach((job, index) => {
        const card = document.createElement("div");
        card.classList.add("job-card");
        card.innerHTML = `
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <div class="job-location">${job.location}</div>
        `;
        card.onclick = () => openModal(job);
        jobList.appendChild(card);
    });
}

// Modal Logic
const modal = document.getElementById("jobModal");
const closeModalBtn = document.getElementById("closeModal");

function openModal(job) {
    document.getElementById("modalTitle").textContent = job.title;
    document.getElementById("modalCompany").textContent = "Company: " + job.company;
    document.getElementById("modalLocation").textContent = "Location: " + job.location;
    document.getElementById("modalDescription").textContent = job.description;

    modal.style.display = "flex";
}

closeModalBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target === modal) modal.style.display = "none"; };

// Filters
document.getElementById("searchBox").addEventListener("input", applyFilters);
document.getElementById("locationFilter").addEventListener("change", applyFilters);
document.getElementById("categoryFilter").addEventListener("change", applyFilters);

function applyFilters() {
    const filterValues = {
        search: document.getElementById("searchBox").value.toLowerCase(),
        location: document.getElementById("locationFilter").value,
        category: document.getElementById("categoryFilter").value
    };
    renderJobs(filterValues);
}

// Initial render
renderJobs();
