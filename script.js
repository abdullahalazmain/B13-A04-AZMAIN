//  primary data
let jobs = [
    { 
        id: 1, 
        companyName: "Mobile First Corp", 
        position: "React Native Developer", 
        location: "Remote", 
        type: "Full-time", 
        salary: "$100,000 - $110,000", 
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", 
        status: "NOT APPLIED" },
    { 
        id: 2, 
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer", 
        location: "Los Angeles, CA", 
        type: "Part-time", 
        salary: "$80,000 - $100,000", 
        
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", 
        status: "NOT APPLIED" },
    { 
        id: 3, 
        companyName: "DataViz Solutions", 
        position: "Data Visualization Specialist", 
        location: "Boston, MA", 
        type: "Full-time", 
        salary: "$120,000 - $140,000", 
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", 
        status: "NOT APPLIED" },
    { 
        id: 4, 
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA", 
        type: "Full-time", 
        salary: "$140,000 - $150,000", 
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", 
        status: "NOT APPLIED" },
    { 
        id: 5, 
        companyName: "Innovation Labs", 
        position: "UI/UX Engineer", 
        location: "Austin, TX", 
        type: "Full-time", 
        salary: "$110,000 - $130,000", 
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", 
        status: "NOT APPLIED" },
    { 
        id: 6, 
        companyName: "MegaCorp Solutions", 
        position: "JavaScript Developer", 
        location: "New York, NY", 
        type: "Full-time", 
        salary: "$130,000 - $170,000", 
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", 
        status: "NOT APPLIED" },
    { 
        id: 7, 
        companyName: "StartupXYZ", 
        position: "Full Stack Engineer", 
        location: "Remote", 
        type: "Full-time", 
        salary: "$120,000 - $150,000", 
        description: "Join our fast-growing startup and work on our core platform. Experience with Next.js and React required. Great benefits and equity package included.", 
        status: "NOT APPLIED" },
    { 
        id: 8, 
        companyName: "TechCorp Industries", 
        position: "Senior Frontend Developer", 
        location: "San Francisco, CA",
        type: "Full-time", 
        salary: "$150,000 - $180,000", 
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", 
        status: "NOT APPLIED" }
];

// DOM manipulation
const jobsList = document.getElementById('jobs-list');
const totalCountEl = document.getElementById('total-count');
const jobsCountEl = document.getElementById('jobs-count');
const interviewCountEl = document.getElementById('interview-count');
const rejectedCountEl = document.getElementById('rejected-count');

// Dashboard update function
function updateDashboard() {
    const interviewCount = jobs.filter(job => job.status === "INTERVIEW").length;
    const rejectedCount = jobs.filter(job => job.status === "REJECTED").length;

    totalCountEl.innerText = jobs.length;
    interviewCountEl.innerText = interviewCount;
    rejectedCountEl.innerText = rejectedCount;
}

// Status update function with Toggle
function updateStatus(jobId, newStatus) {
    const jobIndex = jobs.findIndex(job => job.id === jobId);
    if (jobIndex !== -1) {
        jobs[jobIndex].status = newStatus;
        updateDashboard();
        
        const activeTabText = document.querySelector('.btn-active-tab').innerText;
        handleTabFilter(activeTabText);
    }
}
